import { AllImages } from "../../../public/images/AllImages";
import type { ExperienceCategoryData } from "@/components/experiences/experiences.types";

export const KIDS_PROGRAM_BY_PROGRAM: Record<string, ExperienceCategoryData> = {
  "diamond-club-reserve": {
    programId: "diamond-club-reserve",
    programTitle: "DIAMOND CLUB RESERVE",
    experienceType: "kids-program",
    title: "Kids Program",
    heroImage: AllImages.reserveKidsProgram,
    heroImagePosition: "50% 24%",
    columns: 2,
    items: [
      {
        id: "day-camp",
        title: "Day Camp",
        description: "An action-packed day camp schedule for all your kids, filled with exciting activities, events, sports, games, live shows, and entertainment, led by our incredible counselors.",
        image: AllImages.reserveKidsProgram,
        imageFocus: "top",
        linkTo: "kids-day-camp",
      },
      {
        id: "babysitting",
        title: "Babysitting",
        description: "A free, responsible babysitting service will be available during camp hours in our special Toddler’s Camp. Private babysitting is available for a fee.",
        image: AllImages.reserveBabysitting,
        details: {
          title: "Babysitting",
          paragraphs: [
            "A free, responsible babysitting service will be available during camp hours in our special Toddler’s Camp. Private babysitting is available for a fee.",
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
    heroImage: AllImages.reserveKidsProgram,
    heroImagePosition: "50% 24%",
    columns: 2,
    items: [
      {
        id: "day-camp",
        title: "Day Camp",
        description: "An action-packed day camp schedule for all your kids, filled with exciting activities, events, sports, games, live shows, and entertainment, led by our incredible counselors.",
        image: AllImages.reserveKidsProgram,
        imageFocus: "top",
        linkTo: "kids-day-camp",
      },
      {
        id: "babysitting",
        title: "Babysitting",
        description: "A free, responsible babysitting service will be available during camp hours in our special Toddler’s Camp. Private babysitting is available for a fee.",
        image: AllImages.reserveBabysitting,
        details: {
          title: "Babysitting",
          paragraphs: [
            "A free, responsible babysitting service will be available during camp hours in our special Toddler’s Camp. Private babysitting is available for a fee.",
          ],
        },
      },
    ],
  },
  guttaway: {
    programId: "guttaway",
    programTitle: "guettaway a Diamond Club production",
    experienceType: "kids-program",
    title: "Kids Program",
    heroImage: AllImages.reserveKidsProgram,
    heroImagePosition: "50% 24%",
    columns: 2,
    items: [
      {
        id: "day-camp",
        title: "Day Camp",
        description: "An action-packed day camp schedule for all your kids, filled with exciting activities, events, sports, games, live shows, and entertainment, led by our incredible counselors.",
        image: AllImages.reserveKidsProgram,
        imageFocus: "top",
        linkTo: "kids-day-camp",
      },
      {
        id: "babysitting",
        title: "Babysitting",
        description: "A free, responsible babysitting service will be available during camp hours in our special Toddler’s Camp. Private babysitting is available for a fee.",
        image: AllImages.reserveBabysitting,
        details: {
          title: "Babysitting",
          paragraphs: [
            "A free, responsible babysitting service will be available during camp hours in our special Toddler’s Camp. Private babysitting is available for a fee.",
          ],
        },
      },
    ],
  },
};
