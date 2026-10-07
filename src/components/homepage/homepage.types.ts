import type { DesignImage } from "@/components/shared/design";

export interface HomeHeroData {
  eyebrow: string;
  headline: string;
  /** Short phrases rendered on one line, separated by bullets. */
  tagline: string[];
  backgroundImage: DesignImage;
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
