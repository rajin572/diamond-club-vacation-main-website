import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailHero } from "@/components/shared/design";
import { ProgramAbout, ProgramBrochureButton, ProgramStory } from "@/components/programs";
import { getProgram, programsRegistry } from "@/data/programs/registry";
import { siteConfig } from "@/lib/site-config";
import { BackButton } from "@/components/shared/BackButton";
import { Wrap } from "@/components/shared/design";
import { programHref } from "@/lib/routes";

interface PageProps {
  params: Promise<{ offeringId: string; programId: string }>;
}

export async function generateStaticParams() {
  return Object.values(programsRegistry).map((program) => ({ offeringId: program.offeringId, programId: program.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { offeringId, programId } = await params;
  const program = getProgram(programId);
  if (!program || program.offeringId !== offeringId) return { title: "Program Not Found" };

  return {
    title: `About ${program.title} | Passover 2027`,
    description: program.about.about[0] ?? program.tagline,
    openGraph: { title: `About ${program.title} | ${siteConfig.name}`, siteName: siteConfig.name, type: "website" },
  };
}

/** The About page of one Passover program (client 2026-10-22): the header's "About" link leads here from inside a program. */
export default async function ProgramAboutPage({ params }: PageProps) {
  const { offeringId, programId } = await params;
  const program = getProgram(programId);
  if (!program || program.offeringId !== offeringId) notFound();

  return (
    <>
      <DetailHero
        image={program.heroImage}
        kicker="About"
        title={program.title}
        subtitle={program.tagline}
        actions={program.brochure ? <ProgramBrochureButton brochure={program.brochure} /> : undefined}
      />
      <Wrap>
        <BackButton fallbackHref={programHref(offeringId, programId)} />
      </Wrap>
      {program.about.story ? <ProgramStory story={program.about.story} /> : <ProgramAbout about={program.about} />}
    </>
  );
}
