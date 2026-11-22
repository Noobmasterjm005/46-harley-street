# 46 Harley Street Implant Centre

Homepage implementation plan. No page code in this pass.

Goal: a person can book an implant consultation, and can see who the clinician is, where the clinic is, and when it is open.

## Brand

The logo is a gold line mark on deep navy: **46 | HARLEY STREET / IMPLANT CENTRE**.

That mark sets the site. Premium and minimal means navy, gold, off-white, and black, with a lot of empty space and very little decoration. The earlier soft-green and mint palette was a learning reference. It fights this logo and this address, so it is not used here.

Gold is for the logo, thin rules, and the heading underline. Body text is off-white on navy, or black on off-white. Small gold text on navy is hard to read, so gold is not used for paragraphs or the phone number.

## Header

- Left: the logo
- Center: Home, About, Implants, FAQ, Contact
- Right: **Book a consultation**

On a phone, the five links go into one menu. The logo and the Book button stay visible.

Book is the only primary action. Call is a text link, always visible near the hours, not a second competing button.

## Page order

1. **Hero.** The street photo (clinician outside 46 Harley Street) as the background. Short headline: **Dental implants on Harley Street.** One line under it. The Book button. No credential block burned over the photo.
2. **Clinician.** Dr Anthony James, with the consulting-room portrait. Title and qualifications as supplied:
   - Specialty Doctor and Lead Dentist at The Harley Street Dental Implant Centre
   - BDS (Lond) MFDS RCS (Eng) MJDF DipImpDent (Manc)
   - The portrait file also shows a longer line (DipDSed, AKC, PGCertClinEd) and the title Director and Lead Clinician. Confirm which line is the official one before publish. Set the words in the page, not inside the image.
3. **Film.** `promo-1.mp4` from `C:\Users\sharo\OneDrive\Documents\promo-1.mp4`. Click to play, with a still from the surgery photo as the poster. No autoplay with sound. Captions when a transcript exists.
4. **Visit.** Facts only, no paragraph around them.
   - 46 Harley Street, London W1G 9PT, UK
   - Mon–Fri 9am–6pm
   - Sat 10am–6pm
   - Sun closed (confirm; it is not in the hours you sent)
   - Phone: 020 4553 5441 (display of 02045535441)
   - Email: info@harleystreetimplantcentre.co.uk
5. **Proof.** Three Google reviews, quoted exactly, not rewritten:
   - https://maps.app.goo.gl/di25tgNYD3w14DDr7
   - https://maps.app.goo.gl/GNNQi5CiFpQweaGe8
   - https://maps.app.goo.gl/V9uPaw1CprN7C29a7
6. **Treatment room.** The surgery photo, one sentence on what a consultation is, Book button again.
7. **FAQ.** Short answers: Am I a candidate? How long does it take? What happens at the consultation? How do I get to 46 Harley Street?
8. **Footer.** Logo, the five links, address, hours, phone, email, and:
   - https://www.youtube.com/@HarleyStreetImplantCentre
   - https://www.instagram.com/harleystreetimplants/
   - https://www.facebook.com/harleystreetimplantcentre

## Assets in hand

| Use | File |
| --- | --- |
| Logo and favicon source | Gold 46 mark on navy |
| Hero | Clinician outside the building |
| About | Clinician in the consulting room |
| Video poster | Clinician in the surgery |
| Film | `C:\Users\sharo\OneDrive\Documents\promo-1.mp4` |

Favicon: the **46** square from the logo, on navy, at 32px and 180px. Crop it from the logo. Do not redraw it.

## Later, not this page

- After-treatment photos, only with patient consent, in their own section
- Other dental services
- Insurance providers
- Those wait until you send the images and the provider list

## Build order when coding starts

1. One homepage file. Structure first: header, sections, footer, real words, real links.
2. Phone is a `tel:` link. Email is a `mailto:` link. Address links to a map.
3. Layout at phone width, then desktop. No sideways scroll.
4. Color limited to navy, gold, off-white, black.
5. Install Impeccable for Cursor and run `/impeccable typeset` on this page. Keep the premium, quiet character.
6. Paste the three Google reviews verbatim.
7. Add the favicon from the logo.

## Practices to keep

- One idea per section. Short lines. The page is scanned.
- Real rooms and the real clinician. No stock smiles.
- The same Book button in the header, the hero, and the visit block.
- Hours, address, phone, and email visible without opening a menu.
- Sunday stated, once you confirm it.
- Qualifications as text, so a screen reader and a search engine can read them.
- Video starts only when someone chooses to play it.
- Insurance logos and extra services do not go on this first version. They would crowd a minimal page.
