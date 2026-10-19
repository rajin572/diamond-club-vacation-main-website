import { AllImages } from "../../../public/images/AllImages";
import type { ResortData } from "@/components/resorts/resorts.types";
import { rotate } from "./helpers";
import { GUETTAWAY_PROGRAM_GALLERY } from "./guettaway-program-gallery.data";

/** Waldorf Astoria Riviera Maya — content from the client's HTML design (diamond-club-main-design). */
export const WALDORF_ASTORIA_RESORT_DATA: ResortData = {
  programId: "guttaway",
  programTitle: "guettaway a Diamond Club production",
  resortId: "waldorf-astoria",
  resortName: "Waldorf Astoria Riviera Maya",
  tagline: "guettaway a Diamond Club production",
  showTagline: false,
  heroImage: AllImages.waldorfAerial,
  overviewLabel: "Overview",
  showSubNav: true,
  overview: {
    title: "",
    description: "",
    cards: [
      {
        id: "rooms",
        title: "Rooms & Suites",
        image: AllImages.series.waldorf[0],
        target: { type: "section", section: "rooms" },
      },
      {
        id: "pools",
        title: "Pools & Beaches",
        image: AllImages.series.waldorf[2],
        target: { type: "section", section: "pools" },
      },
      {
        id: "wellness",
        title: "Wellness & Fitness",
        image: AllImages.series.waldorf[3],
        target: { type: "section", section: "wellness" },
      },
      {
        id: "gallery",
        title: "Gallery",
        image: AllImages.series.waldorf[4],
        target: { type: "section", section: "gallery" },
      },
    ],
  },
  rooms: {
    title: "Rooms & Suites",
    description: "",
    linkToDetails: true,
    items: [
    // Room lists. Only one block is switched on (not commented); swap with: npm run rooms -- waldorf=hilton-rooms | hotel-site | original | status

      // @rooms:begin hilton-rooms | hilton.com rooms page: 13 rooms and suites with all card and pop-up photos
      {
        id: "ocean-front-view-king-bed-guestroom",
        title: "Ocean Front View King Bed Guestroom",
        subtitle: "1 King Bed",
        image: AllImages.waldorfWeb634DeluxeOceanFrontKingGuestroomK1rv4,
        description: "675 sq. ft. tranquil, modern guest room with private balcony and soaking tub. Room features include a plush king bed, sitting area, and table for two. The luxurious bath offers double sinks and two separate vanity areas, private water closet, and spacious glass-enclosed shower overlooking the balcony.",
        stats: [
          { label: "Room Size", value: "675 sq. ft." },
          { label: "Bedding", value: "1 King Bed" },
        ],
        groups: [
          {
            title: "Room highlights",
            items: [
              "Guests Sleeps 3 Views Ocean view Room layout Balcony Bathroom Dual vanity Rain shower Room Feature Sofa",
            ],
          },
          {
            title: "All-Inclusive benefits",
            items: [
              "All-Inclusive dining and premium drinks at participating restaurants and bars",
              "Personalized welcome amenity",
              "Minibar refreshed daily",
              "All meals across 5 unique venues",
              "24-hour in-room dining",
              "Curated destination experiences",
            ],
          },
        ],
        gallery: [
          AllImages.waldorfWeb634DeluxeOceanFrontKingGuestroomK1rv4,
          AllImages.waldorfWeb634DeluxeOceanFrontKingGuestroomK1rv1,
          AllImages.waldorfWebWaldorfAstoriaCancun203OceanFrontKingBedGuestroomK1rp,
          AllImages.waldorfWebWaldorfAstoriaCunHab602,
        ],
      },
      {
        id: "ocean-front-2-queen-beds-guestroom",
        title: "Ocean Front 2 Queen Beds Guestroom",
        subtitle: "2 Queen Beds",
        image: AllImages.waldorfWeb633DeluxeOceanFrontTwoQueenBedsGuestroomQ2rv1,
        description: "675 sq. ft. serene, contemporary guest room with private balcony and soaking tub. Room features include two sumptuous queen beds, sitting area, and table for two. The luxurious bath offers double sinks and two separate vanity areas, private water closet, and spacious glass-enclosed shower overlooking the balcony.",
        stats: [
          { label: "Room Size", value: "675 sq. ft." },
          { label: "Bedding", value: "2 Queen Beds" },
        ],
        groups: [
          {
            title: "Room highlights",
            items: [
              "Guests Sleeps 4 Views Ocean view Room layout Balcony Bathroom Dual vanity Rain shower Room Feature Sofa",
            ],
          },
          {
            title: "All-Inclusive benefits",
            items: [
              "All-Inclusive dining and premium drinks at participating restaurants and bars",
              "Personalized welcome amenity",
              "Minibar refreshed daily",
              "All meals across 5 unique venues",
              "24-hour in-room dining",
              "Curated destination experiences",
            ],
          },
        ],
        gallery: [
          AllImages.waldorfWeb633DeluxeOceanFrontTwoQueenBedsGuestroomQ2rv1,
          AllImages.waldorfWeb634DeluxeOceanFrontKingGuestroomK1rv1,
          AllImages.waldorfRoomWaldorfAstoriaCancun206OceanFront2QueenBedsGuestroomQ2rp2,
          AllImages.waldorfWebWaldorfAstoriaCunHab602,
        ],
      },
      {
        id: "deluxe-ocean-front-king-bed-guestroom",
        title: "Deluxe Ocean Front King Bed Guestroom",
        subtitle: "1 King Bed",
        image: AllImages.waldorfWeb634DeluxeOceanFrontKingGuestroomK1rv2,
        description: "Greet each day with ocean views from your furnished balcony. This contemporary room offers comfort and space, ideal for slow mornings and breezy afternoons.",
        stats: [
          { label: "Bedding", value: "1 King Bed" },
        ],
        groups: [
          {
            title: "Room highlights",
            items: [
              "Guests Sleeps 3 Views Ocean view Room layout Balcony Bathroom Dual vanity Rain shower Room Feature Sofa",
            ],
          },
          {
            title: "All-Inclusive benefits",
            items: [
              "All-Inclusive dining and premium drinks at participating restaurants and bars",
              "Personalized welcome amenity",
              "Minibar refreshed daily",
              "All meals across 5 unique venues",
              "24-hour in-room dining",
              "Curated destination experiences",
            ],
          },
        ],
        gallery: [
          AllImages.waldorfWeb634DeluxeOceanFrontKingGuestroomK1rv2,
          AllImages.waldorfWeb634DeluxeOceanFrontKingGuestroomK1rv1,
          AllImages.waldorfRoom634DeluxeOceanFrontKingGuestroomK1rv3,
          AllImages.waldorfWeb634DeluxeOceanFrontKingGuestroomK1rv4,
          AllImages.waldorfWeb634DeluxeOceanFrontKingGuestroomK1rv,
          AllImages.waldorfWebWaldorfAstoriaCunHab602,
        ],
      },
      {
        id: "deluxe-ocean-front-2-queen-beds-guestroom",
        title: "Deluxe Ocean Front 2 Queen Beds Guestroom",
        subtitle: "2 Queen Beds",
        image: AllImages.waldorfWeb633DeluxeOceanFrontTwoQueenBedsGuestroomQ2rv2,
        description: "Ocean views, two queen beds, and plenty of space make this the perfect choice for friends looking to relax and reconnect.",
        stats: [
          { label: "Bedding", value: "2 Queen Beds" },
        ],
        groups: [
          {
            title: "Room highlights",
            items: [
              "Guests Sleeps 4 Views Ocean view Room layout Balcony Bathroom Dual vanity Rain shower Room Feature Sofa",
            ],
          },
          {
            title: "All-Inclusive benefits",
            items: [
              "All-Inclusive dining and premium drinks at participating restaurants and bars",
              "Personalized welcome amenity",
              "Minibar refreshed daily",
              "All meals across 5 unique venues",
              "24-hour in-room dining",
              "Curated destination experiences",
            ],
          },
        ],
        gallery: [
          AllImages.waldorfWeb633DeluxeOceanFrontTwoQueenBedsGuestroomQ2rv2,
          AllImages.waldorfWeb634DeluxeOceanFrontKingGuestroomK1rv1,
          AllImages.waldorfWeb633DeluxeOceanFrontTwoQueenBedsGuestroomQ2rv1,
          AllImages.waldorfWebWaldorfAstoriaCunHab602,
        ],
      },
      {
        id: "swim-up-pool-1-king-guestroom",
        title: "Swim up Pool 1 King Guestroom",
        subtitle: "1 King Bed",
        image: AllImages.waldorfWebWaldorfAstoriaCancun109PoolViewSwimUpKingGuestroomK1lvo,
        description: "Start your day with a swim and end it with a toast. This swim-up king room blends style and comfort with direct pool access — perfect for enjoying drinks from the minibar or unwinding after a wellness class or sunset party.",
        stats: [
          { label: "Bedding", value: "1 King Bed" },
        ],
        groups: [
          {
            title: "Room highlights",
            items: [
              "Guests Sleeps 3 Room layout Terrace Bathroom Dual vanity Rain shower Kitchen and dining Minibar Room Feature Sofa",
            ],
          },
          {
            title: "All-Inclusive benefits",
            items: [
              "All-Inclusive dining and premium drinks at participating restaurants and bars",
              "Personalized welcome amenity",
              "Minibar refreshed daily",
              "All meals across 5 unique venues",
              "24-hour in-room dining",
              "Curated destination experiences",
            ],
          },
        ],
        gallery: [
          AllImages.waldorfWebWaldorfAstoriaCancun109PoolViewSwimUpKingGuestroomK1lvo,
          AllImages.waldorfWeb634DeluxeOceanFrontKingGuestroomK1rv1,
          AllImages.waldorfRoomWaldorfAstoriaCancun1021411b,
          AllImages.waldorfRoomWaldorfAstoriaCancun102103,
        ],
      },
      {
        id: "swim-up-pool-2-queen-bed-guestroom",
        title: "Swim up Pool 2 Queen Bed Guestroom",
        subtitle: "2 Queen Beds",
        image: AllImages.waldorfWeb108PoolViewSwimUp2QueenBedGuestroomQ2lvo,
        description: "430 sq. ft. with swim-up patio, stylish, relaxing room with sitting area and large bathroom. Step right into the water from your terrace, then relax with a treat from In-Room Dining or the minibar. With two queen beds and plenty of space, it's ideal for adults seeking connection, comfort, and fun.",
        stats: [
          { label: "Room Size", value: "430 sq. ft." },
          { label: "Bedding", value: "2 Queen Beds" },
        ],
        groups: [
          {
            title: "Room highlights",
            items: [
              "Guests Sleeps 4 Room layout Terrace Bathroom Dual vanity Rain shower Kitchen and dining Minibar Room Feature Sofa",
            ],
          },
          {
            title: "All-Inclusive benefits",
            items: [
              "All-Inclusive dining and premium drinks at participating restaurants and bars",
              "Personalized welcome amenity",
              "Minibar refreshed daily",
              "All meals across 5 unique venues",
              "24-hour in-room dining",
              "Curated destination experiences",
            ],
          },
        ],
        gallery: [
          AllImages.waldorfWeb108PoolViewSwimUp2QueenBedGuestroomQ2lvo,
          AllImages.waldorfWeb634DeluxeOceanFrontKingGuestroomK1rv1,
          AllImages.waldorfRoomWaldorfAstoriaCancun108PoolViewSwimUp2QueenBedGuestroomQ2lvo,
          AllImages.waldorfRoomWaldorfAstoriaCancun1021411b,
          AllImages.waldorfRoomWaldorfAstoriaCancun102103,
        ],
      },
      {
        id: "ocean-front-suite-with-king-bed",
        title: "Ocean Front Suite with King Bed",
        subtitle: "1 King Bed",
        image: AllImages.waldorfWeb628OceanFrontSuiteWithKingSizeBedK1rvx12,
        description: "1035 sq. ft. with stunning ocean views. Private balcony with soaking tub. Enjoy additional space and the convenience of an extra half bath. Beautiful organic stone and wood touches highlight the design. Contemporary living room provides a relaxing oversized sofa and table for two. Bedroom offers a plush king bed and additional sitting area. The luxurious bath offers double sinks and two separate vanity areas, private water closet, and spacious glass-enclosed shower overlooking the balcony. Suite may connect to adjacent guest room with two queen beds. Rates are subject to change based on the number of guests occupying the room.",
        stats: [
          { label: "Room Size", value: "1035 sq. ft." },
          { label: "Bedding", value: "1 King Bed" },
        ],
        groups: [
          {
            title: "Room highlights",
            items: [
              "Guests Sleeps 3 Views Ocean view Room layout Balcony Living area Multi bedroom Bathroom Dual vanity Rain shower Room Feature Sofa",
            ],
          },
          {
            title: "All-Inclusive benefits",
            items: [
              "All-Inclusive dining and premium drinks at participating restaurants and bars",
              "Personalized welcome amenity",
              "Minibar refreshed daily",
              "All meals across 5 unique venues",
              "24-hour in-room dining",
              "Curated destination experiences",
            ],
          },
        ],
        gallery: [
          AllImages.waldorfWeb628OceanFrontSuiteWithKingSizeBedK1rvx12,
          AllImages.waldorfRoomWaldorfAstoriaCancunSuite628e,
          AllImages.waldorfRoom628OceanFrontSuiteWithKingSizeBedK1rvx13,
          AllImages.waldorfWeb628OceanFrontSuiteWithKingSizeBedK1rvx14,
          AllImages.waldorfRoom628OceanFrontSuiteWithKingSizeBedK1rvx11,
        ],
      },
      {
        id: "deluxe-ocean-front-suite-with-king-bed",
        title: "Deluxe Ocean Front Suite with King Bed",
        subtitle: "1 King Bed",
        image: AllImages.waldorfWeb610DeluxeOceanFrontSuiteWithKingBedK1rvp11,
        description: "1,355 sq. ft. Lovely oceans views and private, oversized balcony with soaking tub. Enjoy the luxury of stylish space and convenience of an extra half bath. Beautiful organic stone and wood touches highlight the design. Modern living area provides a relaxing oversized sectional sofa and armchair and adjacent dining area with a table seating eight. Bedroom offers a plush king bed, additional sitting area, table for two, and the luxurious master bath offers double sinks and two separate vanity areas, private water closet, and spacious glass-enclosed shower overlooking the balcony. This category can be connected to a Deluxe Ocean Front Two Queen Beds Guestroom.",
        stats: [
          { label: "Room Size", value: "1,355 sq. ft." },
          { label: "Bedding", value: "1 King Bed" },
        ],
        groups: [
          {
            title: "Room highlights",
            items: [
              "Guests Sleeps 3 Views Ocean view Room layout Balcony Dining area Living area Bathroom Dual vanity Rain shower Kitchen and dining Dining table and chairs Minibar Room Feature Sofa",
            ],
          },
          {
            title: "All-Inclusive benefits",
            items: [
              "All-Inclusive dining and premium drinks at participating restaurants and bars",
              "Personalized welcome amenity",
              "Minibar refreshed daily",
              "All meals across 5 unique venues",
              "24-hour in-room dining",
              "Curated destination experiences",
            ],
          },
        ],
        gallery: [
          AllImages.waldorfWeb610DeluxeOceanFrontSuiteWithKingBedK1rvp11,
          AllImages.waldorfRoom610DeluxeOceanFrontSuiteWithKingBedK1rvp1,
          AllImages.waldorfRoom636DeluxeOceanFrontSuiteWithKingBedK1rvp12,
          AllImages.waldorfRoom610DeluxeOceanFrontSuiteWithKingBedK1rvp12,
          AllImages.waldorfRoom636DeluxeOceanFrontSuiteWithKingBedK1rvp1,
          AllImages.waldorfRoomWaldorfAstoriaCancunSuite610d,
          AllImages.waldorfRoom636DeluxeOceanFrontSuiteWithKingBedK1rvp11,
        ],
      },
      {
        id: "ocean-front-master-corner-suite-with-king-bed",
        title: "Ocean Front Master Corner Suite with King Bed",
        subtitle: "1 King Bed",
        image: AllImages.waldorfWebWaldorfAstoriaCancunMaster602c,
        description: "1,680 sq. ft. Corner location with direct unobstructed oceans views. Enter one spacious balcony from the living area and the second wrap-around balcony with soaking tub from the bedroom. Revel in this luxurious space with stunning organic stone and wood touches highlighting the design. Contemporary living area provides a relaxing, oversized sectional sofa and two armchairs with a pool table for friendly competition. The dining area offers a table seating ten and adjacent stone bar with 4 seats. Bedroom offers a plush king bed, additional sitting area, table for two, and the luxurious master bath offers double sinks and two separate vanity areas, private water closet, and spacious glass-enclosed shower overlooking the balcony. This category can be connected to a Deluxe Ocean Front Two Queen Size Beds Guestroom.",
        stats: [
          { label: "Room Size", value: "1,680 sq. ft." },
          { label: "Bedding", value: "1 King Bed" },
        ],
        groups: [
          {
            title: "Room highlights",
            items: [
              "Guests Sleeps 3 Views Ocean view Room layout Balcony Dining area Full kitchen Living area Bathroom Dual vanity Rain shower Kitchen and dining Dining table and chairs Full-size refrigerator Minibar Locations Corner room Room Feature Sofa",
            ],
          },
          {
            title: "All-Inclusive benefits",
            items: [
              "All-Inclusive dining and premium drinks at participating restaurants and bars",
              "Personalized welcome amenity",
              "Minibar refreshed daily",
              "All meals across 5 unique venues",
              "24-hour in-room dining",
              "Curated destination experiences",
            ],
          },
        ],
        gallery: [
          AllImages.waldorfWebWaldorfAstoriaCancunMaster602c,
          AllImages.waldorfRoomWaldorfAstoriaCancunMaster602e,
          AllImages.waldorfRoomWaldorfAstoriaCancunMaster602b,
          AllImages.waldorfRoomWaldorfAstoriaCancun1128222,
          AllImages.waldorfWebWaldorfAstoriaCunHab602,
          AllImages.waldorfRoomWaldorfAstoriaCancunMaster602d,
        ],
      },
      {
        id: "ocean-front-swim-up-master-corner-suite",
        title: "Ocean Front Swim up Master Corner Suite",
        subtitle: "",
        image: AllImages.waldorfWebWaldorfAstoriaCancunMasterCornerSuiteSwimUp1,
        description: "1,680 sq. ft. Ground floor location with unobstructed oceans views Expansive outdoor terrace with private swim-up pool and enhanced proximity to the resort's pool and beach. Revel in this luxurious space with stunning organic stone and wood touches highlighting the design. The contemporary living area provides a relaxing, oversized sectional sofa and two armchairs with a pool table for friendly competition. The dining area offers a table seating ten and adjacent stone bar with seating. The bedroom offers a plush king bed, additional sitting area, and a table for two. The luxurious master bath offers double sinks and two separate vanity areas, private water closet, and spacious glass-enclosed shower overlooking the balcony. The suite may connect to adjacent guest room with two queen beds.",
        stats: [
          { label: "Room Size", value: "1,680 sq. ft." },
        ],
        groups: [
          {
            title: "Room highlights",
            items: [
              "Guests Sleeps 3 Views Ocean view Room layout Balcony Dining area Full kitchen Living area Private pool Terrace Bathroom Dual vanity Rain shower Kitchen and dining Dining table and chairs Full-size refrigerator Minibar Locations Corner room Low floor Room Feature Sofa",
            ],
          },
          {
            title: "All-Inclusive benefits",
            items: [
              "All-Inclusive dining and premium drinks at participating restaurants and bars",
              "Personalized welcome amenity",
              "Minibar refreshed daily",
              "All meals across 5 unique venues",
              "24-hour in-room dining",
              "Curated destination experiences",
            ],
          },
        ],
        gallery: [
          AllImages.waldorfWebWaldorfAstoriaCancunMasterCornerSuiteSwimUp1,
          AllImages.waldorfRoomWaldorfAstoriaCancunMaster602e,
          AllImages.waldorfRoomWaldorfAstoriaCancunMaster602b,
          AllImages.waldorfRoomWaldorfAstoriaCancunMaster602a,
          AllImages.waldorfRoomWaldorfAstoriaCancun1128290a,
          AllImages.waldorfRoomWaldorfAstoriaCancun1128222,
        ],
      },
      {
        id: "ocean-front-2-bedroom-presidential-suite",
        title: "Ocean Front 2 Bedroom Presidential Suite",
        subtitle: "",
        image: AllImages.waldorfWebWaldorfAstoriaCunPresidential06,
        description: "6,225 sq ft. Ocean views, multiple balconies, plunge pool, soaking tub. The living area features a sectional sofa, armchairs, a stone bar with six seats, and pantry. Enjoy a dining area with a dining table, a pool table, and connected library and screening room. The second bedroom is an ocean front suite with two queen beds, a plush king bed, additional sitting area, and a table for two. The master bath offers two separate sinks and vanity areas, private bathroom, and glass-enclosed shower. Rates are subject to change based on the number of guests occupying the room.",
        stats: [
          { label: "Room Size", value: "6,225 sq. ft." },
        ],
        groups: [
          {
            title: "Room highlights",
            items: [
              "Guests Sleeps 7 Views Ocean view Room layout Balcony Dining area Full kitchen Living area Multi bedroom Bathroom Dual vanity Rain shower Kitchen and dining Dining table and chairs Full-size refrigerator Room Feature Sofa",
            ],
          },
          {
            title: "All-Inclusive benefits",
            items: [
              "All-Inclusive dining and premium drinks at participating restaurants and bars",
              "Personalized welcome amenity",
              "Minibar refreshed daily",
              "All meals across 5 unique venues",
              "24-hour in-room dining",
              "Curated destination experiences",
            ],
          },
        ],
        gallery: [
          AllImages.waldorfWebWaldorfAstoriaCunPresidential06,
          AllImages.waldorfRoomWaldorfAstoriaCancunSuite610d,
          AllImages.waldorfRoomWaldorfAstoriaCunPresidential05,
          AllImages.waldorfRoom326PresidentialSuiteK1zvu14,
          AllImages.waldorfRoomWaldorfAstoriaCancun326PresidentialSuiteK1zvu1,
          AllImages.waldorfRoomWaldorfAstoriaCunPresidential08,
          AllImages.waldorfRoom326PresidentialSuiteK1zvu11,
        ],
      },
      {
        id: "amai-suite-two-guest-rooms",
        title: "Amai Suite - Two Guest Rooms",
        subtitle: "Sleeps 7",
        image: AllImages.waldorfRoomWaldorfAstoriaCancunSuiteamaiDianaBalderadsc00039,
        description: "2,270 sq. ft., two guest rooms, concierge service. Discover the epitome of luxury and sophistication in our speakeasy Amai Suite. 2,270 sq. ft. Accommodating up to six guests, this suite boasts two exquisitely appointed guest rooms, offering both comfort and privacy. From the moment you arrive, our personal concierge service ensures your every need is met. Rates are subject to change based on the number of guests occupying the room.",
        stats: [
          { label: "Room Size", value: "2,270 sq. ft." },
          { label: "Guests", value: "7 Guests" },
        ],
        groups: [
          {
            title: "Room highlights",
            items: [
              "Sleeps 7",
            ],
          },
          {
            title: "All-Inclusive benefits",
            items: [
              "All-Inclusive dining and premium drinks at participating restaurants and bars",
              "Personalized welcome amenity",
              "Minibar refreshed daily",
              "All meals across 5 unique venues",
              "24-hour in-room dining",
              "Curated destination experiences",
            ],
          },
        ],
        gallery: [
          AllImages.waldorfRoomWaldorfAstoriaCancunSuiteamaiDianaBalderadsc00039,
          AllImages.waldorfRoomWaldorfAstoriaCancunSuiteamaiDianaBalderadsc00381,
          AllImages.waldorfRoom610DeluxeOceanFrontSuiteWithKingBedK1rvp1,
          AllImages.waldorfRoomWaldorfAstoriaCancunSuiteamaiDianaBalderadsc00325,
          AllImages.waldorfRoomWaldorfAstoriaCancunSuiteamaiDianaBalderadsc00071,
          AllImages.waldorfRoomWaldorfAstoriaCancunSuiteamaiDianaBalderadsc00494,
        ],
      },
      {
        id: "riviera-suite-3-guest-rooms",
        title: "Riviera Suite - 3 Guest Rooms",
        subtitle: "Sleeps 7",
        image: AllImages.waldorfRoomWaldorfAstoriaCancunSuiteamaiDianaBalderadsc00071,
        description: "Riviera Suite: A Grand Retreat for All Discover the epitome of luxury and sophistication in our speakeasy Riviera Suite. 4,015 sq. ft. of pure indulgence await. Accommodates up to 10 guests in sheer luxury and with three inviting guest rooms, this unit exudes elegance and comfort, ensuring a memorable stay for everyone in your party. Special benefit: Access to the Waldorf Astoria Spa Hydrotherapy up to 2 hours daily Rates are subject to change based on the number of guests occupying the room. Restrictions may apply.",
        stats: [
          { label: "Room Size", value: "4,015 sq. ft." },
          { label: "Guests", value: "7 Guests" },
        ],
        groups: [
          {
            title: "Room highlights",
            items: [
              "Sleeps 7",
            ],
          },
          {
            title: "All-Inclusive benefits",
            items: [
              "All-Inclusive dining and premium drinks at participating restaurants and bars",
              "Personalized welcome amenity",
              "Minibar refreshed daily",
              "All meals across 5 unique venues",
              "24-hour in-room dining",
              "Curated destination experiences",
            ],
          },
        ],
        gallery: [
          AllImages.waldorfRoomWaldorfAstoriaCancunSuiteamaiDianaBalderadsc00071,
          AllImages.waldorfRoomWaldorfAstoriaCancunSuiteamaiDianaBalderadsc00014,
          AllImages.waldorfRoom610DeluxeOceanFrontSuiteWithKingBedK1rvp1,
          AllImages.waldorfRoomWaldorfAstoriaCancunSuiteamaiDianaBalderadsc00494,
          AllImages.waldorfRoomWaldorfAstoriaCancunSuiteamaiDianaBalderadsc00325,
          AllImages.waldorfRoomWaldorfAstoriaCancunSuiteamaiDianaBalderadsc00381,
          AllImages.waldorfRoomWaldorfAstoriaCancunSuiteamaiDianaBalderadsc00099,
          AllImages.waldorfRoomWaldorfAstoriaCancunSuiteamaiDianaBalderadsc00039,
        ],
      },
      // @rooms:end hilton-rooms

      // @rooms:begin hotel-site | hilton.com Waldorf Astoria Cancun rate list: 15 rooms and suites with the Hilton photos
    //       {
    //         id: "ocean-front-view-king-bed-guestroom",
    //         title: "Ocean Front View King Bed Guestroom",
    //         subtitle: "1 King Bed · Ocean View",
    //         image: AllImages.waldorfWeb634DeluxeOceanFrontKingGuestroomK1rv4,
    //         description: "675 sq. ft. tranquil, modern guest room with private balcony and soaking tub. Room features include a plush king bed, sitting area, and table for two.",
    //         stats: [
    //           { label: "Room Size", value: "675 sq. ft." },
    //           { label: "View", value: "Ocean View" },
    //           { label: "Bedding", value: "1 King Bed" },
    //           { label: "Guests", value: "3 Guests" },
    //         ],
    //         groups: [
    //           {
    //             title: "Room highlights",
    //             items: [
    //               "Sleeps 3",
    //               "Ocean view",
    //               "Balcony",
    //               "Dual vanity",
    //               "Sofa",
    //             ],
    //           },
    //         ],
    //         gallery: [
    //           AllImages.waldorfWeb634DeluxeOceanFrontKingGuestroomK1rv4,
    //           AllImages.waldorfWebWaldorfAstoriaCancun203OceanFrontKingBedGuestroomK1rp,
    //           AllImages.waldorfWebWaldorfAstoriaCunHab602,
    //           AllImages.waldorfWeb634DeluxeOceanFrontKingGuestroomK1rv1,
    //         ],
    //       },
    //       {
    //         id: "ocean-front-2-queen-beds-guestroom",
    //         title: "Ocean Front 2 Queen Beds Guestroom",
    //         subtitle: "2 Queen Beds · Ocean View",
    //         image: AllImages.waldorfWeb633DeluxeOceanFrontTwoQueenBedsGuestroomQ2rv1,
    //         description: "Sleeps 4. Ocean view, balcony, dual vanity, sofa.",
    //         stats: [
    //           { label: "View", value: "Ocean View" },
    //           { label: "Bedding", value: "2 Queen Beds" },
    //           { label: "Guests", value: "4 Guests" },
    //         ],
    //         groups: [
    //           {
    //             title: "Room highlights",
    //             items: [
    //               "Sleeps 4",
    //               "Ocean view",
    //               "Balcony",
    //               "Dual vanity",
    //               "Sofa",
    //             ],
    //           },
    //         ],
    //         gallery: [
    //           AllImages.waldorfWeb633DeluxeOceanFrontTwoQueenBedsGuestroomQ2rv1,
    //         ],
    //       },
    //       {
    //         id: "1-king-mobility-accessible-w-roll-in-shower",
    //         title: "1 King Mobility Accessible W/ Roll-in Shower",
    //         subtitle: "1 King Bed · Ocean View",
    //         image: AllImages.waldorfWeb634DeluxeOceanFrontKingGuestroomK1rv,
    //         description: "Sleeps 3. Ocean view, balcony, dual vanity, mobility accessible.",
    //         stats: [
    //           { label: "View", value: "Ocean View" },
    //           { label: "Bedding", value: "1 King Bed" },
    //           { label: "Guests", value: "3 Guests" },
    //         ],
    //         groups: [
    //           {
    //             title: "Room highlights",
    //             items: [
    //               "Sleeps 3",
    //               "Ocean view",
    //               "Balcony",
    //               "Dual vanity",
    //               "Mobility accessible",
    //             ],
    //           },
    //         ],
    //         gallery: [
    //           AllImages.waldorfWeb634DeluxeOceanFrontKingGuestroomK1rv,
    //         ],
    //       },
    //       {
    //         id: "2-queen-mobility-accessible-w-roll-in-shower",
    //         title: "2 Queen Mobility Accessible W/ Roll-in Shower",
    //         subtitle: "2 Queen Beds · Ocean View",
    //         image: AllImages.waldorfWebWaldorfAstoriaCancunAda,
    //         description: "Sleeps 4. Ocean view, balcony, dual vanity, mobility accessible.",
    //         stats: [
    //           { label: "View", value: "Ocean View" },
    //           { label: "Bedding", value: "2 Queen Beds" },
    //           { label: "Guests", value: "4 Guests" },
    //         ],
    //         groups: [
    //           {
    //             title: "Room highlights",
    //             items: [
    //               "Sleeps 4",
    //               "Ocean view",
    //               "Balcony",
    //               "Dual vanity",
    //               "Mobility accessible",
    //             ],
    //           },
    //         ],
    //         gallery: [
    //           AllImages.waldorfWebWaldorfAstoriaCancunAda,
    //         ],
    //       },
    //       {
    //         id: "deluxe-ocean-front-king-bed-guestroom",
    //         title: "Deluxe Ocean Front King Bed Guestroom",
    //         subtitle: "1 King Bed · Ocean View",
    //         image: AllImages.waldorfWeb634DeluxeOceanFrontKingGuestroomK1rv2,
    //         description: "Sleeps 3. Ocean view, balcony, dual vanity, sofa.",
    //         stats: [
    //           { label: "View", value: "Ocean View" },
    //           { label: "Bedding", value: "1 King Bed" },
    //           { label: "Guests", value: "3 Guests" },
    //         ],
    //         groups: [
    //           {
    //             title: "Room highlights",
    //             items: [
    //               "Sleeps 3",
    //               "Ocean view",
    //               "Balcony",
    //               "Dual vanity",
    //               "Sofa",
    //             ],
    //           },
    //         ],
    //         gallery: [
    //           AllImages.waldorfWeb634DeluxeOceanFrontKingGuestroomK1rv2,
    //         ],
    //       },
    //       {
    //         id: "deluxe-ocean-front-2-queen-beds-guestroom",
    //         title: "Deluxe Ocean Front 2 Queen Beds Guestroom",
    //         subtitle: "2 Queen Beds · Ocean View",
    //         image: AllImages.waldorfWeb633DeluxeOceanFrontTwoQueenBedsGuestroomQ2rv2,
    //         description: "Sleeps 4. Ocean view, balcony, dual vanity, sofa.",
    //         stats: [
    //           { label: "View", value: "Ocean View" },
    //           { label: "Bedding", value: "2 Queen Beds" },
    //           { label: "Guests", value: "4 Guests" },
    //         ],
    //         groups: [
    //           {
    //             title: "Room highlights",
    //             items: [
    //               "Sleeps 4",
    //               "Ocean view",
    //               "Balcony",
    //               "Dual vanity",
    //               "Sofa",
    //             ],
    //           },
    //         ],
    //         gallery: [
    //           AllImages.waldorfWeb633DeluxeOceanFrontTwoQueenBedsGuestroomQ2rv2,
    //         ],
    //       },
    //       {
    //         id: "swim-up-pool-1-king-guestroom",
    //         title: "Swim up Pool 1 King Guestroom",
    //         subtitle: "1 King Bed",
    //         image: AllImages.waldorfWebWaldorfAstoriaCancun109PoolViewSwimUpKingGuestroomK1lvo,
    //         description: "Sleeps 3. Terrace, dual vanity, minibar.",
    //         stats: [
    //           { label: "Bedding", value: "1 King Bed" },
    //           { label: "Guests", value: "3 Guests" },
    //         ],
    //         groups: [
    //           {
    //             title: "Room highlights",
    //             items: [
    //               "Sleeps 3",
    //               "Terrace",
    //               "Dual vanity",
    //               "Minibar",
    //             ],
    //           },
    //         ],
    //         gallery: [
    //           AllImages.waldorfWebWaldorfAstoriaCancun109PoolViewSwimUpKingGuestroomK1lvo,
    //         ],
    //       },
    //       {
    //         id: "swim-up-pool-2-queen-bed-guestroom",
    //         title: "Swim up Pool 2 Queen Bed Guestroom",
    //         subtitle: "2 Queen Beds",
    //         image: AllImages.waldorfWeb108PoolViewSwimUp2QueenBedGuestroomQ2lvo,
    //         description: "Sleeps 4. Terrace, dual vanity, minibar.",
    //         stats: [
    //           { label: "Bedding", value: "2 Queen Beds" },
    //           { label: "Guests", value: "4 Guests" },
    //         ],
    //         groups: [
    //           {
    //             title: "Room highlights",
    //             items: [
    //               "Sleeps 4",
    //               "Terrace",
    //               "Dual vanity",
    //               "Minibar",
    //             ],
    //           },
    //         ],
    //         gallery: [
    //           AllImages.waldorfWeb108PoolViewSwimUp2QueenBedGuestroomQ2lvo,
    //         ],
    //       },
    //       {
    //         id: "ocean-front-suite-with-king-bed",
    //         title: "Ocean Front Suite with King Bed",
    //         subtitle: "1 King Bed · Ocean View",
    //         image: AllImages.waldorfWeb628OceanFrontSuiteWithKingSizeBedK1rvx12,
    //         description: "Sleeps 3. Living area, ocean view, multi bedroom.",
    //         stats: [
    //           { label: "View", value: "Ocean View" },
    //           { label: "Bedding", value: "1 King Bed" },
    //           { label: "Guests", value: "3 Guests" },
    //         ],
    //         groups: [
    //           {
    //             title: "Room highlights",
    //             items: [
    //               "Sleeps 3",
    //               "Living area",
    //               "Ocean view",
    //               "Multi bedroom",
    //             ],
    //           },
    //         ],
    //         gallery: [
    //           AllImages.waldorfWeb628OceanFrontSuiteWithKingSizeBedK1rvx12,
    //         ],
    //       },
    //       {
    //         id: "deluxe-ocean-front-suite-with-king-bed",
    //         title: "Deluxe Ocean Front Suite with King Bed",
    //         subtitle: "1 King Bed · Ocean View",
    //         image: AllImages.waldorfWeb610DeluxeOceanFrontSuiteWithKingBedK1rvp11,
    //         description: "Sleeps 3. Dining area, ocean view, living area.",
    //         stats: [
    //           { label: "View", value: "Ocean View" },
    //           { label: "Bedding", value: "1 King Bed" },
    //           { label: "Guests", value: "3 Guests" },
    //         ],
    //         groups: [
    //           {
    //             title: "Room highlights",
    //             items: [
    //               "Sleeps 3",
    //               "Dining area",
    //               "Ocean view",
    //               "Living area",
    //             ],
    //           },
    //         ],
    //         gallery: [
    //           AllImages.waldorfWeb610DeluxeOceanFrontSuiteWithKingBedK1rvp11,
    //         ],
    //       },
    //       {
    //         id: "connecting-rooms-1-king-2-queens",
    //         title: "Connecting Rooms 1 King / 2 Queens",
    //         subtitle: "Ocean View",
    //         image: AllImages.waldorfWeb634DeluxeOceanFrontKingGuestroomK1rv4,
    //         description: "Sleeps 7. Ocean view, balcony, dual vanity, dining table and chairs.",
    //         stats: [
    //           { label: "View", value: "Ocean View" },
    //           { label: "Guests", value: "7 Guests" },
    //         ],
    //         groups: [
    //           {
    //             title: "Room highlights",
    //             items: [
    //               "Sleeps 7",
    //               "Ocean view",
    //               "Balcony",
    //               "Dual vanity",
    //               "Dining table and chairs",
    //             ],
    //           },
    //         ],
    //         gallery: [
    //           AllImages.waldorfWeb634DeluxeOceanFrontKingGuestroomK1rv4,
    //         ],
    //       },
    //       {
    //         id: "connecting-suite-1-king-2-queens",
    //         title: "Connecting Suite 1 King / 2 Queens",
    //         subtitle: "Ocean View",
    //         image: AllImages.waldorfWeb628OceanFrontSuiteWithKingSizeBedK1rvx14,
    //         description: "Sleeps 7. Living area, ocean view, balcony.",
    //         stats: [
    //           { label: "View", value: "Ocean View" },
    //           { label: "Guests", value: "7 Guests" },
    //         ],
    //         groups: [
    //           {
    //             title: "Room highlights",
    //             items: [
    //               "Sleeps 7",
    //               "Living area",
    //               "Ocean view",
    //               "Balcony",
    //             ],
    //           },
    //         ],
    //         gallery: [
    //           AllImages.waldorfWeb628OceanFrontSuiteWithKingSizeBedK1rvx14,
    //         ],
    //       },
    //       {
    //         id: "ocean-front-master-corner-suite-with-king-bed",
    //         title: "Ocean Front Master Corner Suite with King Bed",
    //         subtitle: "1 King Bed · Ocean View",
    //         image: AllImages.waldorfWebWaldorfAstoriaCancunMaster602c,
    //         description: "Sleeps 3. Dining area, full-size refrigerator, corner room, ocean view, living area.",
    //         stats: [
    //           { label: "View", value: "Ocean View" },
    //           { label: "Bedding", value: "1 King Bed" },
    //           { label: "Guests", value: "3 Guests" },
    //         ],
    //         groups: [
    //           {
    //             title: "Room highlights",
    //             items: [
    //               "Sleeps 3",
    //               "Dining area",
    //               "Full-size refrigerator",
    //               "Corner room",
    //               "Ocean view",
    //               "Living area",
    //             ],
    //           },
    //         ],
    //         gallery: [
    //           AllImages.waldorfWebWaldorfAstoriaCancunMaster602c,
    //         ],
    //       },
    //       {
    //         id: "ocean-front-swim-up-master-corner-suite",
    //         title: "Ocean Front Swim up Master Corner Suite",
    //         subtitle: "Ocean View",
    //         image: AllImages.waldorfWebWaldorfAstoriaCancunMasterCornerSuiteSwimUp1,
    //         description: "Sleeps 3. Dining area, full-size refrigerator, corner room, ocean view, living area.",
    //         stats: [
    //           { label: "View", value: "Ocean View" },
    //           { label: "Guests", value: "3 Guests" },
    //         ],
    //         groups: [
    //           {
    //             title: "Room highlights",
    //             items: [
    //               "Sleeps 3",
    //               "Dining area",
    //               "Full-size refrigerator",
    //               "Corner room",
    //               "Ocean view",
    //               "Living area",
    //             ],
    //           },
    //         ],
    //         gallery: [
    //           AllImages.waldorfWebWaldorfAstoriaCancunMasterCornerSuiteSwimUp1,
    //         ],
    //       },
    //       {
    //         id: "ocean-front-2-bedroom-presidential-suite",
    //         title: "Ocean Front 2 Bedroom Presidential Suite",
    //         subtitle: "Ocean View",
    //         image: AllImages.waldorfWebWaldorfAstoriaCunPresidential06,
    //         description: "Sleeps 7. Dining area, full-size refrigerator, ocean view, living area.",
    //         stats: [
    //           { label: "View", value: "Ocean View" },
    //           { label: "Guests", value: "7 Guests" },
    //         ],
    //         groups: [
    //           {
    //             title: "Room highlights",
    //             items: [
    //               "Sleeps 7",
    //               "Dining area",
    //               "Full-size refrigerator",
    //               "Ocean view",
    //               "Living area",
    //             ],
    //           },
    //         ],
    //         gallery: [
    //           AllImages.waldorfWebWaldorfAstoriaCunPresidential06,
    //         ],
    //       },
      // @rooms:end hotel-site

      // @rooms:begin original | The original four rooms
    //       {
    //         id: "ocean-front-view",
    //         title: "Ocean Front View",
    //         subtitle: "1 King or 2 Queen Beds · Ocean View",
    //         image: AllImages.series.waldorfRooms[0],
    //         description: "One king or two queen beds, private balcony with plunge pool, and floor-to-ceiling windows framing dramatic views of the Caribbean sea.",
    //         stats: [
    //           { label: "Bedding", value: "1 King or 2 Queen Beds" },
    //           { label: "View", value: "Ocean View" },
    //           { label: "Hotel", value: "Waldorf Astoria Riviera Maya" },
    //         ],
    //         gallery: rotate([AllImages.series.waldorfRooms[0], ...AllImages.series.waldorfRoomDetail], 0),
    //       },
    //       {
    //         id: "deluxe-ocean-front-view-room",
    //         title: "Deluxe Ocean Front View Room",
    //         subtitle: "1 King or 2 Queen Beds · Ocean View",
    //         image: AllImages.series.waldorfRooms[1],
    //         description: "Spacious luxury bedroom with private furnished balcony, plunge pool, and expansive vistas of the turquoise waters.",
    //         stats: [
    //           { label: "Bedding", value: "1 King or 2 Queen Beds" },
    //           { label: "View", value: "Ocean View" },
    //           { label: "Hotel", value: "Waldorf Astoria Riviera Maya" },
    //         ],
    //         gallery: rotate([AllImages.series.waldorfRooms[1], ...AllImages.series.waldorfRoomDetail], 0),
    //       },
    //       {
    //         id: "swim-up-pool-room",
    //         title: "Swim Up Pool Room",
    //         subtitle: "1 King or 2 Queen Beds · Ocean View",
    //         image: AllImages.series.waldorfRooms[2],
    //         description: "Direct swim-up terrace access seamlessly connecting your private patio to the refreshing waters.",
    //         stats: [
    //           { label: "Bedding", value: "1 King or 2 Queen Beds" },
    //           { label: "View", value: "Ocean View" },
    //           { label: "Hotel", value: "Waldorf Astoria Riviera Maya" },
    //         ],
    //         gallery: rotate([AllImages.series.waldorfRooms[2], ...AllImages.series.waldorfRoomDetail], 0),
    //       },
    //       {
    //         id: "ocean-front-king-suite",
    //         title: "Ocean Front King Suite",
    //         subtitle: "1 King Bedroom · Ocean View",
    //         image: AllImages.series.waldorfRooms[3],
    //         description: "An expansive suite featuring a separate living salon, master bedroom overlooking the Caribbean, and an expansive oceanfront balcony.",
    //         stats: [
    //           { label: "Bedding", value: "1 King Bedroom" },
    //           { label: "View", value: "Ocean View" },
    //           { label: "Hotel", value: "Waldorf Astoria Riviera Maya" },
    //         ],
    //         gallery: rotate([AllImages.series.waldorfRooms[3], ...AllImages.series.waldorfRoomDetail], 0),
    //       },
      // @rooms:end original
    ],
  },
  dining: {
    title: "Dining",
    description: "",
    images: [AllImages.series.waldorf[1], ...AllImages.series.waldorfGallery],
    items: [
      {
        id: "chaya",
        title: "Chaya",
        subtitle: "Mexican & International · Breakfast, Lunch & Dinner",
        image: AllImages.series.waldorfGallery[0],
        description: "The central dining hub for festive Passover meals, bountiful gourmet buffets, live carving stations, and daily culinary variety prepared by our master chefs.",
        stats: [
          { label: "Cuisine", value: "Mexican & International" },
          { label: "Meal Period", value: "Breakfast, Lunch & Dinner" },
          { label: "Hours", value: "7:00 AM – 11:00 PM" },
          { label: "Dress Code", value: "Smart Casual" },
        ],
        groups: [
          { title: "Schedule", items: ["Monday to Sunday: 7:00 AM – 11:00 PM"] },
        ],
        gallery: rotate(AllImages.series.waldorfGallery, 0),
      },
      {
        id: "malpeque",
        title: "Malpeque",
        subtitle: "Seafood & Wood-Fired Grill · Lunch & Dinner",
        image: AllImages.series.waldorfGallery[1],
        description: "Signature wood-fired kosher dining celebrating fresh catch of the day, prime cut steaks, and inventive Mediterranean presentations overlooking the ocean.",
        stats: [
          { label: "Cuisine", value: "Seafood & Wood-Fired Grill" },
          { label: "Meal Period", value: "Lunch & Dinner" },
          { label: "Hours", value: "12:30 PM – 10:30 PM" },
          { label: "Dress Code", value: "Smart Casual" },
        ],
        groups: [
          { title: "Schedule", items: ["Monday to Sunday: 12:30 PM – 10:30 PM"] },
        ],
        gallery: rotate(AllImages.series.waldorfGallery, 1),
      },
      {
        id: "jao",
        title: "JA'O",
        subtitle: "Regional Mexican · Lunch & Dinner",
        image: AllImages.series.waldorfGallery[2],
        description: "Authentic regional Mexican recipes crafted with hand-pressed Passover tortillas, slow-braised meats, tropical salsas and refreshing mocktails.",
        stats: [
          { label: "Cuisine", value: "Regional Mexican" },
          { label: "Meal Period", value: "Lunch & Dinner" },
          { label: "Hours", value: "1:00 PM – 10:00 PM" },
          { label: "Dress Code", value: "Casual" },
        ],
        groups: [
          { title: "Schedule", items: ["Monday to Sunday: 1:00 PM – 10:00 PM"] },
        ],
        gallery: rotate(AllImages.series.waldorfGallery, 2),
      },
      {
        id: "peacock-alley",
        title: "Peacock Alley",
        subtitle: "Café & Lounge · All Day",
        image: AllImages.series.waldorfGallery[3],
        description: "The iconic Waldorf Astoria gathering space, serving artisanal coffees, herbal teas, holiday pastries, and relaxing evening drinks in an elegant social atmosphere.",
        stats: [
          { label: "Cuisine", value: "Café & Lounge" },
          { label: "Meal Period", value: "All Day" },
          { label: "Hours", value: "7:00 AM – 11:00 PM" },
          { label: "Dress Code", value: "Resort Casual" },
        ],
        groups: [
          { title: "Schedule", items: ["Monday to Sunday: 7:00 AM – 11:00 PM"] },
        ],
        gallery: rotate(AllImages.series.waldorfGallery, 3),
      },
      {
        id: "coco-caffe",
        title: "Coco Caffe",
        subtitle: "Artisanal Coffee & Pastries · All Day",
        image: AllImages.series.waldorfGallery[4],
        description: "Freshly brewed specialty coffees, kosher pastries, smoothies, and grab-and-go refreshments throughout the day.",
        stats: [
          { label: "Cuisine", value: "Artisanal Coffee & Pastries" },
          { label: "Meal Period", value: "All Day" },
          { label: "Hours", value: "6:30 AM – 8:00 PM" },
          { label: "Dress Code", value: "Casual" },
        ],
        groups: [{ title: "Schedule", items: ["Monday to Sunday: 6:30 AM – 8:00 PM"] }],
        gallery: rotate(AllImages.series.waldorfGallery, 4),
      },
      {
        id: "crema-maya-ice-cream",
        title: "Crema Maya Ice Cream",
        subtitle: "Kosher Ice Cream & Gelato · 11:00 AM - 9:00 PM",
        image: AllImages.series.waldorfGallery[5],
        description: "Artisanal kosher gelato and ice cream made fresh daily with tropical fruit infusions and rich decadent flavors.",
        stats: [
          { label: "Cuisine", value: "Kosher Ice Cream & Gelato" },
          { label: "Meal Period", value: "11:00 AM - 9:00 PM" },
          { label: "Hours", value: "11:00 AM – 9:00 PM" },
          { label: "Dress Code", value: "Casual" },
        ],
        groups: [
          { title: "Schedule", items: ["Monday to Sunday: 11:00 AM – 9:00 PM"] },
        ],
        gallery: rotate(AllImages.series.waldorfGallery, 5),
      },
    ],
  },
  pools: {
    title: "Pools & Beach",
    description: "",
    images: [AllImages.series.waldorf[2], ...AllImages.series.waldorfPools],
    items: [
      {
        id: "ocean-front-infinity-pool",
        title: "Ocean Front Infinity Pool",
        subtitle: "Beach · Oceanfront terrace",
        image: AllImages.series.waldorfPools[0],
        description: "The centerpiece infinity pool visually blending into the Caribbean Sea, lined with submerged sun loungers, luxury daybeds, and attentive towel service.",
        stats: [
          { label: "Type", value: "Beach" },
          { label: "Hours", value: "7:00 AM – 8:00 PM" },
          { label: "Location", value: "Oceanfront terrace" },
        ],
        groups: [{ title: "Schedule", items: ["Monday to Sunday: 7:00 AM – 8:00 PM"] }],
        gallery: rotate(AllImages.series.waldorfPools, 0),
      },
      {
        id: "diamond-exclusive-beaches",
        title: "Diamond Exclusive Beaches",
        subtitle: "Beach · Riviera Maya Coastline",
        image: AllImages.series.waldorfPools[1],
        description: "Pristine private white sand beaches exclusively reserved for Diamond Club guests, with dedicated loungers and personalized service.",
        stats: [
          { label: "Type", value: "Beach" },
          { label: "Hours", value: "8:00 AM – 7:00 PM" },
          { label: "Location", value: "Riviera Maya Coastline" },
        ],
        groups: [{ title: "Schedule", items: ["Monday to Sunday: 8:00 AM – 7:00 PM"] }],
        gallery: rotate(AllImages.series.waldorfPools, 1),
      },
      {
        id: "pool-bar",
        title: "Pool Bar",
        subtitle: "Pool · Poolside Deck",
        image: AllImages.series.waldorfPools[2],
        description: "Shaded poolside bar serving handcrafted mocktails, fresh coconut water, tropical fruit smoothies, and light refreshments.",
        stats: [
          { label: "Type", value: "Pool" },
          { label: "Hours", value: "10:00 AM – 6:30 PM" },
          { label: "Location", value: "Poolside Deck" },
        ],
        groups: [
          { title: "Schedule", items: ["Monday to Sunday: 10:00 AM – 6:30 PM"] },
        ],
        gallery: rotate(AllImages.series.waldorfPools, 2),
      },
      {
        id: "private-cabanas",
        title: "Private Cabanas",
        subtitle: "Beach · Beach & Poolfront",
        image: AllImages.series.waldorfPools[3],
        description: "Exclusive shaded cabanas featuring plush daybeds, chilled towels, refreshing fruit platters, and dedicated attendant service.",
        stats: [
          { label: "Type", value: "Beach" },
          { label: "Hours", value: "8:00 AM – 7:00 PM" },
          { label: "Location", value: "Beach & Poolfront" },
        ],
        groups: [{ title: "Schedule", items: ["Monday to Sunday: 8:00 AM – 7:00 PM"] }],
        gallery: rotate(AllImages.series.waldorfPools, 3),
      },
    ],
  },
  wellness: {
    title: "Wellness & Fitness",
    description: "",
    images: [AllImages.series.waldorf[3], AllImages.series.waldorfGallery[1], AllImages.series.waldorfGallery[4]],
    activities: [
      {
        id: "facials",
        title: "Facials",
        description: "Curated, prestige skincare and technology for a tailored facial.",
      },
      {
        id: "massages",
        title: "Massages",
        description: "Deeply relaxing from head to toe, for every kind of tension.",
      },
      {
        id: "steam-room",
        title: "Steam Room",
        description: "Detoxify, relax and rejuvenate as the soothing steam restores you.",
      },
      {
        id: "body-treatments",
        title: "Body treatments",
        description: "Body rituals that offer a journey of renewal through time-honoured techniques.",
      },
      {
        id: "salt-and-soul-yoga",
        title: "Salt & Soul Yoga",
        description: "Yoga classes, meditation and wellness workshops.",
      },
      {
        id: "rituals",
        title: "Rituals",
        description: "Drawn from ancient traditions, our spa rituals restore balance.",
      },
      { id: "meditation", title: "Meditation", description: "Guided sessions to start or close the day." },
      {
        id: "fitness-with-haya",
        title: "Fitness with Haya",
        description: "Daily fitness classes to challenge your body with the resort team.",
      },
      {
        id: "floating-core-workout",
        title: "Floating Core Workout",
        description: "A pool-based workout with stunning views over the ocean.",
      },
    ],
  },
  gallery: {
    title: "Gallery",
    description: "The hotel, and moments from last year's Passover program.",
    images: [AllImages.series.waldorf[4], ...AllImages.series.waldorfGallery, ...GUETTAWAY_PROGRAM_GALLERY],
  },
};
