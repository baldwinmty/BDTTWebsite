const siteConfig = {
  googleFormEmbedUrl: "https://docs.google.com/forms/d/1HnirlMyJDa-AvbpjScK3lmxP7LqOHZtx5qxUNXrDQXo/viewform?embedded=true",
  googleFormUrl: "https://docs.google.com/forms/d/1HnirlMyJDa-AvbpjScK3lmxP7LqOHZtx5qxUNXrDQXo/viewform",
  humanitixEmbedUrl: "",
  humanitixUrl: "",
  formspreeEndpoint: "",
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
