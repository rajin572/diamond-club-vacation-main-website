import { AllImages } from "../../../public/images/AllImages";
import type { ExperienceCategoryData } from "@/components/experiences/experiences.types";

export const SCHOLARS_BY_PROGRAM: Record<string, ExperienceCategoryData> = {
  "diamond-club-reserve": {
    programId: "diamond-club-reserve",
    programTitle: "DIAMOND CLUB RESERVE",
    experienceType: "scholars",
    title: "Scholars",
    description: "Inspiring talks, classes and tefillah led by renowned rabbis and speakers throughout the holiday.",
    heroImage: AllImages.home1,
    columns: 2,
    items: [
      {
        id: "rabbi-chanan-gordon",
        title: "Rabbi Chanan Gordon",
        tag: "Scholar in residence",
        description: "Rabbi Shalom Rubanowitz brings a unique blend of Los Angeles and Israeli Jewish influence to his rabbinics. He spent a number of years as a child and teen studying in the holy cities of Tzefat and Jerusalem, and was an active member of the Religious Zionist movement Bnei Akiva.",
        image: AllImages.home1,
        linkLabel: "Read bio →",
        details: {
          title: "Rabbi Chanan Gordon",
          tag: "Scholar in residence",
          paragraphs: [
            "Rabbi Shalom Rubanowitz brings a unique blend of Los Angeles and Israeli Jewish influence to his rabbinics. He spent a number of years as a child and teen studying in the holy cities of Tzefat and Jerusalem, and was an active member of the Religious Zionist movement Bnei Akiva. His engaging shiurim and lectures combine deep halachic knowledge with warmth, humor, and contemporary relevance, making every session an inspiring highlight for guests of all backgrounds.",
          ],
        },
      },
      {
        id: "rabbi-michael-mizrahi",
        title: "Rabbi Michael Mizrahi",
        tag: "Scholar in residence",
        description: "With 17 years of experience as a chazzan and Ba’al Koreh in South Florida, Michael Mizrahi has earned acclaim for his heartfelt davening, masterful tefillah leadership, and warm connection with congregations across the country.",
        image: AllImages.home4,
        linkLabel: "Read bio →",
        details: {
          title: "Rabbi Michael Mizrahi",
          tag: "Scholar in residence",
          paragraphs: [
            "With 17 years of experience as a chazzan and Ba’al Koreh in South Florida, Michael Mizrahi has earned acclaim for his heartfelt davening, masterful tefillah leadership, and warm connection with congregations across the country. Throughout Passover 2027, Rabbi Mizrahi will guide uplifting tefillot, melodious Seders, and dynamic discussion sessions that elevate the spiritual atmosphere for the entire community.",
          ],
        },
      },
    ],
  },
  blue: {
    programId: "blue",
    programTitle: "Diamond Blue by DCV",
    experienceType: "scholars",
    title: "Scholars",
    description: "Inspiring talks, classes and tefillah led by renowned rabbis and speakers throughout the holiday.",
    heroImage: AllImages.home1,
    columns: 2,
    items: [
      {
        id: "rabbi-lawrence-hajioff",
        title: "Rabbi Lawrence Hajioff",
        tag: "Scholar in residence",
        description: "Rabbi Lawrence Hajioff grew up in London, England. After graduating with honors in political science from the University of Manchester, he worked for MTV in news production and won a national competition to become \"Jewish Stand-Up Comedian of the Year.\" After deciding to pursue a career as a rabbi, Hajioff studied in Israel and then Monsey, New York, where he received his rabbinical smicha ordination.",
        image: AllImages.home1,
        linkLabel: "Read bio →",
        details: {
          title: "Rabbi Lawrence Hajioff",
          tag: "Scholar in residence",
          paragraphs: [
            "Rabbi Lawrence Hajioff grew up in London, England. After graduating with honors in political science from the University of Manchester, he worked for MTV in news production and won a national competition to become \"Jewish Stand-Up Comedian of the Year.\" After deciding to pursue a career as a rabbi, Hajioff studied in Israel and then Monsey, New York, where he received his rabbinical smicha ordination.",
          ],
        },
      },
      {
        id: "speaker-to-be-announced",
        title: "Speaker to be announced",
        tag: "Scholar in residence",
        description: "Details coming soon.",
        image: AllImages.home4,
        tba: true,
        linkLabel: "Read bio →",
      },
    ],
  },
};
