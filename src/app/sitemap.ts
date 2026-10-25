import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getAllOfferings } from "@/data/offerings/registry";
import { getProgramsForOffering } from "@/data/programs/registry";
import { getResortsForProgram } from "@/data/resorts/registry";
import { getAllExperienceSlugsForProgram } from "@/data/experiences/registry";
import { getAllTerms } from "@/data/terms/registry";
import { WEDDINGS_HREF, experienceHref, offeringHref, programHref, resortHref, termsHref } from "@/lib/routes";

// Lists every public page. Detail pages (rooms, restaurants, pools, spa) are reachable from their resort page.
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${siteConfig.siteUrl}${path}`;
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [
    { url: siteConfig.siteUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: url("/inquire"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url(WEDDINGS_HREF), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  for (const terms of getAllTerms()) {
    entries.push({ url: url(termsHref(terms.programId)), lastModified: now, changeFrequency: "yearly", priority: 0.3 });
  }

  for (const offering of getAllOfferings()) {
    entries.push({
      url: url(offeringHref(offering.id)),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });

    for (const program of getProgramsForOffering(offering.id)) {
      entries.push({
        url: url(programHref(offering.id, program.id)),
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      });

      for (const resort of getResortsForProgram(program.id)) {
        entries.push({
          url: url(resortHref(offering.id, program.id, resort.resortId)),
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.6,
        });
      }

      for (const experienceType of getAllExperienceSlugsForProgram(program.id)) {
        entries.push({
          url: url(experienceHref(offering.id, program.id, experienceType)),
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.5,
        });
      }
    }
  }

  return entries;
}
