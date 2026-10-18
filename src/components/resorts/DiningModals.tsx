"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, CheckCircle2, Award, ShieldCheck } from "lucide-react";
import { AllImages } from "../../../public/images/AllImages";

interface DiningModalProps {
  isOpen: boolean;
  onClose: () => void;
  programId?: string;
}

export function KosherSupervisionModal({ isOpen, onClose, programId }: DiningModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isGuettaway =
    programId === "guttaway" ||
    programId === "waldorf-astoria" ||
    programId === "park-hyatt";

  return (
    <div
      className="dcv-brochure-overlay"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="dcv-brochure-modal dcv-dining-popup-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="dcv-brochure-close"
          onClick={onClose}
          aria-label="Close supervision modal"
        >
          <X size={20} />
        </button>

        {isGuettaway ? (
          /* GUETTAWAY KOSHER SUPERVISION (Rabbi Nesanel Sommer / Kehillas Bnei Yitzchok) */
          <>
            <div className="dcv-brochure-header">
              <div className="dcv-brochure-kicker">KASHRUS CERTIFICATION · GUETTAWAY</div>
              <h2 className="dcv-brochure-title">Strict Rabbinical Supervision</h2>
              <p className="dcv-brochure-sub">
                Under the Strict Supervision of Rabbi Nesanel Sommer &amp; Kehillas Bnei Yitzchok
              </p>
            </div>

            <div className="dcv-brochure-preview-wrap">
              <div className="dcv-dining-modal-banner-wrap">
                <Image
                  src={AllImages.kosherGettSupervision}
                  alt="Under Strict Supervision of Rabbi Nesanel Sommer - Non Gebrokts"
                  width={560}
                  height={140}
                  priority
                />
              </div>

              <div className="dcv-kashrus-badges">
                <span className="dcv-kashrus-badge">
                  <ShieldCheck size={14} /> Non-Gebrokts
                </span>
                <span className="dcv-kashrus-badge">
                  <ShieldCheck size={14} /> Shmura Matzah
                </span>
                <span className="dcv-kashrus-badge">
                  <ShieldCheck size={14} /> Cholov Yisroel
                </span>
                <span className="dcv-kashrus-badge">
                  <ShieldCheck size={14} /> Bishul Yisroel
                </span>
                <span className="dcv-kashrus-badge">
                  <ShieldCheck size={14} /> Full-Time Mashgichim
                </span>
              </div>

              <div className="dcv-dining-modal-bio">
                <p>
                  At <strong>Guettaway, A Diamond Club Production</strong>, exceptional cuisine and uncompromising Kashrus standards come together to create an extraordinary Pesach experience.
                </p>
                <p>
                  Under the strict supervision of <strong>Rabbi Nesanel Sommer and Kehillas Bnei Yitzchok</strong>, every aspect of our culinary program is carefully overseen, from ingredient selection and food preparation to the presentation of our exquisite dining experiences.
                </p>
                <p>
                  Our program features dedicated, separate Milchig and Fleishig kitchens, experienced full-time Mashgichim, and meticulous attention to the highest standards of Pesach Kashrus.
                </p>
                <p>
                  From elegant Yom Tov dining to our exceptional Chol Hamoed culinary experiences, guests can indulge in world-class cuisine with complete confidence and peace of mind.
                </p>
              </div>

              <div className="dcv-supervision-details-grid">
                <div className="dcv-supervision-feat">
                  <div className="dcv-feat-icon">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <strong>Strict Glatt Kosher &amp; Mehadrin Meat</strong>
                    <span>All beef, veal, lamb, and poultry are exclusively 100% Glatt Kosher with Chassidishe Shechita standards.</span>
                  </div>
                </div>

                <div className="dcv-supervision-feat">
                  <div className="dcv-feat-icon">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <strong>Cholov Yisroel &amp; Bishul Yisroel</strong>
                    <span>All dairy delicacies, artisan cheeses, and morning fare are strictly Cholov Yisroel. All cooking follows strict Bishul Yisroel.</span>
                  </div>
                </div>

                <div className="dcv-supervision-feat">
                  <div className="dcv-feat-icon">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <strong>24/7 Dedicated Mashgichim Team</strong>
                    <span>A full-time, experienced rabbinical team is on-site 24 hours a day in every kitchen, prep station, and service venue.</span>
                  </div>
                </div>
              </div>

              <div className="dcv-dining-modal-footer">
                <button
                  type="button"
                  className="dcv-btn dcv-btn--primary"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </div>
          </>
        ) : (
          /* DIAMOND CLUB RESERVE KOSHER SUPERVISION (Rabbi Nissim Hilu / One Kosher) */
          <>
            <div className="dcv-brochure-header">
              <div className="dcv-brochure-kicker">KOSHER CERTIFICATION &amp; SUPERVISION · PASSOVER 2027</div>
              <h2 className="dcv-brochure-title">Rabbi Nissim Hilu</h2>
              <p className="dcv-brochure-sub">Founder &amp; Director, One Kosher</p>
            </div>

            <div className="dcv-brochure-preview-wrap">
              <div className="dcv-dining-modal-portrait-wrap">
                <Image
                  src={AllImages.rabbiNissimHilu}
                  alt="Rabbi Nissim Hilu - Founder & Director, One Kosher"
                  width={260}
                  height={320}
                  priority
                />
              </div>

              <div className="dcv-kashrus-badges">
                <span className="dcv-kashrus-badge">
                  <ShieldCheck size={14} /> One Kosher Supervision
                </span>
                <span className="dcv-kashrus-badge">
                  <ShieldCheck size={14} /> Glatt Kosher Mehadrin
                </span>
                <span className="dcv-kashrus-badge">
                  <ShieldCheck size={14} /> Cholov Yisroel
                </span>
                <span className="dcv-kashrus-badge">
                  <ShieldCheck size={14} /> Non-Gebrokts
                </span>
                <span className="dcv-kashrus-badge">
                  <ShieldCheck size={14} /> Shmura Matzah
                </span>
              </div>

              <div className="dcv-dining-modal-bio">
                <p>
                  With more than 26 years of experience in kosher certification and supervision, <strong>Rabbi Nissim Hilu</strong> is a highly respected authority in international kosher standards, recognized for his expertise, leadership, and unwavering commitment to excellence.
                </p>
                <p>
                  As the founder and director of <strong>One Kosher</strong>, Rabbi Hilu has played an instrumental role in advancing kosher standards throughout Mexico, Colombia, Panama, and beyond. His extensive experience spans luxury resorts, prestigious restaurants, and large-scale hospitality operations, where he has developed innovative systems that combine the highest standards of kosher supervision with exceptional culinary experiences.
                </p>
                <p>
                  A respected educator, author, and industry leader, Rabbi Hilu brings a wealth of knowledge, international experience, and a meticulous attention to detail to every program under his supervision.
                </p>
                <p>
                  <strong>Diamond Club Vacations is honored to work with Rabbi Nissim Hilu and One Kosher</strong>, whose dedication to uncompromising standards and exceptional quality helps ensure a truly elevated kosher dining experience at our luxury Pesach destinations.
                </p>
              </div>

              <div className="dcv-supervision-details-grid">
                <div className="dcv-supervision-feat">
                  <div className="dcv-feat-icon">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <strong>Strict Glatt Kosher &amp; Mehadrin Meat</strong>
                    <span>All beef, veal, lamb, and poultry are exclusively 100% Glatt Kosher with Chassidishe Shechita options available upon request.</span>
                  </div>
                </div>

                <div className="dcv-supervision-feat">
                  <div className="dcv-feat-icon">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <strong>Cholov Yisroel &amp; Bishul Yisroel</strong>
                    <span>All dairy delicacies, artisan cheeses, yogurts, and morning fare are strictly Cholov Yisroel. All cooking follows strict Bishul Yisroel.</span>
                  </div>
                </div>

                <div className="dcv-supervision-feat">
                  <div className="dcv-feat-icon">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <strong>24/7 Dedicated Mashgichim Team</strong>
                    <span>A full-time, experienced rabbinical team is on-site 24 hours a day in every kitchen, prep kitchen, and delivery station throughout the holiday.</span>
                  </div>
                </div>

                <div className="dcv-supervision-feat">
                  <div className="dcv-feat-icon">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <strong>Meticulous Kitchen Kashering</strong>
                    <span>Complete steam cleaning, boiling water immersion (Hag&apos;alah), and blowtorch kashering of all hotel cooking infrastructure prior to Pesach.</span>
                  </div>
                </div>

                <div className="dcv-supervision-feat">
                  <div className="dcv-feat-icon">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <strong>Non-Gebrokts &amp; Gluten-Free Available</strong>
                    <span>Extensive non-gebrokts options and certified gluten-free Passover offerings prepared in segregated kitchen areas.</span>
                  </div>
                </div>

                <div className="dcv-supervision-feat">
                  <div className="dcv-feat-icon">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <strong>Handmade Shmurah Matzah</strong>
                    <span>Traditional round handmade Shmurah Matzah provided throughout all Yom Tov Seders and holiday meals.</span>
                  </div>
                </div>
              </div>

              <div className="dcv-dining-modal-footer">
                <button
                  type="button"
                  className="dcv-btn dcv-btn--primary"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function CelebrityChefsModal({ isOpen, onClose }: DiningModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="dcv-brochure-overlay"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="dcv-brochure-modal dcv-dining-popup-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="dcv-brochure-close"
          onClick={onClose}
          aria-label="Close chef modal"
        >
          <X size={20} />
        </button>

        <div className="dcv-brochure-header">
          <div className="dcv-brochure-kicker">CULINARY EXCELLENCE · PASSOVER 2027</div>
          <h2 className="dcv-brochure-title">Chef Chaim Levy</h2>
          <p className="dcv-brochure-sub">Executive Chef | Culinary Excellence</p>
        </div>

        <div className="dcv-brochure-preview-wrap">
          <div className="dcv-dining-modal-portrait-wrap" style={{ maxWidth: "340px" }}>
            <Image
              src={AllImages.chefChaimLevy}
              alt="Executive Chef Chaim Levy"
              width={340}
              height={440}
              priority
            />
          </div>

          <div className="dcv-dining-modal-bio">
            <p>
              With a passion for exceptional cuisine and an appreciation for the art of fine dining, <strong>Chef Chaim Levy</strong> brings creativity, culinary expertise, and a dedication to quality to every dining experience.
            </p>
            <p>
              Known for his work in upscale kosher catering and luxury Pesach hospitality, Chef Levy approaches each menu with an emphasis on beautiful presentation, distinctive flavors, and meticulous attention to detail. His culinary philosophy brings together traditional favorites and contemporary inspiration, creating memorable dining experiences that celebrate both heritage and innovation.
            </p>
            <p>
              From elegant Yom Tov dinners and beautifully curated buffets to festive Chol Hamoed dining, Chef Levy understands that extraordinary hospitality begins at the table. His focus on quality, variety, and thoughtful execution reflects the standards expected of a premier luxury Pesach experience.
            </p>
            <p>
              <strong>Diamond Club Vacations is delighted to welcome Chef Chaim Levy to our culinary lineup for Pesach 2027.</strong> His passion for exceptional food and dedication to the dining experience will contribute to an unforgettable celebration of flavor, tradition, and world-class hospitality.
            </p>
            <p style={{ marginTop: "14px", fontStyle: "italic", color: "#666" }}>
              Our In-House Catering Team brings decades of Passover Glatt Kosher experience leading and managing five-star culinary brigades at prestigious luxury resorts worldwide, coordinating outstanding gourmet cuisine across our signature oceanfront restaurants, lavish buffets, beach barbecues, and decadent all-day tea rooms.
            </p>
          </div>

          <div className="dcv-supervision-details-grid">
            <div className="dcv-supervision-feat">
              <div className="dcv-feat-icon">
                <Award size={20} />
              </div>
              <div>
                <strong>Acclaimed International Culinary Leadership</strong>
                <span>Celebrated executive chefs with Michelin-starred backgrounds and luxury five-star resort pedigree overseeing all food production.</span>
              </div>
            </div>

            <div className="dcv-supervision-feat">
              <div className="dcv-feat-icon">
                <Award size={20} />
              </div>
              <div>
                <strong>Artisanal Daily Banquets &amp; Themed Dinners</strong>
                <span>Nightly gastronomic showcases including open-fire Mexican barbecues, French bistro classics, Mediterranean seafood, and heritage Ashkenazi favorites.</span>
              </div>
            </div>

            <div className="dcv-supervision-feat">
              <div className="dcv-feat-icon">
                <Award size={20} />
              </div>
              <div>
                <strong>Master Pastry &amp; All-Day Tearoom</strong>
                <span>World-class French pastry chefs presenting decadent dessert galleries, Belgian chocolate artistry, and continuous artisan coffee service.</span>
              </div>
            </div>

            <div className="dcv-supervision-feat">
              <div className="dcv-feat-icon">
                <Award size={20} />
              </div>
              <div>
                <strong>Custom Children &amp; Dietary Menus</strong>
                <span>Dedicated culinary stations for children, toddlers, and specialized dietary preferences with tailored daily options.</span>
              </div>
            </div>
          </div>

          <div className="dcv-dining-modal-footer">
            <button
              type="button"
              className="dcv-btn dcv-btn--primary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
