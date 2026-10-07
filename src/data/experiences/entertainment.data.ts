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
        description: "Incredible lineup of nightly entertainment",
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
      {
        id: "kumzits-nussi-benyomin",
        title: "Kumzits with Nussi and Benyomin",
        description: "TBD",
        image: AllImages.reserveEntertainmentKumzits,
        imageFocus: "top",
        details: { title: "Kumzits with Nussi and Benyomin", paragraphs: ["TBD"] },
      },
      {
        id: "comedian-elon-gold",
        title: "Renowned Comedian Elon Gold",
        description: "From his Orthodox upbringing to being an NYU dropout, comedian Elon Gold brings his renowned stand-up.",
        image: AllImages.reserveEntertainmentElonGold,
        details: {
          title: "Renowned Comedian Elon Gold",
          paragraphs: [
            "From his Orthodox upbringing to being an NYU dropout, comedian Elon Gold brings his renowned stand-up.",
          ],
        },
      },
      {
        id: "concert",
        title: "Concert",
        description: "TBD",
        image: AllImages.reserveEntertainmentConcert,
        details: { title: "Concert", paragraphs: ["TBD"] },
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
};
