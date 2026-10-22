import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgramSections, programSectionId } from "@/components/programs";
import { DetailHero, SubNav } from "@/components/shared/design";
import { getProgram } from "@/data/programs/registry";
import { getResort, getResortRouteParams } from "@/data/resorts/registry";
import { buildHotelSubNav } from "@/lib/hotel-subnav";

interface PageProps {
  params: Promise<{ offeringId: string; programId: string; resortId: string }>;
}

export async function generateStaticParams() {
  return getResortRouteParams().map(({ params }) => params);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { resortId } = await params;
  const resort = getResort(resortId);
  if (!resort) return { title: "Experiences Not Found" };

  return {
    title: `Experiences | ${resort.resortName}`,
    description: `The experiences of ${resort.resortName}: entertainment, scholars, kids and more.`,
  };
}

/** The experiences of one hotel (client 2026-10-22): where the header's "Experiences" link leads from inside a hotel's pages. */
export default async function ResortExperiencesPage({ params }: PageProps) {
  const { offeringId, programId, resortId } = await params;
  const resort = getResort(resortId);
  const program = getProgram(programId);
  if (!resort || !program || resort.programId !== programId) notFound();

  // Only the program's own experiences; the local attractions are not experiences of the hotel.
  const sections = program.sections.filter((section) => programSectionId(section.title) !== "local-attractions");
  const nav = buildHotelSubNav({ offeringId, programId, resortId, isHotelMainPage: false });

  return (
    <>
      <DetailHero image={resort.heroImage} kicker={resort.resortName} title="Experiences" />
      <SubNav items={nav} label={`${resort.resortName} sections`} />
      <ProgramSections offeringId={offeringId} programId={programId} sections={sections} resortId={resortId} />
    </>
  );
}
