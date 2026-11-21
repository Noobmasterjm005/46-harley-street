import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useState } from "react";
import { Enquiry } from "./components/Enquiry";
import { Header } from "./components/Header";
import {
  faqs,
  gallery,
  insurers,
  mapsUrl,
  prices,
  programme,
  results,
  reviews,
  steps,
} from "./content";

function BookButton({ onBook, className = "" }: { onBook: () => void; className?: string }) {
  return (
    <button type="button" className={`cta ${className}`} onClick={onBook}>
      Book an implant consultation
    </button>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const book = () => setOpen(true);

  return (
    <div id="top">
      <Header onBook={book} />
      <main>
        <section className="mx-auto grid max-w-[1120px] items-center gap-8 px-4 py-12 md:grid-cols-2">
          <div>
            <p className="text-sm tracking-[0.16em] uppercase">Harley Street Implant Centre</p>
            <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
              Dental implants on Harley Street
            </h1>
            <p className="mt-4 max-w-xl text-lg">
              Replace a missing tooth with a planned implant. Dr Anthony James assesses every case himself.
            </p>
            <BookButton onBook={book} className="mt-6" />
            <p className="mt-4 text-sm">
              The clinic states Dr James has placed more than 4,000 implants, with a 99.7% success rate. A free 30-minute consultation comes before any treatment.
            </p>
          </div>
          <img
            src="/media/facade.jpg"
            alt="The facade of 46 Harley Street"
            className="h-80 w-full rounded-3xl object-cover md:h-[28rem]"
          />
        </section>

        <section id="programme" className="mx-auto max-w-[1120px] px-4 py-8">
          <h2 className="font-serif text-3xl">Who this is for</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {programme.map((item) => (
              <article key={item.title} className="glass glass-lift rounded-2xl p-5">
                <h3 className="font-serif text-xl">{item.title}</h3>
                <p className="mt-2">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1120px] px-4 py-8" aria-labelledby="pricing-title">
          <h2 id="pricing-title" className="font-serif text-3xl">Pricing</h2>
          <p className="mt-2 max-w-2xl">Several teeth are quoted after assessment. Cover from an insurer is checked at the consultation. It is not a promise of payment.</p>
          <div className="mt-6 overflow-x-auto rounded-2xl glass">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <caption className="sr-only">Implant fees published by the clinic</caption>
              <thead>
                <tr className="border-b border-ink/10">
                  <th className="p-4 font-semibold">Item</th>
                  <th className="p-4 font-semibold">Fee</th>
                  <th className="p-4 font-semibold">What it includes</th>
                </tr>
              </thead>
              <tbody>
                {prices.map(([item, fee, detail]) => (
                  <tr key={item} className="border-b border-ink/10 last:border-0">
                    <th className="p-4 font-medium" scope="row">{item}</th>
                    <td className="p-4">{fee}</td>
                    <td className="p-4">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="mt-6 flex flex-wrap items-center gap-6">
            {insurers.map((insurer) => (
              <li key={insurer.name}>
                <img src={insurer.src} alt={insurer.name} className="h-10 w-auto object-contain" />
              </li>
            ))}
          </ul>
        </section>

        <section id="process" className="mx-auto max-w-[1120px] px-4 py-8">
          <h2 className="font-serif text-3xl">How treatment usually proceeds</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="glass glass-lift rounded-2xl p-5">
                <p className="text-sm text-accent">{index + 1}</p>
                <h3 className="mt-1 font-serif text-xl">{step.title}</h3>
                <p className="mt-2 text-sm">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mx-auto grid max-w-[1120px] gap-8 px-4 py-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <img src="/media/dr-james.jpg" alt="Dr Anthony James" className="w-full rounded-3xl object-cover" />
          </div>
          <div>
            <h2 className="font-serif text-3xl">Dr Anthony James</h2>
            <p className="mt-3 text-sm">
              BDS (Lond), MFDS RCS (Eng), MJDF, DipImpDent (Manc), DipDSed (KCL), AKC, PGCertClinEd (KCL), FHEA, MAcadMEd
            </p>
            <p className="mt-4">
              Specialty doctor in oral and maxillofacial surgery, and a sedationist. The clinic states he has placed more than 4,000 implants, with a 99.7% success rate. He sees each case himself at 46 Harley Street.
            </p>
            <figure className="mt-6">
              <video
                className="w-full rounded-2xl"
                controls
                playsInline
                preload="none"
                poster="/media/poster-welcome.jpg"
              >
                <source src="/media/welcome.mp4" type="video/mp4" />
              </video>
              <figcaption className="mt-2 text-sm">A welcome from Dr Anthony James. Press play. The video does not start by itself.</figcaption>
            </figure>
          </div>
        </section>

        <section className="mx-auto max-w-[1120px] px-4 py-8">
          <h2 className="font-serif text-3xl">The clinic</h2>
          <figure className="mt-6">
            <video className="w-full rounded-2xl" controls playsInline preload="none" poster="/media/poster-tour.jpg">
              <source src="/media/tour.mp4" type="video/mp4" />
            </video>
            <figcaption className="mt-2 text-sm">A walk-through of the Harley Street rooms.</figcaption>
          </figure>
          <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
            {gallery.map(([src, alt]) => (
              <li key={src}>
                <img src={src} alt={alt} className="h-40 w-full rounded-2xl object-cover md:h-52" />
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-4 md:grid-cols-[16rem_1fr] md:items-center">
            <img src="/media/facade.jpg" alt="46 Harley Street, the clinic exterior" className="h-48 w-full rounded-2xl object-cover" />
            <p>
              The clinic exterior at 46 Harley Street.{" "}
              <a className="underline" href={mapsUrl} target="_blank" rel="noreferrer">
                Google Maps listing
              </a>
              . The listing showed 5.0 from 43 reviews when these cards were copied.
            </p>
          </div>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {reviews.map((review) => (
              <li key={review.name} className="glass glass-lift rounded-2xl p-5">
                <p className="text-sm text-accent" aria-label="5 stars">★★★★★</p>
                <blockquote className="mt-2">{review.quote}</blockquote>
                <p className="mt-3 text-sm">
                  {review.name} · {review.when}
                  <span className="block">{review.note}</span>
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto max-w-[1120px] px-4 py-8" aria-labelledby="results-title">
          <h2 id="results-title" className="font-serif text-3xl">Photographs published by the clinic</h2>
          <p className="mt-2 text-sm">Before and after pairs already shown on the clinic website. These are the clinic’s photographs.</p>
          <div className="mt-6 grid gap-6">
            {results.map(([before, after], index) => (
              <figure key={before} className="grid gap-3 md:grid-cols-2">
                <img src={before} alt={`Clinic before photograph ${index + 1}`} className="h-64 w-full rounded-2xl object-cover" />
                <img src={after} alt={`Clinic after photograph ${index + 1}`} className="h-64 w-full rounded-2xl object-cover" />
                <figcaption className="md:col-span-2 text-sm">Before, then after. Pair {index + 1}.</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1120px] px-4 py-4">
          <p className="glass rounded-2xl p-5 text-sm">
            For dentists: Dr James leads a 6-month implant course in London. Dates, fees, and the syllabus are not on this page.
          </p>
        </section>

        <section id="questions" className="mx-auto max-w-[1120px] px-4 py-8">
          <h2 className="font-serif text-3xl">Questions</h2>
          <div className="mt-4 grid gap-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="glass rounded-2xl p-4">
                <summary className="cursor-pointer font-medium">{faq.q}</summary>
                <p className="mt-2">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1120px] px-4 py-12">
          <div className="rounded-3xl bg-ink px-6 py-10 text-paper">
            <h2 className="font-serif text-3xl">Talk to Dr James about an implant</h2>
            <p className="mt-3 max-w-xl">The consultation is free for 30 minutes. A full assessment with a CBCT scan is £250.</p>
            <BookButton onBook={book} className="mt-6" />
          </div>
        </section>
      </main>
      <footer className="border-t border-ink/10">
        <div className="mx-auto grid max-w-[1120px] gap-6 px-4 py-10 text-sm md:grid-cols-3">
          <div>
            <p className="font-semibold">Harley Street Implant Centre</p>
            <p className="mt-1">46 Harley Street, London W1G 9PT</p>
          </div>
          <div>
            <p className="font-semibold">Hours</p>
            <p className="mt-1">Monday–Friday 10am–6pm</p>
            <p>Saturday 10am–1pm</p>
          </div>
          <div>
            <p className="font-semibold">Contact</p>
            <p className="mt-1">02045 535441</p>
            <p>info@harleystreetimplantcentre.co.uk</p>
            <p className="mt-2">
              <a className="underline" href="https://www.instagram.com/harleystreetimplants/" target="_blank" rel="noreferrer">Instagram</a>
              {" · "}
              <a className="underline" href="https://www.facebook.com/harleystreetimplantcentre/" target="_blank" rel="noreferrer">Facebook</a>
            </p>
          </div>
        </div>
        <p className="px-4 pb-8 text-center text-sm">Prototype. This form does not book an appointment.</p>
      </footer>
      <Enquiry open={open} onClose={() => setOpen(false)} />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
