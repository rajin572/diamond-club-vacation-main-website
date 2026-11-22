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
    kicker: "A New Standard in Luxury Kosher Hospitality",
    title: "The Kosher Resort That Has It All",
    // The wide daytime aerial photo, sea to forest (client 2026-11-22); 3:1, the shape of the banner, so nothing is cropped.
    image: AllImages.casaNizucHeroWide,
  },

  // The "Discover" cards at the top (client 2026-10-26, same as the Passover > Diamond Blue > Casa Nizuc page): each one leads to its section below.
  // The lines are the sections' own headings, nothing new.
  // "Discover & Reserve Your Experience" (client's website design package, 2026-11-22): six boxes, each opening where that experience is
  // booked. Hotel Accommodations opens Casa Nizuc's official Marriott page; the client asked for no booking-system wording on that box.
  overview: {
    title: "Discover & Reserve Your Experience",
    lead: "Six clear paths. Every experience is easy to find and book.",
    cards: [
      { id: "stay", title: "Hotel Accommodations", description: "Book your stay.", image: AllImages.casaNizucTowerDay },
      { id: "gkde", title: "Gourmet Kosher Dining", description: "Reserve your daily Gourmet Kosher Dining Experience (GKDE).", image: AllImages.casaNizucGkdeDining },
      { id: "shabbat", title: "Shabbat Experience", description: "Book a Friday–Sunday Shabbat dining package.", image: AllImages.casaNizucAshanRender },
      { id: "restaurants", title: "Restaurant Tables", description: "Book Ashan, Mayim, Zait or another participating restaurant.", image: AllImages.casaNizucDiningZait },
      { id: "ofek", title: "Ofek Rooftop", description: "Explore and reserve rooftop dining experiences.", image: AllImages.casaNizucOfekRooftop },
      { id: "events", title: "Private Events", description: "Weddings, mitzvahs, celebrations, and groups.", image: AllImages.casaNizucEventsChandeliers },
    ],
  },

  // The About page (client 2026-11-15, "Caza Nizuc Main Page"). Text between asterisks is emphasised, as in the document.
  aboutPage: {
    kicker: "One Destination. So Much to Experience.",
    title: "Welcome to Casa Nizuc",
    subtitle: "A New Standard in Resort Hospitality",
    welcome: [
      "Just 10 minutes from Cancun International Airport, *Casa Nizuc* introduces a refreshing new concept in upscale resort hospitality, bringing together stylish accommodations, exceptional kosher dining, vibrant entertainment, and an extraordinary variety of experiences in one remarkable destination.",
      "More than simply a place to stay, Casa Nizuc offers a complete vacation experience, combining comfort, convenience, warm hospitality, and an impressive collection of dining, leisure, and entertainment options.",
    ],
    culinary: {
      title: "An Unprecedented Kosher Culinary Experience",
      image: AllImages.casaNizucAshanRender,
      paragraphs: [
        "At the heart of Casa Nizuc is an extraordinary culinary offering, featuring *an unprecedented variety of kosher dining options, all within one resort destination.*",
        "From an elegant steakhouse featuring a futuristic dining experience to a spectacular Mediterranean specialty restaurant on the 23rd floor offering breathtaking 360-degree panoramic views of the lagoon and Caribbean Sea, to delicious dairy breakfasts and lunches, rooftop sushi and tapas, a specialty coffee shop, and casual poolside favorites, each venue offers its own distinctive flavors and atmosphere.",
      ],
      kashrut: "*All kosher dining is maintained under the highest standards of Kashrut, featuring Glatt Kosher Beit Yosef meats and Chalav Yisroel dairy products, under strict kosher supervision.*",
    },
    beyond: {
      title: "Beyond the Dining Experience",
      image: AllImages.casaNizucBeachClubMap,
      paragraphs: [
        "Casa Nizuc is about much more than exceptional cuisine.",
        "Guests can enjoy inviting swimming pools, entertainment, welcoming social spaces, and an exclusive beach club located just across the street.",
        "Adding another exciting dimension is *La Aldea Village, scheduled to open in April 2027* — a vibrant destination featuring shopping, dining, entertainment, and beautifully designed gathering spaces that extend the experience beyond the resort itself.",
        "Whether you're planning a weekend getaway, a family vacation, or a special holiday celebration, Casa Nizuc brings together comfort, variety, convenience, and memorable experiences in one remarkable destination.",
      ],
    },
    closing: "Casa Nizuc — One Destination. So Much to Experience.",
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


  // The Overview page (client 2026-11-15, "CASA NIZUC Overview Page"). The Book Your Stay button has to go to the Casa Nizuc Marriott
  // reservation page; the client still has to send that URL, until then it opens the Inquire form.
  overviewPage: {
    kicker: "One Destination. So Much to Experience.",
    title: "Welcome to Casa Nizuc",
    subtitle: "A New Standard in Resort Hospitality",
    introTitle: "Discover the Casa Nizuc Experience",
    intro: [
      "Just 10 minutes from Cancun International Airport, Casa Nizuc introduces a refreshing new concept in upscale resort hospitality, bringing together stylish accommodations, an unprecedented variety of kosher dining options, vibrant entertainment, and an exciting collection of experiences in one remarkable destination.",
      "From exceptional culinary experiences maintained under the highest standards of Kashrut to inviting swimming pools, an exclusive beach club across the street, and the upcoming La Aldea Village, Casa Nizuc offers so much more than a traditional hotel stay.",
    ],
    exploreTitle: "One Destination. Endless Possibilities.",
    // `href` is left out for the boxes whose pages do not exist yet.
    boxes: [
      { title: "Gourmet Kosher Dining", text: "An unprecedented collection of kosher dining experiences, from a futuristic steakhouse to spectacular rooftop cuisine, dairy favorites, and more — all under the highest standards of Kashrut.", image: AllImages.casaNizucGkdeDining, href: "gkde" },
      { title: "Accommodations", text: "Discover stylish rooms and suites thoughtfully designed for comfort, relaxation, and memorable stays in the Mexican Caribbean.", image: AllImages.casaNizucRoomSuiteLiving },
      { title: "La Aldea Village", notice: "Opening April 2027", text: "Discover an exciting village-style destination featuring shopping, dining, entertainment, and inviting social spaces, all within a vibrant architectural setting.", image: AllImages.casaNizucEntrance },
      { title: "Exclusive Beach Club", notice: "Opening March 2027", text: "Experience the beauty of the Caribbean at the exclusive Casa Nizuc Beach Club, conveniently located across the street from the resort.", image: AllImages.casaNizucBeachClubMap },
      { title: "Entertainment & Experiences", text: "From rooftop gatherings to exciting entertainment and memorable activities, discover a destination where there's always something happening.", image: AllImages.casaNizucTowerNight, href: "calendar" },
      { title: "Pools & Relaxation", text: "Unwind in inviting swimming pools, enjoy the Caribbean sunshine, and discover welcoming spaces designed for relaxation and enjoyment.", image: AllImages.casaNizucWaterSlidePool },
    ],
    // The featured promotion: the next holiday program from the season calendar below.
    featured: {
      kicker: "What's Happening at Casa Nizuc",
      title: "Passover at Casa Nizuc",
      text: "The Pesach program, perfected: a full kosher-for-Passover program with every meal, elegant Sedarim, scholars-in-residence, and kids' and teen programs.",
      dates: "Pesach begins evening of Apr 21, 2027",
      image: AllImages.casaNizucTowerNight,
      cta: "Discover more",
    },
    closing: {
      title: "Your Getaway. Your Experience.",
      text: "Whether you're planning a weekend escape, a family vacation, or a special holiday celebration, Casa Nizuc brings together exceptional dining, memorable experiences, and warm hospitality in one remarkable destination.",
      line: "Casa Nizuc — One Destination. So Much to Experience.",
    },
  },


  shabbat: {
    // The Shabbat page text, as sent by the client (2026-11-15, "Shabbat at Casa Nizuc – website page"). The placeholders in it (the
    // Shabbat Experience prices, the hechsher's name) are not shown until the client sends them.
    heading: "Shabbat, the way it should feel.",
    lead: "A real Shabbat by the Caribbean. Services, meals, kiddush and rest – all arranged, all on site, every week.",
    introHeading: "Most resorts tolerate Shabbat. Casa Nizuc was built for it.",
    text: "From candle lighting to Havdalah, everything you need is already in place: a synagogue in the building, Shabbat elevators, physical room keys and a kitchen that cooks for Shabbat the way your family does. You don't plan Shabbat here. You just keep it.",
    introText: "From candle lighting to Havdalah, everything you need is already in place: a synagogue in the building, Shabbat elevators, physical room keys and a kitchen that cooks for Shabbat the way your family does.",
    keepLine: "You don't plan Shabbat here. You just keep it.",
    highlights: [
      { title: "Shul in the building", text: "A dedicated synagogue, fully equipped with sefarim, steps from your room." },
      { title: "Shabbat elevators", text: "Programmed to stop automatically, so you move through the hotel with ease." },
      { title: "Physical room keys", text: "Every room has a traditional Shabbat key alongside the key card." },
      { title: "Everything is kosher", text: "Every restaurant, bar and coffee shop. No need to ask which one is safe." },
    ],
    stepsTitle: "From Friday afternoon to Motzei Shabbat",
    steps: [
      { when: "Friday afternoon", title: "Settle in", text: "Pick up your physical key, switch your room to Shabbat mode, and reserve your meals." },
      { when: "Before sunset", title: "Candle lighting", text: "A dedicated candle-lighting area in the lobby, with candles provided." },
      { when: "Friday evening", title: "Kabbalat Shabbat & Maariv", text: "Services in our on-site synagogue." },
      { when: "Friday night", title: "Shabbat dinner", text: "Kiddush, fresh challah and a festive dinner at Zait or Ashan." },
      { when: "Shabbat morning", title: "Shacharit & kiddush", text: "Davening and Torah reading, a kiddush and a Light & Cold breakfast." },
      { when: "Shabbat day", title: "Shabbat lunch", text: "A traditional, full-service lunch – then rest by the pool." },
      { when: "Late afternoon", title: "Seudah shlishit & Mincha", text: "A light third meal, then Mincha and Maariv as Shabbat ends." },
      { when: "Motzei Shabbat", title: "Havdalah", text: "Havdalah, then the restaurants and rooftop reopen for the night." },
    ],
    scheduleNote: "Weekly davening and meal times are available at the front desk and on WhatsApp.",
    gastronomy: {
      title: "A weekend of exceptional gastronomy",
      text: "Our Shabbat dining honors tradition through a modern lens – one seamless experience from your first Friday-night toast to the final Shabbat meal.",
      meals: [
        { when: "Friday night", title: "Signature Shabbat dinner", text: "Kiddush, fresh challah and a festive menu. Choose Zait Mediterranean or Ashan Prime Steakhouse." },
        { when: "Shabbat morning", title: "“Light & Cold” breakfast", text: "A gentle start to the day before or after davening." },
        { when: "Shabbat day", title: "Traditional Shabbat lunch", text: "Full service in the same elegant setting as your Friday dinner – cholent, kugels and the dishes you grew up with." },
      ],
      note: "A hybrid service that blends the abundance of a premier buffet with the personal touch of à la carte. Our chefs write a new menu every week.",
      reserveTitle: "Shabbat Experience",
      reserveText: "Reserve by Thursday. GKDE guests: Shabbat meals are part of your package – just book your table.",
    },
    readyTitle: "We thought of everything, so you don't have to.",
    ready: [
      { title: "Physical Shabbat keys", text: "Every guest room offers a traditional key alongside the magnetic key card." },
      { title: "Shabbat elevators", text: "Programmed to stop automatically throughout Shabbat and Yom Tov." },
      { title: "Shabbat-ready rooms", text: "Electronic sensors switch to manual for a worry-free Shabbat." },
      { title: "Shabbat night lights", text: "Shabbat-friendly night lights in every room." },
      { title: "On-site synagogue", text: "A year-round space for prayer, fully equipped with sefarim for daily and Shabbat services." },
      { title: "Manual washing stations", text: "At every restaurant and in common areas." },
      { title: "Kosher wine cellar", text: "A curated cellar of kosher wines, poured at every restaurant and bar." },
      { title: "Mikvah", text: "An on-site mikvah is on its way.", soon: true },
    ],
    quote: "Candles lit, the shul downstairs, the ocean outside. This is Shabbat the way it should feel.",
    goodToKnow: [
      { title: "Reserve your meals", text: "Book Friday night and Shabbat lunch by Thursday at the front desk, on WhatsApp or online." },
      { title: "Your room for Shabbat", text: "Ask at check-in for your physical key and Shabbat mode – sensors switch to manual and night lights stay on." },
      { title: "Kosher supervision", text: "Glatt Kosher Beit Yosef meat · Chalav Yisroel dairy." },
      { title: "Motzei Shabbat", text: "Havdalah, then the restaurants reopen – and Ofek rooftop comes alive for the week's biggest night." },
    ],
    closing: { title: "Spend your next Shabbat with us.", text: "Kosher without compromise. Cancún without limits." },
    image: AllImages.casaNizucAshanRender,
  },

  dining: {
    // The Dining page text, as sent by the client (2026-11-15, "CASA NIZUC DINING PAGE"): seven restaurants, five kosher and two not.
    // Final kosher certification information still has to be verified by the client before publication.
    heading: "Dining at Casa Nizuc",
    tagline: "A World of Flavors. One Extraordinary Destination.",
    kicker: "Discover. Explore. Indulge.",
    lead: "From sophisticated restaurants and breathtaking rooftop settings to relaxed cafés and casual poolside favorites, every venue has its own character, atmosphere and flavors.",
    introTitle: "Discover Your Next Dining Experience",
    intro: [
      "At Casa Nizuc, dining is more than a meal — it's an experience to discover.",
      "From sophisticated restaurants and breathtaking rooftop settings to relaxed cafés and casual poolside favorites, Casa Nizuc brings together an exciting collection of culinary destinations, each with its own distinctive character, atmosphere, and flavors.",
      "Whether you're planning a memorable evening, enjoying a leisurely breakfast, or looking for a casual bite between activities, there's something to suit every taste and occasion.",
    ],
    introClosing: "Explore our restaurants, discover their menus, and reserve your table.",
    directoryTitle: "Explore Our Restaurants",
    directoryTagline: "Distinctive Flavors. Memorable Experiences.",
    text: "Five kosher restaurants and two more dining destinations, from a futuristic steakhouse and a Mediterranean restaurant on the 23rd floor to a rooftop, a coffee shop and casual poolside dining.",
    // Each restaurant also has its own page (/casa-nizuc/restaurants/[slug]). `reservations` marks the restaurants that take a table
    // reservation (dinner venues, "reservations recommended"); the others show View Menu / Hours & Location instead.
    // Not sent yet by the client, so not shown: the menus (`menuUrl`, a PDF in /public/brochures), each restaurant's own reservation link
    // (`reservationUrl`, replaces the request form), dress codes and special events.
    venues: [
      {
        name: "Ashan", slug: "ashan", title: "Ashan Steakhouse", concept: "Steakhouse", kosher: true,
        tagline: "An Immersive Steakhouse Experience.",
        text: "Discover an extraordinary steakhouse where sophisticated cuisine meets a futuristic dining environment. Featuring exceptional cuts, inspired presentations, and a distinctive atmosphere, Ashan introduces an exciting new dimension to the steakhouse experience.",
        image: AllImages.casaNizucDiningAshan,
        gallery: [AllImages.casaNizucDiningAshan, AllImages.casaNizucAshanRender],
        kosherInfo: "Kosher · Glatt Kosher, Beit Yosef",
        location: "Inside Casa Nizuc Resort & Spa, Aldea Nizuc, Cancún.",
        reservations: true,
        info: ["Dinner service, reservations recommended.", "Included in the Gourmet Kosher Dining Experience (GKDE)."],
      },
      {
        name: "Zait", slug: "zait", title: "Zait Mediterranean", concept: "Mediterranean", kosher: true,
        tagline: "Extraordinary Cuisine. Breathtaking Views.",
        text: "Perched on the 23rd floor, Zait offers a spectacular Mediterranean dining experience with breathtaking 360-degree panoramic views of the lagoon and Caribbean Sea. Discover inspired Mediterranean flavors in an extraordinary setting high above the destination.",
        image: AllImages.casaNizucDiningZait,
        gallery: [AllImages.casaNizucDiningZait, AllImages.casaNizucDiningZaitTerrace],
        kosherInfo: "Kosher · Glatt Kosher, Beit Yosef",
        location: "On the 23rd floor of Casa Nizuc Resort & Spa, Aldea Nizuc, Cancún.",
        reservations: true,
        info: ["Lunch and dinner, reservations recommended for dinner.", "Home to Casa Nizuc's private Wine Cave.", "Included in the Gourmet Kosher Dining Experience (GKDE)."],
      },
      {
        name: "Mayim", slug: "mayim", title: "Mayim Dairy", concept: "Dairy Restaurant", kosher: true,
        tagline: "A Fresh Approach to Dairy Dining.",
        text: "From delicious breakfasts to inviting dairy lunches, Mayim offers a welcoming setting to enjoy fresh flavors, beautifully prepared dishes, and relaxed dining throughout the day.",
        image: AllImages.casaNizucMayimBuffet,
        gallery: [AllImages.casaNizucMayimBuffet, AllImages.casaNizucDiningMayim],
        kosherInfo: "Kosher · Chalav Yisroel",
        location: "Inside Casa Nizuc Resort & Spa, Aldea Nizuc, Cancún.",
        reservations: true,
        info: ["Breakfast, lunch and dinner.", "Included in the Gourmet Kosher Dining Experience (GKDE)."],
      },
      {
        name: "Ofek", slug: "ofek", title: "Ofek Rooftop", concept: "Sushi & Tapas", kosher: true,
        tagline: "Elevated Flavors. Rooftop Atmosphere.",
        text: "Discover a vibrant rooftop dining experience featuring creative sushi, flavorful tapas, and a contemporary atmosphere designed for memorable evenings.",
        image: AllImages.casaNizucDiningOfek,
        gallery: [AllImages.casaNizucDiningOfek, AllImages.casaNizucOfekRooftop],
        kosherInfo: "Kosher · Glatt Kosher, Beit Yosef",
        location: "On the rooftop of Casa Nizuc Resort & Spa, Aldea Nizuc, Cancún.",
        reservations: false,
        info: ["Adults only.", "Lounge access is included in the Gourmet Kosher Dining Experience (GKDE)."],
      },
      {
        name: "Noam", slug: "noam", title: "Noam Coffee Shop", concept: "Coffee & Café", kosher: true,
        tagline: "Your Perfect Coffee Moment.",
        text: "Whether beginning the morning with a freshly brewed coffee, enjoying a delicious pastry, or taking a relaxing afternoon break, Noam offers an inviting café experience throughout the day.",
        image: AllImages.casaNizucDiningNoam,
        gallery: [AllImages.casaNizucDiningNoam],
        kosherInfo: "Kosher · Chalav Yisroel",
        location: "Inside Casa Nizuc Resort & Spa, Aldea Nizuc, Cancún.",
        reservations: false,
        info: ["Open throughout the day, no reservation needed.", "Included in the Gourmet Kosher Dining Experience (GKDE)."],
      },
      {
        name: "Brisa", slug: "brisa", title: "Brisa", concept: "Casual Poolside Dining", kosher: false,
        tagline: "Relaxed Dining. Tropical Surroundings.",
        text: "Enjoy a casual dining experience in a relaxed resort atmosphere. Brisa offers a welcoming setting for refreshments and casual favorites while enjoying the tropical surroundings of Casa Nizuc.",
        image: AllImages.casaNizucPool,
        gallery: [AllImages.casaNizucPool],
        kosherInfo: "Non-kosher",
        location: "Poolside at Casa Nizuc Resort & Spa, Aldea Nizuc, Cancún.",
        reservations: false,
        info: ["Casual venue, no reservation needed."],
      },
      {
        name: "La Boya", slug: "la-boya", title: "La Boya", concept: "To Be Confirmed", kosher: false,
        tagline: "Discover La Boya.",
        text: "Explore another distinctive dining destination at Casa Nizuc. Full details about La Boya's culinary concept, menu, and dining experience will be added once finalized.",
        image: AllImages.casaNizucDiningMussa,
        gallery: [AllImages.casaNizucDiningMussa],
        kosherInfo: "Non-kosher",
        location: "Casa Nizuc Resort & Spa, Aldea Nizuc, Cancún.",
        reservations: false,
        info: ["Full details will be added once finalized."],
      },
    ],
    meals: [
      { meal: "Breakfast", hours: "7:00 – 11:00", where: "Mayim, Noam", what: "International dairy buffet with show cooking at Mayim; coffee, pastries and grab-and-go at Noam." },
      { meal: "Lunch", hours: "12:00 – 4:00", where: "Mayim, Zait, Noam", what: "Fish, pastas and salads at Mayim; Mediterranean lunch with a view at Zait; light bites at Noam." },
      { meal: "Dinner", hours: "6:00 – 10:30", where: "Âshân, Zait, Mayim", what: "Steakhouse at Âshân, Mediterranean at Zait, dairy dinner at Mayim. Reservations recommended." },
      { meal: "Evening", hours: "", where: "Ofek (adults only)", what: "Premium rooftop: live DJs, weekend events, hookah lounge, cocktails and kosher bites. Lounge access is included in GKDE." },
      { meal: "In-room dining", hours: "", where: "Your room", what: "Kosher in-room dining, delivered sealed." },
    ],
  },

  gkde: {
    // The GKDE landing page text, as sent by the client (2026-11-15, "GKDE · Landing page"): five restaurants now (it was three on 2026-10-27).
    // Not shown because the client left them open: the valid stay dates, the children's age range, whether the price is per night or per stay
    // (the 2026-10-27 text said "per day", kept here), the contact line and the Bonvoy button.
    heading: "Gourmet Kosher Dining Experience",
    image: AllImages.casaNizucGkdeDining,
    tagline: "Forget the buffet line and the wristband.",
    lead: "All-inclusive, reimagined for the kosher traveler. Five chef-driven kosher restaurants, every meal and every soft drink, for your entire stay.",
    badges: ["Glatt Kosher", "Beit Yosef", "Chalav Yisroel"],
    fromLine: "From $200 per adult · Book online and save 20%",
    intro: [
      "The Gourmet Kosher Dining Experience brings the ease of all-inclusive to a far more refined level: five distinct kosher restaurants, each with its own chef-driven menu, setting and certification, all included for the length of your stay.",
      "Sit down to a USDA Prime steak at dusk. Linger over a Mediterranean dinner twenty-three floors above the Caribbean. Start each morning with a fresh, abundant breakfast, and spend your afternoons with espresso, ice cream and ocean views. There is no bill to sign and no menu to price-check, just exceptional kosher cuisine wherever the day takes you.",
    ],
    collectionTitle: "Five kitchens. One effortless stay.",
    venues: [
      { name: "Ashan", tag: "01 · Dinner", kind: "Signature Steakhouse", badge: "Glatt Kosher · Beit Yosef", text: "An evening of quiet luxury. Ashan serves USDA Prime cuts, cooked to order and paired with handcrafted appetizers and elegant sides, in a warm, intimate dining room built for long, unhurried dinners." },
      { name: "Zait", tag: "02 · 23rd floor · Dinner", kind: "Mediterranean Panoramic Restaurant", badge: "Glatt Kosher · Beit Yosef", text: "Twenty-three floors above Cancún, Zait looks out over turquoise water and the glittering Hotel Zone skyline. The menu celebrates the Mediterranean: vibrant mezze, fire-kissed grills and fresh, sun-bright flavors. It is also home to Casa Nizuc's private Wine Cave." },
      { name: "Mayim", tag: "03 · Breakfast · Lunch · Dinner", kind: "Contemporary Dairy Kitchen", badge: "Chalav Yisroel", text: "Bright, airy and modern. Mornings bring an international breakfast spread with freshly baked pastries, a live cooking station, tropical Caribbean fruit and authentic Mexican favorites. Later in the day, Mayim serves fresh fish, hand-rolled pastas, gourmet salads, seasonal chef's creations and house-made desserts." },
      { name: "Noam", tag: "04 · All day", kind: "Artisan Coffee House & Ice Cream Parlour", badge: "Chalav Yisroel", text: "Your favorite stop, any time of day. Expertly pulled espresso, specialty coffees, fresh juices, flaky pastries, gourmet sandwiches and handcrafted ice cream, ready to enjoy on the terrace or take to the beach." },
      { name: "Ofek", tag: "05 · Rooftop · Adults only", kind: "Rooftop Sky Pool & Lounge", badge: "Glatt Kosher · Beit Yosef", text: "The resort's most exclusive address. A rooftop sky pool, private lounges, a curated bites menu and refreshing signature non-alcoholic drinks, all set against endless ocean views as the sun goes down." },
    ],
    day: {
      tag: "A day at Casa Nizuc",
      title: "From first espresso to the last sunset, it's all taken care of.",
      items: [
        { when: "Morning", venue: "Mayim", text: "Breakfast spread, live cooking station, tropical fruit." },
        { when: "Midday", venue: "Noam", text: "Espresso, a gourmet sandwich, ice cream for the beach." },
        { when: "Afternoon", venue: "Ofek", text: "Rooftop lounge, sky pool and bites as the sun drops." },
        { when: "Evening", venue: "Ashan or Zait", text: "Prime steak by candlelight, or dinner above the skyline." },
      ],
    },
    included: {
      tag: "What's included",
      title: "Everything on the table.",
      subtitle: "Included for your entire stay",
      items: [
        "Unlimited dining at all five kosher restaurants",
        "Breakfast, lunch, dinner and all-day snacks",
        "Specialty coffees, fresh juices and soft drinks",
        "Desserts, pastries and ice cream all day",
        "Access to the adults-only Ofek rooftop lounge",
        "Signature non-alcoholic drinks",
      ],
      notIncludedTitle: "Not included",
      notIncluded: "Alcoholic beverages, including wine, beer, spirits and cocktails. These are available à la carte throughout the resort, including selections from the Zait Wine Cave.",
    },
    pricing: {
      tag: "Pricing",
      title: "Reserve online and save 20%.",
      text: "The same plan purchased at the front desk on arrival is 20% higher.",
      rates: [
        { label: "Adult", price: "$200", online: "USD per day · online", desk: "$240" },
        { label: "Child", price: "$80", online: "USD per day · online", desk: "$96" },
      ],
      promoLabel: "Use promo code",
      promoCode: "GKDE2026",
    },
    needToKnow: {
      title: "The details.",
      items: [
        { label: "Availability", value: "Exclusive to Casa Nizuc" },
        { label: "Families", value: "Two-bedroom family suites available" },
        { label: "Promo code", value: "GKDE2026" },
        { label: "Beverages", value: "Soft drinks included. Alcohol à la carte." },
        { label: "Ofek rooftop", value: "Adults only" },
      ],
      bonvoy: "Make memories. Earn points. Join Marriott Bonvoy for free and earn points toward free nights.",
    },
    closing: {
      title: "Every meal, exceptional. Every detail, kosher.",
      text: "Reserve the Gourmet Kosher Dining Experience today and live a full gastronomic escape at Casa Nizuc.",
      cta: "Book now · Code GKDE2026",
      footer: "Casa Nizuc, A Tribute Portfolio Resort · Cancún, Mexico. Kosher dining by Diamond Club Vacations.",
    },
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
    heading: "Every holiday. Full programming. All inclusive.",
    lead: "Four times a year, Casa Nizuc becomes a complete kosher holiday program. All-inclusive extended packages are available to pre-book now.",
    text: "Shabbat and GKDE are here every week. The holiday seasons are bigger: every meal included, daily activities for every age and evenings worth staying up for. Book early, these seasons sell out first.",
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
