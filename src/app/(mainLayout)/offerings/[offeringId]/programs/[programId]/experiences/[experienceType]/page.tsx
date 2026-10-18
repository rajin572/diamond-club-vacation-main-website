import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { ExperienceCategoryView, KidsDayCampView } from "@/components/experiences";
import { getAllExperienceSlugsForProgram, getExperienceData, getKidsDayCampData } from "@/data/experiences/registry";
import { getResortsForProgram } from "@/data/resorts/registry";
import { buildHotelSubNav } from "@/lib/hotel-subnav";
import { programsRegistry } from "@/data/programs/registry";
import { experienceHref } from "@/lib/routes";

interface PageProps {
  params: Promise<{ offeringId: string; programId: string; experienceType: string }>;
  searchParams?: Promise<{ resort?: string }>;
}

export async function generateStaticParams() {
  return Object.values(programsRegistry).flatMap(({ id: programId, offeringId }) =>
    getAllExperienceSlugsForProgram(programId).map((experienceType) => ({ offeringId, programId, experienceType }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { offeringId, programId, experienceType } = await params;
  const canonicalUrl = experienceHref(offeringId, programId, experienceType);

  const category = getExperienceData(programId, experienceType);
  if (category) {
    const description = category.description ?? `${category.title} · ${category.programTitle}`;
    return {
      title: `${category.title} | ${category.programTitle}`,
      description,
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title: `${category.title} | ${siteConfig.name}`,
        description,
        url: canonicalUrl,
        siteName: siteConfig.name,
        locale: "en_US",
        type: "website",
        images: [{ url: category.heroImage.src, alt: category.title }],
      },
    };
  }

  const dayCamp = experienceType === "kids-day-camp" ? getKidsDayCampData(programId) : undefined;
  if (dayCamp) {
    return {
      title: `${dayCamp.hero.title} | ${dayCamp.programName}`,
      description: dayCamp.hero.description,
      alternates: { canonical: canonicalUrl },
    };
  }

  return { title: "Experience Not Found" };
}

export default async function ExperiencePage({ params, searchParams }: PageProps) {
  const { offeringId, programId, experienceType } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const currentResortId =
    resolvedSearchParams.resort ||
    getResortsForProgram(programId)[0]?.resortId ||
    "st-regis";

  const nav = buildHotelSubNav({
    offeringId,
    programId,
    resortId: currentResortId,
    isHotelMainPage: false,
  });

  const category = getExperienceData(programId, experienceType);
  if (category) {
    return <ExperienceCategoryView offeringId={offeringId} data={category} nav={nav} resortId={currentResortId} />;
  }

  const dayCamp = experienceType === "kids-day-camp" ? getKidsDayCampData(programId) : undefined;
  if (dayCamp) {
    return <KidsDayCampView data={dayCamp} nav={nav} resortId={currentResortId} />;
  }

  notFound();
}
