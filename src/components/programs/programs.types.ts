import type { CardLogo, DesignImage } from "@/components/shared/design";

/** Where a program card or nav item points; resolved to a URL with `lib/routes` at render time. */
export type ProgramTarget =
  | { type: "resort"; resortId: string }
  | { type: "experience"; experienceType: string };

export interface ProgramCardData {
  id: string;
  title: string;
  description?: string;
  image: DesignImage;
  /** Omit for a static tile (content that has no page of its own yet). */
  target?: ProgramTarget;
  /** Brand marks laid over the photo (e.g. the St. Regis logo). */
  logos?: CardLogo[];
}

/** A row of cards sharing one grid. */
export interface ProgramCardBlock {
  columns: 2 | 3 | 4;
  cards: ProgramCardData[];
}

/** A titled group on the details page ("Where you'll stay", "Experiences", "Explore"). */
export interface ProgramSection {
  title: string;
  description?: string;
  blocks: ProgramCardBlock[];
}

export interface ProgramNavItem {
  label: string;
  /** `overview` is the program's overview page, `inquire` the inquiry form preset to this program. */
  target: ProgramTarget | { type: "overview" } | { type: "inquire" };
}

export interface ProgramPartner {
  /** Brand or property name shown in the partner strip, e.g. "Casa Nizuc". */
  name: string;
  detail?: string;
}

/** How a program is shown on its offering page (Passover Programs list). */
export interface ProgramCardContent {
  subtitle: string;
  /** Shown with a pin icon, e.g. "THE RIVIERA MAYA, KANAI". */
  location: string;
  image: DesignImage;
  logos?: CardLogo[];
}

/** Content of the program's overview page (the page shown before "See Details"). */
export interface ProgramOverviewData {
  heroImage: DesignImage;
  /** Line under the title in the overview hero. */
  tagline: string;
  /** Partner strip as text. Ignored when `partnersLogo` is provided. */
  partners: ProgramPartner[];
  /** Partner strip as the supplied logo artwork (one image holding all the logos). */
  partnersLogo?: { image: DesignImage; alt: string };
  highlights: string[];
  aboutTitle: string;
  about: string[];
  /** Bold lead-in at the start of the first `about` paragraph. */
  aboutStrong?: string;
}

/** A program hosted on this site: overview page + details hub (hotels, experiences, ...). */
export interface ProgramData {
  id: string;
  offeringId: string;
  /** Display name, e.g. "DIAMOND CLUB RESERVE". */
  title: string;
  kicker: string;
  tagline: string;
  heroImage: DesignImage;
  /** How this program is shown on its offering page. */
  card: ProgramCardContent;
  overview: ProgramOverviewData;
  /** Floating pill navigation under the hero of the details page. */
  nav?: ProgramNavItem[];
  /** The details page: hotels and experiences. */
  sections: ProgramSection[];
  keywords?: string[];
}

/** A program that lives on another website: it only needs a card on its offering page. */
export interface ExternalProgramData {
  id: string;
  offeringId: string;
  title: string;
  card: ProgramCardContent;
  externalUrl: string;
}

/** A program as listed on its offering page, wherever it lives. */
export interface ProgramSummary {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  image: DesignImage;
  logos?: CardLogo[];
  href: string;
  external: boolean;
}
