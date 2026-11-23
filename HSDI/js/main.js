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

const faqs = document.querySelectorAll(".accordion details");

faqs.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    faqs.forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});
