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
    // Its own box above the team, styled like "Our Team", with the director's photo and text (client 2026-10-28).
    director: {
      title: "Our Director",
      image: AllImages.stRegisDayCampCounselor,
      alt: "Shlomo Meisels, Day Camp Director",
      role: "Day Camp Director",
      name: "Shlomo Meisels",
      bio: "Overseeing our complete children’s program and ensuring an organized, exciting, and memorable experience from start to finish.",
    },
    team: [
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
    gallery: {
      title: "Day Camp Photo Gallery",
      // description: "Action-packed days filled with beachfront giant chess, lawn games, water inflatables, sports tournaments, and supervised youth adventures.",
      images: [
        AllImages.dayCampCollage,
        AllImages.reserveKidsBeachChessWide,
        AllImages.reserveKidsWaterInflatables,
        AllImages.reserveKidsBeachCornhole,
        AllImages.reserveKidsBeachChessAction,
        AllImages.reserveKidsBeachChessPortrait,
        AllImages.reserveKidsBeachChessPlayers,
      ],
    },
  },
  // The day camp content of the Diamond Club Reserve (St. Regis / EDITION), as asked on 2026-10-22; only "Our Team" stays Diamond Blue's own.
  blue: {
    programId: "blue",
    programName: "Diamond Blue by DCV",
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
    director: {
      title: "Our Director",
      image: AllImages.casaNizucDayCampDirectorArianaMizrahi,
      alt: "Ariana Mizrahi, Day Camp Director",
      role: "Day Camp Director",
      name: "Ariana Mizrahi",
      bio: "With a passion for working with children and creating meaningful, fun-filled experiences, Ariana Mizrahi brings enthusiasm, creativity, and a warm, caring approach to her role as Day Camp Director at Diamond Blue, developing an engaging program filled with exciting activities, creative projects, interactive games, and memorable experiences.",
    },
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
    gallery: {
      title: "Day Camp Photo Gallery",
      // description: "Action-packed days filled with beachfront giant chess, lawn games, water inflatables, sports tournaments, and supervised youth adventures.",
      images: [
        AllImages.dayCampCollage,
        AllImages.reserveKidsBeachChessWide,
        AllImages.reserveKidsWaterInflatables,
        AllImages.reserveKidsBeachCornhole,
        AllImages.reserveKidsBeachChessAction,
        AllImages.reserveKidsBeachChessPortrait,
        AllImages.reserveKidsBeachChessPlayers,
      ],
    },
  },
  // From the client's page www.guettaways.com/kids-family-programs (client 2026-10-20: "Waldorf Astoria Day Camp").
  guttaway: {
    programId: "guttaway",
    programName: "Guettaway a Diamond Club production",
    hero: {
      title: "Waldorf Astoria Day Camp",
      description: "The Kids Club is led by professional day camp directors and vetted counselors, with safety and supervision as top priorities. Scheduling is designed to sync with adult programming.",
      image: AllImages.guettawayKidsProgram,
      imagePosition: "50% 45%",
    },
    overview: {
      title: "Kids & Family Programs",
      description: "The Guettaway Kids Club: age-appropriate programs for every child, from toddlers to teens, with scheduling that syncs with the adult program.",
    },
    program: {
      title: "Kids Come First",
      items: [
        "Dedicated counselors for every age group",
        "On-site activities and entertainment",
        "Child-friendly menus and 24/7 kid-approved snacks",
      ],
    },
    team: [
      {
        id: "binyomin-schwartz",
        role: "Program Director",
        name: "Rabbi Binyomin Schwartz",
        image: AllImages.dayCampDirectorBinyominSchwartz,
        bio: "With over 25 years of experience in children’s camps, Pesach programming, and children’s entertainment, Rabbi Schwartz focuses on age-appropriate scheduling, organization, child safety, and the social and emotional experience of each child.",
      },
    ],
    activities: [
      { id: "morning", title: "Morning", description: "Drop-off and age-specific programs." },
      { id: "midday", title: "Midday", description: "Sports, pool time, and workshops." },
      { id: "afternoon", title: "Afternoon", description: "Group activities, creative projects, or beach games." },
      { id: "evening", title: "Evening", description: "Family dinner, then teen lounges, live shows, or bonfires." },
    ],
    ageGroups: [
      { group: "Toddlers & Young Children", highlights: "Gentle care, sensory play, music, and crafts in safe, welcoming spaces." },
      { group: "Elementary Kids", highlights: "Daily activities including sports, pool games, scavenger hunts, and creative projects." },
      { group: "Tweens", highlights: "Competitions, performances, off-site excursions, and programs built around independence and energy." },
      { group: "Teens", highlights: "Separate programming for boys and girls, including sports, workshops, and Chol Hamoed outings. Teen programs are directed by the Teen Division staff and include exclusive classes led by presenters." },
    ],
    babysitting: {
      title: "Babysitting & Early Childcare",
      description: "Available for ages 0–2, with gentle care, sensory play, music, and crafts.",
      rateText: "Available for a fee.",
    },
    gallery: {
      title: "Day Camp Photo Gallery",
      // description: "A world of excitement featuring our massive indoor inflatable playground, giant climbing slides, bounce castles, and endless activities.",
      images: [
        AllImages.guettawayKidsProgram,
        AllImages.guettawayKidsBallroomBlowups,
        AllImages.guettawayKidsGiantSlide,
        AllImages.guettawayKidsBouncyJumping,
        AllImages.guettawayKidsInflatablePlayground,
        AllImages.guettawayKidsToddlerBouncyCastle,
        AllImages.guettawayKidsBounceObstacleCourse,
        AllImages.guettawayKidsSlideClimb,
      ],
    },
  },
};
