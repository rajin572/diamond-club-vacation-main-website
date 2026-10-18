export interface InquireExperienceOption {
  id: string;
  label: string;
  /** `?destination=` values that should preselect this option. */
  aliases: string[];
}

export const EXPERIENCE_OPTIONS: InquireExperienceOption[] = [
  {
    id: "diamond-club-reserve",
    label: "DIAMOND CLUB RESERVE",
    aliases: [
      "reserve",
      "diamond-club-reserve",
      "st-regis",
      "the-st-regis",
      "edition",
      "the-edition",
    ],
  },
  {
    id: "guttaway",
    label: "guettaway a Diamond Club production",
    aliases: [
      "guttaway",
      "guettaway",
      "guttaway-a-dcv-program",
      "guettaway-a-diamond-club-production",
      "gold",
      "diamond-club-gold",
      "waldorf",
      "waldorf-astoria",
      "park-hyatt",
    ],
  },
  {
    id: "blue",
    label: "Diamond Blue by DCV",
    aliases: ["blue", "diamond-blue", "diamond-club-blue", "diamond-club-blue-by-dcv", "casa-nizuc"],
  },
  { id: "casa-nizuc", label: "Casa Nizuc — Year Round", aliases: ["casa-nizuc", "casa"] },
  { id: "weddings-events", label: "Wedding / Destination Event", aliases: ["weddings-events", "weddings", "wedding"] },
  { id: "private-events", label: "Private Event", aliases: ["private-events", "private-event"] },
];

export const RESORT_DISPLAY_NAMES: Record<string, string> = {
  "st-regis": "The St. Regis Kanai",
  "the-st-regis": "The St. Regis Kanai",
  "edition": "The Riviera Maya EDITION",
  "the-edition": "The Riviera Maya EDITION",
  "waldorf-astoria": "Waldorf Astoria Riviera Maya",
  "park-hyatt": "Park Hyatt Riviera Maya",
  "casa-nizuc": "Casa Nizuc",
};

export function resolveExperienceOption(destination: string | null): string {
  const normalized = destination?.toLowerCase().trim();
  if (!normalized) return EXPERIENCE_OPTIONS[0].label;
  return (
    EXPERIENCE_OPTIONS.find((option) => option.aliases.includes(normalized))?.label ?? EXPERIENCE_OPTIONS[0].label
  );
}

export function resolveDetailedExperience(
  destination: string | null,
  resort: string | null
): { label: string; isLocked: boolean; hotel: string | null } {
  const normDest = destination?.toLowerCase().trim();
  const normResort = resort?.toLowerCase().trim();
  const hotel = normResort ? (RESORT_DISPLAY_NAMES[normResort] ?? null) : null;

  // If no destination or destination is "all", user can select freely
  if (!normDest || normDest === "all") {
    if (normResort && hotel) {
      // Only a hotel is known: its program is the Experience.
      return { label: resolveExperienceOption(normResort), isLocked: true, hotel };
    }
    return { label: EXPERIENCE_OPTIONS[0].label, isLocked: false, hotel: null };
  }

  // Coming from inside a program/hotel: the Experience is just the program name; the hotel is kept separately.
  return { label: resolveExperienceOption(normDest), isLocked: true, hotel };
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
