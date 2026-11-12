# Ameer Ibrahim - Portfolio

Personal portfolio website for **Ameer Ibrahim**, a Computer Science student and aspiring AI Developer from **Sialkot, Pakistan**.

> **Tagline:** Building Intelligent Solutions Through Code and Creativity.

## Tech Stack

- **Framework:** Next.js (App Router, Static Export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Radix UI primitives
- **Animations:** Framer Motion, Vanta.js NET, Three.js

## Pages

- `/` — Home (Hero with Vanta.js NET background, About preview, Projects preview, Skills preview, Contact preview)
- `/about` — Biography, personal journey, career goal, passions, and personal qualities
- `/education` — Academic qualifications and upcoming higher education track
- `/skills` — Technical skills, software proficiency, soft skills, and languages
- `/experience` — Professional experience (with empty state ready for future entries)
- `/projects` — Software and AI projects (with empty state ready for future entries)
- `/certificates` — Certifications and achievements (with empty state ready for future entries)
- `/blog` & `/blog/[slug]` — Introductory articles on Computer Science, Artificial Intelligence, and programming fundamentals
- `/contact` — Contact details (`Sialkot, Pakistan`, Email, Phone, WhatsApp) and `mailto:` contact form

## Updating Portfolio Content

All personal information and portfolio sections are managed centrally in:

- [`lib/portfolio-data.ts`](./lib/portfolio-data.ts) — Edit personal info, biography, education, skills, experiences, projects, certificates, achievements, social links, resume availability, and blog posts.
- [`lib/types.ts`](./lib/types.ts) — TypeScript definitions for all portfolio data structures.
- [`lib/constants.ts`](./lib/constants.ts) — Site navigation and helper exports.

### Adding Your Resume PDF

1. Place your PDF file at `public/resume/ameer-ibrahim-resume.pdf`.
2. In `lib/portfolio-data.ts`, set `resumeConfig.available = true`.

## Commands

```bash
npm run dev
npm run lint
npx tsc --noEmit
npm run build
```
