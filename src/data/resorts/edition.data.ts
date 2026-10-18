import { AllImages } from "../../../public/images/AllImages";
import type { ResortData } from "@/components/resorts/resorts.types";
import { rotate } from "./helpers";
import { RESERVE_DINING } from "./reserve-dining.data";

/** The Riviera Maya EDITION at Kanai — content from the client's HTML design (diamond-club-main-design). */
export const EDITION_RESORT_DATA: ResortData = {
  programId: "diamond-club-reserve",
  programTitle: "DIAMOND CLUB RESERVE",
  resortId: "edition",
  resortName: "The Riviera Maya EDITION at Kanai",
  kicker: "DIAMOND CLUB RESERVE",
  tagline: "Contemporary Riviera Maya luxury with its own rooms, dining, pools, spa, wellness and gallery.",
  heroImage: AllImages.edition1,
  overviewLabel: "Hotel Overview",
  showSubNav: true,
  overview: {
    title: "Discover the hotel",
    description: "Explore everything the hotel offers, from rooms and dining to wellness, entertainment and family programming.",
    cards: [
      {
        id: "rooms",
        title: "Rooms & Suites",
        description: "Room categories, views, bedding, dimensions, amenities and detailed galleries.",
        image: AllImages.editionRooms1,
        target: { type: "section", section: "rooms" },
      },
      {
        id: "pools",
        title: "Pools & Beaches",
        description: "Pools, cabanas and beach experiences.",
        image: AllImages.editionPools1,
        target: { type: "section", section: "pools" },
      },
      {
        id: "wellness",
        title: "Wellness & Fitness",
        description: "Fitness, treatments and wellness experiences.",
        image: AllImages.editionWellness2,
        target: { type: "section", section: "wellness" },
      },
      {
        id: "gallery",
        title: "Gallery",
        navLabel: "Gallery",
        description: "A dedicated gallery using only this hotel’s imagery.",
        image: AllImages.editionResortGallery1,
        target: { type: "section", section: "gallery" },
      },
    ],
  },
  rooms: {
    title: "Choose your room",
    description: "Choose from the hotel’s room and suite categories; each room page lists measurements, bedding, features and photos.",
    linkToDetails: true,
    items: [
      {
        id: "deluxe-room",
        title: "Deluxe Room",
        subtitle: "1 King or 2 Queen Beds · Mangrove View",
        image: AllImages.editionRooms1,
        description: "One king or two queen beds, with views over the protected mangrove reserve that surrounds the resort.",
        stats: [
          { label: "Room Size", value: "[Size]" },
          { label: "View", value: "Mangrove View" },
          { label: "Bedding", value: "1 King or 2 Queen Beds" },
          { label: "Outdoor Space", value: "Private furnished terrace" },
        ],
        groups: [
          {
            title: "Beds & Bedding",
            items: [
              "1 King or 2 Queen Beds",
              "Cribs permitted",
              "Duvet and Frette luxury linens",
              "Rollaway bed available upon request",
            ],
          },
          {
            title: "Room Features",
            items: [
              "Air-conditioned",
              "Connecting rooms available (for some rooms)",
              "Private furnished terrace",
            ],
          },
          {
            title: "Bath & Bathroom Features",
            items: [
              "Marble bathroom",
              "Separate bathtub and shower",
              "Double vanities",
              "Whirlpool fits 1",
              "Lighted makeup mirror",
              "Hair dryer",
              "Robe",
              "Slippers",
            ],
          },
          { title: "Furniture & Furnishings", items: ["Oversized chair", "Alarm clock"] },
          {
            title: "Internet & Phones",
            items: [
              "Cordless phone",
              "Voicemail and speaker phone",
              "Complimentary wireless internet",
            ],
          },
        ],
        gallery: rotate([...AllImages.series.editionRoomDetail, ...AllImages.series.editionGallery.slice(0, 3)], 0),
      },
      {
        id: "premier-plunge-pool-room",
        title: "Premier Plunge Pool Room",
        subtitle: "1 King or 2 Queen Beds · Ocean View",
        image: AllImages.editionRooms2,
        description: "One king or two queen beds, with a rollaway bed available on request, and a private furnished terrace overlooking the ocean.",
        stats: [
          { label: "Room Size", value: "[Size]" },
          { label: "View", value: "Ocean View" },
          { label: "Bedding", value: "1 King or 2 Queen Beds" },
          { label: "Outdoor Space", value: "Private furnished terrace with plunge pool" },
        ],
        groups: [
          {
            title: "Beds & Bedding",
            items: [
              "1 King or 2 Queen Beds",
              "Cribs permitted",
              "Duvet and Frette luxury linens",
              "Rollaway bed available upon request",
            ],
          },
          {
            title: "Room Features",
            items: [
              "Air-conditioned",
              "Connecting rooms available (for some rooms)",
              "Private furnished terrace with plunge pool",
            ],
          },
          {
            title: "Bath & Bathroom Features",
            items: [
              "Marble bathroom",
              "Separate bathtub and shower",
              "Double vanities",
              "Lighted makeup mirror",
              "Hair dryer",
              "Robe",
              "Slippers",
            ],
          },
          { title: "Furniture & Furnishings", items: ["Oversized chair", "Alarm clock"] },
          {
            title: "Internet & Phones",
            items: [
              "Cordless phone",
              "Voicemail and speaker phone",
              "Complimentary wireless internet",
            ],
          },
        ],
        gallery: rotate([...AllImages.series.editionRoomDetail, ...AllImages.series.editionGallery.slice(0, 3)], 1),
      },
      {
        id: "premier-plunge-pool-suite",
        title: "Premier Plunge Pool Room Suite",
        subtitle: "1 King or 2 Queen Beds",
        image: AllImages.editionRooms3,
        description: "Expansive suite with separated living area, oversized terrace with private infinity plunge pool, and panoramic vistas.",
        stats: [
          { label: "Room Size", value: "[Size]" },
          { label: "View", value: "Ocean Or Mangrove View" },
          { label: "Bedding", value: "1 King or 2 Queen Beds" },
          { label: "Outdoor Space", value: "Private furnished terrace with plunge pool" },
        ],
        groups: [
          {
            title: "Beds & Bedding",
            items: [
              "1 King or 2 Queen Beds",
              "Cribs permitted",
              "Duvet and Frette luxury linens",
              "Rollaway bed available upon request",
            ],
          },
          {
            title: "Room Features",
            items: [
              "Air-conditioned",
              "Separate living room",
              "Private furnished terrace with plunge pool",
            ],
          },
          {
            title: "Bath & Bathroom Features",
            items: [
              "Marble bathroom",
              "Deep soaking tub and rain shower",
              "Double vanities",
              "Lighted makeup mirror",
              "Hair dryer",
              "Robe",
              "Slippers",
            ],
          },
          { title: "Furniture & Furnishings", items: ["Oversized chair", "Alarm clock"] },
          {
            title: "Internet & Phones",
            items: [
              "Cordless phone",
              "Voicemail and speaker phone",
              "Complimentary wireless internet",
            ],
          },
        ],
        gallery: rotate([...AllImages.series.editionRoomDetail, ...AllImages.series.editionGallery.slice(0, 3)], 2),
      },
    ],
  },
  dining: RESERVE_DINING,
  pools: {
    title: "Pools & Beach",
    description: "Pools, beach areas, cabanas and resort water experiences.",
    images: AllImages.series.editionPools,
    items: [
      {
        id: "main-pool",
        title: "Main Pool",
        subtitle: "Outdoor · Outdoor, on property",
        image: AllImages.series.editionPools[0],
        description: "The iconic curved central pool surrounded by lush greenery, daybeds, floating loungers and attentive towel service.",
        stats: [
          { label: "Type", value: "Outdoor" },
          { label: "Hours", value: "7:00 AM – 8:00 PM" },
          { label: "Location", value: "Outdoor, on property" },
        ],
        groups: [{ title: "Schedule", items: ["Monday – Sunday: 7:00 AM – 8:00 PM"] }],
        gallery: rotate(AllImages.series.editionPools, 0),
      },
      {
        id: "sool-beach-club-pool",
        title: "SO’OL Beach Club Pool",
        subtitle: "Beach · Kanai Beachfront",
        image: AllImages.series.editionPools[1],
        description: "Exclusive oceanfront beach club pool with rhythmic waves, sunloungers, VIP cabanas and direct white-sand beach access.",
        stats: [
          { label: "Type", value: "Beach" },
          { label: "Hours", value: "9:00 AM – 7:00 PM" },
          { label: "Location", value: "Kanai Beachfront" },
        ],
        groups: [{ title: "Schedule", items: ["Monday – Sunday: 9:00 AM – 7:00 PM"] }],
        gallery: rotate(AllImages.series.editionPools, 1),
      },
      {
        id: "lagoon-pool",
        title: "Lagoon Pool",
        subtitle: "Outdoor · Mangrove Sanctuary Wing",
        image: AllImages.series.editionPools[2],
        description: "A serene lagoon-inspired pool nestled in the mangroves for peaceful relaxation, reading and contemplative quiet time.",
        stats: [
          { label: "Type", value: "Outdoor" },
          { label: "Hours", value: "8:00 AM – 7:00 PM" },
          { label: "Location", value: "Mangrove Sanctuary Wing" },
        ],
        groups: [{ title: "Schedule", items: ["Monday – Sunday: 8:00 AM – 7:00 PM"] }],
        gallery: rotate(AllImages.series.editionPools, 2),
      },
    ],
  },
  wellness: {
    title: "Wellness & Spa",
    description: "Spa, fitness and restorative wellness experiences.",
    images: AllImages.series.editionWellness,
    activities: [
      {
        id: "beauty-salon",
        title: "Beauty Salon",
        description: "Detoxify, relax and rejuvenate as the soothing steam restores your body.",
      },
      {
        id: "body-treatments",
        title: "Body treatments",
        description: "Body rituals that offer a journey of renewal through time-honoured techniques.",
      },
      {
        id: "salt-soul-yoga",
        title: "Salt & Soul Yoga",
        description: "Yoga classes, meditation, wellness workshops and fitness sessions.",
      },
      {
        id: "rola-spin-classes",
        title: "Rola Spin Classes",
        description: "Indoor cycling with the resort fitness team.",
      },
      {
        id: "hiit-pilates-zumba",
        title: "HIIT · Pilates · Zumba",
        description: "Daily classes for every level.",
      },
      {
        id: "latin-dance-classes",
        title: "Latin Dance Classes",
        description: "Salsa, merengue and bachata through the week.",
      },
      { id: "aqua-zumba", title: "Aqua Zumba", description: "Low-impact classes in the pool." },
      {
        id: "rituals",
        title: "Rituals",
        description: "Drawn from ancient traditions, our spa rituals are designed to restore balance.",
      },
      { id: "meditation", title: "Meditation", description: "Guided sessions to start or close the day." },
      {
        id: "technogym-cardio",
        title: "TechnoGym & Peloton Cardio",
        description: "High-performance treadmills, ellipticals and connected Peloton bikes available 24/7.",
      },
      {
        id: "functional-training",
        title: "Strength & Functional Training",
        description: "Full free weight rack, kettlebells, cable resistance stations and private training options.",
      },
    ],
  },
  spa: {
    item: {
      id: "spa",
      title: "The Spa",
      subtitle: "An afternoon that undoes the year",
      image: AllImages.series.editionWellness[0],
      description: "The spa offers hydrotherapy pools, a Turkish hammam and steam rooms, alongside a beauty salon and body treatments rooted in time-honoured techniques.",
      stats: [
        { label: "Location", value: "Lower level, main building" },
        { label: "Hours", value: "8:00 AM – 11:00 PM" },
      ],
      groups: [
        {
          title: "Treatments & Facilities",
          items: [
            "Hydrotherapy pools",
            "Beauty salon",
            "Turkish hammam",
            "Body treatments",
            "Steam rooms",
            "Spa rituals",
          ],
        },
      ],
      gallery: AllImages.series.editionWellness,
    },
  },
  gallery: {
    title: "Gallery",
    description: "A dedicated visual collection for this hotel only.",
    images: AllImages.series.editionResortGallery.slice(0, 9),
  },
};
