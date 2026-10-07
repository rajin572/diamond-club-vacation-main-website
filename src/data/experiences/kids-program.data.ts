import { AllImages } from "../../../public/images/AllImages";
import type { ExperienceCategoryData } from "@/components/experiences/experiences.types";

export const KIDS_PROGRAM_BY_PROGRAM: Record<string, ExperienceCategoryData> = {
  "diamond-club-reserve": {
    programId: "diamond-club-reserve",
    programTitle: "DIAMOND CLUB RESERVE",
    experienceType: "kids-program",
    title: "Kids Program",
    description: "A full program for every age, from supervised play for the youngest guests to a dedicated teen program, so parents can relax and enjoy the holiday.",
    heroImage: AllImages.kids1,
    columns: 2,
    items: [
      {
        id: "day-camp-teen-program",
        title: "Day Camp & Teen Program",
        tag: "Ages 18 months to teens",
        description: "An action-packed day camp for all your kids, filled with activities, events, sports, games, live shows and entertainment, led by our counselors.",
        image: AllImages.kids1,
        linkTo: "kids-day-camp",
        linkLabel: "See details →",
      },
      {
        id: "babysitting",
        title: "Babysitting",
        tag: "For infants and toddlers",
        description: "A free, responsible babysitting service is available during camp hours in our dedicated baby room. Private babysitting is also available.",
        image: AllImages.kids1,
        linkLabel: "See details →",
        details: {
          title: "Babysitting",
          tag: "Free during camp hours",
          paragraphs: [
            "A free, responsible babysitting service is available during camp hours in our special Toddler’s Camp. Private babysitting is available for a fee.",
          ],
          facts: [
            { label: "When", value: "During camp hours" },
            { label: "Where", value: "Toddler’s Camp" },
            { label: "Private babysitting", value: "Available for a fee" },
          ],
        },
      },
    ],
  },
  blue: {
    programId: "blue",
    programTitle: "Diamond Blue by DCV",
    experienceType: "kids-program",
    title: "Kids Program",
    description: "A full program for every age, from supervised play for the youngest guests to a dedicated teen program, so parents can relax and enjoy the holiday.",
    heroImage: AllImages.kids1,
    columns: 2,
    items: [
      {
        id: "day-camp-teen-program",
        title: "Day Camp & Teen Program",
        tag: "Ages 18 months to teens",
        description: "An action-packed day camp for all your kids, filled with activities, events, sports, games, live shows and entertainment, led by our counselors.",
        image: AllImages.kids1,
        linkTo: "kids-day-camp",
        linkLabel: "See details →",
      },
      {
        id: "babysitting",
        title: "Babysitting",
        tag: "For infants and toddlers",
        description: "A free, responsible babysitting service is available during camp hours in our dedicated baby room. Private babysitting is also available.",
        image: AllImages.kids1,
        linkLabel: "See details →",
        details: {
          title: "Babysitting",
          tag: "Free during camp hours",
          paragraphs: [
            "A free, responsible babysitting service is available during camp hours in our special Toddler’s Camp. Private babysitting is available for a fee.",
          ],
          facts: [
            { label: "When", value: "During camp hours" },
            { label: "Where", value: "Toddler’s Camp" },
            { label: "Private babysitting", value: "Available for a fee" },
          ],
        },
      },
    ],
  },
};
