const siteConfig = {
  googleFormEmbedUrl: "https://docs.google.com/forms/d/1HnirlMyJDa-AvbpjScK3lmxP7LqOHZtx5qxUNXrDQXo/viewform?embedded=true",
  googleFormUrl: "https://docs.google.com/forms/d/1HnirlMyJDa-AvbpjScK3lmxP7LqOHZtx5qxUNXrDQXo/viewform",
  humanitixEmbedUrl: "",
  humanitixUrl: "",
  formspreeEndpoint: "https://formspree.io/f/mlgykene",
  contactEmail: "hello@example.com",
};

const year = document.querySelector("#year");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

const googleFormPanel = document.querySelector("[data-google-form]");
const googleFormLink = document.querySelector("[data-google-form-link]");

if (googleFormPanel && siteConfig.googleFormEmbedUrl) {
  googleFormPanel.innerHTML = `<iframe title="Private Games Form" src="${siteConfig.googleFormEmbedUrl}" loading="lazy">Loading...</iframe>`;
}

if (googleFormLink && siteConfig.googleFormUrl) {
  googleFormLink.href = siteConfig.googleFormUrl;
}

const humanitixPanel = document.querySelector("[data-humanitix]");
const humanitixLink = document.querySelector("[data-humanitix-link]");

if (humanitixPanel && siteConfig.humanitixEmbedUrl) {
  humanitixPanel.innerHTML = `<iframe title="Humanitix Events" src="${siteConfig.humanitixEmbedUrl}" loading="lazy">Loading...</iframe>`;
}

if (humanitixLink && siteConfig.humanitixUrl) {
  humanitixLink.href = siteConfig.humanitixUrl;
}

const contactForm = document.querySelector("[data-contact-form]");
const contactEmail = document.querySelector("[data-contact-email]");
const formNote = document.querySelector("[data-form-note]");

if (contactForm && siteConfig.formspreeEndpoint) {
  contactForm.action = siteConfig.formspreeEndpoint;
} else if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  const submitButton = contactForm.querySelector("button[type='submit']");

  if (submitButton) {
    submitButton.textContent = "Add Formspree Endpoint";
  }

  if (formNote) {
    formNote.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  }
}

if (contactEmail) {
  contactEmail.href = `mailto:${siteConfig.contactEmail}`;
}

const lightbox = document.querySelector("[data-lightbox-modal]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxClose = document.querySelector("[data-lightbox-close]");
const lightboxPrevious = document.querySelector("[data-lightbox-previous]");
const lightboxNext = document.querySelector("[data-lightbox-next]");
const lightboxLinks = Array.from(document.querySelectorAll("[data-lightbox]"));
let activeLightboxIndex = 0;

const closeLightbox = () => {
  if (!lightbox || !lightboxImage) return;

  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.removeAttribute("src");
  lightboxImage.removeAttribute("alt");
};

const showLightboxImage = (index) => {
  if (!lightbox || !lightboxImage || !lightboxLinks.length) return;

  activeLightboxIndex = (index + lightboxLinks.length) % lightboxLinks.length;
  const activeLink = lightboxLinks[activeLightboxIndex];
  const image = activeLink.querySelector("img");

  lightboxImage.src = activeLink.href;
  lightboxImage.alt = image?.alt || "Miniature painting close-up";
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
};

if (lightbox && lightboxImage && lightboxLinks.length) {
  lightboxLinks.forEach((link, index) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showLightboxImage(index);
      lightboxClose?.focus();
    });
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  lightboxClose?.addEventListener("click", closeLightbox);
  lightboxPrevious?.addEventListener("click", () => showLightboxImage(activeLightboxIndex - 1));
  lightboxNext?.addEventListener("click", () => showLightboxImage(activeLightboxIndex + 1));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLightbox();
    } else if (lightbox.classList.contains("is-open") && event.key === "ArrowLeft") {
      showLightboxImage(activeLightboxIndex - 1);
    } else if (lightbox.classList.contains("is-open") && event.key === "ArrowRight") {
      showLightboxImage(activeLightboxIndex + 1);
    }
  });
}
