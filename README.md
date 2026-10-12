# ICTG Landing Page
A responsive landing page for the Living Faith Church ICT Group (ICTG), built for the ICTG Front-End Web Development assessment. It introduces the group, shows what it does, and gives visitors a way to get in touch.

**Live site:** [add your GitHub Pages link here]
**Source code:** [add your GitHub repository link here]

## What is on the page
- **Navigation bar:** sticky, with working anchor links and a collapsing mobile menu.
- **Hero:** headline, short introduction, two calls to action and a team photo.
- **About:** who the ICT Group is, with three values.
- **What we do:** six activity cards (media and live streaming, web and software, graphics and social media, technical support, training, systems and security).
- **Contact:** a validated form (demo only, no message is sent) and a back-to-top link in the footer.

## Built with
- HTML5 and CSS3 (custom properties for colours, fonts and motion)
- JavaScript (vanilla): form validation, mobile menu behaviour and scroll-reveal animations using `IntersectionObserver`
- [Bootstrap 5.3.8](https://getbootstrap.com/) (grid, navbar, forms), loaded from a CDN
- [Google Fonts](https://fonts.google.com/): Manrope and Playfair Display


## Project structure

```
index.html     page markup
style.css      design tokens, layout, responsive rules and animations
script.js      form validation, mobile menu closing, scroll reveals
images/        logo and hero photo
```

## Accessibility and performance notes

- Semantic landmarks (`header`, `nav`, `main`, `footer`), one `h1`, and labelled form fields.
- Descriptive `alt` text on images, visible keyboard focus styles and a status message for the form.
- Animations are switched off when the visitor prefers reduced motion.
- Image dimensions are set in the markup to reduce layout shift, and the hero image loads with high priority.

## Notes
- The contact form is a front-end demo. It validates input but does not send a message.
- Content describes the group in general terms and can be replaced with confirmed details from the ICT team.

