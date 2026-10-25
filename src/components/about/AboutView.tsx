import { DetailHero } from "@/components/shared/design";
import { ProgramAbout } from "@/components/programs";
import { ABOUT_PAGE_DATA } from "@/data/pages/about.data";

/** The main About page: a hero and the same About block the Passover programs use. */
export function AboutView() {
  const { hero, about } = ABOUT_PAGE_DATA;

  return (
    <>
      <DetailHero image={hero.image} kicker={hero.kicker} title={hero.title} subtitle={hero.subtitle} />
      <ProgramAbout about={about} />
    </>
  );
}

export default AboutView;
