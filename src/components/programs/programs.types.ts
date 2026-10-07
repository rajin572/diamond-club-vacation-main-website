import type { DesignImage } from "@/components/shared/design";

/** Where a program card or nav item points; resolved to a URL with `lib/routes` at render time. */
export type ProgramTarget =
  | { type: "resort"; resortId: string }
  | { type: "experience"; experienceType: string };

export interface ProgramCardData {
  id: string;
  title: string;
  description: string;
  image: DesignImage;
  target: ProgramTarget;
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

/** Content of the program's overview page (the page shown before "See Details"). */
export interface ProgramOverviewData {
  heroImage: DesignImage;
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

/** A program hosted on this site: overview page + details hub (hotels, attractions, ...). */
export interface ProgramData {
  id: string;
  offeringId: string;
  /** Display name, e.g. "DIAMOND CLUB RESERVE". */
  title: string;
  kicker: string;
  tagline: string;
  heroImage: DesignImage;
  /** How this program is shown on its offering page. */
  card: { description: string; image: DesignImage };
  overview: ProgramOverviewData;
  /** Floating pill navigation under the hero of the details page. */
  nav?: ProgramNavItem[];
  stay: {
    title: string;
    description: string;
    columns: 2 | 4;
    cards: ProgramCardData[];
  };
  /** Optional second block of cards (e.g. attractions around the destination). */
  destination?: {
    title: string;
    cards: ProgramCardData[];
  };
  keywords?: string[];
}

/** A program that lives on another website: it only needs a card on its offering page. */
export interface ExternalProgramData {
  id: string;
  offeringId: string;
  title: string;
  card: { description: string; image: DesignImage };
  externalUrl: string;
}

/** A program as listed on its offering page, wherever it lives. */
export interface ProgramSummary {
  id: string;
  title: string;
  description: string;
  image: DesignImage;
  href: string;
  external: boolean;
}
