"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpDown,
  CalendarDays,
  Check,
  Droplets,
  KeyRound,
  Landmark,
  Scale,
  Sparkles,
  Star,
  UtensilsCrossed,
  Wine,
} from "lucide-react";
import { DetailHero, InfoModal, PhotoGallery, SectionTitle, SubNav, Wrap } from "@/components/shared/design";
import type { DesignImage, DesignLink, InfoCardData } from "@/components/shared/design";
import { CASA_NIZUC_PAGE } from "@/data/pages/casa-nizuc-year-round.data";
import { AllImages } from "../../../public/images/AllImages";
import { CASA_NIZUC_HREF } from "@/lib/routes";

const SUB_NAV: DesignLink[] = [
  { label: "About", href: `${CASA_NIZUC_HREF}/about` },
  { label: "Shabbat", href: `${CASA_NIZUC_HREF}/shabbat` },
  { label: "Dining", href: `${CASA_NIZUC_HREF}/dining` },
  { label: "GKDE", href: `${CASA_NIZUC_HREF}/gkde` },
  { label: "Calendar of Events", href: `${CASA_NIZUC_HREF}/calendar` },
  { label: "Events", href: `${CASA_NIZUC_HREF}#events` },
];

const FEATURE_ICONS: Record<string, ReactNode> = {
  "Every outlet kosher": <Star size={22} aria-hidden="true" />,
  "On-site synagogue": <Landmark size={22} aria-hidden="true" />,
  "Shabbat elevators": <ArrowUpDown size={22} aria-hidden="true" />,
  "Physical room keys": <KeyRound size={22} aria-hidden="true" />,
  "Kosher wine cellar": <Wine size={22} aria-hidden="true" />,
  "Full Shabbat service": <UtensilsCrossed size={22} aria-hidden="true" />,
  "Two kosher standards": <Scale size={22} aria-hidden="true" />,
  "Holiday programming": <CalendarDays size={22} aria-hidden="true" />,
  Mikvah: <Droplets size={22} aria-hidden="true" />,
};

const ABOUT_GALLERY_IMAGES: DesignImage[] = [
  AllImages.casaNizucTowerDay,
  AllImages.casaNizucEntrance,
  AllImages.casaNizucGallery31,
  AllImages.casaNizucRoomSuiteLiving,
  AllImages.casaNizucPool,
  AllImages.casaNizucSpaWellnessCenter,
  AllImages.casaNizucTowerNight,
  AllImages.casaNizucDiningGrandBallroom,
];

interface EnhancedCardConfig {
  id: string;
  badge: string;
  image: DesignImage;
  title: string;
  description: string;
  chips: { label: string; bold?: string }[];
  buttonText: string;
  modalData: InfoCardData;
}

export function CasaNizucAboutView() {
  const { hero, about } = CASA_NIZUC_PAGE;
  const [activeModalCard, setActiveModalCard] = useState<InfoCardData | null>(null);

  // 3 Distinct Cards with 3 Different Images and Enhanced Details
  const cards: EnhancedCardConfig[] = [
    {
      id: "resort",
      badge: "Resort & Architecture",
      image: AllImages.casaNizucTowerDay, // Distinct Image 1: Daytime aerial tower
      title: "The Resort",
      description: "Set inside Aldea Nizuc in the heart of Cancún’s hotel zone, where the lush jungle meets the Caribbean Sea.",
      chips: [
        { label: "Tribute by Marriott" },
        { label: "Cancún Hotel Zone" },
        { label: "Aldea Nizuc" },
      ],
      buttonText: "Explore Story",
      modalData: {
        id: "resort",
        image: AllImages.casaNizucTowerDay,
        title: "The Resort",
        description: about.heading,
        kicker: "CASA NIZUC · ABOUT",
        subtitle: about.lead,
        children: about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>),
      },
    },
    {
      id: "glance",
      badge: "At a Glance",
      image: AllImages.casaNizucEntrance, // Distinct Image 2: Grand entrance & driveway
      title: "At a glance",
      description: "235 luxury rooms, 64 suites, 5 kosher dining destinations, 3 heated pools, and a 245 ft high rooftop deck.",
      chips: [
        { bold: "235", label: "Rooms" },
        { bold: "5", label: "Dining" },
        { bold: "3", label: "Pools" },
        { bold: "300", label: "Ballroom" },
      ],
      buttonText: "View Numbers & Facts",
      modalData: {
        id: "glance",
        image: AllImages.casaNizucEntrance,
        title: "At a glance",
        description: "Rooms, dining, pools and venues in numbers.",
        kicker: "CASA NIZUC · ABOUT",
        children: (
          <>
            <div className="dcv-cn-glance">
              {about.glance.map((item) => (
                <div key={item.label} className="dcv-cn-stat">
                  <b>{item.value}</b>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <dl className="dcv-cn-facts">
              {about.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </>
        ),
      },
    },
    {
      id: "kosher-by-design",
      badge: "Built-in Observance",
      image: AllImages.casaNizucGallery31, // Distinct Image 3: Serene pool & resort grounds
      title: "Kosher-friendly by design",
      description: `“${about.quote}” The first resort built from ground up so observant travelers never have to compromise.`,
      chips: [
        { label: "Synagogue Yuya" },
        { label: "Shabbat Elevators" },
        { label: "Physical Keys" },
      ],
      buttonText: "See What Is Built In",
      modalData: {
        id: "kosher-by-design",
        image: AllImages.casaNizucGallery31,
        title: "Kosher-friendly by design",
        description: about.quote,
        linkLabel: "See what is built in →",
        kicker: "CASA NIZUC · ABOUT",
        children: (
          <>
            <p className="dcv-cn-quote">“{about.quote}”</p>
            <div className="dcv-grid3 dcv-cn-features">
              {about.features.map((feature) => (
                <div key={feature.title} className={feature.soon ? "dcv-cn-feature dcv-cn-feature--soon" : "dcv-cn-feature"}>
                  {feature.soon && <em className="dcv-cn-soon">Coming soon</em>}
                  <span className="dcv-cn-icon">{FEATURE_ICONS[feature.title]}</span>
                  <h4>{feature.title}</h4>
                  <p>{feature.text}</p>
                </div>
              ))}
            </div>
          </>
        ),
      },
    },
  ];

  return (
    <>
      <DetailHero
        image={hero.image}
        kicker="A TRIBUTE PORTFOLIO RESORT BY MARRIOTT · A DCV CONCEPT"
        title="About Casa Nizuc"
        subtitle="The Kosher Resort That Has It All · Aldea Nizuc, Cancún"
        logo={{ image: AllImages.casaNizucLogoWhite, alt: "Casa Nizuc Resort & Spa" }}
      />

      <SubNav items={SUB_NAV} label="Casa Nizuc sections" />

      <Wrap id="about-intro">
        <p style={{ margin: "0 0 20px" }}>
          <Link className="dcv-link" href={CASA_NIZUC_HREF}>
            ← Back to Casa Nizuc
          </Link>
        </p>

        <SectionTitle title="About Casa Nizuc" />
        <p className="dcv-lead" style={{ maxWidth: "860px", marginBottom: "40px" }}>
          {about.lead}
        </p>

        {/* 3 Enhanced Cards with 3 Different Images */}
        <div className="dcv-about-card-grid">
          {cards.map((card) => (
            <article
              key={card.id}
              className="dcv-about-card"
              role="button"
              tabIndex={0}
              onClick={() => setActiveModalCard(card.modalData)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveModalCard(card.modalData);
                }
              }}
              aria-label={`Open details for ${card.title}`}
            >
              <div className="dcv-about-card-media">
                <span className="dcv-about-card-badge">{card.badge}</span>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
              </div>

              <div className="dcv-about-card-body">
                <h3>{card.title}</h3>
                <p>{card.description}</p>

                <div className="dcv-about-card-chips">
                  {card.chips.map((chip, idx) => (
                    <span key={idx} className="dcv-about-card-chip">
                      {chip.bold && <b>{chip.bold}</b>} {chip.label}
                    </span>
                  ))}
                </div>

                <div className="dcv-about-card-footer">
                  <span className="dcv-about-card-btn">
                    {card.buttonText} <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Wrap>

      {/* Editorial Story Section */}
      <Wrap id="story" className="dcv-wrap--stack">
        <div className="dcv-about-story-container">
          <div className="dcv-about-story-main">
            <span className="dcv-about-section-tag">THE VISION</span>
            <h2>{about.heading}</h2>
            <blockquote className="dcv-about-quote-block">
              “Not a kosher kitchen inside a hotel — a whole hotel built so that kosher families never have to compromise.”
            </blockquote>
            <div className="dcv-about-paragraphs">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="dcv-about-story-aside">
            <div className="dcv-about-stats-box">
              <span className="dcv-about-section-tag">AT A GLANCE</span>
              <h3>By The Numbers</h3>
              <div className="dcv-about-stats-grid">
                {about.glance.map((item) => (
                  <div key={item.label} className="dcv-about-stat-item">
                    <span className="dcv-about-stat-val">{item.value}</span>
                    <span className="dcv-about-stat-lbl">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="dcv-about-facts-box">
              <h4>Property Highlights</h4>
              <dl className="dcv-about-facts-list">
                {about.facts.map((fact) => (
                  <div key={fact.label} className="dcv-about-fact-row">
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </Wrap>

      {/* Kosher-Friendly by Design Features Section */}
      <Wrap id="features" className="dcv-wrap--stack">
        <SectionTitle title="Kosher-Friendly by Design" />
        <p className="dcv-lead" style={{ maxWidth: "760px", marginBottom: "32px" }}>
          “{about.quote}” Every amenity, venue, and touchpoint was planned with Jewish observance and luxury hospitality in harmony.
        </p>

        <div className="dcv-grid3 dcv-cn-features">
          {about.features.map((feature) => (
            <div key={feature.title} className={feature.soon ? "dcv-cn-feature dcv-cn-feature--soon" : "dcv-cn-feature"}>
              {feature.soon && <em className="dcv-cn-soon">Coming soon</em>}
              <span className="dcv-cn-icon">{FEATURE_ICONS[feature.title]}</span>
              <h4>{feature.title}</h4>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </Wrap>

      {/* Photo Gallery */}
      <Wrap id="gallery" className="dcv-wrap--stack">
        <SectionTitle title="Experience Casa Nizuc" />
        <p className="dcv-lead" style={{ maxWidth: "760px", marginBottom: "32px" }}>
          Explore the architecture, suites, heated pools, and Caribbean beachfront of Cancún’s first luxury kosher resort.
        </p>
        <PhotoGallery images={ABOUT_GALLERY_IMAGES} alt="Casa Nizuc Resort & Spa Gallery" />
      </Wrap>

      {/* Interactive Details Modal */}
      {activeModalCard && <InfoModal card={activeModalCard} onClose={() => setActiveModalCard(null)} />}
    </>
  );
}

export default CasaNizucAboutView;

