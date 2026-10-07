import { AllImages } from "../../../public/images/AllImages";
import type { ExperienceCategoryData } from "@/components/experiences/experiences.types";

export const SCHOLARS_BY_PROGRAM: Record<string, ExperienceCategoryData> = {
  "diamond-club-reserve": {
    programId: "diamond-club-reserve",
    programTitle: "DIAMOND CLUB RESERVE",
    experienceType: "scholars",
    title: "Scholars",
    viewerTitle: "Scholars Details",
    layout: "people",
    heroImage: AllImages.reserveScholars,
    columns: 2,
    items: [
      {
        id: "rabbi-chanan-gordon",
        title: "Rabbi Chanan Gordon",
        description: "Rabbi Shalom Rubanowitz brings a unique blend of Los Angeles and Israeli Jewish influence to his rabbinics. He spent a number of years as a child and teen studying in the holy cities of Tzefat and Jerusalem and was an active member of the Religious Zionist movement “Bnai-Akiva”.",
        image: AllImages.reserveScholarChananGordon,
        details: {
          title: "Rabbi Chanan Gordon",
          paragraphs: [
            "Rabbi Shalom Rubanowitz brings a unique blend of Los Angeles and Israeli Jewish influence to his rabbinics. He spent a number of years as a child and teen studying in the holy cities of Tzefat and Jerusalem and was an active member of the Religious Zionist movement “Bnai-Akiva”.",
          ],
        },
      },
      {
        id: "rabbi-michael-mizrahi",
        title: "Rabbi Michael Mizrahi",
        description: "With 17 years of experience as a chazzan and Ba’al Koreh in South Florida, Michael Mizrahi has earned acclaim for his heartfelt davening, masterful tefillah leadership, and warm connection with congregations across the country.",
        image: AllImages.reserveScholarMichaelMizrahi,
        details: {
          title: "Rabbi Michael Mizrahi",
          paragraphs: [
            "With 17 years of experience as a chazzan and Ba’al Koreh in South Florida, Michael Mizrahi has earned acclaim for his heartfelt davening, masterful tefillah leadership, and warm connection with congregations across the country.",
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
    viewerTitle: "Scholars Details",
    layout: "people",
    heroImage: AllImages.blueScholars,
    columns: 2,
    items: [
      {
        id: "rabbi-lawrence-hajioff",
        title: "Rabbi Lawrence Hajioff",
        description: "Rabbi Lawrence Hajioff grew up in London, England. After graduating with honors in political science from University of Manchester, he worked for MTV in news production and won a national competition to become “Jewish Stand-Up Comedian of the Year.” After deciding to pursue a career as a rabbi, Hajioff studied in Israel and then Monsey, New York, where he received his rabbinical smicha ordination.",
        image: AllImages.blueScholarLawrenceHajioff,
        details: {
          title: "Rabbi Lawrence Hajioff",
          paragraphs: [
            "Rabbi Lawrence Hajioff grew up in London, England. After graduating with honors in political science from University of Manchester, he worked for MTV in news production and won a national competition to become “Jewish Stand-Up Comedian of the Year.” After deciding to pursue a career as a rabbi, Hajioff studied in Israel and then Monsey, New York, where he received his rabbinical smicha ordination.",
          ],
        },
      },
      {
        id: "speaker-tba",
        title: "Speaker to be announced",
        description: "Details coming soon",
        tba: true,
        linkLabel: "Coming soon",
      },
    ],
  },
};
