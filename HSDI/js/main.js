const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

document.querySelectorAll("a.btn").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    if (link.dataset.intent === "course") openCourse();
    else openConsult();
  });
});

const dialog = document.createElement("div");
dialog.className = "consult";
dialog.hidden = true;
dialog.innerHTML = `
  <div class="consult-panel" role="dialog" aria-modal="true" aria-labelledby="consult-title">
    <button class="consult-close" type="button" aria-label="Close">×</button>
    <form class="consult-form">
      <p class="consult-kicker">Free · no commitment</p>
      <h2 id="consult-title">Book a consultation</h2>
      <p class="consult-lead">Leave your details and the clinic can contact you about a visit at 46 Harley Street.</p>
      <label>Name <input name="name" type="text" required placeholder="Your full name"></label>
      <label>Email <input name="email" type="email" required placeholder="you@example.com"></label>
      <label>Phone <input name="phone" type="tel" required placeholder="02045 535441"></label>
      <label>Message <span>(optional)</span>
        <textarea name="message" rows="4" placeholder="Anything you would like the clinic to know"></textarea>
      </label>
      <p class="consult-note">Prototype demonstration only. Information entered here is not transmitted or stored.</p>
      <button class="btn" type="submit">Book a consultation</button>
    </form>
    <div class="consult-thanks" hidden>
      <h2>Thank you. Your consultation request has been noted.</h2>
      <p>This is a demonstration form. No information has been transmitted.</p>
      <button class="btn" type="button" data-close>Close</button>
    </div>
  </div>
`;
document.body.appendChild(dialog);

const form = dialog.querySelector(".consult-form");
const thanks = dialog.querySelector(".consult-thanks");

function openConsult() {
  form.hidden = false;
  thanks.hidden = true;
  form.reset();
  dialog.hidden = false;
  document.body.classList.add("consult-open");
  dialog.querySelector("input").focus();
}

function closeConsult() {
  dialog.hidden = true;
  document.body.classList.remove("consult-open");
}

dialog.addEventListener("click", (event) => {
  if (event.target === dialog || event.target.closest("[data-close], .consult-close")) {
    closeConsult();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.hidden = true;
  thanks.hidden = false;
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !dialog.hidden) closeConsult();
  if (event.key === "Escape" && courseDialog && !courseDialog.hidden) closeCourse();
});

const courseDialog = document.createElement("div");
courseDialog.className = "consult";
courseDialog.hidden = true;
courseDialog.innerHTML = `
  <div class="consult-panel" role="dialog" aria-modal="true" aria-labelledby="course-title">
    <button class="consult-close" type="button" aria-label="Close">×</button>
    <form class="consult-form">
      <p class="consult-kicker">No payment now</p>
      <h2 id="course-title">Register your interest</h2>
      <p class="consult-lead">Share your details to receive the upcoming dates, confirmed fees and course syllabus.</p>
      <label>Name <input name="name" type="text" required placeholder="Your full name"></label>
      <label>Email <input name="email" type="email" required placeholder="you@example.com"></label>
      <label>Phone <input name="phone" type="tel" required placeholder="Your phone number"></label>
      <p class="consult-note">Prototype demonstration only. Information entered here is not transmitted or stored. No payment is taken.</p>
      <button class="btn" type="submit">Register your interest</button>
    </form>
    <div class="consult-thanks" hidden>
      <h2>Thank you. Your interest has been noted.</h2>
      <p>This is a demonstration form. No information has been transmitted.</p>
      <button class="btn" type="button" data-close>Close</button>
    </div>
  </div>
`;
document.body.appendChild(courseDialog);

const courseForm = courseDialog.querySelector(".consult-form");
const courseThanks = courseDialog.querySelector(".consult-thanks");

function openCourse() {
  courseForm.hidden = false;
  courseThanks.hidden = true;
  courseForm.reset();
  courseDialog.hidden = false;
  document.body.classList.add("consult-open");
  courseDialog.querySelector("input").focus();
}

function closeCourse() {
  courseDialog.hidden = true;
  document.body.classList.remove("consult-open");
}

courseDialog.addEventListener("click", (event) => {
  if (event.target === courseDialog || event.target.closest("[data-close], .consult-close")) {
    closeCourse();
  }
});

courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  courseForm.hidden = true;
  courseThanks.hidden = false;
});

document.querySelectorAll(".compare input").forEach((range) => {
  const frame = range.closest(".compare");
  const move = () => {
    frame.style.setProperty("--pos", range.value + "%");
  };
  range.addEventListener("input", move);
  move();
});

const faqs = document.querySelectorAll(".accordion details");

faqs.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    faqs.forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});
