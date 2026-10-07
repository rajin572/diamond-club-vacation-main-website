export interface InquireExperienceOption {
  id: string;
  label: string;
  /** `?destination=` values that should preselect this option. */
  aliases: string[];
}

export const EXPERIENCE_OPTIONS: InquireExperienceOption[] = [
  { id: "diamond-club-reserve", label: "DIAMOND CLUB RESERVE", aliases: ["reserve", "diamond-club-reserve"] },
  {
    id: "guttaway",
    label: "Guettaway A DCV Program",
    aliases: ["guttaway", "guettaway", "guttaway-a-dcv-program", "gold", "diamond-club-gold"],
  },
  {
    id: "blue",
    label: "Diamond Blue by DCV",
    aliases: ["blue", "diamond-blue", "diamond-club-blue", "diamond-club-blue-by-dcv"],
  },
  { id: "casa-nizuc", label: "Casa Nizuc — Year Round", aliases: ["casa-nizuc", "casa"] },
  { id: "weddings-events", label: "Wedding / Destination Event", aliases: ["weddings-events", "weddings", "wedding"] },
  { id: "private-events", label: "Private Event", aliases: ["private-events", "private-event"] },
];

export function resolveExperienceOption(destination: string | null): string {
  const normalized = destination?.toLowerCase().trim();
  if (!normalized) return EXPERIENCE_OPTIONS[0].label;
  return (
    EXPERIENCE_OPTIONS.find((option) => option.aliases.includes(normalized))?.label ?? EXPERIENCE_OPTIONS[0].label
  );
}

export const REFERRAL_OPTIONS = [
  "Google Search",
  "Instagram",
  "Facebook",
  "Passover Listings",
  "Totally Jewish Travel",
  "Email Blast",
  "Newspaper",
  "Returning Customer",
  "Other",
];

export const COMMUNITY_OPTIONS = [
  "Sephardi",
  "Ashkenazi",
  "Chabad",
  "Modern Orthodox",
  "Yeshivish",
  "Chassidish",
  "Other",
];
