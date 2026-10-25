import { AllImages } from "../../../public/images/AllImages";
import type { DesignImage } from "@/components/shared/design";
import type { ProgramAboutData } from "@/components/programs/programs.types";

export interface AboutPageData {
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    image: DesignImage;
  };
  /** Same block as a program's About page (client 2026-10-25: "make it look nice like the Guettaway"). */
  about: ProgramAboutData;
}

/**
 * The main About page, /about (shown from every page outside the Passover programs; inside a program the header leads to that program's About).
 * The text is the client's "About Diamond Club Vacations" message; lines between double stars are shown in bold.
 */
export const ABOUT_PAGE_DATA: AboutPageData = {
  hero: {
    kicker: "DIAMOND CLUB VACATIONS",
    title: "About Diamond Club Vacations",
    subtitle: "Luxury, without compromise.",
    image: AllImages.homeHeroImage,
  },
  about: {
    partners: [],
    highlights: [
      "Now in our 14th year",
      "Based in New York",
      "Five-star hospitality",
      "Elevated cuisine & meticulous kashrut",
    ],
    aboutTitle: "Luxury, without compromise.",
    about: [
      "Now in our 14th year, Diamond Club Vacations creates world-class kosher travel experiences at the finest resorts. Based in New York, we partner with leading luxury hotel brands to deliver five-star hospitality, elevated cuisine and meticulous kashrut, so our guests never have to choose between luxury and observance.",
      "**What We Do**",
      "**The Passover Collection**",
      "Fully kosher Passover programs at some of the world's most celebrated resorts, including St. Regis, Edition, Waldorf Astoria, Park Hyatt and Casa Nizuc. Each program combines exceptional dining, inspiring Seders, renowned speakers and entertainment, children's programming and seamless travel, including group flights and transfers.",
      "**Casa Nizuc, Year-Round Kosher Resort**",
      "Our flagship Caribbean destination in Cancún. At Casa Nizuc Resort & Spa, a Tribute Portfolio Hotel by Marriott, Diamond Club operates the entire kosher food and beverage program, open all year. Guests enjoy five dedicated kosher dining venues, from a glatt kosher steakhouse and panoramic Mediterranean dining to a Chalav Yisroel dairy kitchen and an adults-only rooftop lounge.",
      "**Caribbean Destination Weddings**",
      "Celebrate on the Caribbean coast with a fully kosher wedding. With our team running the kitchens and venues at Casa Nizuc, we handle every detail from the chuppah to the final dance, including catering, guest accommodations and travel.",
      "**Caribbean Private Events**",
      "Bar and Bat Mitzvahs, family reunions, milestone celebrations and corporate retreats, all fully kosher and fully managed by our in-house team in the Caribbean.",
      "**Hotel Consulting**",
      "We help luxury hotels enter the kosher market. Drawing on 14 years of operating experience, we advise on kosher F&B operations, kitchen design, supervision, program buyouts and guest experience.",
      "**Our Promise**",
      "Every detail matters. Every guest is family. Every experience is built to the standard our name represents: **Diamond.**",
    ],
  },
};
