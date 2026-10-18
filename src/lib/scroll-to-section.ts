import { getLenisInstance } from "./lenis-instance";

const ARRIVAL_TOLERANCE_PX = 4;
/** When to re-check that the scroll really arrived (long scrolls take a while to finish, images can push the target down). */
const ARRIVAL_CHECKS_MS = [700, 1400];

function scrollMarginTop(el: HTMLElement): number {
  return parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
}

/**
 * Moves the page so `el` sits at its `scroll-margin-top` (clear of the sticky header), through Lenis when it is
 * running. Lenis already applies the element's scroll-margin itself, so no extra offset is passed.
 */
function moveTo(el: HTMLElement, immediate: boolean): void {
  const lenis = getLenisInstance();
  if (lenis) {
    lenis.scrollTo(el, { immediate, force: true });
    return;
  }
  el.scrollIntoView({ behavior: immediate ? "auto" : "smooth", block: "start" });
}

function finishIfShort(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  const distance = el.getBoundingClientRect().top - scrollMarginTop(el);
  if (Math.abs(distance) > ARRIVAL_TOLERANCE_PX) moveTo(el, true);
}

/**
 * Scrolls to the element with `id` on every call, even when the URL already ends in that same `#hash` (a plain
 * `<a href="#rooms">` does nothing on the second click). Goes through Lenis, which owns the page's scroll position.
 * A scroll can still stop short (momentum scrolling, images above the target finishing loading), so it is re-checked
 * shortly afterwards and finished with a jump if needed. Returns false when the element is not on the page.
 */
export function scrollToSection(id: string, { updateHash = true }: { updateHash?: boolean } = {}): boolean {
  const el = document.getElementById(id);
  if (!el) return false;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  moveTo(el, reduceMotion);

  const hash = `#${id}`;
  if (updateHash && window.location.hash !== hash) {
    history.pushState(null, "", hash);
  }

  for (const delay of ARRIVAL_CHECKS_MS) window.setTimeout(() => finishIfShort(id), delay);
  return true;
}

/**
 * For a page that was just opened or navigated to with a `#hash` in its URL: jump straight to that section instead of
 * the top of the page. Returns false when there is no hash (or no such element), so the caller can scroll to the top.
 */
export function jumpToHashSection(): boolean {
  const id = decodeURIComponent(window.location.hash.slice(1));
  const el = id ? document.getElementById(id) : null;
  if (!el) return false;

  moveTo(el, true);
  for (const delay of ARRIVAL_CHECKS_MS) window.setTimeout(() => finishIfShort(id), delay);
  return true;
}
