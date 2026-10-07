import type { DesignImage } from "@/components/shared/design";

export interface ExperienceFact {
  label: string;
  value: string;
}

/** Content of the pop-up opened by an item's "Explore →" link. */
export interface ExperienceDetails {
  title: string;
  tag?: string;
  paragraphs: string[];
  facts?: ExperienceFact[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  tag?: string;
  description: string;
  image: DesignImage;
  /** Details still to be announced: the card is shown without a link. */
  tba?: boolean;
  /** Slug of another experience page of the same program this card links to (e.g. "kids-day-camp"). */
  linkTo?: string;
  linkLabel?: string;
  details?: ExperienceDetails;
}

/** Entertainment, scholars and the kids program all share this card-grid page. */
export interface ExperienceCategoryData {
  programId: string;
  programTitle: string;
  /** Slug used in the URL and to look this data up in the registry, e.g. "entertainment". */
  experienceType: string;
  title: string;
  description: string;
  heroImage: DesignImage;
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
  ages: string;
  highlights: string;
}

export interface KidsDayCampData {
  programId: string;
  programName: string;
  hero: { title: string; description: string; image: DesignImage };
  overview: { title: string; description: string };
  team: KidsDayCampTeamMember[];
  activities: KidsDayCampActivity[];
  ageGroups: KidsDayCampAgeGroup[];
  dining: { title: string; paragraphs: string[] };
  babysitting: { title: string; description: string; rateText: string };
}
