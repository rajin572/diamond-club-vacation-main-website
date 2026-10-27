import { AllImages } from "../../../public/images/AllImages";

/**
 * The year-round Casa Nizuc page (/casa-nizuc, client 2026-10-22: completely separate from Diamond Blue's Casa Nizuc).
 * Copy and photos from the client's "Casa Nizuc Kosher Marketing Packet" (October 2026), pages 01 to 06 and the contact block: everything in
 * normal type is published; the boxes "for the marketing team" are not. Items the packet still has to confirm and has no text for (the
 * hechsher's name and logo, the GKDE stay dates, the Ofek Saturday-night menu, age limit and prices, the DCV phone / WhatsApp) are not shown.
 * The Mikvah is "coming soon". The packet's photos of the Barawa pool bar show swimwear, so the aerial pool photo is used for it and for Summer.
 */
export const CASA_NIZUC_PAGE = {
  hero: {
    kicker: "A Tribute Portfolio Resort by Marriott · A DCV Concept",
    title: "The Kosher Resort That Has It All",
    subtitle: "Dining · Shabbat · GKDE · The Four Seasons · Events & Celebrations",
    // The daytime aerial photo, the same banner as the Passover (Diamond Blue) Casa Nizuc page (client 2026-10-26).
    image: AllImages.series.casa[0],
  },

  // The "Discover" cards at the top (client 2026-10-26, same as the Passover > Diamond Blue > Casa Nizuc page): each one leads to its section below.
  // The lines are the sections' own headings, nothing new.
  overview: {
    title: "Discover Casa Nizuc",
    cards: [
      { id: "about", title: "About", description: "The kosher resort that has it all.", image: AllImages.casaNizucGallery00 },
      { id: "shabbat", title: "Shabbat", description: "Shabbat, the way it should feel.", image: AllImages.casaNizucAshanRender },
      { id: "dining", title: "Dining", description: "Five kosher destinations. One hotel.", image: AllImages.casaNizucDiningZait },
      { id: "gkde", title: "GKDE", description: "The Gourmet Kosher Dining Experience", image: AllImages.casaNizucGkdeDining },
      { id: "seasons", title: "Four Seasons", description: "Full programming. All inclusive.", image: AllImages.casaNizucTowerNight },
      { id: "events", title: "Events & Celebrations", description: "Your simcha. Our stage.", image: AllImages.casaNizucEventsChandeliers },
    ],
  },

  about: {
    heading: "The kosher resort that has it all.",
    lead: "Five kosher dining destinations. A synagogue under our roof. Shabbat elevators, a full Shabbat service and every holiday celebrated in style. Welcome to Casa Nizuc, Cancún.",
    paragraphs: [
      "Casa Nizuc Resort & Spa is a Tribute Portfolio resort by Marriott, set inside Aldea Nizuc in the heart of Cancún's hotel zone, where the jungle meets the Caribbean.",
      "It is also something Cancún has never had: the first hotel in Cancún where every food and beverage outlet is kosher certified. Not a kosher kitchen inside a hotel, a whole hotel built so that kosher families never have to compromise.",
      "We built Casa Nizuc for the way you actually travel. You want a real steakhouse dinner and a dairy breakfast worth waking up for. You want a minyan in the building, an elevator that runs on Shabbat and a key that opens your door without a card.",
      "You want to celebrate a wedding, a bar mitzvah or Pesach without bringing anything from home. It is all here, under one roof, every day of the year.",
    ],
    glance: [
      { value: "235", label: "Rooms · 64 suites" },
      { value: "5", label: "Kosher dining destinations" },
      { value: "3", label: "Heated pools" },
      { value: "300", label: "Seated in the ballroom" },
    ],
    facts: [
      { label: "Synagogue", value: "On-site synagogue (Yuya), seating up to 25" },
      { label: "Kids & teens", value: "Dribblers kids' club (ages 3–10), family pool with waterslides, teen arcade and games room" },
      { label: "Sports", value: "Sky Court: padel, pickleball, basketball" },
      { label: "Events", value: "Rooftop wedding deck 245 ft high, convention center of 8,900+ sq ft" },
      { label: "Location", value: "Aldea Nizuc, Cancún hotel zone, with a shopping and dining village next door" },
    ],
    quote: "We thought of everything, so you don't have to.",
    features: [
      { title: "Every outlet kosher", text: "Every restaurant, bar and coffee shop, under strict supervision." },
      { title: "On-site synagogue", text: "A dedicated, serene space for prayer, inside the hotel." },
      { title: "Shabbat elevators", text: "Programmed to stop on every floor automatically." },
      { title: "Physical room keys", text: "A traditional key option in every room for Shabbat and Yom Tov." },
      { title: "Kosher wine cellar", text: "Curated kosher wines at every restaurant and bar." },
      { title: "Full Shabbat service", text: "Shabbat meals, kiddush and services every week." },
      { title: "Two kosher standards", text: "Glatt Kosher Beit Yosef meat; Chalav Yisroel dairy." },
      { title: "Holiday programming", text: "Full programs for Sukkot, Winter Break, Passover and Summer." },
      { title: "Mikvah", text: "An on-site mikvah is on its way.", soon: true },
    ],
  },

  shabbat: {
    heading: "Shabbat, the way it should feel.",
    lead: "A real Shabbat by the Caribbean. Services, meals, kiddush and rest, all arranged, all on site, every week.",
    text: "Most resorts tolerate Shabbat. Casa Nizuc was built for it. From candle lighting to Havdalah, everything you need is already in place: a synagogue in the building, Shabbat elevators, physical room keys and a kitchen that cooks for Shabbat the way your family does. You don't plan Shabbat here. You just keep it.",
    steps: [
      { title: "Friday afternoon", text: "Physical keys on request; Shabbat elevators start; meals reserved by Thursday." },
      { title: "Candle lighting", text: "A dedicated area in the lobby, candles provided." },
      { title: "Kabbalat Shabbat & Maariv", text: "In our on-site synagogue." },
      { title: "Friday night dinner", text: "Kiddush, fresh challah and a multi-course Shabbat menu." },
      { title: "Shabbat morning", text: "Shacharit, Torah reading and kiddush." },
      { title: "Shabbat lunch", text: "Cholent, kugels, salads, the dishes you grew up with." },
      { title: "Seudah shlishit, Mincha & Maariv", text: "A light third meal, then services as Shabbat ends." },
      { title: "Motzei Shabbat", text: "Havdalah, then the restaurants reopen for a late dinner." },
    ],
    proper: [
      "Shul in the building: services are steps from your room.",
      "Shabbat elevators: stop automatically on every floor.",
      "Physical keys: no electronic key cards on Shabbat.",
      "Shabbat food done right: cooked before Shabbat, kept warm the halachic way, served by staff trained in Shabbat service.",
      "Everything is kosher: no need to ask which outlet is safe.",
      "GKDE guests: Shabbat meals are part of the experience; just reserve your table.",
    ],
    scheduleNote: "Weekly schedule at the front desk and on WhatsApp.",
    image: AllImages.casaNizucAshanRender,
  },

  dining: {
    heading: "Five kosher destinations. One hotel.",
    lead: "From sunrise espresso to a steakhouse dinner 23 floors above the sea, every venue kosher, every day.",
    text: "At Casa Nizuc you don't eat at \"the kosher restaurant.\" You choose between five, each with its own kitchen, chef and personality. Meat is Glatt Kosher Beit Yosef. Dairy is Chalav Yisroel. Kosher wines are poured at every venue.",
    venues: [
      { name: "Âshân", kind: "Signature Glatt Kosher Steakhouse · Beit Yosef", text: "Premium USDA Prime meats, handcrafted appetizers, exceptional global wines and a refined evening atmosphere. The dinner everyone talks about.", badge: "Included in GKDE", image: AllImages.casaNizucDiningAshan },
      { name: "Zait", kind: "Mediterranean Panoramic · Beit Yosef", text: "Perched on the 23rd floor, with panoramic Caribbean and hotel-zone views, authentic Mediterranean cuisine and Casa Nizuc's exclusive kosher Wine Cave.", badge: "Included in GKDE", image: AllImages.casaNizucDiningZait },
      { name: "Mayim", kind: "Three-Meal Dairy Kitchen · Chalav Yisroel", text: "The only kosher international breakfast buffet in Cancún, with show cooking, Caribbean fruit and Mexican specialties. Fresh fish, hand-rolled pastas and desserts at lunch and dinner.", badge: "Included in GKDE", image: AllImages.casaNizucMayimBuffet },
      { name: "Noam", kind: "Artisan Coffee House & Ice Cream Parlour · Chalav Yisroel", text: "Fresh pastries, gourmet sandwiches, specialty coffee, fresh juices, grab-and-go and ice cream, all day long.", badge: "Included in GKDE", image: AllImages.casaNizucDiningNoam },
      { name: "Ofek", kind: "Premium Adults-Only Rooftop Sky Pool & Lounge", text: "Live DJs, weekend events, a hookah lounge, handcrafted cocktails and premium kosher bites above the Caribbean.", badge: "Premium · booked separately", image: AllImages.casaNizucOfekRooftop },
      { name: "Barawa", kind: "Swim-Up Pool Bar", text: "Fresh cocktails, juices and light bites without leaving the water.", badge: "", image: AllImages.casaNizucBarawaPoolBar },
    ],
    meals: [
      { meal: "Breakfast", hours: "7:00 – 11:00", where: "Mayim, Noam", what: "International dairy buffet with show cooking at Mayim; coffee, pastries and grab-and-go at Noam." },
      { meal: "Lunch", hours: "12:00 – 4:00", where: "Mayim, Zait, Noam, Barawa", what: "Fish, pastas and salads at Mayim; Mediterranean lunch with a view at Zait; light bites poolside." },
      { meal: "Dinner", hours: "6:00 – 10:30", where: "Âshân, Zait, Mayim", what: "Steakhouse at Âshân, Mediterranean at Zait, dairy dinner at Mayim. Reservations recommended." },
      { meal: "Evening", hours: "", where: "Ofek (adults only)", what: "Premium rooftop: live DJs, weekend events, hookah lounge, cocktails and kosher bites. Not in GKDE." },
      { meal: "In-room dining", hours: "", where: "Your room", what: "Kosher in-room dining, delivered sealed." },
    ],
  },

  gkde: {
    heading: "GKDE, the Gourmet Kosher Dining Experience",
    image: AllImages.casaNizucGkdeDining,
    lead: "Immerse yourself in an all-gastronomic escape. Unlimited access to our elevated kosher dining concepts and refreshing soft beverages throughout your entire stay.",
    price: { from: "$200", adult: "per adult", child: "$80 per child" },
    includes: [
      "Âshân: Signature Glatt Kosher Steakhouse, Beit Yosef",
      "Zait: Mediterranean Panoramic Restaurant & Wine Cave, Beit Yosef",
      "Mayim: Three-Meal Dairy Kitchen, Chalav Yisroel",
      "Noam: Artisan Coffee House & Ice Cream Parlour, Chalav Yisroel",
      "Soft drinks and beer: throughout your stay",
    ],
    know: [
      "Only at Casa Nizuc.",
      "Soft drinks and beer included. Other alcoholic beverages and cocktails are not.",
      "$200 per adult, $80 per child when booked online. Booked at the front desk, GKDE is 20% higher.",
      "Two-bedroom family suites available.",
      "Promotional code: GKDE2026",
      "Make memories. Earn points. Join Marriott Bonvoy for free.",
    ],
    ofekNote: "Ofek Rooftop is not included in GKDE.",
    ofek: {
      heading: "Ofek. Where the night begins.",
      image: AllImages.casaNizucOfekRooftop,
      lead: "Casa Nizuc's adults-only rooftop sky pool and lounge. Live DJs, weekend events, hookah lounges and the best view in Cancún, all kosher.",
      text: "When the sun drops over the lagoon, the party moves upstairs. Ofek is our premium rooftop setting: handcrafted cocktails, a kosher bites menu, private lounges and a sky pool above the Caribbean. Weekends bring live DJs and special events; the hookah lounge stays open late. This is the night out your vacation has been missing.",
      points: [
        "Live DJs & weekend events: every weekend and holiday season",
        "Hookah lounge: premium blends on the rooftop terrace",
        "Mixology bar: handcrafted cocktails, curated kosher wines",
        "Private lounges & cabanas: your own space for the night",
        "Motzei Shabbat at Ofek: the week's biggest night on the roof",
      ],
    },
  },

  seasons: {
    heading: "Four seasons. Full programming. All inclusive.",
    lead: "Four times a year, Casa Nizuc becomes a complete kosher holiday program. All-inclusive extended packages are available to pre-book now.",
    text: "Shabbat and GKDE are here every week. Four seasons are bigger: every meal included, daily activities for every age and evenings worth staying up for. Book early, these seasons sell out first.",
    list: [
      { name: "Sukkot", image: AllImages.casaNizucSukkotBar, tagline: "Under the Caribbean sky", points: ["A resort sukkah for every Yom Tov and Chol Hamoed meal", "Full Yom Tov program and Simchat Torah hakafot", "Chol Hamoed excursions and evening entertainment"] },
      { name: "Winter Break", image: AllImages.casaNizucTowerDay, tagline: "Swap the snow for the sea", points: ["Late December through New Year's", "Kids' club, teen program, Sky Court tournaments", "Gala dinners and live entertainment nightly"] },
      { name: "Passover", image: AllImages.casaNizucTowerNight, tagline: "The Pesach program, perfected", points: ["Full kosher-for-Passover program, every meal", "Elegant Sedarim, tea room and late-night lounges", "Scholars-in-residence, kids' and teen programs, trips"] },
      { name: "Summer", image: AllImages.casaNizucGallery31, tagline: "The family summer, done right", points: ["Weekly arrivals all summer long", "Camp-style kids' program, waterslides, water sports", "Long Shabbatot, live music and rooftop sunsets"] },
    ],
    calendar: {
      heading: "Season calendar 2026–2027",
      lead: "All-inclusive extended packages available. Reserve early for the best suites.",
      rows: [
        { season: "Winter Break", dates: "Late Dec 2026 – early Jan 2027", program: "4–7 night packages, full programming" },
        { season: "Passover", dates: "Pesach begins evening of Apr 21, 2027", program: "Full holiday program, all meals" },
        { season: "Summer", dates: "Late Jun – late Aug 2027", program: "4–7 night packages, weekly arrivals" },
        { season: "Sukkot", dates: "Begins mid-October 2027", program: "Full Yom Tov program, all meals" },
      ],
    },
    included: [
      { title: "All meals", text: "Every meal and Yom Tov feast, plus tea room and late-night snacks." },
      { title: "Davening & learning", text: "Minyanim in our synagogue, scholars and daily shiurim." },
      { title: "Kids & teens", text: "Supervised programs every day, by age group." },
      { title: "Entertainment", text: "Live music, shows and themed nights." },
      { title: "Excursions", text: "Chol Hamoed and day trips across the Riviera Maya." },
      { title: "Resort life", text: "3 heated pools, beach club, Sky Court and kids' club." },
    ],
  },

  events: {
    heading: "Your simcha. Our stage.",
    image: AllImages.casaNizucEventsChandeliers,
    lead: "Weddings, bar and bat mitzvahs, sheva brachot and family celebrations, fully kosher, by the Caribbean.",
    text: "Planning a kosher simcha abroad usually means flying in caterers, chasing a mashgiach and hoping the hotel understands. At Casa Nizuc, it is already done. Every kitchen is kosher, the synagogue is in the building and our events team knows the difference between a kabbalat panim and a cocktail hour. Bring your guests. We'll take care of the rest.",
    list: [
      { title: "Weddings", text: "The rooftop wedding deck 245 ft above the Caribbean, or the ballroom for 300. Chuppah, kabbalat panim, badeken and a full kosher dinner." },
      { title: "Bar & bat mitzvahs", text: "An aliyah in our own synagogue, a kiddush by the sea and a party to remember." },
      { title: "Sheva brachot", text: "Seven nights, seven settings: Âshân, Zait's Wine Cave, the rooftop, the beach." },
      { title: "Reunions, birthdays, retreats", text: "8,900+ sq ft of meeting space, kosher catering for every session." },
    ],
    capacities: [
      { venue: "Sky Court", banquet: "350", reception: "450" },
      { venue: "Ballroom", banquet: "300", reception: "450" },
      { venue: "El Edén Terrace", banquet: "200", reception: "300" },
      { venue: "Mayim", banquet: "200", reception: "—" },
      { venue: "Rooftop wedding deck", banquet: "150", reception: "200" },
      { venue: "Zait + Wine Cellar", banquet: "90", reception: "—" },
      { venue: "Âshân", banquet: "80", reception: "—" },
    ],
    capacityNote: "Capacities from the Casa Nizuc fact sheet.",
  },

  contact: {
    heading: "Come see it for yourself.",
    subtitle: "Kosher without compromise. Cancún without limits.",
    rows: [
      { label: "Reservations", email: "reservations@casanizuc.com" },
      { label: "Weddings, events & groups", email: "grupos@casanizuc.com" },
      { label: "General information", email: "info@casanizuc.com" },
    ],
    holiday: { label: "Holiday programs", value: "Diamond Club Vacations", note: "Sukkot · Winter Break · Passover · Summer" },
    designLine: "A DCV Concept",
    footer: "Casa Nizuc Resort & Spa · A Tribute Portfolio Resort by Marriott · Aldea Nizuc, Cancún",
    kosherLine: "All food and beverage outlets are under kosher supervision. Meat: Glatt Kosher Beit Yosef. Dairy: Chalav Yisroel.",
  },
};
