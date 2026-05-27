# Shivamani Portfolio

A personal portfolio website for Shivamani, built with Google AI Studio and exported as a Vite + React app.

The site presents Shivamani's skills, experience, projects, research work, and testimonials in a polished single-page portfolio.

## Built With

- Google AI Studio
- React
- TypeScript
- Vite
- Tailwind CSS

## Run Locally

**Prerequisite:** Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in `.env.local` using `.env.example` as a reference.
3. Optional: configure testimonial email delivery:
   - `VITE_TESTIMONIAL_EMAIL_ENDPOINT` for a form/email provider endpoint.
   - `VITE_TESTIMONIAL_TO_EMAIL` for a local `mailto:` fallback.
4. Run the app:
   `npm run dev`

## Testimonial Email

The testimonial form sends submissions to your email through a form endpoint such as Formspree, Web3Forms, or your own serverless API.

For production, use `VITE_TESTIMONIAL_EMAIL_ENDPOINT`. Do not place SMTP passwords or private email API keys directly in the React app, because frontend environment variables are visible in the browser.

If only `VITE_TESTIMONIAL_TO_EMAIL` is configured, the form opens the visitor's email app with a pre-filled draft instead of sending automatically.

Submitted testimonials are not published automatically and are not saved to the visitor's browser after submission. They are sent for review by email.

## Google AI Studio

Original AI Studio app:
https://ai.studio/apps/081f4cf0-ff75-41b1-ac64-b1fe001839c4
