#!/usr/bin/env node
/**
 * Swaps which room list the Edition and St. Regis pages show.
 *
 * Each hotel data file keeps several room lists as blocks between
 *   // @rooms:begin <name> | <description>
 *   // @rooms:end <name>
 * markers. Exactly one block per file is switched on (plain code); the others are commented out. This script
 * comments / uncomments whole blocks, so nothing is ever deleted.
 *
 * Usage (from the project root):
 *   npm run rooms -- status                  show which list is on in each hotel
 *   npm run rooms -- client                  the client's website lists: Edition 6 rooms + St. Regis 3 rooms
 *   npm run rooms -- full                    the long lists: Edition 19 rooms (Marriott) + St. Regis 15 rooms
 *   npm run rooms -- edition=editionhotels   one hotel only (names are printed by "status")
 *   npm run rooms -- edition=client st-regis=hotel-site
 *   npm run rooms -- dining=client           the dining list of both hotels (client = client's restaurants, hotel-site = stregiskanairesort.com)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const FILES = {
  edition: "src/data/resorts/edition.data.ts",
  "st-regis": "src/data/resorts/st-regis.data.ts",
};
const PRESETS = {
  client: { edition: "client", "st-regis": "client" },
  full: { edition: "marriott", "st-regis": "hotel-site" },
};

const DINING_FILE = "src/data/resorts/reserve-dining.data.ts";
const DINING_ACTIVE = /^(export const RESERVE_DINING: ResortListSection = RESERVE_DINING_VERSIONS\[")([^"]+)("\];)$/m;

function readDining() {
  const file = path.join(root, DINING_FILE);
  const text = fs.readFileSync(file, "utf8");
  const active = DINING_ACTIVE.exec(text);
  if (!active) throw new Error(`${DINING_FILE}: could not find the "RESERVE_DINING = RESERVE_DINING_VERSIONS[...]" line`);
  const body = /export const RESERVE_DINING_VERSIONS = \{([\s\S]*?)\} as const;/.exec(text);
  const names = body ? [...body[1].matchAll(/^\s*"?([A-Za-z][\w-]*)"?\s*:/gm)].map((m) => m[1]) : [];
  return { file, text, active: active[2], names };
}

function setDining(target) {
  const d = readDining();
  if (!d.names.includes(target)) throw new Error(`dining: no list called "${target}". Available: ${d.names.join(", ")}`);
  if (d.active === target) {
    console.log(`dining: already on "${target}"`);
    return;
  }
  fs.writeFileSync(d.file, d.text.replace(DINING_ACTIVE, `$1${target}$3`));
  console.log(`dining: switched to "${target}"`);
}

const BEGIN = /^\s*\/\/ @rooms:begin (\S+) \| (.*)$/;
const END = /^\s*\/\/ @rooms:end (\S+)\s*$/;
const isCommented = (line) => /^\s*\/\//.test(line);

function readBlocks(lines, file) {
  const blocks = [];
  for (let i = 0; i < lines.length; i++) {
    const begin = BEGIN.exec(lines[i]);
    if (!begin) continue;
    let end = -1;
    for (let j = i + 1; j < lines.length; j++) {
      const e = END.exec(lines[j]);
      if (e && e[1] === begin[1]) { end = j; break; }
    }
    if (end < 0) throw new Error(`${file}: block "${begin[1]}" has no @rooms:end marker`);
    const content = lines.slice(i + 1, end);
    const code = content.filter((l) => l.trim() !== "" && l.trim() !== "//");
    const commented = code.filter(isCommented).length;
    if (commented !== 0 && commented !== code.length) {
      throw new Error(`${file}: block "${begin[1]}" is partly commented; fix it by hand first`);
    }
    blocks.push({
      name: begin[1],
      description: begin[2],
      start: i + 1,
      end,
      active: commented === 0 && code.length > 0,
      rooms: content.filter((l) => /^( {6}\{|\s*\/\/ {7}\{)$/.test(l)).length,
    });
  }
  if (blocks.length === 0) throw new Error(`${file}: no @rooms blocks found`);
  return blocks;
}

const comment = (line) => (line.trim() === "" ? "    //" : "    // " + line);
// Tolerant of the editor's "format on save", which may re-indent the comment markers.
const uncomment = (line) => line.replace(/^\s*\/\/ ?/, "");

function load(hotel) {
  const file = path.join(root, FILES[hotel]);
  const lines = fs.readFileSync(file, "utf8").split("\n");
  return { file, lines, blocks: readBlocks(lines, FILES[hotel]) };
}

function status() {
  const dining = readDining();
  console.log(`
dining  (${DINING_FILE}), used by both hotels`);
  for (const name of dining.names) console.log(`  ${name === dining.active ? "ON " : "off"}  ${name}`);
  for (const hotel of Object.keys(FILES)) {
    const { blocks } = load(hotel);
    console.log(`\n${hotel}  (${FILES[hotel]})`);
    for (const b of blocks) {
      console.log(`  ${b.active ? "ON " : "off"}  ${b.name.padEnd(14)} ${String(b.rooms).padStart(2)} rooms   ${b.description}`);
    }
  }
}

function setActive(hotel, target) {
  const state = load(hotel);
  const names = state.blocks.map((b) => b.name);
  if (!names.includes(target)) {
    throw new Error(`${hotel}: no list called "${target}". Available: ${names.join(", ")}`);
  }
  let changed = false;
  for (const b of state.blocks) {
    const shouldBeActive = b.name === target;
    if (b.active === shouldBeActive) continue;
    for (let i = b.start; i < b.end; i++) {
      state.lines[i] = shouldBeActive ? uncomment(state.lines[i]) : comment(state.lines[i]);
    }
    changed = true;
  }
  if (changed) fs.writeFileSync(state.file, state.lines.join("\n"));
  const after = load(hotel).blocks.filter((b) => b.active);
  if (after.length !== 1 || after[0].name !== target) {
    throw new Error(`${hotel}: expected "${target}" to be the only list on, got: ${after.map((b) => b.name).join(", ") || "none"}`);
  }
  console.log(`${hotel}: ${changed ? "switched to" : "already on"} "${target}" (${after[0].rooms} rooms)`);
}

function main(args) {
  if (args.length === 0 || args.includes("help") || args.includes("--help")) {
    console.log(fs.readFileSync(fileURLToPath(import.meta.url), "utf8").split("*/")[0].replace(/^\/\*\*|^ \* ?/gm, "").trim());
    return;
  }
  if (args.length === 1 && args[0] === "status") return status();

  const plan = {};
  for (const arg of args) {
    if (PRESETS[arg]) Object.assign(plan, PRESETS[arg]);
    else if (/^(edition|st-regis|dining)=/.test(arg)) {
      const [hotel, name] = arg.split("=");
      plan[hotel] = name;
    } else throw new Error(`Unknown argument "${arg}". Try: status | client | full | edition=<list> | st-regis=<list> | dining=<list>`);
  }
  for (const [hotel, target] of Object.entries(plan)) {
    if (hotel === "dining") setDining(target);
    else setActive(hotel, target);
  }
  console.log("");
  status();
}

try {
  main(process.argv.slice(2));
} catch (error) {
  console.error("Error: " + error.message);
  process.exit(1);
}
