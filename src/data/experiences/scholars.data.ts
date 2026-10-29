import { AllImages } from "../../../public/images/AllImages";
import type { ExperienceCategoryData } from "@/components/experiences/experiences.types";

export const SCHOLARS_BY_PROGRAM: Record<string, ExperienceCategoryData> = {
  "diamond-club-reserve": {
    programId: "diamond-club-reserve",
    programTitle: "DIAMOND CLUB RESERVE",
    experienceType: "scholars",
    title: "Scholars & Cantor",
    viewerTitle: "Scholars Details",
    layout: "people",
    heroImage: AllImages.reserveScholars,
    columns: 2,
    items: [
      {
        id: "rabbi-lawrence-hajioff",
        title: "Rabbi Lawrence Hajioff",
        description: "Renowned educator, accomplished author, lecturer, and inspirational speaker whose powerful messages resonate with audiences of all backgrounds.",
        // Rabbi Hajioff's photo as supplied by the developer on 2026-10-18. The earlier photos (a different man) are kept:
        // AllImages.rabbiLawrenceHajioff (full) and AllImages.rabbiLawrenceHajioffFace (face crop of it).
        image: AllImages.rabbiLawrenceHajioffNew,
        details: {
          title: "Rabbi Lawrence Hajioff",
          paragraphs: [
            "Renowned for his dynamic personality, captivating speaking style, and extraordinary ability to bring Torah teachings to life, Rabbi Lawrence Hajioff is a highly respected educator, accomplished author, lecturer, and inspirational speaker whose powerful messages resonate with audiences of all backgrounds.",
            "As the author of several books exploring Jewish wisdom, spirituality, and personal growth, Rabbi Hajioff has dedicated his career to making timeless Torah teachings accessible, engaging, and relevant to modern life. With a unique combination of wisdom, humor, and practical insight, he has earned a reputation for transforming profound concepts into meaningful lessons that inspire and empower his audiences.",
            "His thought-provoking lectures explore fascinating themes of faith, relationships, Jewish history, personal development, and the deeper meaning of our traditions. Whether delivering an uplifting Yom Tov message, sharing captivating insights from his writings, or connecting personally with guests, Rabbi Hajioff brings an infectious enthusiasm and refreshing perspective that makes every encounter memorable.",
            "Diamond Club Vacations is delighted to welcome Rabbi Lawrence Hajioff to our distinguished lineup of inspirational speakers and Torah scholars at The EDITION Riviera Maya for Pesach 2027. His engaging presentations, literary accomplishments, and inspiring insights will add another extraordinary dimension to a Yom Tov experience that beautifully combines spiritual enrichment, meaningful connections, and world-class luxury hospitality.",
          ],
        },
      },
      {
        // Replaces Rabbi Chanan Gordon (not coming this year). Name and text sent by the client 2026-10-19; the card photo is unchanged.
        id: "rabbi-shalom-rubanowitz",
        title: "Rabbi Shalom Rubanowitz",
        description: "Engaging speaker and respected educator who brings a unique blend of inspiration, wisdom, and heartfelt connection to audiences of all ages.",
        image: AllImages.reserveScholarChananGordon,
        details: {
          title: "Rabbi Shalom Rubanowitz",
          paragraphs: [
            "With his captivating speaking style, genuine warmth, and profound appreciation for faith and tradition, Rabbi Shalom Rubanowitz is an engaging speaker and respected educator who brings a unique blend of inspiration, wisdom, and heartfelt connection to audiences of all ages.",
            "Known for his ability to communicate meaningful insights in a relatable and engaging manner, Rabbi Rubanowitz delivers thought-provoking lectures and uplifting messages that connect timeless teachings with the realities of modern life. His presentations explore themes of faith, personal growth, family values, and the deeper meaning of our traditions, offering fresh perspectives that leave audiences both inspired and enriched.",
            "With a personable approach and a genuine passion for connecting with others, Rabbi Rubanowitz has a special ability to create an atmosphere of warmth, reflection, and spiritual inspiration. Whether delivering an insightful Yom Tov lecture, sharing meaningful life lessons, or engaging with guests in personal conversations, his presence adds depth and significance to the holiday experience.",
            "Diamond Club Vacations is delighted to welcome Rabbi Shalom Rubanowitz to our distinguished lineup of inspirational speakers at The EDITION Riviera Maya for Pesach 2027. His engaging presentations, meaningful insights, and welcoming personality will contribute to an extraordinary Yom Tov experience that brings together spiritual enrichment, cherished traditions, exceptional hospitality, and the finest in luxury beachfront living.",
          ],
        },
      },
      {
        // Added from the client's Word document of 2026-10-19 ("Scholars & Cantor").
        id: "cantor-nissim-saal",
        title: "Cantor Nissim Saal",
        description: "One of the most captivating and celebrated voices in contemporary cantorial music.",
        image: AllImages.scholarCantorNissimSaal,
        details: {
          title: "Cantor Nissim Saal",
          paragraphs: [
            "Experience the extraordinary voice of Cantor Nissim Saal, one of the most captivating and celebrated voices in contemporary cantorial music.",
            "Renowned for his breathtaking vocal range, heartfelt melodies, and commanding presence, Nissim brings unparalleled beauty and emotion to every prayer.",
            "His magnificent renditions of traditional liturgy create an uplifting and deeply moving atmosphere, enriching the spirit of Shabbat and Yom Tov.",
            "A world-class chazzan whose powerful voice and inspiring tefillot promise a truly unforgettable Yom Tov experience.",
          ],
        },
      },
      {
        // Added 2026-10-20 at the client's request (a special guest speaker for the Reserve, St. Regis and EDITION). The client's photo is a round crop.
        id: "cameron-erickson",
        title: "Cameron Erickson",
        description: "Founder & CEO, Potomac GR | Washington, D.C.",
        image: AllImages.scholarCameronErickson,
        details: {
          title: "Cameron Erickson",
          paragraphs: [
            "Founder & CEO, Potomac GR | Washington, D.C.",
            "With six years of experience on Capitol Hill, serving Republican members of Congress and congressional committees, Cameron Erickson brings a fascinating insider’s perspective on Washington politics and the inner workings of Congress.",
            "Now the Founder and CEO of Potomac GR, Cameron has addressed prestigious audiences at AIPAC, FDD, the RNC, and numerous other organizations. His popular presentation, “Inside Congress: An Insider’s Perspective They Don’t Tell You,” offers a captivating behind-the-scenes look at American politics.",
            "We are delighted to welcome Cameron Erickson as a special guest speaker this Passover, bringing exclusive insights, engaging discussions, and a unique Washington perspective to our guests.",
          ],
        },
      },
      // Removed from the page on 2026-10-18 at the developer's request (kept here; remove the leading "//" to show it again).
      // {
      //   id: "rabbi-eli-stefansky",
      //   title: "Rabbi Eli Stefansky",
      //   description: "Founder of Mercaz Daf Yomi (MDY) | Internationally Renowned Educator & Inspirational Speaker.",
      //   image: AllImages.rabbiEliStefanskyDafyomi,
      //   details: {
      //     title: "Daf Yomi by R' Eli Stefansky (Mercaz Daf Yomi)",
      //     paragraphs: [
      //       "A remarkable personality and one of the most influential figures in contemporary religious education, Rabbi Eli Stefansky has inspired tens of thousands of people around the world through his extraordinary passion, infectious enthusiasm, and unique ability to make learning engaging, accessible, and deeply meaningful.",
      //       "As the founder of Mercaz Daf Yomi (MDY) in Ramat Beit Shemesh, Israel, Rabbi Stefansky has transformed a small gathering of dedicated learners into a worldwide movement reaching more than 30,000 participants. His immensely popular daily Daf Yomi lectures and 8 Minute Daf series have become a global phenomenon, bringing together individuals from diverse backgrounds through a shared commitment to learning, personal growth, and spiritual connection.",
      //       "A successful entrepreneur turned dedicated educator, Rabbi Stefansky brings a refreshing combination of real-world experience, humor, warmth, and genuine passion to everything he does. His energetic presentations and relatable approach have earned him an extraordinary following, inspiring audiences to embrace consistency, purpose, and meaningful personal development.",
      //       "Beyond his remarkable accomplishments, it is his ability to connect with people on a personal level that makes Rabbi Stefansky truly exceptional. His enthusiasm, authenticity, and powerful messages leave a lasting impression on audiences of all ages.",
      //     ],
      //   },
      // },
    ],
  },
  blue: {
    programId: "blue",
    programTitle: "Casa Nizuc by DCV",
    experienceType: "scholars",
    title: "Scholars",
    viewerTitle: "Scholars Details",
    layout: "people",
    heroImage: AllImages.reserveScholars,
    columns: 2,
    items: [
      {
        id: "rabbi-michael-mizrahi",
        title: "Rabbi Michael Mizrahi",
        description: "Distinguished Hazzan, spiritual leader, and educator in South Florida, celebrated for his soulful voice and uplifting prayer experiences.",
        image: AllImages.reserveScholarMichaelMizrahi,
        details: {
          title: "Rabbi Michael Mizrahi",
          paragraphs: [
            "With more than 17 years of experience as a distinguished Hazzan and spiritual leader in South Florida, Rabbi Michael Mizrahi is celebrated for his soulful voice, inspiring leadership, and remarkable ability to create meaningful and uplifting prayer experiences.",
            "A graduate of Yeshiva Chofetz Chaim in Vancouver and Miami, Rabbi Mizrahi began his journey at the Mo and David Synagogue before assuming leadership of the Moroccan Minyan at Aventura Chabad, where he has earned widespread respect as a dedicated scholar, educator, and lecturer.",
            "Known for his beautiful melodies, heartfelt delivery, and deep appreciation for Sephardic traditions, Rabbi Mizrahi brings a unique blend of musical artistry, spiritual depth, and genuine warmth to every service. His ability to connect with congregants through both prayer and personal interaction creates an atmosphere of inspiration, unity, and meaningful celebration.",
            "Diamond Club Vacations is delighted to welcome Rabbi Michael Mizrahi to Diamond Blue for Pesach 2027. His extraordinary voice, engaging personality, and uplifting presence will enrich our Yom Tov services, bringing an exceptional dimension of tradition, inspiration, and spiritual connection to an unforgettable luxury Pesach experience.",
          ],
        },
      },
      {
        id: "speaker-tba",
        title: "Distinguished Guest Speaker",
        description: "Additional inspiring guest lecturers and scholars to be announced soon.",
        tba: true,
        linkLabel: "Coming soon",
      },
    ],
  },
  guttaway: {
    programId: "guttaway",
    programTitle: "Guettaway by DCP",
    experienceType: "scholars",
    title: "Scholars",
    viewerTitle: "Scholars Details",
    layout: "people",
    heroImage: AllImages.reserveScholars,
    columns: 3,
    items: [
      {
        id: "rabbi-avi-wiesenfeld",
        title: "Rabbi Avi Wiesenfeld",
        description: "Renowned International Speaker, Author & Rosh Yeshiva (Yeshivas Beis Dovid in Jerusalem).",
        image: AllImages.scholarRabbiAviWiesenfeld,
        details: {
          title: "Rabbi Avi Wiesenfeld",
          paragraphs: [
            "A dynamic and highly sought-after international speaker, Rabbi Avi Wiesenfeld is celebrated for his captivating presentations, remarkable energy, and extraordinary ability to inspire audiences around the world.",
            "As the Rosh Yeshiva of Yeshivas Beis Dovid in Jerusalem, Rabbi Wiesenfeld has dedicated his life to education, spiritual growth, and helping individuals discover deeper meaning and purpose in their lives. His engaging speaking style combines profound wisdom, practical insights, and heartfelt inspiration, creating a powerful connection with audiences of all ages.",
            "An accomplished author of more than 20 books and publications, including Kashrus in the Kitchen, Shabbos in the Kitchen, and the Pocket Halacha series, Rabbi Wiesenfeld has become a respected voice in contemporary religious education. With thousands of recorded lectures and speaking engagements across the United States, United Kingdom, Israel, and beyond, his influence reaches a truly international audience.",
            "Guettaway, A Diamond Club Production, is delighted to welcome Rabbi Avi Wiesenfeld to our distinguished lineup of inspirational speakers for Pesach 2027 at the Waldorf Astoria and Park Hyatt Riviera Maya. His extraordinary passion, compelling presentations, and uplifting messages will add a memorable dimension to an exceptional Yom Tov experience, bringing together spiritual enrichment, cherished traditions, and world-class luxury hospitality.",
          ],
        },
      },
      // {
      //   id: "rabbi-eli-stefansky",
      //   title: "Rabbi Eli Stefansky",
      //   description: "Founder of Mercaz Daf Yomi (MDY) | Internationally Renowned Educator & Inspirational Speaker.",
      //   image: AllImages.scholarRabbiEliStefansky,
      //   details: {
      //     title: "Rabbi Eli Stefansky (Mercaz Daf Yomi)",
      //     paragraphs: [
      //       "A remarkable personality and one of the most influential figures in contemporary religious education, Rabbi Eli Stefansky has inspired tens of thousands of people around the world through his extraordinary passion, infectious enthusiasm, and unique ability to make learning engaging, accessible, and deeply meaningful.",
      //       "As the founder of Mercaz Daf Yomi (MDY) in Ramat Beit Shemesh, Israel, Rabbi Stefansky has transformed a small gathering of dedicated learners into a worldwide movement reaching more than 30,000 participants. His immensely popular daily Daf Yomi lectures and 8 Minute Daf series have become a global phenomenon, bringing together individuals from diverse backgrounds through a shared commitment to learning, personal growth, and spiritual connection.",
      //       "Guettaway, A Diamond Club Production, is honored to welcome Rabbi Eli Stefansky to our distinguished lineup of inspirational speakers for Pesach 2027 at the Waldorf Astoria and Park Hyatt Riviera Maya. His extraordinary energy, captivating presentations, and inspiring presence promise to bring a truly memorable dimension to an exceptional Yom Tov experience.",
      //     ],
      //   },
      // },
      {
        id: "speaker-tba",
        title: "Something Big is Coming",
        description: "",
        tba: true,
        linkLabel: "Coming soon",
      },
      // Rabbi Eli Mansour is not coming (client 2026-10-26): his place shows the "coming soon" card, like Diamond Blue. His photo stays in the image registry (scholarRabbiEliMansour).
      {
        id: "speaker-tba",
        title: "Distinguished Guest Speaker",
        description: "Additional inspiring guest lecturers and scholars to be announced soon.",
        tba: true,
        linkLabel: "Coming soon",
      },
    ],
  },
};
