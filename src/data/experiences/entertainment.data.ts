import { AllImages } from "../../../public/images/AllImages";
import type { ExperienceCategoryData } from "@/components/experiences/experiences.types";

export const ENTERTAINMENT_BY_PROGRAM: Record<string, ExperienceCategoryData> = {
  "diamond-club-reserve": {
    programId: "diamond-club-reserve",
    programTitle: "DIAMOND CLUB RESERVE",
    experienceType: "entertainment",
    title: "Entertainment",
    description: "Nightly shows, headline performers and late-night parties, planned throughout the holiday for every age.",
    heroImage: AllImages.entertainment1,
    columns: 3,
    items: [
      {
        id: "after-party",
        title: "The After Party",
        tag: "Nightly",
        description: "As night falls, SO’OL beach club comes alive with DJ parties, hookah, disco and casino nights.",
        image: AllImages.entertainment1,
        details: {
          title: "The After Party",
          tag: "Nightly",
          paragraphs: [
            "When the main event ends, the night is just beginning. DJ parties, hookah, disco, casino nights and more await.",
          ],
          facts: [
            { label: "When", value: "Nightly, after the evening program" },
            { label: "Where", value: "SO’OL beach club" },
          ],
        },
      },
      {
        id: "fire-shows",
        title: "Fire Shows",
        tag: "Evenings",
        description: "An incredible lineup of nightly entertainment under the Riviera Maya sky.",
        image: AllImages.entertainment1,
        details: {
          title: "Fire Shows",
          tag: "Evenings",
          paragraphs: [
            "An incredible lineup of nightly entertainment under the Riviera Maya sky featuring world-class fire artists, acrobats, and mesmerizing light choreography.",
          ],
          facts: [
            { label: "When", value: "Select evenings during Chol Hamoed" },
            { label: "Where", value: "Beachfront Amphitheater" },
          ],
        },
      },
      {
        id: "dj-pinny-yiddi",
        title: "DJ Pinny & Yiddi",
        tag: "Featured",
        description: "DJ Pinny and DJ Yiddi are set to ignite the party and keep the celebration going.",
        image: AllImages.entertainment1,
        details: {
          title: "DJ Pinny & Yiddi",
          tag: "Featured",
          paragraphs: [
            "DJ Pinny and DJ Yiddi bring their signature high-octane energy to the dancefloor, blending contemporary Jewish beats, global remixes, and celebratory anthems.",
          ],
          facts: [
            { label: "When", value: "Chol Hamoed late-night sessions" },
            { label: "Where", value: "Kanai Ballroom & SO’OL Club" },
          ],
        },
      },
      {
        id: "kumzits-nussi-benyomin",
        title: "Kumzits with Nussi & Benyomin",
        tag: "Details to be announced",
        description: "Details coming soon.",
        image: AllImages.entertainment1,
        tba: true,
      },
      {
        id: "comedian-elon-gold",
        title: "Comedian Elon Gold",
        tag: "Featured",
        description: "From his Orthodox upbringing to being an NYU dropout, comedian Elon Gold brings his renowned stand-up.",
        image: AllImages.entertainment1,
        details: {
          title: "Comedian Elon Gold",
          tag: "Featured",
          paragraphs: [
            "From his Orthodox upbringing to being an NYU dropout, comedian Elon Gold brings his renowned stand-up comedy performance, sharing hilarious and relatable observations.",
          ],
          facts: [
            { label: "When", value: "Chol Hamoed Headline Evening" },
            { label: "Where", value: "Main Kanai Ballroom" },
          ],
        },
      },
      {
        id: "concert",
        title: "Concert",
        tag: "Details to be announced",
        description: "Details coming soon.",
        image: AllImages.entertainment1,
        tba: true,
      },
    ],
  },
  blue: {
    programId: "blue",
    programTitle: "Diamond Blue by DCV",
    experienceType: "entertainment",
    title: "Entertainment",
    description: "Nightly shows, headline performers and late-night parties, planned throughout the holiday for every age.",
    heroImage: AllImages.entertainment1,
    columns: 3,
    items: [
      {
        id: "after-party",
        title: "The After Party",
        tag: "Nightly",
        description: "As night falls, SO’OL beach club comes alive with DJ parties, hookah, disco and casino nights.",
        image: AllImages.entertainment1,
        details: {
          title: "The After Party",
          tag: "Nightly",
          paragraphs: [
            "When the main event ends, the night is just beginning. DJ parties, hookah, disco, casino nights and more await.",
          ],
          facts: [
            { label: "When", value: "Nightly, after the evening program" },
            { label: "Where", value: "SO’OL beach club" },
          ],
        },
      },
      {
        id: "fire-shows",
        title: "Fire Shows",
        tag: "Evenings",
        description: "An incredible lineup of nightly entertainment.",
        image: AllImages.entertainment1,
        details: {
          title: "Fire Shows",
          tag: "Evenings",
          paragraphs: [
            "An incredible lineup of nightly entertainment under the Cancun sky featuring acrobats, fire manipulators, and percussion rhythms.",
          ],
          facts: [
            { label: "When", value: "Select evenings during Chol Hamoed" },
            { label: "Where", value: "Casa Nizuc Beachfront" },
          ],
        },
      },
      {
        id: "dj-pinny-yiddi",
        title: "DJ Pinny & Yiddi",
        tag: "Featured",
        description: "DJ Pinny and DJ Yiddi are set to ignite the party and keep the celebration going.",
        image: AllImages.entertainment1,
        details: {
          title: "DJ Pinny & Yiddi",
          tag: "Music & Beats",
          paragraphs: [
            "High-energy sets bringing the best Jewish, Israeli, and electronic beats to the dance floor for memorable late-night celebrations.",
          ],
          facts: [
            { label: "When", value: "Nightly afterparties and poolside sets" },
            { label: "Where", value: "Beach Club & Pool Stage" },
          ],
        },
      },
      {
        id: "kumzits-nussi-benyomin",
        title: "Kumzits with Nussi and Benyomin",
        tag: "Featured",
        description: "Kumzits together with Nussi Liberman and Benjamin Lerner.",
        image: AllImages.entertainment1,
        details: {
          title: "Kumzits with Nussi and Benyomin",
          tag: "Soulful Kumzits",
          paragraphs: [
            "Soul-stirring acoustic singing, classic niggunim, and heartwarming stories around the firepit at La Aldea.",
          ],
          facts: [
            { label: "When", value: "Chol Hamoed evenings" },
            { label: "Where", value: "La Aldea Firepit" },
          ],
        },
      },
      {
        id: "comedian-dovi-neuburger",
        title: "Comedian Dovi Neuburger",
        tag: "Featured",
        description: "From his Orthodox upbringing to being an NYU dropout, comedian Dovi Neuburger brings his stand-up.",
        image: AllImages.entertainment1,
        details: {
          title: "Comedian Dovi Neuburger",
          tag: "Comedy Night",
          paragraphs: [
            "Hilarious observational humor, quick-witted crowd work, and clean comedy tailored for the whole family.",
          ],
          facts: [
            { label: "When", value: "Chol Hamoed Evening Show" },
            { label: "Where", value: "Grand Nizuc Ballroom" },
          ],
        },
      },
    ],
  },
};
