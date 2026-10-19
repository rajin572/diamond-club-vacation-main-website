# Client meeting 2026-10-19 — what Abraham wants changed, step by step (with transcript minutes)

Written for: the developer who has to implement the changes (and to re-check them with the client).

**Speakers:** `a` = Abraham (client). `Frontend Developer` = us.
**Two recordings, same day.** The Zoom call hit its time limit, so the transcript has two parts and each part has its own clock:

- **Part 1** — 00:00:00 to 01:00:46 (format `h:mm:ss`). Written below as **P1 hh:mm:ss**.
- **Part 2** — the continuation after Zoom cut the call, 00:26 to 29:52 (format `mm:ss`). Written below as **P2 mm:ss**.

The full transcript of both parts is at the end of this file, unchanged. The auto-transcript mishears many names; this is how they are read here:

| In the transcript | Means |
|---|---|
| Centridges, Santridges, Regis, "the Regis" | The St. Regis Kanai Resort (Diamond Club Reserve) |
| Gateway, Getaway, Gett-away | Guettaway, a Diamond Club production (Waldorf + Park Hyatt) |
| Addition, "the edition" | EDITION (Diamond Club Reserve) |
| Waldorf, World of, Waldrop, "World of Astoria" | Waldorf Astoria Riviera Maya (Guettaway) |
| Park High, Park Hyatt | Park Hyatt Riviera Maya (Guettaway) |
| Kazani, Casanizo, Kazanijook | Casa Nizuc (Diamond Club Blue) |
| Danny Rokov, Dani Rokov, Donny Rakuten | Chef Donny Rogoff |
| Chaim Levy, Jim Levy | Chef Chaim Levy |
| Susha | Zusha (DJ / singer) |
| Fiber, Fire | Fiverr (the chat where files are sent) |
| Rabbi Shalom, Chanan Gordon | the rabbi whose name/text changes on the Scholars card (see item 14) |

---

## Progress (updated 2026-10-19)

**7 done, 9 partly done, 12 not done, 2 info (no website change)** (of 30 steps; the two info steps, 6 and 28, are not website changes). Each step below has a status line.

| # | Step | Status |
|---|---|---|
| 1 | Brochure button | 🟡 PARTLY DONE |
| 2 | Guettaway name | ✅ DONE |
| 3 | St. Regis page — good, but phone swipe | ✅ DONE |
| 4 | Pools are missing photos; where to get content | ✅ DONE |
| 5 | Gallery: add last year's live photos | ✅ DONE |
| 6 | Going live | ℹ️ INFO (not a website change) |
| 7 | Chef | ⬜ NOT DONE |
| 8 | Entertainment — DJ / Zusha card | ⬜ NOT DONE |
| 9 | Home button in the bar | ✅ DONE |
| 10 | Pools & Beaches | 🟡 PARTLY DONE |
| 11 | Remove every "Inquire about this…" button inside details | ✅ DONE |
| 12 | Dining | 🟡 PARTLY DONE |
| 13 | Kosher supervision pop-up | 🟡 PARTLY DONE |
| 14 | Scholars | ⬜ NOT DONE |
| 15 | Program (singular) and Attractions | 🟡 PARTLY DONE |
| 16 | Wellness & Fitness | ⬜ NOT DONE |
| 17 | Spa | ⬜ NOT DONE |
| 18 | Kids program / Day camp | 🟡 PARTLY DONE |
| 19 | Inquiry form | ⬜ NOT DONE |
| 20 | Brand logo | ⬜ NOT DONE |
| 21 | Edition dining | ⬜ NOT DONE |
| 22 | Dining / Edition / Reserve clean-up | 🟡 PARTLY DONE |
| 23 | Edition pools and rooms | ✅ DONE |
| 24 | Guettaway | 🟡 PARTLY DONE |
| 25 | Waldorf and Park Hyatt rooms | 🟡 PARTLY DONE |
| 26 | Guettaway chef picture | ⬜ NOT DONE |
| 27 | Documents | ⬜ NOT DONE |
| 28 | Deadline, holiday and plan | ℹ️ INFO |
| 29 | Going live | ⬜ NOT DONE |
| 30 | Opening splash for Guettaway visitors | ⬜ NOT DONE |

---

## Part 1 — step by step

### 1. Brochure button (P1 00:02:25 – 00:05:12) — 🟡 PARTLY DONE

> **Status:** 🟡 PARTLY DONE. Done 2026-10-19: Brochure button removed from the top menu; every program page and every hotel page now has its own Brochure button under the title. Guettaway opens his PDF (`public/brochures/guettaway.pdf`). **Missing:** the Reserve and Blue brochures (they open the placeholder PDF).
- Take the **Brochure button out of the top menu** on the main screen. It must not be on the main screen, only inside a program (P1 00:02:37–00:02:57).
- Reason: **each of the 3 programs has its own brochure** (Diamond Club Reserve, Guettaway, Diamond Club Blue). The two Reserve hotels share one (P1 00:04:32).
- Put a **Brochure button on each program page**, next to the program title / its paragraph. The client uploaded a mock-up picture in Fiverr to show the place (P1 00:03:08–00:03:31, 00:04:24).
- The 2027 Guettaway brochure sample was uploaded in Fiverr (P1 00:23:04). It is not final.

### 2. Guettaway name (P1 00:05:12 – 00:05:45) — ✅ DONE

> **Status:** ✅ DONE. Done 2026-10-19: "GUETTAWAY" in capitals with "A DIAMOND CLUB PRODUCTION" on the line below (program page, hotel hero, program cards).
- Write it in **capital letters**.
- **Two lines:** "GUETTAWAY" on top, and on the next line "A Diamond Club production".
- Part 2 (P2 08:56–09:33): the client opened Guettaway, saw the name was still the same inside the program, and expected it in capitals there too. Check every page inside the Guettaway program.

### 3. St. Regis page — good, but phone swipe (P1 00:05:45 – 00:06:38) — ✅ DONE

> **Status:** ✅ DONE. Done 2026-10-19: swipe left / right in the photo viewer on a phone (next / previous photo).
- The client loves the St. Regis page and its rooms (P1 00:06:02, 00:06:38).
- **On the phone he cannot swipe** the photo viewer; he has to tap the corners. Add **swipe / drag** on touch screens. On computer it is fine (mouse).

### 4. Pools are missing photos; where to get content (P1 00:06:38 – 00:07:22) — ✅ DONE

> **Status:** ✅ DONE. Done 2026-10-19 (confirmed by the developer): the pools of the St. Regis (Cabanas, Family, Serenity, Main, Whirlpool) and of the Edition (Main Pool, SO'OL Restaurant & Beach Club) now come from each hotel's Marriott Experiences page, with the Marriott photo and facts of every pool. More pool photos from the client can still be added later (see step 10).
- "Pool is missing a lot of photos."
- We said the Figma had few images and we asked for links. The client sent one (P1 00:07:22): see item 5.

### 5. Gallery: add last year's live photos (P1 00:07:22 – 00:09:08) — ✅ DONE

> **Status:** ✅ DONE (confirmed by the developer, 2026-10-19). Done for the EDITION and the ST. REGIS: 40 photos chosen from the client's Pixieset gallery "Passover Edition 2026" (244 photos; lobby, pools, buffets and desserts, ballroom set-up, entertainment, fire show; no close-ups of guests or children) are added after the hotel photos in both Galleries, as agreed on the call (about 40–50 for now). The client confirmed in writing ("Yes", 2026-10-19) that Passover Edition 2026 is used for both hotels. For the two Guettaway hotels (Waldorf Astoria and Park Hyatt) 17 photos chosen from the client's "Passover Waldorf 2026" gallery (24 photos: the hotel, lobby and string quartet, pool-side pizza and fruit stations, dining terrace) are added to both Galleries (one shared list, `src/data/resorts/guettaway-program-gallery.data.ts`). The written answer of the client for the Waldorf gallery was not seen yet. They are listed once in `src/data/resorts/reserve-program-gallery.data.ts`. More photos can be added later (the other 204 Edition photos and 7 Waldorf photos, when the backend exists); Casa Nizuc has no last-year gallery yet.
- The client sent the link of **last year's program page (the Waldorf)**, "a million pictures", all live photos from last year's program.
- **Add all of those photos to the Gallery**. Keep the hotel photos too ("no problem"), but the gallery must also have last year's program photos (kids, concerts, etc.).
- Technical answer given: no backend/database yet, so too many images could crash it. We will show **about 40–50 images now** and all of them when the backend exists (P1 00:09:08–00:09:32, 00:22:17–00:23:04). The client accepts that.

### 6. Going live (P1 00:09:32 – 00:10:08, P1 00:22:39) — ℹ️ INFO (not a website change)

> **Status:** ℹ️ INFO. Not a change of the website: it is the publishing step (the client gives the domain and login, we upload the site there). It happens after the last changes; it needs the domain and server access.
- The client will give the **domain name with username and password** and we upload everything to his domain. We said yes. See also P2 27:29 (domain + server).

### 7. Chef (P1 00:10:19 – 00:13:40, again 00:34:08 – 00:36:43, 00:40:38 – 00:40:52, 00:50:33 – 00:51:03) — ⬜ NOT DONE

> **Status:** ⬜ NOT DONE. Needs from the client: Donny Rogoff text, the old chef picture, the chefs' team photo, a better plate picture.
- The **new chef (Chaim Levy) is for Guettaway only** (the two Guettaway hotels).
- **Diamond Club Reserve and Diamond Club Blue (Casa Nizuc) go back to the old chef, Donny Rogoff**: put the old chef picture back and use the chef text the client sent in Fiverr (P1 00:40:38).
- On the card (outside) show **only the chef's picture with the food at the side**, "like it was before". In the **pop-up**, the top picture should be **a photo with all the chefs lined up**; the client will send it (P1 00:11:52–00:13:40, "I will see where the chefs is").
- For the Guettaway chef card (P1 00:35:04–00:36:43): the client wants the same style as the other card: take out the chef's body (cut out) on a **white background with a nicely plated dish at the side**; caption at the bottom **"Chef CHAIM LEVY"**. He is still looking for a better plate picture and will send it (P1 00:43:03–00:45:42).
- Dining top picture and message: the message for Donny Rogoff will be sent and shown when the chef pop-up opens (P1 00:35:04).

### 8. Entertainment — DJ / Zusha card (P1 00:13:44 – 00:15:45, 00:16:57 – 00:20:55, 00:37:12 – 00:38:28) — ⬜ NOT DONE

> **Status:** ⬜ NOT DONE. Needs the Zusha picture / artwork file and the artist text.
- The picture is good but the client wants the **background removed**: only the person(s) and a **new colourful DJ-style background** ("Tomorrowland"), with the name **ZUSHA** in big/bold, funky but classy letters, typed on the picture itself. No extra background panel. Take out "the two people" from the existing picture.
- He made a version with ChatGPT and sent it in Fiverr (P1 00:16:57–00:19:31); "the letters should be more classy, the background is fine" (P1 00:18:38). **At P1 00:20:55 he confirmed: use this for Zusha.**
- Elon Gold: the words are already there. "Experience" text: to come later. "See details" under each card: leave it. Fire show: OK. DJ Penny Yiddy: OK (P1 00:20:55).
- He will send the artist info, picture and the text to write (P1 00:18:04).

### 9. Home button in the bar (P1 00:15:45 – 00:16:57, 00:49:28) — ✅ DONE

> **Status:** ✅ DONE. Done 2026-10-19: "Home" is the first item of the hotel menu bar and goes back to the program's hotel list (all programs).
- Add a **Home** button in the (sub-)menu bar inside a hotel. It must **not** go to the site home; it must go **back to the program's hotel selection screen** (e.g. Diamond Club Reserve: St. Regis / Edition), so you can switch hotel at once.
- Same for Guettaway and Diamond Club Blue. "Always the home button here."

### 10. Pools & Beaches (P1 00:21:48 – 00:33:09) — 🟡 PARTLY DONE

> **Status:** 🟡 PARTLY DONE. Done 2026-10-19: St. Regis pools replaced with the Marriott Experiences list (Cabanas, Family, Serenity, Main, Whirlpool, each with its Marriott photo); pools show "All day" instead of times (every hotel); going into a pool and back lands on the same section (a "← Back to Pools & Beach" link on every pool page; browser Back already worked). **Not done:** more photos per pool (Marriott gives one each), the other hotels' pools, the "adults only" decision (the Marriott pools have no adults-only text).
- "The pool and beach needs to be updated" (P1 00:21:48).
- **Schedule: "all day"** (no times, all Passover) for every pool, in the cards and in the pop-up (P1 00:23:32–00:24:26, 00:27:55–00:28:28). Monday's schedule has to be all Passover.
- Take the pools from the St. Regis hotel website (link sent in Fiverr), the same way the rooms were taken. Every pool has its **own pictures** (P1 00:24:33).
- Pools the hotel has: **Family pool, Centennial(?) pool, Main pool, Whirlpool** (the whirlpool is the one we miss); plus **Cabanas** (not a pool) (P1 00:28:48–00:31:04). Add the Whirlpool and the Cabanas.
- **Adults only:** the client first said it must come off, then said he was not sure and would check (P1 00:26:07–00:27:55). Final: he thinks all pools are open to the whole property, so no "adults only" text. Confirm.
- **Back navigation:** when he goes into a pool and comes back, he lands at the top of the page. It must **stay at the pools section** so he can pick the next pool (P1 00:29:29–00:29:44). Same for rooms, dining, spa (P1 00:42:06–00:42:33: "when I go into the rooms and come out, it should stay by the rooms").
- **Cabanas pop-up:** the client likes the Marriott-style pop-up ("ocean view cabanas with private swimming pool…", location "beach"). We said ours opens a new page; he said that is fine. Keep the text, just make the schedule "all day" and show only the cabana photos (P1 00:30:13–00:32:55).
- Each pool detail: show a photo of that pool (e.g. the main pool picture on the main pool). More photos per pool will be sent by the client (P1 00:31:05–00:33:09).

### 11. Remove every "Inquire about this…" button inside details (P1 00:24:33 – 00:25:52, 00:56:38 – 00:56:56) — ✅ DONE

> **Status:** ✅ DONE. Done 2026-10-19: every "Inquire about this …" button removed (rooms, pools, restaurants, spa, Dining page). Only the top bar Inquire stays.
- On the detail pages (rooms, pools, spa …) **remove all the inquiry buttons**. **Only the Inquire button in the top bar stays**.
- Also remove the inquiry on the pool and spa pages.

### 12. Dining (P1 00:33:22 – 00:35:04, 00:41:31 – 00:43:03) — 🟡 PARTLY DONE

> **Status:** 🟡 PARTLY DONE. Done 2026-10-19: the Chef and Kosher cards ("Passover Culinary Program") and the inquiry block are off the Dining page, which lists only the restaurants; the Dining picture on the hotel page is a bigger box in the middle. **Not done:** the block the client called "what is this?" (unclear which), restaurant information (to come).
- The dining picture is "not nice". Do **not** use a long strip. Use a **bigger box in the middle**, plus smaller ones at the bottom (different sizes, like the hotel sites). One lonely picture looks bad.
- The two boxes inside the Dining page — the **chef / "Passover Culinary Program" and the Kosher supervision** — **must come off the Dining page**. They stay on the outside program page only. The Dining page shows **only the restaurants** (P1 00:41:31–00:42:59).
- "What is this? It doesn't belong over there" (P1 00:33:42): the text/image block at the top of the dining section; confirm which one when re-checking.
- The client will send the dining/restaurant information later (see P2 01:36).

### 13. Kosher supervision pop-up (P1 00:36:00 – 00:36:43, 00:46:07 – 00:47:51) — 🟡 PARTLY DONE

> **Status:** 🟡 PARTLY DONE. Done 2026-10-19 (Reserve pop-up): rabbi picture removed and the "Food To Perfection" text removed; only the Kosher Supervision text stays. **Not done:** the nicer rabbi picture on a background (to come). The Guettaway Kashrus pop-up was not changed.
- **Remove the rabbi's picture** from the pop-up; instead use a **nice background** (he will send a nice rabbi picture later: "put the face in front and the background behind").
- The words **without borders**.
- **Remove all the text before the kosher part**: the block "Food to Perfection — For over a decade, Diamond Club Vacations have organised Passover programs… in-house catering led by Executive Chef Donny Rogoff". Keep **only the Kosher Supervision part** ("…26 years experience as manager of the entire resort… highest level of… kosher for Passover…"). He may later cut one more word.

### 14. Scholars (P1 00:38:28 – 00:40:38, 00:48:36 – 00:49:28, 00:51:03 – 00:51:46) — ⬜ NOT DONE

> **Status:** ⬜ NOT DONE. Needs the new name and words (sent by the client in Fiverr) and an answer about the picture.
- The photo of the rabbi on the card is good, but **the words belong to a different rabbi who is not coming this year**. The client sent the correct name and words in Fiverr ("Rabbi Shalom", text sent; replace "Rabbi Chanan Gordon").
- A white background on the whole picture (P1 00:38:28–00:40:38).
- Unclear: the client said "the picture is wrong, but the name…" (P1 00:49:09). Ask him whether the **picture** also changes.

### 15. Program (singular) and Attractions (P1 00:51:47 – 00:53:50) — 🟡 PARTLY DONE

> **Status:** 🟡 PARTLY DONE. Done 2026-10-19: "Program" without the "s" (menu bar and section title, all programs). **Not done:** 4 more local attractions (they need photos).
- Menu: **"Program" without the "s"**.
- **Local attractions:** add **4 more** (anything: boat, swimming, diving, ATVs, jumping). The client sent a TripAdvisor link for Cancun attractions.

### 16. Wellness & Fitness (P1 00:54:37 – 00:55:57) — ⬜ NOT DONE

> **Status:** ⬜ NOT DONE. Needs the client's content.
- That card does nothing when you click. When clicked it should show yoga/fitness content. The client will look for the content (maybe it is on the Spa page) and send it.

### 17. Spa (P1 00:55:57 – 00:57:12) — ⬜ NOT DONE

> **Status:** ⬜ NOT DONE. Needs the Specials text, confirmed hours and new pictures.
- Hours 8 AM – 11 PM: probably right; he will confirm.
- Add **"Specials"**: if guests order a package before the program they get a cheaper price or something added. He will send the text.
- Update the spa pictures.

### 18. Kids program / Day camp (P1 00:57:12 – 00:58:13) — 🟡 PARTLY DONE

> **Status:** 🟡 PARTLY DONE. Done 2026-10-19: the "Ask about babysitting" inquiry button removed. The babysitting text stays (ask the client if it should go).
- Day camp: everything good. The "Ask about babysitting" inquiry button "has to go down as well" (same rule as item 11). It is unclear whether he also wants the babysitting text removed; only the button was removed, ask him. He may update its words later.

### 19. Inquiry form (P1 00:58:13 – 01:00:15) — ⬜ NOT DONE

> **Status:** ⬜ NOT DONE. Needs the admin email address for the form and the wording of "join one of our programs before".
- The client filled in the form completely and it works. Wording to check: "join one of our programs **before**" ("what do you mean before?") — he will go over the form details.
- **Where does Submit go?** Nowhere yet (design only). We said we will send it to his admin/business email; he must give the email address.

### 20. Brand logo (P1 00:49:28 – 00:50:00) — ⬜ NOT DONE

> **Status:** ⬜ NOT DONE. Needs the new logo.
- He does not like the current logo ("too simple") and is working on another; will send it.

### 21. Edition dining (P1 01:00:15 – 01:00:49) — ⬜ NOT DONE

> **Status:** ⬜ NOT DONE. Not checked yet.
- Edition and St. Regis have the same dining; the client wondered why Edition looks different. Not solved at the end of Part 1. See P2.

---

## Part 2 — step by step (continuation after Zoom cut)

### 22. Dining / Edition / Reserve clean-up (P2 00:34 – 03:26) — 🟡 PARTLY DONE

> **Status:** 🟡 PARTLY DONE. Done 2026-10-19: babysitting inquiry button removed. **Not done:** restaurant information, Donny Rogoff text, Scholars name/words.
- Two items "go off" (P2 00:37).
- The client clicked the restaurant cards and nothing opened. We explained there is only the card image, no info (P2 01:36). **He will send all the restaurant information; we do the design** (P2 01:47).
- "This Donny Rogoff gets out of here" (P2 01:47): remove his text from where it does not belong (Kosher/Chef block). The Scholars of Edition are the same as St. Regis: only change the **name and words** (P2 01:47).
- **Babysitting** (P2 01:47–02:40): this part comes off, the rest of the day camp is good. He wants to review the babysitting text ("A free representative babysitter service will be available during camp hours, and our special toddler camp private babysitting is available for free") and update it.
- **Attractions:** add more (P2 01:47, 12:39).

### 23. Edition pools and rooms (P2 02:40 – 09:33) — ✅ DONE

> **Status:** ✅ DONE. Done: Edition rooms now come from the Marriott list (19 rooms; `npm run rooms -- edition=marriott`). The Edition pools now come from its Marriott Experiences page (Main Pool, SO'OL Restaurant & Beach Club; hours shown as "All day").
- The Edition has **different pools** from the St. Regis. He sent the St. Regis link and will send the Edition link (P2 02:40).
- **Edition rooms:** the client asked where we took the rooms from (P2 03:26). We took them from editionhotels.com. He says the correct source is the **Marriott "rooms and suites" page of the Edition** (P2 05:20–05:50): open it **side by side** with our page and **make sure the rooms, sizes and pictures are the same** (P2 05:50–06:46). The St. Regis rooms are fine ("you did a nice job").
- We sent a screenshot of our rooms in the Zoom chat; he checked and said they look right ("that's the rooms, correct, correct… that's good") (P2 07:02–09:33). After the call, compare every room once.
- The Edition has more than one pool (P2 07:02).
- "I think you have everything ready to go. Minor changes."

### 24. Guettaway (P2 08:56 – 11:21) — 🟡 PARTLY DONE

> **Status:** 🟡 PARTLY DONE. Done 2026-10-19: name in capitals. **Not done:** Waldorf in the same layout is done for rooms only (see 25); Guettaway entertainment changes and the Guettaway kosher words/pictures (to come).
- Write the name in capitals also **inside** the Guettaway pages (see item 2).
- Then start the **"World of" (Waldorf)** with **the same layout** as the other hotels (P2 09:33).
- A picture is "cut off, cut pieces, not the full thing" (P2 09:50–10:30): we fixed it on the call. Re-check.
- Kosher standards (Guettaway): "A Guettaway, a Diamond Club production… experience cuisine, kosher standards…" The words will be gone through later. A new picture will be sent. These two rabbis' pictures are to be updated (P2 10:31–11:21).
- **Entertainment (Guettaway):** most things go out; he will say which stay. Concert: a different guy ("Dobby Miles is not the counsellor") — picture to come. **Fire show stays, nightlife stays**, DJ: a different guy or none, to confirm. No contest here (P2 11:21–12:33).
- Add the **other 4 attractions** to Guettaway too (P2 12:39).

### 25. Waldorf and Park Hyatt rooms (P2 13:45 – 17:03) — 🟡 PARTLY DONE

> **Status:** 🟡 PARTLY DONE. Done 2026-10-19: **Waldorf Astoria** now shows 12 rooms and suites from the Hilton rooms page, each with its full Hilton text, size, highlights, all-inclusive benefits and every card and pop-up photo (4 to 8 photos per room); **Park Hyatt** now shows the 11 rooms and suites of hyatt.com (Hyatt text, size, bed, view, amenities) with the Hyatt photos. The previous lists are kept as commented blocks (`npm run rooms -- waldorf=...` / `park-hyatt=...`). **Not done:** the Waldorf "Ocean Front Master Corner Suite with King Bed" (its pop-up was missed), and the extra photos of 9 Park Hyatt rooms (hyatt.com gives only 1 photo per room on the rooms page; the room pages give more).
- Our Edition rooms are updated (P2 13:45).
- **Waldorf Astoria Riviera Maya** (Hilton): "there are many more rooms than we have". Link sent in Zoom and in Fiverr (P2 13:57–15:09).
- **Park Hyatt Riviera Maya** (it is Hyatt, not Hilton; a brand-new hotel): link sent in Fiverr. We said the rooms page looked like only 5 rooms; the client wants all rooms on the site (P2 15:13–16:44).
- Then restaurants/dining (P2 17:03).

### 26. Guettaway chef picture (P2 17:08 – 24:11) — ⬜ NOT DONE

> **Status:** ⬜ NOT DONE. Needs the new chef picture with the full plate.
- The client went through the chef image with us:
  - **Remove the line between "Executive Chef" and "Chaim Levy"**; make **"Chaim Levy" a bit smaller** (too big) (P2 17:40–18:10).
  - **Take off the plate** ("I don't like the plate"): just the picture of the person and "Executive Chef Chaim Levy" (P2 18:10).
  - He asked for the old picture of Donny Rogoff (P2 19:15). The image we sent was not the right one (P2 20:52). We took ours from the Figma (P2 21:11).
  - **Put back the gold letters "Chaim Levy" in big letters** (P2 19:33).
  - "Make the person stand sideways" (P2 21:24). When he saw the picture: "this is nice" (P2 22:37). **"Executive Chef Chaim Levy" on this picture**, but the plate is cut off; the other picture had the full plate (P2 22:49). We only had this one. He will send a new one (P2 23:46–23:57).

### 27. Documents (P2 12:45 – 13:44, 23:57 – 26:03) — ⬜ NOT DONE

> **Status:** ⬜ NOT DONE. To do by us: send the 3 Google Docs (Diamond Club Reserve, Diamond Club Blue, Guettaway).
- The client wants a **shared Google Doc**; he will fill it **one item at a time**. We said we will create **3 documents: Diamond Club Reserve, Diamond Club Blue, Guettaway**, with comments for questions (P2 12:45, 24:11, 25:26–26:00). We create them in about 10 minutes after the call (P2 13:35).
- "Send me the documents right now so I can start sending you stuff" (P2 29:35).

### 28. Deadline, holiday and plan (P2 26:03 – 27:29) — ℹ️ INFO

> **Status:** ℹ️ INFO. No code. The client approved the extension; 21 October we are not available.
- Aim: finish tonight, new link by tomorrow (P2 26:12).
- **Deadline extension:** we asked; **the client approved it** ("I approve the money, get me the extension") (P2 26:26–26:49).
- **21 October is a religious holiday in our country; we are not available that day** (P2 26:49–27:24). The client: "let's finish it today so we can go live".

### 29. Going live (P2 27:29 – 28:30) — ⬜ NOT DONE

> **Status:** ⬜ NOT DONE. Needs the domains and server access (and the separate Guettaway domain).
- To go live we need his **domain** (and server): we upload and connect the domain (P2 27:35–27:48).
- **Guettaway has its own domain** (the name he sent before). People who arrive from the Guettaway domain see **only the Guettaway pages (and forward)**, not the other programs. We need that domain and the details too (P2 27:48–28:36).

### 30. Opening splash for Guettaway visitors (P2 28:37 – 29:19) — ⬜ NOT DONE

> **Status:** ⬜ NOT DONE. Not started: the opening splash for visitors who arrive from the Guettaway link (to discuss with the backend developer).
- When visitors arrive from the **Guettaway link**, add **one page before** the program page: a small opening/splash, e.g. water, like the one in their app, then the page. When they come from the main site it goes straight in.
- We said we will discuss this and the domain issue tomorrow, with the backend developer (P2 29:19).

---

## What we still need from the client (for the next round)

| Needed | Item |
|---|---|
| Photo of **all the chefs lined up** (Reserve/Blue chef pop-up) | 7 |
| Donny Rogoff **message text** (the old chef picture is needed back too) | 7 |
| **Plated dish photo** and a better chef picture for Chaim Levy | 7, 26 |
| Zusha artist info, text and a picture; "experience" text | 8 |
| Rabbi (kosher) picture with a background, the Rabbi Shalom text | 13, 14 |
| More **pool photos** per pool; wellness & fitness content; spa specials; spa hours | 10, 16, 17 |
| All **restaurant info** for dining | 12, 22 |
| Babysitting text; "join one of our programs before" wording | 18, 19 |
| **Admin email** for the inquiry form | 19 |
| Final **logo** | 20 |
| **Domains and server access**; Guettaway domain | 6, 29 |
| Edition pool link; Dobby/concert picture; DJ yes/no for Guettaway | 23, 24 |

## Questions to confirm with the client

1. Adults-only text on pools: remove everywhere? (item 10)
2. Scholars card: is only the name/text wrong, or the **picture** too? (item 14)
3. Which block exactly "does not belong" at the top of Dining? (item 12)
4. Brochure button position: under the program title/paragraph like his mock-up? (item 1)
5. The brochure files: one per program (3 PDFs) to be sent. (item 1)

---

# Full transcript — Part 1 (P1: 00:00:00 – 01:00:46)

```text
Frontend Developer
Frontend Developer
Hi, Abraham, how are you?
a
a
00:00:26
Oh, hi, how are you?
Frontend Developer
Frontend Developer
00:00:29
Yeah, I'm fine.
And so… Like, hopefully you see the website, right?
a
a
00:00:38
What?
Frontend Developer
Frontend Developer
00:00:39
So I hope you already see the website, the updated website, right?
a
a
00:00:46
I didn't understand.
Frontend Developer
Frontend Developer
00:00:49
Okay, have you, like, seen the website? We have already updated?
a
a
00:00:53
Yes, I did.
Frontend Developer
Frontend Developer
00:00:55
Okay, so, like, everything is, like, aligned with your requirement, right?
a
a
00:01:00
Almost.
Frontend Developer
Frontend Developer
00:01:02
Okay, so, like, in where we need changes, and what we actually need to do, just, like, suggest us, and we, like, do it as, like, your, like.
a
a
00:01:13
So we're almost done, almost done, just the little touch-ups, almost, almost, almost.
I'm talking about the centridges, okay? The rest… I'm not looking now.
Right now, it's only the centridges, yeah?
Frontend Developer
Frontend Developer
00:01:25
Yes.
a
a
00:01:27
So, let's go over the centridges, one second.
Frontend Developer
Frontend Developer
00:01:32
So, it will be better if you share your screen and show us the thing.
a
a
00:01:35
Actually. Yeah, well, I'm going to.
I'm just looking for the website… one second… There you go.
I think we're almost ready, almost ready.
Let me share my screen with you guys.
Frontend Developer
Frontend Developer
00:01:58
Yeah, sure.
a
a
00:02:01
You know what? I'm gonna make this move.
Okay, shit, share, shit, shit… Share my screen.
You see it?
Frontend Developer
Frontend Developer
00:02:21

- yeah, we are received.
a
a
00:02:25
In my screen? Beautiful, beautiful, beautiful, okay. Now, the brochure from here…
Frontend Developer
Frontend Developer
00:02:31
Yeah?
a
a
00:02:32
I wanted to go off from here.
Frontend Developer
Frontend Developer
00:02:37
Okay, right now it will be, like, off, right?
a
a
00:02:40
No, no, I don't want on the main screen, it should not be on the main screen. Only when you go inside.
Because every property is going to have a different brochure. So I want, when you go inside here, the brochure should be, you understand?
Frontend Developer
Frontend Developer
00:02:57
Okay, so, like.
a
a
00:02:57
Which one do you download, you understand? Every property has a different one.
Frontend Developer
Frontend Developer
00:03:03
Okay, so when you go on the Diamond Club Reserve or Gateway, a Diamond Club.
a
a
00:03:08
I'll give you an example, I tried to make…
Tried to make a little bit, and a little bit, let me copy.
Let me put it into Fiverr, let's tell me if you see it.
Okay…
I want it to be on every page, it should be, like, over there. You see Diamond Club Reserve? It should be over there. You see what I mean?
Frontend Developer
Frontend Developer
00:03:31
Yeah, and when we go on the gateway.
That time, the gateway will be, like, showing on here. Same as, like, Diamond Club Blue, as well as…
a
a
00:03:43
Correct. Do you see the picture where I just uploaded?
Frontend Developer
Frontend Developer
00:03:48
Just it takes some time, actually.
a
a
00:03:53
I see by me it sting off one second.
See a why?
No, it went. Okay.
Frontend Developer
Frontend Developer
00:04:08
Okay, so, like, just give a moment in, like, yeah, salinity show.
So, there's a reason the images need to be timed to load. Oh yeah, I already see it, yeah.
a
a
00:04:19
So, you understand? I wanted, like, That's all over here.
Frontend Developer
Frontend Developer
00:04:24
Okay, okay, in the bottom of the Diamond Club Reserve and the paragraph Test. In the bottom, you need the brochure button, right?
a
a
00:04:32
Barcho button, correct? Because every single hotel
I have a different one, not every single, all three. You know, we have the three? 1, 2, 3, yeah? Every one has a different brochure. When you go inside, those, they have the same brochure.
But this one has a different one, this one has a different one. So I want over here should be a button for the brochure, over here should be a button for the Bashur.
And over here should be a button for the brochure.
Okay.
Frontend Developer
Frontend Developer
00:05:02
Okay, for… okay, for 3 different things, we, like, have 3 different of brochures, right?
a
a
00:05:07
Correct, correct.
Frontend Developer
Frontend Developer
00:05:09
Yeah.
Okay.
a
a
00:05:12
Now… this has to be changed, you see? It's… it's pacocted, you know what I mean?
Frontend Developer
Frontend Developer
00:05:19
Yeah, the Gateway Damon Club would be, like, in, like, Capital.
a
a
00:05:25
Yeah, capital, and… but also, it has to be… it has to be,
Gateway should be on the top, and then…
The next line should be a Diamond Club production.
Frontend Developer
Frontend Developer
00:05:39
Okay, so, like, Gateway in the top, and in the bottom, the A Diamond Club production will be showing, okay.
a
a
00:05:45
Correct.
Okay, now, that's that, now let's go into the Regis, okay? The Regis, I love, I love, look, look, look, look, look, look, when you, when you know, why didn't you do it before, look, look how beautiful, beautiful, beautiful, beautiful!
Frontend Developer
Frontend Developer
00:06:02
Yay!
a
a
00:06:04
Okay.
Frontend Developer
Frontend Developer
00:06:05
That's my pleasure, you actually like it.
a
a
00:06:07
Yeah, yeah, I love it, I love it. One thing that I don't… what I want to do is this, on the phone, when I open it on the phone, I cannot, like, swing. I have to push the corners.
On the phone, it's better if you make it, like.
When I open up, I could act, you understand what I'm saying? Just move this way.
Okay, so, like, you want to drag it…
Frontend Developer
Frontend Developer
00:06:29
cinch.
a
a
00:06:30
Yeah, but over here, it's no problem, because it's a computer, you use usually a mouse anyway. But on the phone, you know what I mean?
Frontend Developer
Frontend Developer
00:06:37
Yeah, yeah, I understand.
a
a
00:06:38
But it's gorgeous. The rooms are gorgeous, beautiful. Now, the pool…
Is missing a lot of photos.
There's a lot.
rules.
Abraham.
Frontend Developer
Frontend Developer
00:06:50
So just give me some…
Okay, so just, I have, like, things to, to tell you. So, like, in our, like, previous, like, the Figma, so in the Figma, there is not all the images, so, like, we follow the Figma for the images and other things, so if there any, yeah, and if there, if there any link where I can get all the photos, all the information.
For each pages on and hotels, so it will be better if you share with us, and we, like, implement, obviously, those things.
Don't be worried about that, okay?
a
a
00:07:22
Okay, I just sent you a link.
Look the link.
Frontend Developer
Frontend Developer
00:07:26
Okay, this is the, edition website, right? The previous edition website, if I'm not wrong.
a
a
00:07:33
No, this is only pictures.
Oh, I'm sorry, what you see on the screen, yeah, when you see on.
Frontend Developer
Frontend Developer
00:07:39
Yeah, yeah, yeah. Yeah, yeah.
a
a
00:07:41
Yeah, yeah, forget about that one.
What do you see on the screen? I just sent you an email, a pic…
I'll just send you a link.
Frontend Developer
Frontend Developer
00:07:51
Yeah, I already see, so just let me open the link.
a
a
00:07:55
Okay, this is the addition from last year, this is the Waldorf, this is the Waldorf, okay? So, the addition is the centridges, the same thing, okay? So, when you click into this.
there is over here a million pictures. You see, all of these pictures is live pictures, shots from last year, the program.
You see this? All of this stuff was at the program last year, okay?
You see, this is our… I'm telling you, it's a very rich program, it's a very delicate
Party, and it has to be, like, nice.
So this is the whole picture, so I want you to add all of these pictures by our gallery.
So when you go in the gallery, you understand? Now, in the gallery, I see the pictures from the hotel. What is also nice, no problem, but I want also all of these photos to be over there, you see? All of the last year photos, you see?
We have a million photos over here, you see? All the kids, all the…
It's like, it's like a lot of fun over there.
all of these photos I would like to put in over there, okay?
Frontend Developer
Frontend Developer
00:09:08
Okay, but, like, you already told me that there is, like, millions of photos, so, like, right now, like, we haven't any database or server, so, like, if we put all of those images at our, like, own folder or own server, so it will, like, you may crash, and the website not… the live… the current live website will be not…
a
a
00:09:27
So my question is, how are we going to make it live?
Frontend Developer
Frontend Developer
00:09:32
Okay, so, like, when our, like, full website will be completed, and how you told, yeah, we are ready to make it, live, so that time we obviously make the things live, on your own domain and own hosting.
a
a
00:09:45
Okay, that's my question. I give you my domain name with my… with my username and password. Can you implement everything into my domain name?
Frontend Developer
Frontend Developer
00:09:56
Yeah, we can.
a
a
00:09:59
Because I want to get it live.
Frontend Developer
Frontend Developer
00:10:03
Okay, yeah, obviously we can.
But, beautiful.
a
a
00:10:07
form.
Frontend Developer
Frontend Developer
00:10:07
or go on.
a
a
00:10:08
Or you would suggest to… say it again?
Frontend Developer
Frontend Developer
00:10:13
Okay, so, like, before we go on the live, we just make sure that is everything okay or not, right? The whole website is perfectly.
a
a
00:10:19
No, understood, understood, but I want to have everything implemented so all of this stuff should be able to get up on the… you see this is the… this is the chef guy, you see what you have by the… what you made a mistake. You took him away from the centridges. You put the other guy for all of them.
You've seen this in the Chevy guy.
Frontend Developer
Frontend Developer
00:10:39
Well…
a
a
00:10:41
Look, if you, if you look, if you look over here, you put, by the chef, you put this guy.
This guy… this picture is only… you told me you were gonna change it. This picture's only for the getaway.
Only for the getaway. Only for these two programs.
For this program, and for this program, the other guy's the chef, this guy is the chef.
I don't know where…
Frontend Developer
Frontend Developer
00:11:05
Okay, so, like, the Diamond Club Reserve will be, like, same chef in the previous, right?
a
a
00:11:11
Correct. It has to get… go back that… that has to go back to this guy.
Frontend Developer
Frontend Developer
00:11:17
Okay.
a
a
00:11:17
Check out that picture?
Frontend Developer
Frontend Developer
00:11:19
Yeah, yeah.
a
a
00:11:20
So that picture goes back to the, to the, to the Diamond Club Reserve and the Casanizo, both.
He's the chef about.
Frontend Developer
Frontend Developer
00:11:30
Okay.
a
a
00:11:31
Okay?
Frontend Developer
Frontend Developer
00:11:32
Okay, that, cousin is there, and also, like, the Diamond Club Reserve 2 resource, this only the chef, right?
a
a
00:11:40
for Kazani… for this one, for the Diamond Club Reserve, and for the Diamond Club Blue.
Frontend Developer
Frontend Developer
00:11:47
Okay, okay, understood, yeah, sure.
a
a
00:11:50
Okay?
Frontend Developer
Frontend Developer
00:11:51
Yeah, yeah.
a
a
00:11:52
Diamond Club Reserve and Diamond Club Blue goes their chef, this chef, the… whatever, the guy. You see? I want to put inside… I have a team of all the chefs, a picture of all the chefs.
I want, when you open up the pop-up, you understand, like, let's say, look.
When you go in over here, when the pop-up comes up, from the main… over here should be only his picture, with the food in the side, like it was before. But when you pop it up, the picture over here should be with all the chefs lined up. You understand? I'm trying to…
Frontend Developer
Frontend Developer
00:12:24
Okay, so, like, can you please give me the image?
a
a
00:12:27
Yeah, I'm trying to see. I definitely have to have an image over here somewhere.
Trying to see where the images is.
So, because it's very complicated, the two programs. You see, we have a lot of chefs.
Trying to see… he… but he's the main guy, you see? You see him everywhere.
Because he's our main chef in this program.
The other program, we have the other guy.
Let me see, let me see, let me see…
This is one of the chefs, he's standing next to the sous chef.
This is with his kids.
This is concerts…
Yeah, I'm gonna look for it. I'm gonna look where it is. I can't find it at the moment.
I'm going to look for it.
I will see where the chefs is.
Frontend Developer
Frontend Developer
00:13:40
Okay, and also, Abram, one thing.
a
a
00:13:42
Amy.
Frontend Developer
Frontend Developer
00:13:43
to be…
a
a
00:13:44
This is the guy, the DJ, what you see on the… on the…
On the picture, over here, look.
Yeah. When you have the… when you have the entertainment.
This is the guy, over here, this guy.
But this is good. This is good. Over here, I need to take this picture out. I don't want… they should see the background. You see the background? Only the image, only the… the person's, you know, the body, the whole face…
Like, like, like, like over here, you see? They only take out the faces. In the background, they put something else. You understand what I'm saying?
Frontend Developer
Frontend Developer
00:14:23
Okay, so, like, can you please sing?
a
a
00:14:25
You see? You see this guy?
It's only the picture from him, and then they wrote to the side something. Over here, I will do, like, a colorful picture in the background, like, I don't know, like, colorful.
like you see, like, colorful style. It's like a, I don't know, like a DJ or something, like a…
Tomorrowland picture, some stupid picture, and you write the name Susha, you write over here, you know, like, in the top or something, in bold letters or something like that.
You understand?
Frontend Developer
Frontend Developer
00:14:58
Okay, is there an image, like, like this type of image you have? So, it is.
a
a
00:15:03
No, this picture… this picture was also taken, they just took it out, the graphics designer took it out. I don't know how you take it out. I can try doing it maybe off ChatGPT, maybe he's gonna do it for me, you understand?
Frontend Developer
Frontend Developer
00:15:17
Yeah.
a
a
00:15:18
Something like that.
Let me see if I can copy the image.
Copy the image.
Can you take out the two people?
Without the background and the words.
I should be able to place it on a new background.
Frontend Developer
Frontend Developer
00:15:38
Okay, I try my best, from my side. Yeah, always, like, you can do… okay, so, like, I do.
a
a
00:15:45
Okay, but one second. Okay, over here, in the bar.
I need to have a button over here, like, home.
Home?
in… the home should not go the same like you press over here, you understand? It should go to the main. It should only go… let's say if I'm in the centridges, I press home, it should come back to this screen, so I should be able to switch to the edition right away. You understand?
Frontend Developer
Frontend Developer
00:16:11
Okay, so, like, in the bar, in the, like, the bar, here will be, like, on home, and when you click on the home, it will be, like, go on the diamond
I'm showing the, tour resort.
a
a
00:16:23
Correct. So the same… and the same thing should be in this one, and the same thing should be in the… in the world of also.
I click home, it should only come back to this.
Look, look, look, these bodies, look it.
Look what's going on over here. Look what's going on over here.
Look, what's going on? Susha.
No, if you just use a little bit ChatGPT, it will help you everything.
Look! Look!
Amazing!
You got it?
Frontend Developer
Frontend Developer
00:16:57
Yeah.
So, like, can you share the image of the ChatGBD, please, with us?
a
a
00:17:02
I… Luke, I sent it to you.
Frontend Developer
Frontend Developer
00:17:05
Okay, you send it. Okay, Justin, give me a moment.
a
a
00:17:09
I told you, we have to be creative!
Look how nice it is now! Look how nice to cuckoos!
Can you put, like, a… DJ-style, colorful background and background of them.
And put the words put the words… Z-U-S-H-A.
In funky letters.
You got it?
Frontend Developer
Frontend Developer
00:17:55
Josh, can you please, oh, geez.
a
a
00:17:59
printed.
Frontend Developer
Frontend Developer
00:17:59
Okay, so you've seen it.
Just to give me a moment.
a
a
00:18:04
Keep going.
Okay, I have already the information for this, so I'm gonna send it to you also. Also, I'm gonna send you a picture of the artist, and also whatever we need to write.
You got it?
Frontend Developer
Frontend Developer
00:18:19
Yeah, yeah. So, like, for the, like, accounts…
a
a
00:18:22
You see the picture? You see the picture?
Frontend Developer
Frontend Developer
00:18:24
Yeah, yeah, I already see the image.
a
a
00:18:38
One second.
The letters should be more classy. The background is fine.
Okay, you know what? He's… he's in his knights, oh my god.
Let me send it to you, you're gonna laugh.
This is crazy, crazy, crazy.
I shall.
Frontend Developer
Frontend Developer
00:19:18
H.
a
a
00:19:23
I send it to you.
Okay.
Frontend Developer
Frontend Developer
00:19:28
Please, Justin, give me a moment, I just,
a
a
00:19:31
This is crazy stuff.
You got him?
Frontend Developer
Frontend Developer
00:20:04
Just give me something, actually, like, the person, the, like, the person on the profile, just send us the images, okay, just give me the moment.
In, like, which one?
Yeah, just,
Actually, in, like, right now in my office, like, a little bit nit issue, actually, so there's a reason it takes a delay on here. Okay.
So, hopefully I understand my issue, actually.
a
a
00:20:34
No, Don.
Frontend Developer
Frontend Developer
00:20:44
Yeah, I see this, yeah, that's what, like, actually awesome.
Yeah, that's actually good.
a
a
00:20:52
Looks crazy.
Frontend Developer
Frontend Developer
00:20:53
Yeah.
a
a
00:20:55
Okay, okay, so put this by Zusha, and also…
I think the words we put already. Okay, so that's not a problem. Elon Gold, we put already the words over there. The experience, that one I will send you after party is good.
I think… do you see, under every one, it says, see details?
You know what, leave it. Leave it, leave it, leave it. No, that's good. Okay, fire show, fire show, okay. Pete, DJ Penny Yiddy, that's good.
Now, the home button, yeah, we need the home button.
Frontend Developer
Frontend Developer
00:21:36
You know, like, like, before the…
Before the hotel overview, it had, like, a home.
a
a
00:21:43
Let's start going over everything together.
Frontend Developer
Frontend Developer
00:21:47
Yeah, sure.
a
a
00:21:48
So, the rooms is fantastic, okay? The pool… the pool and beach needs to be updated.
Frontend Developer
Frontend Developer
00:21:57
Yeah.
And also, Abram, I need to, like, discuss one thing with you.
Which is actually, like, as you told me, that you need all of the images from the link you already sent. So, like, there is, like, you already told me, there is, like, millions of images on here, right?
Yeah. So, like, right now we haven't any back-end server. We just only do the Frontend part. So, like, before, like, doing the backend, if we, loaded, like, millions of the image in the website right now, it, like, totally crashed your website.
a
a
00:22:39
Okay, that's not a problem. I have it on my website right now, so I'm going to… I'm going to have it, how you call it.
I will add…
Frontend Developer
Frontend Developer
00:22:48
True.
a
a
00:22:50
Okay, okay.
Frontend Developer
Frontend Developer
00:22:50
What can I do, actually? I will, like, show, like, 50 or, like, 40 images right now, so when we have the backend server.
a
a
00:22:57
No, yeah, yeah, show me, Sean, that's correct.
Okay.
Frontend Developer
Frontend Developer
00:23:01
Thanks a lot for John.
Like, understanding, understanding, yeah.
a
a
00:23:04
for the getaway, I have…
Not a full brochure, it's not done yet, 100%, but I can show you, I'm going to upload the brochure, like, a little bit. I will show you how the new brochure from the 2026, the 2027, is going to look. I just uploaded it to you.
This is crazy.
Frontend Developer
Frontend Developer
00:23:23
Yeah, look at…
a
a
00:23:24
That's not for the region, that's only for the… for the higher… Gateway. Gateway, correct.
Frontend Developer
Frontend Developer
00:23:31
Yeah.
a
a
00:23:32
Okay, so now let's go over again. So the suites are good, yeah? Okay, the pool and beaches, I'm going to give you the… I'm going to give you the…
more pulls, what I have, and also, it cannot say we need to take it off. It's better than I'm telling you right now. It cannot,
Monday's schedule has to be all…
all Passover. Basically, the timing should be all Passover.
You understand? And the time… Should be all day.
Okay?
Frontend Developer
Frontend Developer
00:24:13
Okay, schedule, like, can you please send that… actually.
a
a
00:24:17
She don't think You'll see ours. It should have… All day. On it.
Frontend Developer
Frontend Developer
00:24:26
Okay.
Okay, the awards will be, like, all day, yeah. For the pool, actually, right?
a
a
00:24:33
For the pool, one second, for the pool, for the restaurant, I'm gonna tell you the exact
Differently. But I'm… I just sent you the St. Regis Hotel.
website, all the pools, what they have, is on this website. The same like you took down the rooms, the same they have all the pools they have over there.
The only thing what we… and also, all… every pool has different pictures, we have to work. And another thing I forgot to tell you, inquiry about this pool. This has to go down. This has to come off. It doesn't make sense. You have it on every… on everything, you have it. If you go into the… to the rooms, inquiry about this room.
It says to go down. Only the inquiry over here on the top stays.
Nothing… all the inquiries here has to go down, you understand?
Frontend Developer
Frontend Developer
00:25:24
Like, go down means, like,
So, like, should I remove it?
a
a
00:25:29
Remove it, correct, correct. By the spa, you see by the spa, remove it. Or everywhere. You have it, you put it everywhere. Only the inquiry is here. This one stays. This one is the… is the thing, okay?
Frontend Developer
Frontend Developer
00:25:41
In the other, at the net bar, the top one will be, like, only.
a
a
00:25:47
This one's beautiful, beautiful, beautiful, okay?
Frontend Developer
Frontend Developer
00:25:51
Yes.
a
a
00:25:52
Okay, this is beautiful, this is beautiful. The pool, the same thing, no inquiries over here, take off the inquiries.
And over here also, you have to…
Frontend Developer
Frontend Developer
00:26:06
Feels good.
a
a
00:26:07
Adults only, no, adults only has to come off, also.
Frontend Developer
Frontend Developer
00:26:12
Which thing, actually?
a
a
00:26:14
Maybe not, I have to see. I think maybe some pools is adults only.
I have to check.
because it's too deep or something. You see, it says adults only.
It says adults only.
Give me a second.
Frontend Developer
Frontend Developer
00:26:35
Yeah, so…
a
a
00:26:46
Give me a second.
Frontend Developer
Frontend Developer
00:26:49
So, like, as you told me that, adults only, no properties, so, like, in samples, this text will be, like, edited, not all, right?
a
a
00:27:08
Mmm.
Wanna set in?
Okay, what do you say? I'm sorry.
Frontend Developer
Frontend Developer
00:27:45
Okay, so, like, on the pool, you told me that the adult-only things… so, like, in the adult-only things, the things will be, like, added in some of the pools, not all, right? Something.
a
a
00:27:55
No, I'm trying to figure it out, I'm trying to figure it out, but I think, I think all of the pools should have outdoor on the property.
You see, over here it doesn't say all adults only, you see? But the schedule has to be all…
All day.
It should say all day, no, no, no times, all day. Over here also, all day, okay?
Frontend Developer
Frontend Developer
00:28:21
Okay, so on the pool, on the pools, like, the hours and the schedule will be, like, all day, not a fixed time.
a
a
00:28:28
Correct. All day by opals, correct.
Frontend Developer
Frontend Developer
00:28:30
Okay.
a
a
00:28:31
And you're gonna have to add a little bit more pools. Like I said, you check on the link, you're gonna see there's more.
Frontend Developer
Frontend Developer
00:28:35
Okay, I, okay, Abram, so, like, I already see the, like, links, but I actually can't find the, like, tools on here, so, like…
a
a
00:28:44
I'll show you, show you, we'll show you everything.
Frontend Developer
Frontend Developer
00:28:47
Yeah, so…
a
a
00:28:48
about dining experience, I think maybe under experience.
Yikes.
Frontend Developer
Frontend Developer
00:28:53
want the experience.
a
a
00:29:00
From the experience, I'm saying?
Max? Max?
Family pool, they have over here all the pools, you see? This pool, family pool, Santata pool, you have some of them. Main pool, Whirlpool, you see? I think we're only missing Whirlpool, because if you go over here, you're gonna see…
But also, every time I go back, you see, when I go inside in the pool, when I go back, I'm not coming back to the pools, I'm going… I'm flying up over here, I don't know why.
I want, when I, let's say I go into a pool, I come back out, you understand, it should be staying by the pools, because I want to look for the next pool, you understand?
Frontend Developer
Frontend Developer
00:29:44
Okay, I understand, yeah.
a
a
00:29:46
So, it says like this, family pool you have, senti pool, whatever, let me see.
Okay, let me see.
Frontend Developer
Frontend Developer
00:29:55
Yeah, center pool, main pool, and, like, wheel pool. And also, like, the carbon, like, carbonas, this should be…
a
a
00:30:02
Yeah, cabanas, cabanas? Yeah, you just put cabanas also. Put cabanas also.
Frontend Developer
Frontend Developer
00:30:13
Okay, okay.
a
a
00:30:14
Okay, so if you go over here, you see this is the picture, actually, from the cabanas. You see, you have it over here. You have the cabanas.
Frontend Developer
Frontend Developer
00:30:22
Okay.
a
a
00:30:23
For the cabanas, I don't… it's not a pool, so it's like, basically, look, if you click into the cabanas.
more. You see it pops up. Beautiful, I like it this way. Marriott style. You see ocean view cabanas with private swimming pool, engaged in some of the…
Location Beach.
you can put, basically, this saying, you understand? For the cabana style.
It's fine, I don't want to make… but basically, we have the main pool, Centennial pool, we're missing only the Whirlpool, no? We're missing only the…
Which pool we may impose is that a pool? Whirlpool. This one we're missing.
Frontend Developer
Frontend Developer
00:31:04
Beautiful.
a
a
00:31:05
The problem is, That the pictures… you have to see all the pictures, okay?
Yes.
Now, over here, look.
If you go inside of it, there is more pictures.
I would put a picture of this, this type of pitch, you understand?
Trying to see where I have more pictures of this.
But at least one of the pictures should be from this one. You see the main pool, this is the main pool.
You understand?
I'm gonna get you pictures for each pool, more pictures, okay?
But for now, try to set it up according to this website, because they have a right. It's their web… it's their… this is the company.
Okay.
Frontend Developer
Frontend Developer
00:31:50
Okay. Okay, and also, like, Abram, you told me that on the Kabanas, when you click, a pop-up will be opened, right? But in our site, currently, it redirects us a new page, if you already saw that.
a
a
00:32:02
That's fine.
Just do we need to edit…
Frontend Developer
Frontend Developer
00:32:07
Edit the information on the pop-up of the editing.
a
a
00:32:11
Correct. Correct.
It says, I think it says already, look, you see? I think exclusive…
sheet cabanas equipped with polish, laundry… no, that's good. What it says over here is good, just the schedule's always, all day.
location set already by the beach, you see? But it gives you the main pool over here. It gives you… it gives you basically all the pools, you understand? I wanted you to have only the cabana look, these ones, you see?
Only this, this, this look.
And I'm gonna give you more pictures to add in over here, but for now, just, you know, the cabana look.
Over there, we need the main pool… this is the main pool look.
This is the most…
Frontend Developer
Frontend Developer
00:32:55
So, like, it…
a
a
00:32:56
The ballpool.
Frontend Developer
Frontend Developer
00:32:59
Okay, just, we just, okay, we just added the picture of, like, the specific, pool.
a
a
00:33:04
And I'm gonna get you caught in.
Frontend Developer
Frontend Developer
00:33:06
Gallery.
a
a
00:33:06
For each, yeah, I'm gonna get to more pictures.
Frontend Developer
Frontend Developer
00:33:09
Yeah, yeah, sure.
a
a
00:33:22
Okay, now, let's go back one second, let's go back…
Let's go back… okay, the dining, look, this… this image is very, very… Fucked up.
And also, what does it say over here?
This doesn't belong over there.
Frontend Developer
Frontend Developer
00:33:42
Okay, last, taste, like, right away the, dining, we just removed it, okay?
a
a
00:33:47
No, I don't know what this is. What is this?
Frontend Developer
Frontend Developer
00:33:50
Okay, okay, so, like, it just mystically.
a
a
00:33:52
And the dining picture… the dining picture is very, very no nice. It's not nice.
I would rather put it… I would rather put it a little bit more, let's say, if I want to put it in the middle, not a long one, you understand? Only in the middle, you understand?
Frontend Developer
Frontend Developer
00:34:08
Yeah, yeah.
a
a
00:34:08
and, like, a bigger box, you understand? And at the bottom should be this too. This too is good. Understand? Look, I see by these guys also, you see, they put different sizes, you see? Different sizes. You put, like, a size like this…
Or something for the dining, because if it's only one piece, it looks very nasty, and I wanted a nice picture of a…
for how you call it, you understand? The nice… And also, and also.
When you go into dining, okay.
When you go into dining, where's the dining? Dining, dining, dining, dining is up.
Okay, when you go into dining, these two things doesn't belong over here. That's already outside. That's already…
Frontend Developer
Frontend Developer
00:34:51
Abram, Abram, can you please, please hold a second? So, just, I think the skin is finished, so I can't see, actually, the proper thing, so,
Yeah, can you please repeat that thing again?
a
a
00:35:04
Did you see the dining? The dining is going to do a new style over here, yeah? Nice style. Because the flesh does look good.
When you go inside, and this too is very nice, okay? Just this has to be replaced, and with a message for Dani Rokov, where I'm going to send you the message for him, okay? So when you open it, it's gonna say from the different chat. This guy, you're gonna take out with Chad GPT, you see? Chair GPT, take it out.
You're gonna make it look like… like I did with the other one. You wanna see how make a nice picture of this guy? Look.
Take out just the body of the main guy in the middle, And… Edit.
On a white background with a beautiful plated in the side.
Frontend Developer
Frontend Developer
00:35:57
Okay, okay.
a
a
00:36:00
And put in the bottom, Chef, C-H-A-I-M space L-E-V-Y.
Let's see if it's gonna work. Okay.
That's that, okay, but one second, so when you go inside now… okay, so this is good, yeah? This is the same thing, this rabbi picture has to go out, and only the picture of the guy
In the back of a nice background or something.
Or maybe you use this background. Put him behind, you see? Put… put the face in the front and the background in the back.
No, no, no.
Frontend Developer
Frontend Developer
00:36:43
Yeah, sure.
a
a
00:36:45
Look, I just, I just sent you.
I'll just send it.
You're gonna get it in a minute.
I don't like this picture, what I just sent you.
But… But something like that, you understand what I'm saying?
Frontend Developer
Frontend Developer
00:37:08
Okay, so just let me check.
a
a
00:37:12
make the plate The… make the… the words without the background.
I mean, without borders.
just… Nice… without borders.
Let me see if he gives me anything. Okay, but…
this is how you call it. So this rabbi is also gonna have to come out, put it, maybe I'm gonna do, we'll see, I'm gonna try to help you what I can do.
But entertainment, we covered already, okay? We need to fix it, we need to put the words, beautiful.
Entertainments, not entertainment at all.
I don't like this picture, so I don't like it.
Not… don't put a background, it should be like…
You have the picture, it should be typed on the picture itself.
Frontend Developer
Frontend Developer
00:38:23
So, like, which thing, actually?
a
a
00:38:28
One second.
No, no, no, I want to show you the…
Okay, scholars, okay? This beautiful. You put in this guy, beautiful, okay? This guy is very nice, the picture is good, the problem is the words belongs for a different rabbi, where he's not coming this year.
So I need to give you… The words for this guy.
This guy
Okay. Even say, I'm gonna give you the words.
I'm looking it up.
Now, put a white background On the whole picture.
Give me a second, I'm trying to look it up.
I think I did send you the name of this guy.
One second, let me see…
I just sent you in for the chef, for the Santridges and the Casanidok. This has to be said, this is for them, okay? You put back the old picture, and you take this. Words, okay?
Frontend Developer
Frontend Developer
00:40:38
Okay, so, like, the awards for the Kazanijook and the Devon Club Reserve will, like, send us, right? And we just put it on the, like, with the previous old chef picture.
a
a
00:40:50
Correct.
Frontend Developer
Frontend Developer
00:40:52
Okay.
a
a
00:40:54
One second, now I have to go back to the chef.
Beautiful picture, just make the plate.
Look a little bit more classy.
Let me see if it's gonna go.
Okay.
Now, when you go… you see the dining, we're gonna change it, yeah? We change it. When you go inside the dining.
this…
Frontend Developer
Frontend Developer
00:41:30
Yeah.
a
a
00:41:31
Passover Colony Program, no, this has to go off, you see?
These guys are off.
Just… out of the window.
Out.
Okay?
Frontend Developer
Frontend Developer
00:41:45
Okay, the password, like, Kernity program will be, like, fully removed.
a
a
00:41:52
What?
Frontend Developer
Frontend Developer
00:41:54
So, like, when I click on the dining, the, like, Passover community program sections, like, the shave and the kosher supervision, this will be, like, removed from the dining section, right?
a
a
00:42:06
Yeah, it's only over here, it's only the outside, you see? It's only… you see, every time it goes back to the room in suites, I need to go… when I go out, it stays on the same… where I went in, you understand?
Look, I go inside over here now in the dining. When I go back, it runs back to the suites, you see?
I want to go back to the… it should stay over here, you understand? When I go into the rooms, I come out, it should stay by the rooms.
Frontend Developer
Frontend Developer
00:42:33
Okay.
a
a
00:42:34
So, this stays, you see? On the outside page, it stays, but when you go into dining, this one goes.
Only the dining rooms should be here, only the restaurants, you understand?
Frontend Developer
Frontend Developer
00:42:47
Okay, so, like, when you click on the dinings, the, like, cautious supervision and celibity shape will be, like, removed, and only the dining things will be…
a
a
00:42:57
I didn't.
Frontend Developer
Frontend Developer
00:42:57
In this pitch, okay.
a
a
00:42:59
Dining. In the dining.
You understand?
Frontend Developer
Frontend Developer
00:43:01
Okay, okay. Yeah, I understand.
a
a
00:43:03
Now, let me see… I'm looking for a nice plate, one second.
Looking for a nice plate.
to add on… To add on for the chef. One second.
Wait a second… Relative designs, something, something.
Trading, trading, trading… I don't have a nice plate over here, it's a problem.
It's a problem!
You see, everything is symbolized with the… with the program.
You see everything, all the cops has the program's logo, you see?
Frontend Developer
Frontend Developer
00:43:56
Yes.
a
a
00:43:57
I'm trying to see a main plate, one second.
So I can add it on over there.
Maybe I'm gonna… oh, you see, this is the other chef.
But I need a picture.
I need a picture.
This is the owner of the hotel.
I need a picture. It's very mixture, you see all type of people over there.
It's all type of people.
I need a picture of the footage.
Jesus.
Let me picture, let me pictures.
Look at this now.
I need one time when it was a nice meal, you understand? A nice meat plate.
Frontend Developer
Frontend Developer
00:44:54
Okay.
a
a
00:44:56
Yeah, no, but I don't have a meat plate.
Over here, over here, I'm gonna find…
Oh, my hair is gonna be some meat plates.
Over here, we have all the chefs that you see.
We have all type of chefs over there.
I need a plane. Shit.
Okay, I'm gonna find the plate, and I'm gonna send you the picture for the…
For the… how do you call the guy?
Thank you.
Frontend Developer
Frontend Developer
00:45:27
Chef Jim Levy, right?
a
a
00:45:29
Chopped levy, that's correct, I need it. I have already one picture, but I don't like it, I want to change the plate.
And I cannot find…
Frontend Developer
Frontend Developer
00:45:38
So, like, whenever you, like, ready the image, send us, I would, like, Updated it, okay.
a
a
00:45:42
Okay, yeah, yeah, I'm gonna send it to you in a little bit. I'm middle of making it. Okay, let's go back then.
So, this you understand the idea, it goes, this rabbi also, I'm gonna send you a picture, a nice picture of this rabbi in the background, you're gonna have to…
Frontend Developer
Frontend Developer
00:45:58
Actually, actually, I can see the screen of the website, so, like, can you please go on the website again and show me which Rava… yeah, this rubber, right?
a
a
00:46:07
This one?
So, like, you don't.
Frontend Developer
Frontend Developer
00:46:11
we didn't…
Okay, so, like, you told me that, like, you need to retain the RABA image and the information, like, so…
a
a
00:46:18
No, no, so you see, this is the culture supervision.
I'm gonna take this picture, I'm gonna take it out, I'm gonna put it behind a nice background, I want to put this background in the back, and you're gonna update it over here.
The words over here, look, this doesn't belong over here.
It says, food perfection. For over a decade, Diamond Club Vacations have been organized Passover programs and luxury records.
Our in-house catering led by Executive Chef Danny Rokov. I don't need this. Over here only has to be the kosher supervision part. This. Only this one.
Frontend Developer
Frontend Developer
00:46:58
Okay. Okay, only the, like, kosher supervision takes.
a
a
00:47:02
L, in the leading 126-year experience as a manager of that, the entire resort, and it will be exactly kosher for Passover, following the highest level of staying conscious, ordering standing out kosher, but…
My sauce of meat.
all of his throat. Actually, this…
Maybe we're gonna have to take out this word, we'll see.
But for now, take out this whole thing. This whole thing doesn't belong here.
You understand?
Frontend Developer
Frontend Developer
00:47:40
The food to perfection taste will be fully removed. Only the kosher superbell.
a
a
00:47:44
And I'm gonna send you a nice picture for the rabbi, okay? I'm gonna make you… Okay, okay, sure, sure, sure.
I'm gonna…
Frontend Developer
Frontend Developer
00:47:51
Whenever you have the image, just send us, I'll, like, update it.
a
a
00:47:55
Nazi.
I think we're gonna be finished with this, with this,
I think we're gonna be finished with the resort with the… today.
Okay, over here, look.
this…
this, what I'm sending you right now, okay, goes for this rabbi, and I just send you words right now.
Check the words I just sent you. This goes for this rabbi.
Frontend Developer
Frontend Developer
00:48:29
So, like, who… like, which Raba? Okay, so Raba, Jem, right?
No.
a
a
00:48:36
This is not his name, this is not his name.
I just sent you what his name is.
Look on the email I just sent you.
Not the email, the…
Frontend Developer
Frontend Developer
00:48:45
Fiber.
a
a
00:48:47
You see, you got the message?
Frontend Developer
Frontend Developer
00:48:51
Just to give me a moment…
like, right now, the images, of the Rawa, and the name is, like, Rabbi Chanan Gordon, this will be, like, changed, and you send us the, like, text and other things, and we need to be updated, the text.
a
a
00:49:09
Yeah, yeah, yeah, the picture is good.
The picture is wrong, but the name…
The name is a different name, you're gonna see, I just sent you. Check if you got it.
Frontend Developer
Frontend Developer
00:49:26
Okay, okay, okay.
a
a
00:49:28
But this one is good. This rabbi is good. The home button. Always the home button here, yeah? Okay, the brochure comes off from here, we spoke already about this. The Diamond Club vacation symbol.
I have a different one, maybe, for you. I'm trying to work on it. I don't like this one, it's too simple.
I'm working on some different one.
Frontend Developer
Frontend Developer
00:49:53
Okay.
a
a
00:49:54
Okay?
Frontend Developer
Frontend Developer
00:49:56
Yo.
a
a
00:50:00
I'm working on some different one.
But I don't have it yet, so I'm gonna get it, I'm gonna…
I'm gonna get it to you.
One second, one second, I have another thing what I need to do for you.
Frontend Developer
Frontend Developer
00:50:33
Okay, Abraham, so, like, you…
Okay, so, like, you sent to me, like, two messages. One is for shape, Donnie Rogov.
easily.
a
a
00:50:45
Donny Rakuten is the chef, what you need to take back his face.
Frontend Developer
Frontend Developer
00:50:51
Okay, okay, yeah, yeah, I understand.
a
a
00:50:53
something.
Frontend Developer
Frontend Developer
00:50:54
end up.
a
a
00:50:54
MBC.
Frontend Developer
Frontend Developer
00:50:55
in some law.
a
a
00:50:55
the Santridges, and Santridges, and the Kazanizuk. Get away, no. Get away, we have the Chaim Levi.
Frontend Developer
Frontend Developer
00:51:03
Okay, okay. And also, like, you sent me a message about, like, Rabbi Shalom. So, like, he is the Rabba, you already mentioned me, that the image is good, but the text, it needs to be edited, or updated, right?
Beautiful.
a
a
00:51:23
on?
Frontend Developer
Frontend Developer
00:51:25
Okay, so in the next text, you send me that Rabbis Shalom, Rabba.
a
a
00:51:31
Correct. That's for the… and that… that is for this guy.
Frontend Developer
Frontend Developer
00:51:37
the… yeah. Right now, who is, like, the Tanan, it will be, like, replaced with, like, Shalom, right?
a
a
00:51:43
column. That's correct.
Frontend Developer
Frontend Developer
00:51:46
Okay, okay.
a
a
00:51:47
Okay, now let's go over one more time the page.
Santridos Resort, beautiful.
Homepage comes over here.
program, it comes without the S. You need to take off the S.
You see?
Frontend Developer
Frontend Developer
00:52:03
only that program.
a
a
00:52:05
Program, yeah, not with the S.
entertainment, local attractions, there is much more local attractions in the area. If you search Cancun, Mexico, I will… I will do it for you.
Oh… Cancun, Mexico… Attractions.
Okay.
Reactions…
there's a million attractions, so I would put in, like, another, you know, I want this to be, like.
I don't know, maybe, maybe another 4.
Just take anything, you understand? Anything. A boat, anything, you understand? Swim, diving, whatever you can… look, I just searched now over here, look.
I, I just searched up,
Local attractions, let me see again.
what comes up, you see?
Climbing, I don't know, there's a million, you know what I mean? A million.
Frontend Developer
Frontend Developer
00:53:15
Okay, so just, I, like, need to edit, like, more 4 or 6.
a
a
00:53:18
Yeah, it's not… not… yeah, if you go into TripAdvisor, it's gonna give you tracks, you see? Jumping, boat, this, ATVs…
Okay, please stay.
Frontend Developer
Frontend Developer
00:53:29
Send the link, also me, please send the link.
This upset link? Okay, okay.
a
a
00:53:34
Yeah, through this website link.
Yeah, yeah. One second, let's send you this link, I just sent you. Just add another 4, you understand? Different ones, you understand?
Frontend Developer
Frontend Developer
00:53:44
Okay, okay, yeah, sure.
a
a
00:53:50
Okay.
This…
Okay. Now we go back. Let's go back to, how do you call it, over here.
Okay, so we're… we're getting, getting close, close, close, close.
The room, the pools, the…
Frontend Developer
Frontend Developer
00:54:37
Oil, wellness, and fitness.
a
a
00:54:40
Ron?
Frontend Developer
Frontend Developer
00:54:41
Like, this only, like, wellness and fitness, right?
a
a
00:54:44
Wellness and fitness, yeah, wellness and fitness.
it's… you see, I don't know what this is, but you can't push nothing. It's like… I don't know what it's supposed to be.
You understand?
So, dude.
Frontend Developer
Frontend Developer
00:54:58
I should remove this.
a
a
00:55:00
No, no, no, no, no, no, no, I think this comes over here, because when you click of it, it should give you that it's yoga. If you go in over here, you're gonna see it's gonna give it to you.
You understand? If you walk into Wellness and Fitness in the… in the main… in… by… Not dining…
What I mean? As long as it fitness.
Centrich Anchor Center… T… San Bernini Spa?
I think it's on the SPA, they have it on the SPY, I think.
No.
I'm gonna look at it, I'm gonna… I'm gonna try to get you then, okay?
Frontend Developer
Frontend Developer
00:55:49
Okay, so, like, whenever you find the link for the wellness and fitness, just send us, and we'll, like, obviously update the wellness and fitness as well as, okay?
a
a
00:55:57
Okay, no problems.
Okay, fitness… wellness and fitness, the pools, we need to add another pool over there that you know already?
Yeah, you are…
Frontend Developer
Frontend Developer
00:56:13
I've already seen the pool things, yeah.
a
a
00:56:15
The spa is also, I'm gonna tell you if the hours is right. I think the hours is right, 8 or 11 PM. This hours is right, the pa massage… okay, also, I'm gonna wanna put over here specials.
You see, inquiry has to come down. Everywhere, the inquiry over here has to come down, okay?
Frontend Developer
Frontend Developer
00:56:38
So, like, in the details page, every inquiry button will be, like, removed. Only the top one would be, like.
a
a
00:56:43
Got it, got it, got it. And over here, I want to put,
Over here, I want to put in the…
I'm gonna… and I'm gonna send it in to you, specials. If they order before the program, they get a… if they order a certain package before the program, we give them a cheaper price, or we're gonna throw in something together.
with a package, so I'm going to give you that information on that also.
Frontend Developer
Frontend Developer
00:57:10
Okay, I'm Badhispa, right?
a
a
00:57:12
Yeah, by the spa. I'm gonna tell you, pictures, we have to update the pictures. Pool, details, details, rooms, rooms are good. Attractions you're gonna add, scholarly you're gonna add. Kids program.
Kids program, day camp. Day camp…
They can, they can, they can with experiential models.
Okay, one second, our team. I think this stays.
I think this stands.
The day camp, I think everything from day camp is good. Maybe I'll ask about babysitting.
This has to go down as well.
Frontend Developer
Frontend Developer
00:57:59
Okay, this will be also removed, don't worry.
Okay.
a
a
00:58:07
Okay?
Frontend Developer
Frontend Developer
00:58:08
Yeah, yeah, sure, I, like, removed the, thing.
a
a
00:58:13
Correct, but when you go into inquiry, okay, I want to see how this works, okay? Let's say two adults.
Two adults, one child.
Okay, one room, two rooms, let's say. Let's say two rooms.
Connecting room, let's say yes. Age… children's age 12.
Go… okay, optional requests.
Final availability will be confirmed by our team. Need an additional room.
No… Interested in early arrival? Yes.
You see, I can't click on… yeah, I can click. Okay, next. Okay, join one of our programs before.
What do you mean before?
I'm gonna have to go over the details on this page still. Okay, would you like to… would you like a callback? Yes.
Okay, which year and program? Oh, were you on one of our programs before? Yes. When? 2023.
Okay, Serge, where did you see it? Google.
Okay, community, family, Svardi Ashkenazi, Hasidi, Shishivas, Svardi. Beautiful. Next.
My name… okay, I put it in, why not?
Email.
Put an email. Doesn't matter.
Staved… No, New York.
Review.
Children, okay. Now, I'm gonna have to add over here also…
Where does it go? When I push submit, where does it go?
Frontend Developer
Frontend Developer
01:00:02
Okay, so right now, it doesn't go anywhere, so just, right now, this is just a design.
a
a
01:00:07
Okay.
Frontend Developer
Frontend Developer
01:00:07
like, so, like, when you need, we, like, send an email in your admin email, okay? So, in your business email.
a
a
01:00:15
We're gonna have to… okay, we're gonna have to add the email to where this should go. Beautiful, okay, that's fine.
So let me go out… let me get the hell out of here.
Okay, let me see where is the… where is this, this, okay…
So I think, okay, the addition, yeah, has the same dining.
then, you see, the addition is not set up the same, you see? Over here? Yeah, it is. Let me see.
No.
Frontend Developer
Frontend Developer
01:00:46
Yeah, all of the scenes are the same right now.
a
a
Yeah, you think so? Now, why does it look different?
```

---

# Full transcript — Part 2 (P2: 00:26 – 29:52, continuation after Zoom cut)

```text
a
a
00:26
Hello?
Frontend Developer
Frontend Developer
00:28
Hey, hello. So, just the meeting time was over, so yeah.
a
a
00:32
No problem.
Okay.
Frontend Developer
Frontend Developer
00:34
Okay, those two things are fully SIM.
a
a
00:37
Yeah, but this goes off, this goes off, okay? Now…
Frontend Developer
Frontend Developer
00:41
Okay…
a
a
00:42
Question, one second.
One second… Let me see something… I have to confirm this.
One second, I did something wrong, go ahead, nothing happened.
edit…
Okay, also, I'm gonna… I'm gonna go over all the pictures. You see, when I click over here, I'm not getting anywhere.
Why?
Frontend Developer
Frontend Developer
01:36
Okay, so that's the reason, actually, because, like, while we get all of those images and information? There is only those cars, there is no information about the…
About the restaurants.
a
a
01:47
Yes, because it's the same, like, over here.
Oh, you don't… Oh, okay.
I'm gonna give you all the information on the restaurants, okay? That's a good thing. I need to work on that.
So you work on the design on it, the rest of the information I will give you, this Danny Rockov gets a hella out of here. The scholars, also the same edition, same scholars, goes the same, just you need to change the name, the word, whatever, the second one is good.
Over here is the babysitting.
This, this, this, about comes off, the rest is good.
Day camp here this week. Just babysitting.
A free representative babysitter service will be available during camp hours, and our special toddler camp private babysitting is available for free. Okay, I'm gonna see, I'm gonna see about this. Maybe I need to update some words over here. Okay, out!
Attractions, you can add more attractions over here, and I think the rest is history.
The pool and beaches.
The edition has different ones, okay? I just sent you the link for the St. Regis. I need to send you the link for the edition also. Edition can come Mexico.
onset and additionally.
Addition Cancun, Mexico, let me see, the addition.
Because the addition has different… I don't know where you took the rooms for the addition. Where did you take the rooms for the addition?
Frontend Developer
Frontend Developer
03:26
Okay, so, like, I take the additional rooms, like, if I can send you a link…
Okay, so basically, like, when I go through the, like, your, link, so that the time, I, like, redirect on a separate website.
a
a
03:40
I'm going for second edition, one second, I'm going to send you the edition.
Why is it not opening up?
That's yours.
Frontend Developer
Frontend Developer
03:48
Okay.
a
a
03:49
And it's not…
Frontend Developer
Frontend Developer
03:50
In the Zoom chat, I actually sent you the link.
Why are I…
a
a
03:54
One is the addition, one is the same… you understand, it's different ones.
Okay?
So make sure the rooms is the same, what you have over here, okay?
Frontend Developer
Frontend Developer
04:05
Okay, just in the link of the, like, for the, like, edition, so, like, I will let it…
a
a
04:10
I just send you the rooms.
The rooms is done.
I just sent you, and over there, you're gonna see the pools also. The pools, you're gonna see the spa, you're gonna see everything over there, okay?
Hello?
Frontend Developer
Frontend Developer
04:23
Okay, yeah, yeah.
I just… Okay, basically… okay, basically, I, like, get all of those things, like, it is, like, editionhotrails.com, some websites, and from this website, I get the… those rooms and suites on here. So that's the reason I actually…
added all of those things from the ifset. Okay.
a
a
04:44
Okay.
Frontend Developer
Frontend Developer
05:09
Okay, Abraham, so, like, the link you sent me, can you please go on the link for me? Just for a moment. I need to discuss something.
a
a
05:20
Nice.
Yes, okay. The link where I just sent you, let me, let me, let me, let me, let me, let me check, let me check, let me check.
This one, Marriott.
Okay, copy link… Let's open it up.
Okay.
Frontend Developer
Frontend Developer
05:40
Yeah, and we need to click on the view rates, right?
a
a
05:43
Which one?
Frontend Developer
Frontend Developer
05:45
we need to click on the view rates, if I'm not wrong, right? In the top, like, the bottom.
a
a
05:50
Room and suites, this is the rooms.
This is their rooms.
You can see all of the rooms and suites, all of them, you see?
Check if you have… I don't know what you have now, maybe you do have the good ones, let's see. But that's only for the addition, okay? That's not for the Regus. The Regus, you did a nice job. You see, this is the rooms. King, Deluxe, King, Deluxe, Queen… oh, but not over here.
Deluxe… deluxe… Yeah, Deluxe King, Deluxe Queen… Premier, Ocean View.
Let me see… Alpa, let me see.
Premier Ocean, you see, just go it over, side by side, open two screens side by side. If everything is good, and the sizes, everything is good, make sure the pictures are good. If the pictures are good, everything is good, okay?
Frontend Developer
Frontend Developer
06:46
Okay…
a
a
06:49
You understand?
Frontend Developer
Frontend Developer
06:51
Yeah, I understand. Just give me a moment on here, just a little bit moment, okay?
a
a
06:57
No problem.
Frontend Developer
Frontend Developer
06:57
Okay, yeah, I already get the rooms, yeah, just give me a moment.
a
a
07:02
And I think the pools over here is also more than one pool.
Let me see…
Frontend Developer
Frontend Developer
07:07
Okay, I sent a screenshot of the rooms in the Zoom chat box. Please, can you just check the Zoom chat?
So, Jet, I just need to be verified from your side, is the rooms for the editions or not, so that I can start working for the edition rooms, okay?
a
a
07:24
Okay, let me see.
Where did you send it? In the Zoom chat?
Frontend Developer
Frontend Developer
07:28
Yeah, in the Zoom chat, yeah.
a
a
07:31
In the Zoom chat… let me see, where is the Zoom chat? I don't see Zoom chat.
More.
No.
I don't see chat in the Zoom. Why?
Oh, man.
Frontend Developer
Frontend Developer
07:54
Echo!
a
a
07:54
I got it, I got it, they got it.
Frontend Developer
Frontend Developer
07:56
Okay, okay.
a
a
07:58
No worries, don't worry, don't worry.
Why can I not make it bigger? I have to download it. Okay, I see.
Okay, you send me a picture of what? What is this?
Frontend Developer
Frontend Developer
08:10
Okay, those are the rooms, actually, right? For the edition.
a
a
08:16
I'm right now by the addition, you see the addition?
Oh, you went on their website, you went on the main website, on the Marriott website, correct?
Frontend Developer
Frontend Developer
08:26
Yeah, on the media website, and in the bottom, I, like, see, like, some of the.
a
a
08:31
I'll make… Correct, correct, correct. This is all the rooms, correct.
This is all their rooms.
And this is… and… but look, you have a lot of rooms already over here. I'm not sure if it's the same or not. You just go over, I think it looks similar. So I think you should go just over all the rooms, and you see if it's good or not, you understand?
But no.
Frontend Developer
Frontend Developer
08:54
Yeah, yeah.
a
a
08:56
this is a room, this doesn't look like a room, you understand? I don't know why this picture… yeah, it is a room. Look.
Okay, they have a beachfront view, okay, no problem. It is what it is.
Okay?
It's a 3-bedroom, I see it, because it's even… that's the rooms, yeah, correct, correct, correct, correct, that's good, that's good, that's good, that's good. Okay, now…
Let's go back one more time. I think you have everything ready to go.
Minor change is what is gonna have to get done.
And then I want to start with the getaway. You changed the ready getaway. No, I thought you changed the ready in the capital.
Because when I go inside, it's the same, haha.
Then we need to start working on the world of, okay?
We need to start working… should have the same layout.
Okay, now I have one more question. I don't like this, you see?
This is a nice… when you open it up, it looks good, okay? It looks good. It's a little bit too small when I open it, or maybe my side… oh, no, it's not. Okay.
The thing is, I don't like this. You see, it's cut off, it's cut pieces. You see, it's cut pieces?
It's not the full thing, you understand? Look, off… You understand?
Nope.
You see? Yeah, yeah. It's cut off, I don't know why, you see?
I don't like it.
Frontend Developer
Frontend Developer
10:23
Okay, so… Okay, I fixed the things, the image is cut off, so I try to, like.
a
a
10:29
You understand?
Frontend Developer
Frontend Developer
10:30
Yeah, yeah.
a
a
10:31
More, more, more, something more better.
Okay? But kosher supervision over here, over here are kosher standards.
a getaway… at Getaway, a Diamond Club Production.
Experience cuisine, you know, cautious, standard… whatever, we're gonna have to go over the words, I'm gonna have to go over this one, the same thing, I'm gonna send you in the nice new picture. I'm still working on it.
So you're gonna put it over here, because this program has this person.
I'm just gonna send you the nice picture. Over here, we have 3. You see this, the same thing.
These words over here cannot be.
So I'm gonna… I'm gonna upload a new picture for you, okay?
Frontend Developer
Frontend Developer
11:20
Okay.
a
a
11:21
I'm gonna send you a picture to update over here.
These two rabbis, I'll send you pictures, but I'm gonna send you again, I'm gonna update it, I'm gonna send you a nice picture, I'm gonna tell you which one is what, okay? Which one is the best?
What else? What else?
This is by this. Okay.
Entertainment's over here.
everything goes out, but I'm gonna tell you which one. Maybe I leave some, maybe not. I think this guy's staying.
These guys are staying, but we need to update the new picture.
the concert…
He's not. Dobby Miles is not the counselor, it's a different guy. I'm gonna send you a picture of him also.
And I'm gonna give you, whatever, okay? No contest over here, so this is good.
Okay? Only the other programs. Concert. Fire show stays, nightlife stays, DJ, a different guy, I think no DJ over here, but I'm gonna confirm it later, okay? I still have to go through this program with the staff.
Okay, I promise.
Frontend Developer
Frontend Developer
12:33
one request from my site, can you… can you tilt? Okay, so for the… Okay, here, one sec.
a
a
12:39
And over here also, add the other four attractions to this one also, okay? Go ahead, go ahead.
Frontend Developer
Frontend Developer
12:45
Yeah, I got it. Okay, so, like, Abraham, so, like, for the, getaway things, okay, so, like, it will be better if you give me all of those things in a document or doc file, in, like, Google Doc. So, it will, like, all of those things in the one place, so that it will be, like.
a
a
13:02
Share with me a Google… share with me a Google Doc file. I'm gonna give you everything one by one, one by one. You're gonna see it so clearly and quick.
Okay.
Frontend Developer
Frontend Developer
13:11
Okay, I will, like, send, like, one document for, like, Gateway, a diamond production. One will be, like, for, like, Diamond Club Reserve. If you need anything for the Diamond Club Reserve, you can, like, send me from this. Okay, so this will be, like, far better. So, like, all of those documents will be in.
a
a
13:29
And I'm gonna update it all, quickly.
Okay.
Frontend Developer
Frontend Developer
13:35
Okay, okay, so, okay, after the meeting, like, it takes around, like, 10 minutes to create all of those things, and I will, like, send you, okay?
a
a
13:41
Yes.
Okay.
Frontend Developer
Frontend Developer
13:44
Yeah, yeah.
a
a
13:44
No problem.
Frontend Developer
Frontend Developer
13:45
And as you mentioned, me, about the, like, rooms and suites for the edition, I think those things already updated. I already checked the rooms and things.
a
a
13:57
It might be, it might be. So now, if you have time, go into this one, and go on their website, go on the World Ops website, and you're gonna see also the same thing. You're gonna see all the rooms.
make sure all the rooms are the same, okay? I'm gonna show.
Frontend Developer
Frontend Developer
14:12
Whoa, whoa.
a
a
14:13
I'm gonna show…
Frontend Developer
Frontend Developer
14:14
Whoa.
a
a
14:15
World of Astoria, Cancun, Mexico.
Frontend Developer
Frontend Developer
14:19
Okay,
a
a
14:20
There's only one… there's only one world of Astoria, Cancun, and if you go to Rooms and Suites, you're gonna see it right away.
the rooms and suites is there. There's much more rooms than we have over here.
Okay?
It's the world of Astoria, River Maya. They call it the World of Astoria, River Maya.
Look, give Amaya one second…
I sent you in the Zoom. This is the… this is the world of Astoria.
Deposit…
Frontend Developer
Frontend Developer
14:51
So, like.
a
a
14:52
Mexico.
Okay, can it…
Frontend Developer
Frontend Developer
14:55
Can you send the link in the fiber also?
a
a
14:58
One second, one second, one second. Juan?
Frontend Developer
Frontend Developer
15:01
Okay, so, like, can you please send the link on the fiber also?
a
a
15:05
Yeah, I send it in Zoom. Should I send it in Fiverr also? Okay, send it.
Frontend Developer
Frontend Developer
15:08
Yeah, yeah.
a
a
15:09
Done.
It's a hill.
Frontend Developer
Frontend Developer
15:11
Oh, okay, thanks, yeah, thanks a lot.
a
a
15:13
One second, one second. Let me see if we have… if this is it, because the Park High does a lot of, a lot of rooms.
Not a lot of… a lot of, a lot of styles, let me see.
It's a brand new hotel, so I'm not sure if it's open already or not.
The Park Hyatt is a Hyatt Hotel, it's not a Hilton.
So, one second… The park, Hyatt, Cancun, Mexico.
It's a brand new hotel.
They might not have it, the Park High Luxury all-exclusive Hotel, that's it.
This is it.
Okay, I'm sending this also on fire.
There we go. And over here, you're gonna have all the rooms, all the rooms.
Frontend Developer
Frontend Developer
16:05
Okay, so, like, all the rooms about the, like, Waldrop, right?
a
a
16:10
Waldo and the Hyatt, vote.
We have the Park Hyatt, this one the Park Hyatt, this one the Waldorf. So I send you both links, and if you go to the Park Hyatt, you go to the rooms.
Where is the rooms? Rooms, rooms, rooms, rooms, rooms, hotel policies, hotel information, weddings.
I don't see the rooms on their website, but one second, book, let's see, when I go into book…
Friday, wherever I just selected.
Frontend Developer
Frontend Developer
16:44
I think… I think… I think I got to find the rooms. There is, like, only 5 rooms. If I… like, if you, like, go on the link.
So again, I would, like, suggest to you, is it… The rooms are not… End of…
a
a
17:03
I shouldn't.
Frontend Developer
Frontend Developer
17:03
Demand bars for those things?
The restaurants, and all, like, the dining one.
a
a
17:08
Just a second, just a second.
Add Executive Chef.
I think I have the picture ready for the chef, for the roll-off, and for the hire.
Frontend Developer
Frontend Developer
17:24
Okay, just send us the link.
a
a
17:40
One second…
hazard.
One second, one second… Make it without
the line in between Executive Chef and Chaim Levy.
And also, make… Chaim Levy, a little bit smaller, it's too big.
It's pretty colorful. So, plain is on picture. The rest we're gonna do on the inside.
Also, take off the plate.
leave…
take off the plate, I don't like the plate. Just the picture of the person, and executive chef Chaim Levy.
Do you have the picture of, of, of the… can you send me the picture of the, the one you took off from the Dony Rokov chef?
Frontend Developer
Frontend Developer
19:15
Okay, Justin, give me a moment, I need to be, like, look over here.
a
a
19:20
Oh, cool.
Frontend Developer
Frontend Developer
19:21
previous images.
a
a
19:24
I think maybe it's a figment, no?
Frontend Developer
Frontend Developer
19:29
Okay.
Just give me a moment on here, okay?
a
a
19:33
No problem.
Put back the gold… letters, Chaim, Levy, In big letters.
I called the Buchar.
Trying to see where I stored the stuff.
Frontend Developer
Frontend Developer
20:32
Okay, I sent the image in the Zoom chat, okay?
a
a
20:35
Okay.
Frontend Developer
Frontend Developer
20:36
It is sending, just give some moment.
It takes a time, actually.
a
a
20:47
No problem.
Frontend Developer
Frontend Developer
20:50
Yeah, it's saint.
a
a
20:52
No, that's not this picture.
This was in the future. No, no, no, no, no, no, no, no.
Don't need all…
Frontend Developer
Frontend Developer
21:00
Okay.
Okay, I have another picture of this chef, so just give me a moment again.
a
a
21:06
No, but it was already over there, you took it off, I forgot the name.
Frontend Developer
Frontend Developer
21:11
Yeah, yeah, so, like, no, I actually take this image from the Figma, so just I… just… just give me some moment.
And here… Okay, no, no, no, no, no, this thing.
a
a
21:24
check where your Figma file is.
Where is the Figma fan?
Make the person stand sideways.
Trying to see where the Figma… Let's see what applies.
Frontend Developer
Frontend Developer
22:17
Okay, I already seen the image, so can you check it?
a
a
22:22
Yes.
One second…
Download something.
Chef. Yes, yes, yes, you see?
Frontend Developer
Frontend Developer
22:36
Nope.
a
a
22:37
This is nice, this is nice, yeah.
Frontend Developer
Frontend Developer
22:41
Okay.
a
a
22:49
Bonsai in.
And… Executive Chef Chaim Loi to this picture.
Yeah, but the picture of the plate is cut off, no?
I think… Yeah.
I think the other picture had a full shaft.
Frontend Developer
Frontend Developer
23:46
Actually, I only have this image.
put the shift…
a
a
23:57
Okay, I will… I will send you later, so make me a… make me a shared document, so I can upload right away, fast, so not the true file, you know, it takes time, so you get it 1, 2, 3.
Frontend Developer
Frontend Developer
24:11
Yeah, yeah, yeah. So, like, it'll be better if you, like, give us, in a doc, so that we can, like, in the doc file, we can, like, discuss through the comments also, right?
So, if I… if you are any confused anywhere, I can, like, take a screenshot and send in the fiber. Hey, I can't understand the point. So, like, you can, like, make details on the thing in the talk also.
a
a
24:32
Beautiful, yeah, yeah, yeah, yeah. Okay, let me, let me send you something on Zoom right now.
Look what I did now.
Oh, boy.
Frontend Developer
Frontend Developer
24:41
No, send it.
a
a
24:45
Copy, copy, copy, copy… I send it… I put it on Fiverr. Zoom not working, I don't know.
Frontend Developer
Frontend Developer
24:53
Okay.
a
a
24:55
Look what I just sent for you.
Look what I just sent for you.
Okay… So, I think everything for now.
It's almost done, yes?
Frontend Developer
Frontend Developer
25:12
Yes?
a
a
25:14
So we need to… we need to go on…
I think everything right now is done.
So, you send me the Word document, and I will update right away where I need to update.
Okay.
Frontend Developer
Frontend Developer
25:33
Okay, I, like, yeah, after the meeting, I obviously send you two documents. One is for the Diamond Club Reserve, and another one is for the Great Way Diamond Club production, okay? So, those two documents, fully two things, so, like, the further, like, Diamond Club things, like, Diamond Club.
a
a
25:48
And then we'll…
Frontend Developer
Frontend Developer
25:53
Okay, so, like, I will send 3 documents, okay? One is for the Demon Club Blue, Demon Club Reserve, and one is for the Gateway.
a
a
26:00
Correct. Okay.
Frontend Developer
Frontend Developer
26:02
Okay.
a
a
26:03
Just make sure, let's get everything done tonight, so with tomorrow we go live.
I'm just kidding.
Okay?
Frontend Developer
Frontend Developer
26:12
Okay, so, like, I will try from my side to make everything done. Okay, so, like, by tomorrow, I will, like, send you a link, updated link, okay, so that you can check the things, okay?
a
a
26:25
Nope.
Frontend Developer
Frontend Developer
26:26
Also, Abramen, also, also, also, like, we just need also a discuss and also a request from your site. Okay, so, just as you see, that the deadline of the project is near to be in, so, like, here we need an extension… actually, I need an extension about that, okay?
a
a
26:42
No problem, I approve, they asked me for approving, I approve the money.
Get me the extension, no issue, okay?
Frontend Developer
Frontend Developer
26:49
Okay, okay, and also one thing, on the 21st of October.
a
a
26:54
Yeah.
Frontend Developer
Frontend Developer
26:55
So we have a weekend, like, in our country, here is in, like, a religious.
a
a
26:59
students.
Frontend Developer
Frontend Developer
27:00
on… So… can you hear me?
a
a
27:06
Yeah, yeah, I hear you.
Frontend Developer
Frontend Developer
27:07
Okay, so on, like, on 21st of October, we have a weekend. We can actually, like, our holiday, or, like, a religious, festivals on that day, so there's a reason we are, we won't be available on that day. So, like, in the meantime, I will, like, send all…
a
a
27:24
Let's finish it today so we can go live!
Frontend Developer
Frontend Developer
27:28
Okay, I try my…
a
a
27:29
Let me ask you, once we finish, what do you need to make it live?
Frontend Developer
Frontend Developer
27:35
Okay, we need, like, your domain, your, like, domain things, as well as…
a
a
27:39
And that's it. Then you upload it, and that's it.
Frontend Developer
Frontend Developer
27:42
Yeah, and you uploaded it on your server, and connect the domain name, and it should, like, totally fine, it should be working too.
a
a
27:48
One other thing, one other thing, one other thing.
If you see this, the… so…
this, you see, when people are gonna go to my domain, they're gonna be able to see this picture, yeah? Then they can choose this, they can choose whatever.
Then, let's say they choose this one, they can go into this program, they can go into this program, they can go into this program, okay?
Frontend Developer
Frontend Developer
28:11
Yeah, yeah.
a
a
28:11
But I have one domain name.
what the name is I sent you last time, you remember Getaway?
Frontend Developer
Frontend Developer
28:18
Yeah, Gateway, for the Gateway, yeah.
a
a
28:20
So when people go to the Getaway website, they only can go to this page and forward. They cannot go to the other page.
Frontend Developer
Frontend Developer
28:28
Okay…
a
a
28:29
Okay.
Frontend Developer
Frontend Developer
28:30
Okay, for that, actually, we need the domain name and other things for that website also.
a
a
28:36
Correct.
Frontend Developer
Frontend Developer
28:36
Okay, sorry.
a
a
28:37
We'll get you there. It's no problem.
But also, one other thing, one other thing.
I don't want, when you go into the website, it can open like this. You see, it looks, like, very dirty. By me, when they go to me, look, they open, it looks nice, okay?
So I want maybe, like, one page before this, but only when they go from the getaway website. When they go from our website, it should go straight like this. But when they go from the getaway link.
It should, like, make, like, a, you know, a splash, like we did on the, on the, on the app.
Like, a small, you know, like a water or some small opening till it goes in here.
You understand?
Frontend Developer
Frontend Developer
29:19
Okay, I understand. So, like, for that things, actually, we discussed the tomorrow meeting. Okay, so that tomorrow meeting, our backend Developer will also be available, so that he can discuss the two main things, as well as, and I try my best.
So, complete all of those things by tonight.
a
a
29:35
send me the documents right now so I can start sending you in stuff to finish.
Okay.
Frontend Developer
Frontend Developer
29:42
Okay, okay, okay, like, after the meeting, I obviously seen these things in the, like, fiber chat, okay?
a
a
29:46
Beautiful, thank you very much.
Frontend Developer
Frontend Developer
29:49
Okay, Abraham, thanks a lot.
a
a
29:51
Thanks, goodbye.
Frontend Developer
Frontend Developer
29:52
Bye.
```
