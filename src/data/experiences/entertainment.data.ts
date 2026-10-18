import { AllImages } from "../../../public/images/AllImages";
import type { ExperienceCategoryData } from "@/components/experiences/experiences.types";

export const ENTERTAINMENT_BY_PROGRAM: Record<string, ExperienceCategoryData> = {
  "diamond-club-reserve": {
    programId: "diamond-club-reserve",
    programTitle: "DIAMOND CLUB RESERVE",
    experienceType: "entertainment",
    title: "Entertainment",
    heroImage: AllImages.reserveEntertainmentConcert,
    columns: 3,
    items: [
      {
        id: "zusha",
        title: "Zusha",
        description: "Experience an electrifying night of soul-stirring music, infectious energy, and uplifting melodies.",
        image: AllImages.zushaConcert,
        details: {
          title: "Zusha Live Concert",
          paragraphs: [
            "Experience an electrifying night of soul-stirring music, infectious energy, and uplifting melodies.",
            "An unforgettable musical journey filled with inspiration, joy, and the unmistakable magic of Zusha.",
          ],
        },
      },
      {
        id: "comedian-elon-gold",
        title: "Renowned Comedian Elon Gold",
        description: "From his Orthodox upbringing to being an NYU dropout, comedian Elon Gold brings his renowned stand-up.",
        image: AllImages.reserveEntertainmentElonGold,
        details: {
          title: "Renowned Comedian Elon Gold",
          paragraphs: [
            "From his Orthodox upbringing to being an NYU dropout, comedian Elon Gold brings his renowned stand-up comedy and unforgettable humor to Diamond Club Vacations.",
          ],
        },
      },
      {
        id: "surprise-concert",
        title: "Get Ready For The Unexpected",
        description: "A surprise superstar. One spectacular night. An unforgettable concert. The biggest surprise of Pesach is yet to be revealed.",
        image: AllImages.reserveEntertainmentConcert,
        details: {
          title: "Get Ready For The Unexpected",
          paragraphs: [
            "A surprise superstar. One spectacular night. An unforgettable concert.",
            "The biggest surprise of Pesach is yet to be revealed. Headliner announcement coming soon.",
          ],
        },
      },
      {
        id: "after-party",
        title: "The After Party",
        description: "As night falls, SO’OL beach club comes alive with vibrant DJ parties, hookah, disco and casino nights.",
        image: AllImages.reserveEntertainmentNightlife,
        imageFocus: "top",
        details: {
          title: "The After Party",
          paragraphs: [
            "As night falls, SO’OL beach club comes alive with vibrant DJ parties, hookah, disco and casino nights.",
          ],
        },
      },
      {
        id: "fire-shows",
        title: "Fire Shows",
        description: "Feel the energy of the Riviera Maya with breathtaking fire performances.",
        image: AllImages.reserveEntertainment,
        imageFocus: "top",
        details: {
          title: "Fire Shows",
          paragraphs: ["Feel the energy of the Riviera Maya with breathtaking fire performances."],
        },
      },
      {
        id: "dj-pinny-yiddi",
        title: "DJ Pinny & Yiddi",
        description: "DJ Pinny and DJ Yiddi are set to ignite the party and keep the celebration going all night long, with an unforgettable mix of music and energy.",
        image: AllImages.reserveEntertainmentDjPinnyYiddi,
        imageFocus: "top",
        details: {
          title: "DJ Pinny & Yiddi",
          paragraphs: [
            "DJ Pinny and DJ Yiddi are set to ignite the party and keep the celebration going all night long, with an unforgettable mix of music and energy.",
          ],
        },
      },
    ],
  },
  blue: {
    programId: "blue",
    programTitle: "Diamond Blue by DCV",
    experienceType: "entertainment",
    title: "Entertainment",
    heroImage: AllImages.reserveEntertainmentConcert,
    columns: 3,
    items: [
      {
        id: "after-party",
        title: "The After Party",
        description: "The party never stops",
        image: AllImages.reserveEntertainmentNightlife,
        imageFocus: "top",
        details: { title: "The After Party", paragraphs: ["The party never stops"] },
      },
      {
        id: "fire-shows",
        title: "Fire Shows",
        image: AllImages.reserveEntertainment,
        imageFocus: "top",
        details: { title: "Fire Shows", paragraphs: [] },
      },
      {
        id: "dj-pinny-yiddi",
        title: "DJ Pinny & Yiddi",
        description: "DJ Pinny and DJ Yiddi are set to ignite the party and keep the celebration going all night long, with an unforgettable mix of music and energy.",
        image: AllImages.reserveEntertainmentDjPinnyYiddi,
        imageFocus: "top",
        details: {
          title: "DJ Pinny & Yiddi",
          paragraphs: [
            "DJ Pinny and DJ Yiddi are set to ignite the party and keep the celebration going all night long, with an unforgettable mix of music and energy.",
          ],
        },
      },
      {
        id: "kumzits-nussi-benyomin",
        title: "Kumzits with Nussi and Benyomin",
        description: "TBD",
        image: AllImages.reserveEntertainmentKumzits,
        imageFocus: "top",
        details: { title: "Kumzits with Nussi and Benyomin", paragraphs: ["TBD"] },
      },
      {
        id: "comedian-dovi-neuburger",
        title: "Comedian Dovi Neuburger",
        image: AllImages.blueEntertainmentDoviNeuburger,
        imageFocus: "top",
        details: { title: "Comedian Dovi Neuburger", paragraphs: [] },
      },
    ],
  },
  guttaway: {
    programId: "guttaway",
    programTitle: "guettaway a Diamond Club production",
    experienceType: "entertainment",
    title: "Entertainment",
    heroImage: AllImages.blueEntertainment,
    columns: 3,
    items: [
      {
        id: "dovi-meisels",
        title: "Dovi Meisels",
        description: "Soulful vocals and heart-stirring kumzits by acclaimed Chassidic recording artist Dovi Meisels.",
        image: AllImages.reserveEntertainmentConcert,
        details: {
          title: "Dovi Meisels Live in Concert",
          paragraphs: [
            "Experience an unforgettable evening of soulful melodies and uplifting Chassidic music with renowned singer Dovi Meisels.",
          ],
        },
      },
      {
        id: "zusha",
        title: "Zusha",
        description: "Experience an electrifying night of soul-stirring music, infectious energy, and uplifting melodies.",
        image: AllImages.zushaConcert,
        details: {
          title: "Zusha Live Concert",
          paragraphs: [
            "Experience an electrifying night of soul-stirring music, infectious energy, and uplifting melodies.",
            "An unforgettable musical journey filled with inspiration, joy, and the unmistakable magic of Zusha.",
          ],
        },
      },
      {
        id: "elon-gold",
        title: "Elon Gold",
        description: "Renowned comedian Elon Gold brings his acclaimed stand-up comedy and hilarious humor.",
        image: AllImages.reserveEntertainmentElonGold,
        details: {
          title: "Elon Gold Stand-Up Comedy",
          paragraphs: [
            "From his Orthodox upbringing to his celebrated television appearances, comedian Elon Gold delivers an evening of non-stop laughter.",
          ],
        },
      },
      {
        id: "dj",
        title: "DJ",
        description: "High-energy live DJ sets keeping the celebration vibrant through every evening.",
        image: AllImages.reserveEntertainmentDjPinnyYiddi,
        details: {
          title: "Live DJ Sets",
          paragraphs: ["Curated playlists, uplifting sets, and energetic party beats."],
        },
      },
      {
        id: "nightlife",
        title: "Nightlife",
        description: "Vibrant evening lounges, themed nights, hookah, and late-night celebrations.",
        image: AllImages.reserveEntertainmentNightlife,
        details: {
          title: "Nightlife & Lounges",
          paragraphs: ["Exclusive evening gatherings and nightlife experiences."],
        },
      },
      {
        id: "fireshows",
        title: "Fireshows",
        description: "Spectacular oceanfront fire performances illuminating the Caribbean night.",
        image: AllImages.reserveEntertainment,
        details: {
          title: "Fireshows & Nightly Spectacles",
          paragraphs: ["Feel the pulse of Mexico with breathtaking beachfront fire shows."],
        },
      },
    ],
  },
};
