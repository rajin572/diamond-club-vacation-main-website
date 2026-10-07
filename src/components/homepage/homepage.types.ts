import type { DesignImage } from "@/components/shared/design";

export interface HomeHeroData {
  headline: string;
  subtext: string;
  backgroundImage: DesignImage;
  /** Brand badge shown above the headline. */
  logo: { image: DesignImage; alt: string };
}

export interface HomeServiceItem {
  id: string;
  title: string;
  description: string;
  href: string;
  image: DesignImage;
}

export interface HomePromiseItem {
  title: string;
  subtitle: string;
}

export interface HomeWelcomeData {
  eyebrow: string;
  heading: string;
  description: string;
  promises: HomePromiseItem[];
}

export interface HomePageData {
  hero: HomeHeroData;
  services: HomeServiceItem[];
  welcome: HomeWelcomeData;
}
