import type { CardLogo, DesignImage } from "@/components/shared/design";

/** Where a program card points; resolved to a URL with `lib/routes` at render time. */
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

/** A titled group of cards ("Experiences", "Explore") shown on every hotel page of the program. */
export interface ProgramSection {
  title: string;
  description?: string;
  blocks: ProgramCardBlock[];
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

/** The "About" block shown on every hotel page of the program: brand strip, highlights and description. */
export interface ProgramAboutData {
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

/**
 * A Passover program. Its own page lists only the hotels; the About block and the experience / explore
 * sections are shown inside each hotel page (so the hotels of a program share them).
 */
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
  /** The program page: one card per hotel. */
  hotels: {
    title: string;
    columns: 1 | 2;
    cards: ProgramCardData[];
  };
  about: ProgramAboutData;
  sections: ProgramSection[];
  keywords?: string[];
}

/** A program as listed on its offering page. */
export interface ProgramSummary {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  image: DesignImage;
  logos?: CardLogo[];
  href: string;
}
