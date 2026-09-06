# Alisha Khan — Portfolio

A premium, dark-themed personal portfolio built with React, Vite, Tailwind CSS and Framer Motion.

## Tech stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion (animations, carousels, modal transitions)
- lucide-react (icons)
- Web3Forms (contact form email delivery)

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

Build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

```
src/
├── components/     # UI components (Hero, Projects, Contact, etc.)
├── data/           # Content lives here — edit these files, not the components
│   ├── profile.js       # name, tagline, resume/photo URLs, social links
│   ├── skills.js         # technical + soft skills
│   ├── projects.js       # project cards (GitHub/live demo URLs)
│   ├── certificates.js   # certificate carousel entries
│   └── experience.js     # experience, achievements, education
├── hooks/          # small reusable hooks (carousel, mouse position, etc.)
└── lib/            # icon registry
```

### Updating content

- **Projects, GitHub links, live demo links** → edit `src/data/projects.js`.
  Leave `githubUrl` / `liveDemoUrl` empty to show "Coming Soon" / "Private"
  instead of a broken link — never fill these with a fake URL.
- **Certificates** → edit `src/data/certificates.js`. Add a real
  `certificateUrl` once you have a shareable verification link.
- **Resume & photo** → set `resumeUrl` / `photoUrl` in `src/data/profile.js`,
  or drop `resume.pdf` / `photo.jpg` into `public/` and point to `/resume.pdf`
  and `/photo.jpg`.
- **Social links** → `src/data/profile.js` → `socialLinks`.

## Setting up the contact form (Web3Forms)

The contact form sends real emails using [Web3Forms](https://web3forms.com),
a free service designed for static/frontend-only forms — no backend server
required, and it works cleanly with Vite + Vercel.

### 1. Create a Web3Forms access key

1. Go to https://web3forms.com and enter the email address where you want to
   receive messages.
2. Web3Forms emails you an **Access Key**. Confirm your email if asked.
3. Keep that access key handy — it's safe to use in frontend code (it only
   allows sending *to* your registered email, not reading anything).

### 2. Create your local `.env` file

In the project root, create a file named `.env`:

```
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

`.env` is already listed in `.gitignore` so it won't be committed.

### 3. Add the same variable to Vercel

1. In your Vercel project dashboard, go to **Settings → Environment
   Variables**.
2. Add a variable named `VITE_WEB3FORMS_ACCESS_KEY` with your access key as
   the value, for the **Production** (and Preview, if you want) environment.
3. Redeploy so the build picks up the new variable.

### 4. Test the form after deployment

1. Open your deployed site and go to the Contact section.
2. Fill in Name, Email, Subject and Message, then submit.
3. You should see the "Message Sent Successfully 🎉" confirmation, and an
   email should arrive at the address you registered with Web3Forms within
   a minute or two.
4. If it fails, double-check the environment variable name/value in Vercel
   and that you redeployed after adding it.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. In Vercel, click **New Project** and import the repository.
3. Framework preset: **Vite** (should be auto-detected). Build command
   `npm run build`, output directory `dist` (also auto-detected).
4. Add the `VITE_WEB3FORMS_ACCESS_KEY` environment variable (see above)
   before your first deploy, or add it and redeploy afterwards.
5. Deploy — Vercel will give you a live URL.

## Notes

- All content is data-driven (see `src/data/`), so you can update projects,
  certificates and skills without touching component code.
- No project, certificate, or social URL is invented — empty fields
  intentionally render as "Coming Soon" / "Private" / "Certificate Details"
  until you supply the real link.
- Reduced-motion, keyboard navigation and focus states are supported
  throughout (carousels, modal, nav, back-to-top).
