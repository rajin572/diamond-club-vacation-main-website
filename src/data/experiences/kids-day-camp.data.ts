import { AllImages } from "../../../public/images/AllImages";
import type { KidsDayCampData } from "@/components/experiences/experiences.types";

export const KIDS_DAY_CAMP_BY_PROGRAM: Record<string, KidsDayCampData> = {
  "diamond-club-reserve": {
    programId: "diamond-club-reserve",
    programName: "DIAMOND CLUB RESERVE",
    hero: {
      title: "Day Camp & Teen Program",
      description: "An action-packed day camp schedule for all your kids, filled with exciting activities, events, sports, games, live shows, and entertainment, led by our incredible counselors.",
      image: AllImages.dayCampCollage,
      imagePosition: "50% 20%",
    },
    overview: {
      title: "An unforgettable Passover experience for every age.",
      description: "We make sure every child—from our youngest guests to our teens—has an incredible Passover filled with fun, friendship, adventure, and meaningful experiences.",
    },
    team: [
      {
        id: "shlomo-meisels",
        role: "Day Camp Director",
        name: "Shlomo Meisels",
        bio: "Overseeing our complete children’s program and ensuring an organized, exciting, and memorable experience from start to finish.",
      },
      {
        id: "soussan-sports",
        role: "Sports",
        name: "Soussan Sports",
        bio: "Professional sports programming featuring coaching, tournaments, competitions, team activities, and outdoor fun.",
      },
      {
        id: "sara-kiddies",
        role: "Kiddies Program",
        name: "Led by Sara",
        bio: "A warm and nurturing environment for our youngest guests, featuring age-appropriate games, crafts, activities, and supervised play.",
      },
    ],
    activities: [
      {
        id: "kids-day-camp",
        title: "Kids Day Camp",
        description: "Action-packed days filled with treasure hunts, arts & crafts, sports, pool activities, blowups, shows, competitions, themed activities, entertainment, and more.",
      },
      {
        id: "teen-program",
        title: "Teen Program",
        description: "Dedicated programming created specifically for teens, including sports, social events, outings, and activities designed for their age group.",
      },
      {
        id: "chol-hamoed-trips",
        title: "Chol Hamoed Trips & Adventures",
        description: "The excitement goes beyond the resort with special off-property trips and experiences during Chol Hamoed.",
      },
      {
        id: "evening-entertainment",
        title: "Evening Entertainment",
        description: "Special activities, shows, competitions, and extended Chol Hamoed programming for our older children.",
      },
    ],
    ageGroups: [
      { group: "Infants", ages: "Ages 18m–2y" },
      { group: "Toddlers", ages: "Ages 3–5" },
      { group: "Children", ages: "Ages 6–9" },
      {
        group: "Pre-Teens",
        ages: "Ages 10–12",
        highlights: "Extended evening programming during Chol Hamoed",
      },
      { group: "Teens", highlights: "Dedicated teen activities, sports, social events, and outings" },
    ],
    dining: {
      title: "Children’s Dining",
      paragraphs: [
        "Delicious, kid-friendly meals are served nightly in our dedicated Children’s Dining Room.",
        "Our convenient camp and dining hours are thoughtfully coordinated with the overall entertainment and activity schedule, giving parents time to relax and enjoy the program while the kids are having an incredible experience of their own.",
      ],
    },
    babysitting: {
      title: "Babysitting",
      description: "Babysitting is available during camp hours in our dedicated baby room.",
      rateText: "Private babysitting is also available for $20 per hour.",
    },
  },
  blue: {
    programId: "blue",
    programName: "Diamond Blue by DCV",
    hero: {
      title: "Day Camp",
      description: "An action-packed day camp schedule for all your kids, filled with exciting activities, events, sports, games, live shows, and entertainment, led by our incredible counselors.",
      image: AllImages.dayCampCollage,
      imagePosition: "50% 20%",
    },
    team: [
      {
        id: "ariana-mizrahi",
        role: "Day Camp Director",
        name: "Ariana Mizrahi",
        bio: "With a passion for working with children and creating meaningful, fun-filled experiences, Ariana Mizrahi brings enthusiasm, creativity, and a warm, caring approach to her role as Day Camp Director at Diamond Blue, developing an engaging program filled with exciting activities, creative projects, interactive games, and memorable experiences.",
      },
    ],
    program: {
      title: "Day Camp Program",
      items: [
        "Treasure Hunts",
        "Arts & Crafts",
        "Sports & Tournaments",
        "Outdoor Play Areas",
        "Blowup Castles",
        "The Talent Show",
        "Face Painting",
      ],
    },
  },
  guttaway: {
    programId: "guttaway",
    programName: "guettaway a Diamond Club production",
    hero: {
      title: "Day Camp",
      description: "An action-packed day camp schedule for all your kids, filled with exciting activities, events, sports, games, live shows, and entertainment, led by our incredible counselors.",
      image: AllImages.dayCampCollage,
      imagePosition: "50% 20%",
    },
    comingSoon: true,
  },
};
