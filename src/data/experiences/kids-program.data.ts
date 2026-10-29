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
        description: "",
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
    // gallery: {
    //   title: "Kids & Family Photo Gallery",
    //   description: "Experience the excitement of our youth programming, beachfront games, and water adventures.",
    //   images: [
    //     AllImages.reserveKidsProgram,
    //     AllImages.dayCampCollage,
    //     AllImages.reserveKidsBeachChessWide,
    //     AllImages.reserveKidsWaterInflatables,
    //     AllImages.reserveKidsBeachCornhole,
    //     AllImages.reserveKidsBeachChessAction,
    //     AllImages.reserveKidsBeachChessPortrait,
    //     AllImages.reserveKidsBeachChessPlayers,
    //   ],
    // },
  },
  blue: {
    programId: "blue",
    programTitle: "Casa Nizuc by DCV",
    experienceType: "kids-program",
    title: "Kids Program",
    heroImage: AllImages.reserveKidsProgram,
    heroImagePosition: "50% 24%",
    columns: 2,
    items: [
      {
        id: "day-camp",
        title: "Day Camp",
        description: "",
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
    // gallery: {
    //   title: "Kids & Family Photo Gallery",
    //   description: "Experience the excitement of our youth programming, beachfront games, and water adventures.",
    //   images: [
    //     AllImages.reserveKidsProgram,
    //     AllImages.dayCampCollage,
    //     AllImages.reserveKidsBeachChessWide,
    //     AllImages.reserveKidsWaterInflatables,
    //     AllImages.reserveKidsBeachCornhole,
    //     AllImages.reserveKidsBeachChessAction,
    //     AllImages.reserveKidsBeachChessPortrait,
    //     AllImages.reserveKidsBeachChessPlayers,
    //   ],
    // },
  },
  guttaway: {
    programId: "guttaway",
    programTitle: "Guettaway by DCP",
    experienceType: "kids-program",
    title: "Kids Program",
    heroImage: AllImages.guettawayKidsProgram,
    heroImagePosition: "50% 24%",
    columns: 2,
    items: [
      {
        id: "day-camp",
        title: "Day Camp",
        description: "",
        image: AllImages.guettawayKidsProgram,
        imageFocus: "top",
        linkTo: "kids-day-camp",
      },
      {
        id: "babysitting",
        title: "Babysitting",
        description: "Babysitting & Early Childcare is available for ages 0–2, for a fee, with gentle care, sensory play, music, and crafts.",
        image: AllImages.reserveBabysitting,
        details: {
          title: "Babysitting",
          paragraphs: [
            "Babysitting & Early Childcare is available for ages 0–2, for a fee, with gentle care, sensory play, music, and crafts.",
          ],
        },
      },
    ],
    // gallery: {
    //   title: "Kids & Family Photo Gallery",
    //   description: "Step inside our extraordinary kids world with inflatable adventure zones, bounce arenas, and dedicated counselors.",
    //   images: [
    //     AllImages.guettawayKidsProgram,
    //     AllImages.guettawayKidsBallroomBlowups,
    //     AllImages.guettawayKidsGiantSlide,
    //     AllImages.guettawayKidsBouncyJumping,
    //     AllImages.guettawayKidsInflatablePlayground,
    //     AllImages.guettawayKidsToddlerBouncyCastle,
    //     AllImages.guettawayKidsBounceObstacleCourse,
    //     AllImages.guettawayKidsSlideClimb,
    //   ],
    // },
  },
};
