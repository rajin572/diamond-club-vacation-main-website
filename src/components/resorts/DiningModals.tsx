"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ShieldCheck } from "lucide-react";
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
          /* GUETTAWAY KASHRUS: the client's message, word for word (Rabbi Nesanel Sommer / Kehillas Bnei Yitzchok) */
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
                  alt="Under Strict Supervision of Rabbi Nesanel Sommer - Non Gebrokts"
                  width={560}
                  height={140}
                  priority
                />
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
                <h3>Our Kashrus Standards</h3>
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
              <div className="dcv-dining-modal-portrait-wrap">
                <Image
                  src={AllImages.kosherSupervisionRabbi}
                  alt="Rabbi Nissim Hilu, Kosher Supervision"
                  width={480}
                  height={776}
                  priority
                />
              </div>

              <div className="dcv-dining-modal-bio">
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
                {isGuettaway ? "Guettaway, A Diamond Club Production," : "Diamond Club Vacations"} is delighted to welcome Chef Chaim Levy to our culinary lineup for Pesach 2027.
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
