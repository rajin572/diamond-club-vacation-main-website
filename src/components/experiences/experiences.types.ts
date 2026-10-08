import type { DesignImage } from "@/components/shared/design";

export interface ExperienceFact {
  label: string;
  value: string;
}

/** Content of the viewer opened by an item's "See details" link. */
export interface ExperienceDetails {
  title: string;
  tag?: string;
  paragraphs: string[];
  facts?: ExperienceFact[];
  /** Adds a "See on map" button (attractions). */
  mapUrl?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  tag?: string;
  /** Omit for items the client shows by title only. */
  description?: string;
  /** Omit to show a placeholder portrait (speakers still to be announced). */
  image?: DesignImage;
  /** Which part of the photo stays visible when it is cropped into a card (posters keep their top). */
  imageFocus?: "top" | "center";
  /** Details still to be announced: the card is shown without a link. */
  tba?: boolean;
  /** Slug of another experience page of the same program this card links to (e.g. "kids-day-camp"). */
  linkTo?: string;
  linkLabel?: string;
  details?: ExperienceDetails;
}

/**
 * Attractions, entertainment, scholars and the kids program all share this card-grid page.
 * `layout: "people"` renders each item as a portrait card (scholars) instead of a photo card.
 */
export interface ExperienceCategoryData {
  programId: string;
  programTitle: string;
  /** Slug used in the URL and to look this data up in the registry, e.g. "entertainment". */
  experienceType: string;
  title: string;
  /** Heading of the details viewer when it differs from `title` (e.g. "Scholars Details"). */
  viewerTitle?: string;
  /** Intro line under the section heading; omit for none. */
  description?: string;
  heroImage: DesignImage;
  /** CSS object-position of the hero photo, for tall or off-centre images. */
  heroImagePosition?: string;
  layout?: "cards" | "people";
  columns: 2 | 3;
  items: ExperienceItem[];
}

export interface KidsDayCampTeamMember {
  id: string;
  role: string;
  name: string;
  bio: string;
}

export interface KidsDayCampActivity {
  id: string;
  title: string;
  description: string;
}

export interface KidsDayCampAgeGroup {
  group: string;
  ages?: string;
  highlights?: string;
}

export interface KidsDayCampData {
  programId: string;
  programName: string;
  hero: { title: string; description: string; image: DesignImage; imagePosition?: string };
  /** Content not ready: the page shows "Coming Soon" under the intro. */
  comingSoon?: boolean;
  overview?: { title: string; description: string };
  /** A plain checklist (e.g. "Treasure Hunts", "Arts & Crafts") shown as the program. */
  program?: { title: string; items: string[] };
  team?: KidsDayCampTeamMember[];
  activities?: KidsDayCampActivity[];
  ageGroups?: KidsDayCampAgeGroup[];
  dining?: { title: string; paragraphs: string[] };
  babysitting?: { title: string; description: string; rateText: string };
}
