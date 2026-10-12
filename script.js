const contactForm = document.querySelector("#contact-form");
const contactStatus = document.querySelector("#contact-status");

if (contactForm && contactStatus) {
  const nameInput = contactForm.querySelector("#full-name");
  const emailInput = contactForm.querySelector("#email");
  const messageInput = contactForm.querySelector("#message");

  // Clear custom errors when the visitor edits a field.
  [nameInput, emailInput, messageInput].forEach((input) => {
    input.addEventListener("input", () => {
      input.setCustomValidity("");
      contactStatus.textContent = "Demo form — messages are not sent.";
    });
  });

  contactForm.addEventListener("submit", (event) => {
    // Stop the browser from submitting or reloading the page.
    event.preventDefault();

    nameInput.setCustomValidity(
      nameInput.value.trim() ? "" : "Please enter your name."
    );

    messageInput.setCustomValidity(
      messageInput.value.trim() ? "" : "Please enter a message."
    );

    if (!contactForm.reportValidity()) {
      return;
    }

    contactStatus.textContent =
      "Your entries passed validation. This is a demo; no message was sent.";
  });
}

// Close the mobile menu after a navigation link is selected
const mobileMenu = document.querySelector("#mainNav");
const menuToggle = document.querySelector(".navbar-toggler");

if (mobileMenu && menuToggle) {
    mobileMenu.querySelectorAll("a[href^='#']").forEach((link) => {
        link.addEventListener("click", () => {
            const isMobileMenu =
                window.getComputedStyle(menuToggle).display !== "none";

            if (
                isMobileMenu &&
                mobileMenu.classList.contains("show")
            ) {
                bootstrap.Collapse.getOrCreateInstance(mobileMenu, {
                    toggle: false
                }).hide();

                menuToggle.focus({ preventScroll: true });
            }
        });
    });
}

// Reveal once; content remains visible if AOS cannot load.
const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
if (window.AOS && !motionPreference.matches) {
  try {
    AOS.init({ duration: 650, easing: "ease-out-cubic", once: true, offset: 60 });
    document.documentElement.classList.add("aos-enabled");
    window.addEventListener("load", () => AOS.refresh());
  } catch (error) {
    document.documentElement.classList.remove("aos-enabled");
  }
}
motionPreference.addEventListener("change", (event) => {
  if (event.matches) document.documentElement.classList.remove("aos-enabled");
});
// Keyboard focus must never land in visually hidden content.
document.addEventListener("focusin", (event) => {
  const animatedParent = event.target.closest("[data-aos]");
  if (animatedParent) animatedParent.classList.add("aos-animate");
});
