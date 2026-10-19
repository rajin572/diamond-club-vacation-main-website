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
        id: "ben-tzur",
        title: "Ben Tzur – Live in Concert",
        description: "One of Israel’s biggest stars. The hits everyone is singing. One spectacular night.",
        // The client asked for the artist photo to be put in; none was sent yet, so the concert photo stays until it comes.
        image: AllImages.reserveEntertainmentConcert,
        details: {
          title: "Ben Tzur – Live in Concert",
          paragraphs: [
            "Israel’s breakout superstar of 2026.",
            "Get ready for an extraordinary night as Ben Tzur, one of Israel’s hottest and most celebrated musical sensations, takes center stage for an unforgettable live concert!",
            "Following a phenomenal year of chart-topping hits, sold-out performances, and a meteoric rise to stardom, Ben Tzur has become one of the most exciting names in Israeli music. With smash hits including “Ahavat Hashem,” “Ish HaPele,” “Kol Akava Letova,” “Abba,” and “Neshamot Tzmeot,” his music has captured the hearts of millions.",
            "Fresh off spectacular performances at Israel’s most prestigious concert venues, Ben Tzur brings his unmistakable voice, incredible stage presence, and electrifying energy to an exclusive Diamond Club Vacations performance.",
            "Prepare for a breathtaking evening featuring a full live band, dazzling stage production, powerful melodies, and the biggest hits that have taken Israel by storm.",
            "One of Israel’s biggest stars. The hits everyone is singing. One spectacular night.",
            "This Passover, experience the superstar sensation of Ben Tzur LIVE — an extraordinary musical celebration and one of the crown jewels of our 2027 entertainment lineup!",
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
    programTitle: "Guettaway a Diamond Club production",
    experienceType: "entertainment",
    title: "Entertainment",
    heroImage: AllImages.blueEntertainment,
    columns: 3,
    items: [
      {
        id: "shulem-lemmer",
        title: "Shulem Lemmer",
        description: "Experience an extraordinary evening with internationally acclaimed vocalist Shulem Lemmer, whose magnificent voice and remarkable vocal range have captivated audiences around the world.",
        image: AllImages.entertainmentShulemLemmer,
        imageFocus: "top",
        details: {
          title: "Shulem Lemmer – Live in Concert",
          paragraphs: [
            "Experience an extraordinary evening with internationally acclaimed vocalist Shulem Lemmer, whose magnificent voice and remarkable vocal range have captivated audiences around the world.",
            "Renowned for his breathtaking performances, soulful melodies, and powerful stage presence, Shulem brings a spectacular blend of timeless classics, beloved favorites, and uplifting music to the stage.",
            "From deeply moving ballads to exhilarating musical masterpieces, prepare for an unforgettable concert filled with passion, elegance, and extraordinary talent.",
            "One extraordinary voice. A world-class performance. An unforgettable night of music!",
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
        id: "dovi-meisels",
        title: "Dovi Meisels",
        description: "Soulful vocals and heart-stirring kumzits by acclaimed Chassidic recording artist Dovi Meisels.",
        image: AllImages.entertainmentDoviMeiselsGuitar,
        details: {
          title: "Dovi Meisels Live in Concert",
          paragraphs: [
            "Experience an unforgettable evening of soulful melodies and uplifting Chassidic music with renowned singer Dovi Meisels.",
          ],
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
