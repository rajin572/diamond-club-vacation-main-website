"use client";

import { PhotoGallery, SectionTitle } from "@/components/shared/design";
import { WeddingImages } from "../../../public/images/weddings/weddingImages";
import { AllImages } from "../../../public/images/AllImages";

// Photos without people in swimwear or close embraces (the hotel is Glatt Kosher): ceremonies, venues and real photos of the hotel.
const GALLERY_IMAGES = [
  WeddingImages.rooftopCeremony,
  AllImages.casaNizucGallery40,
  WeddingImages.gardenCeremony,
  WeddingImages.ballroomBanquet,
  AllImages.casaNizucGallery39,
  AllImages.casaNizucGallery38,
  WeddingImages.culinaryFire,
  AllImages.casaNizucDiningZait,
  AllImages.casaNizucDiningAshan,
  WeddingImages.mussaBar,
  AllImages.casaNizucGallery05,
  AllImages.casaNizucGallery03,
  WeddingImages.masterSuiteBed,
  AllImages.casaNizucGallery43,
];

export function WeddingsGallerySection() {
  return (
    <section id="gallery" className="dcv-wrap dcv-anchor">
      <SectionTitle
        title="Celebration Gallery"
        description="Glimpses of weddings, celebrations, backdrops, and resort sanctuaries at Casa Nizuc Cancún."
      />

      <PhotoGallery
        images={GALLERY_IMAGES}
        alt="Weddings and Destination Events at Casa Nizuc"
      />
    </section>
  );
}

