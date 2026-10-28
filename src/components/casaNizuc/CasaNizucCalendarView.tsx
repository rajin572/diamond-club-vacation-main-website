"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DetailHero, PhotoGallery, SubNav, Wrap } from "@/components/shared/design";
import type { DesignImage, DesignLink } from "@/components/shared/design";
import { AllImages } from "../../../public/images/AllImages";
import { CASA_NIZUC_PAGE } from "@/data/pages/casa-nizuc-year-round.data";
import { CASA_NIZUC_HREF } from "@/lib/routes";

const SUB_NAV: DesignLink[] = [
  { label: "About", href: `${CASA_NIZUC_HREF}#about` },
  { label: "Shabbat", href: `${CASA_NIZUC_HREF}#shabbat` },
  { label: "Dining", href: `${CASA_NIZUC_HREF}#dining` },
  { label: "GKDE", href: `${CASA_NIZUC_HREF}#gkde` },
  { label: "Calendar of Events", href: `${CASA_NIZUC_HREF}#calendar` },
  { label: "Events", href: `${CASA_NIZUC_HREF}#events` },
];

type HolidayCategory = "all" | "jewish" | "american" | "break";

interface HolidayItem {
  id: string;
  name: string;
  date: string;
  category: "jewish" | "american" | "break";
  image: DesignImage;
}

const HOLIDAYS: HolidayItem[] = [
  { id: "passover", name: "Passover", date: "April 2027", category: "jewish", image: AllImages.holidayPassover },
  { id: "sukkot", name: "Sukkot", date: "October 2027", category: "jewish", image: AllImages.holidaySukkot },
  { id: "winter-break", name: "Winter Break", date: "Winter 2026–27", category: "break", image: AllImages.holidayWinterBreak },
  { id: "summer-vacation", name: "Summer Vacation", date: "Summer 2027", category: "break", image: AllImages.holidaySummerVacation },
  { id: "shavuot", name: "Shavuot", date: "June 2027", category: "jewish", image: AllImages.holidayShavuot },
  { id: "thanksgiving", name: "Thanksgiving", date: "Nov 25, 2027", category: "american", image: AllImages.holidayThanksgiving },
  { id: "rosh-hashanah", name: "Rosh Hashanah", date: "October 2027", category: "jewish", image: AllImages.holidayRoshHashanah },
  { id: "labor-day", name: "Labor Day", date: "Sep 6, 2027", category: "american", image: AllImages.holidayLaborDay },
  { id: "chanukah", name: "Chanukah", date: "December 2027", category: "jewish", image: AllImages.holidayChanukah },
  { id: "presidents-day", name: "Presidents' Day", date: "Feb 15, 2027", category: "american", image: AllImages.holidayPresidentsDay },
  { id: "spring-break", name: "Spring Break", date: "Spring 2027", category: "break", image: AllImages.holidaySpringBreak },
  { id: "memorial-day", name: "Memorial Day", date: "May 31, 2027", category: "american", image: AllImages.holidayMemorialDay },
  { id: "purim", name: "Purim", date: "March 2027", category: "jewish", image: AllImages.holidayPurim },
  { id: "independence-day", name: "Independence Day", date: "July 4, 2027", category: "american", image: AllImages.holidayIndependenceDay },
  { id: "midwinter-break", name: "Midwinter Break", date: "February 2027", category: "break", image: AllImages.holidayMidwinterBreak },
  { id: "new-years", name: "New Year's", date: "Jan 1, 2027", category: "american", image: AllImages.holidayNewYears },
];

const FILTER_TABS: { key: HolidayCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "jewish", label: "Jewish" },
  { key: "american", label: "American" },
  { key: "break", label: "School Breaks" },
];

const CALENDAR_GALLERY_IMAGES: DesignImage[] = [
  AllImages.casaNizucTowerNight,
  AllImages.casaNizucSukkotBar,
  AllImages.casaNizucTowerDay,
  AllImages.casaNizucGallery31,
  AllImages.casaNizucAshanRender,
  AllImages.casaNizucDiningZait,
  AllImages.casaNizucEventsChandeliers,
  AllImages.casaNizucGkdeDining,
];

export function CasaNizucCalendarView() {
  const [activeFilter, setActiveFilter] = useState<HolidayCategory>("all");
  const { seasons } = CASA_NIZUC_PAGE;

  const filteredHolidays = activeFilter === "all"
    ? HOLIDAYS
    : HOLIDAYS.filter((h) => h.category === activeFilter);

  return (
    <>
      <DetailHero
        image={AllImages.casaNizucTowerNight}
        kicker="CASA NIZUC · CALENDAR OF EVENTS"
        title="Calendar of Events"
        subtitle={seasons.heading}
        logo={{ image: AllImages.casaNizucLogoWhite, alt: "Casa Nizuc Resort & Spa", position: "left" }}
      />
      <SubNav items={SUB_NAV} label="Casa Nizuc sections" />

      <Wrap>
        <p style={{ margin: "0 0 24px" }}>
          <Link className="dcv-link" href={`${CASA_NIZUC_HREF}#calendar`}>
            ← Back to Calendar of Events
          </Link>
        </p>

        {/* Explore the Holidays Section */}
        <section className="dcv-holidays-section">
          <div className="dcv-holidays-header">
            <h2 className="dcv-holidays-title">Explore the Holidays</h2>
            <span className="dcv-holidays-year">2026–2027</span>
          </div>

          <div className="dcv-holidays-filter-bar" role="tablist" aria-label="Holiday categories">
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`dcv-holidays-pill ${isActive ? "dcv-holidays-pill--active" : ""}`}
                  onClick={() => setActiveFilter(tab.key)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="dcv-holidays-grid">
            {filteredHolidays.map((holiday) => (
              <div key={holiday.id} className="dcv-holiday-card">
                <div className="dcv-holiday-img-wrap">
                  <Image
                    src={holiday.image}
                    alt={`${holiday.name} at Casa Nizuc`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
                    className="dcv-holiday-img"
                  />
                </div>
                <div className="dcv-holiday-info">
                  <h3 className="dcv-holiday-name">{holiday.name}</h3>
                  <span className="dcv-holiday-date">{holiday.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Calendar of Events and Every Program Includes matching user's image exactly */}
        <section className="dcv-calendar-content-stack" style={{ margin: "40px 0 0" }}>
          <div style={{ maxWidth: 840 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#1f383e", margin: "0 0 14px", fontFamily: "var(--dcv-serif)" }}>
              Calendar of Events
            </h2>
            <p className="dcv-copy-text" style={{ fontSize: 15, color: "#34484a", lineHeight: 1.6, margin: "0 0 14px" }}>
              {seasons.lead}
            </p>
            <p className="dcv-copy-text" style={{ fontSize: 15, color: "#34484a", lineHeight: 1.6, margin: "0 0 14px" }}>
              {seasons.text}
            </p>
            <div style={{ margin: "0 0 20px" }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#1f383e", marginBottom: 3 }}>
                {seasons.calendar.heading}
              </div>
              <div style={{ fontSize: 15, color: "#34484a", lineHeight: 1.6 }}>
                {seasons.calendar.lead}
              </div>
            </div>

            {/* Every program includes card */}
            <div className="dcv-includes-card" style={{ marginTop: 22 }}>
              <h3 className="dcv-includes-title" style={{ fontSize: 20, margin: "0 0 18px", color: "#1f383e" }}>
                Every program includes
              </h3>
              <ul className="dcv-includes-list">
                {seasons.included.map((item) => (
                  <li key={item.title} className="dcv-includes-item">
                    <span className="dcv-includes-bullet" aria-hidden="true" />
                    <div className="dcv-includes-text">
                      <strong>{item.title}</strong> — {item.text}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Gallery Section at the bottom of Every program includes */}
        <section className="dcv-calendar-gallery-section" style={{ marginTop: 48, paddingTop: 10 }}>
          <div className="dcv-section-title" style={{ marginBottom: 24 }}>
            <div>
              <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", margin: "4px 0 0" }}>Gallery</h2>
            </div>
          </div>
          <PhotoGallery images={CALENDAR_GALLERY_IMAGES} alt="Casa Nizuc Calendar of Events" />
        </section>
      </Wrap>
    </>
  );
}

export default CasaNizucCalendarView;
