"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { AllImages } from "../../../public/images/AllImages";

/**
 * Client request 2026-10-19 for the Diamond Club Reserve Kosher Supervision pop-up: the old rabbi picture came out and a nicer one on a
 * background was supplied (Rabbi Hilu in front of the One Kosher wall, now shown at the top). The "Food To Perfection" text
 * (catering / chef) is not part of it: only the Kosher Supervision text stays. It is kept, switched off, so it can be turned back on.
 */
const SHOW_RESERVE_RABBI_PORTRAIT = true;
const SHOW_RESERVE_FOOD_TO_PERFECTION = false;

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
          /* GUETTAWAY KASHRUS: the client's message of 2026-10-22, word for word (Rabbi Nesanel Sommer, Rabbi Avrum Kahan as Head Mashgiach) */
          <>
            <div className="dcv-brochure-header">
              <div className="dcv-brochure-kicker">GUETTAWAY, A DIAMOND CLUB PRODUCTION</div>
              <h2 className="dcv-brochure-title">Kashrus</h2>
              <p className="dcv-brochure-sub">Under the Strict Supervision of Rabbi Nesanel Sommer</p>
            </div>

            <div className="dcv-brochure-preview-wrap" data-lenis-prevent>
              <div className="dcv-dining-modal-banner-wrap">
                <Image
                  src={AllImages.kosherGettSupervision}
                  alt="Rabbi Nesanel Sommer, under whose strict supervision the hotel is Kosher for Pesach"
                  width={1371}
                  height={1148}
                  sizes="600px"
                  priority
                />
              </div>

              <div className="dcv-dining-modal-bio">
                <p>
                  Under the strict hashgacha of <strong>Rabbi Nesanel Sommer, with Rabbi Avrum Kahan serving as Head Mashgiach</strong>, the entire hotel is Kosher for Pesach, featuring separate Milchig and Fleishig kitchens, Shmura Matzah only, Cholov Yisroel, and Non-Gebrokts throughout.
                </p>
                <p>
                  Our dedicated, full-time team of mashgichim oversees every kitchen and food service area to ensure uncompromising Kashrus standards, allowing you to enjoy every meal with complete confidence and peace of mind.
                </p>
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
          /* DIAMOND CLUB RESERVE KOSHER SUPERVISION: the client's message, word for word, with the rabbi's photo on top */
          <>
            <div className="dcv-brochure-header">
              <div className="dcv-brochure-kicker">PASSOVER 2027 · DIAMOND CLUB RESERVE</div>
              <h2 className="dcv-brochure-title">Kosher Supervision</h2>
            </div>

            <div className="dcv-brochure-preview-wrap" data-lenis-prevent>
              {SHOW_RESERVE_RABBI_PORTRAIT && (
              <div className="dcv-dining-modal-portrait-wrap" style={{ maxWidth: "460px" }}>
                <Image
                  src={AllImages.rabbiNissimHiluOneKosher}
                  alt="Rabbi Nissim Hilu, Kosher Supervision"
                  width={1371}
                  height={1148}
                  priority
                />
              </div>
              )}

              <div className="dcv-dining-modal-bio">
                {SHOW_RESERVE_FOOD_TO_PERFECTION && (
                  <>
                <h3>Food To Perfection</h3>
                <p>
                  For over a decade the Diamond Club Vacations Team has been organizing Passover programs at luxury resorts, our dedication to offering the best in kosher vacations has been enjoyed by hundreds of families and thousands of guests from all over the world. our dedicated team welcomes the opportunity and is looking forward to serving you once again for Passover 2025 in Kanai.
                </p>
                <p>
                  Our In House Catering Lead by our Executive Chef Donny Rogoff and his five star team, with many years of Passover Glatt kosher experience leading and managing culinary teams at the most prestige’s hotels, Donny will once again Bring his award-winning International culinary team to Diamond Club Vacations for Passover 2026 and will be coordinating our outstanding gourmet cuisine. Whether it’s in our dining room, tea room, or the barbecue or the restaurants, an array of impressive delights will await your dining pleasure.
                </p>
                <p>
                  Our culinary team as well as our popular in house pastry team is a collection of the most professional world class gourmet chefs in the kosher food industry, with years of experience working with the leading catering companies, on Pesach and year-round.
                </p>
                  </>
                )}

                <h3>Kosher Supervision</h3>
                <p>
                  Rabbi Nissim Hilu is a leading authority in kosher certification, with over 26 years of experience in kosher quality systems and food industry logistics. He is the founder and General Manager of One Kosher, providing certification and training across Mexico, Colombia, and Panama. His work spans top-tier restaurants and resorts in major Latin American destinations.
                </p>
                <p>
                  The entire resort and it will be exclusively Kosher for Pesach, following the highest level of Kashrus. All dining will be strictly Glatt kosher and Bet Yossef meats, Cholov Yisroel, Shmurah Matza.
                </p>
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

/** Diamond Club Reserve / Blue chef pop-up: Executive Chef Donny Rogoff, the client's text word for word (2026-10-20, replaces the 2026-10-19 text). */
function DonnyRogoffModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="dcv-brochure-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="dcv-brochure-modal dcv-dining-popup-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="dcv-brochure-close" onClick={onClose} aria-label="Close chef modal">
          <X size={20} />
        </button>

        <div className="dcv-brochure-header">
          <div className="dcv-brochure-kicker">CULINARY EXCELLENCE · PASSOVER 2027</div>
          <h2 className="dcv-brochure-title">Executive Chef Donny Rogoff</h2>
          <p className="dcv-brochure-sub">Executive Chef &amp; Director of Food and Beverage | Diamond Club Vacations</p>
        </div>

        <div className="dcv-brochure-preview-wrap" data-lenis-prevent>
          <div className="dcv-dining-modal-banner-wrap">
            <Image
              src={AllImages.chefDonnyRogoffCard}
              alt="Executive Chef Donny Rogoff"
              width={640}
              height={256}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
          </div>

          <div className="dcv-dining-modal-bio">
            <p>
              Redefining the boundaries of luxury kosher hospitality, Executive Chef Donny Rogoff brings an exceptional blend of culinary vision, innovation, and international hospitality expertise.
            </p>
            <p>
              As Executive Chef and Director of Food and Beverage for Diamond Club Vacations, Chef Rogoff specializes in transforming world-renowned luxury hotel properties into fully operational, world-class kosher destinations. Collaborating with some of the most prestigious brands in global hospitality, he seamlessly integrates the complexities of kosher operations with the sophistication and exceptional standards of five-star luxury.
            </p>
            <p>
              With a background in fine dining, restaurant ownership, and international hospitality, his expertise extends far beyond the kitchen. From creating distinctive restaurant concepts and elevated culinary experiences to directing international logistics, staffing, and comprehensive food and beverage operations, Chef Rogoff brings ambitious visions to life.
            </p>
            <p>
              Driven by creativity, precision, and an uncompromising commitment to excellence, he continues to elevate the world of luxury kosher hospitality — where exceptional cuisine, flawless execution, and unforgettable experiences come together.
            </p>
          </div>

          <div className="dcv-dining-modal-footer">
            <button type="button" className="dcv-btn dcv-btn--primary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CelebrityChefsModal({ isOpen, onClose, programId }: DiningModalProps) {
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

  const isGuettaway = programId === "guttaway" || programId === "guettaway";

  // Guettaway has its own chef (Chaim Levy); Diamond Club Reserve and Blue use Donny Rogoff.
  if (!isGuettaway) return <DonnyRogoffModal onClose={onClose} />;

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

        <div className="dcv-brochure-preview-wrap" data-lenis-prevent>
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
              <strong>
                Guettaway, A Diamond Club Production, is delighted to welcome Chef Chaim Levy to our culinary lineup for Pesach 2027.
              </strong>{" "}
              His passion for exceptional food and dedication to the dining experience will contribute to an unforgettable celebration of flavor, tradition, and world-class hospitality.
            </p>
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
