/**
 * All portfolio content lives in this file. Edit it to update the site.
 *
 * Sources: the résumé (summary, experience, skills, education, contact), the
 * public LinkedIn profile (certifications) and the project repositories.
 */

export type Link = { label: string; href: string };

/** A client project or product delivered within a role. */
export type Engagement = {
  name: string;
  client: string;
  kind: string;
  highlights: string[];
  stack?: string[];
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  engagements?: Engagement[];
  highlights?: string[];
};

/** One app or service inside a larger product. */
export type ProjectPart = {
  name: string;
  kind: string;
  description: string;
  stack: string[];
  links?: Link[];
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  links: Link[];
  featured?: boolean;
  /** Shown when the source code can't be linked. */
  repoPrivate?: boolean;
  /** e.g. "In progress". */
  status?: string;
  period?: string;
  /** Your part in a team project. */
  role?: string;
  /** Optional step-by-step pipeline drawn as a small diagram. */
  pipeline?: string[];
  /** Apps and services that make up a larger product. */
  parts?: ProjectPart[];
};

export type SkillGroup = { label: string; items: string[] };

export type Credential = { name: string; issuer: string; date?: string };

export type Education = { degree: string; school: string; year: string };

export const profile = {
  name: "Jaya Suriyan R",
  shortName: "Jaya Suriyan",
  initials: "JS",
  headline: "Generative AI & Full Stack Developer",
  role: "Senior Software Engineer",
  location: "Chennai, Tamil Nadu, India",
  city: "Chennai, India",
  yearsOfExperience: "7+",
  currentCompany: "Virtusa",
  intro:
    "I design, build and deploy enterprise web applications with React, Node.js, TypeScript, PostgreSQL and AWS. Right now I'm building Generative AI applications with Python and LangChain for Eli Lilly.",
  about: [
    "I'm a full stack developer with 7+ years of experience designing, building and deploying enterprise web applications on the MERN and PERN stacks. I've delivered features end to end, from the UI through REST APIs and databases to the cloud, for global clients such as Eli Lilly and Tata Consumer Products.",
    "As a Senior Software Engineer at Virtusa, I'm building Generative AI applications with Python and LangChain. One of them is an LLM-powered checker that reviews research papers against company compliance policies and drafts corrections for authors.",
    "Beyond client work I build products. Feasto is a restaurant ordering platform with web, point-of-sale and mobile apps, which restaurants run under their own brand. I've also built a music streaming app with adaptive streaming and offline playback, and I'm building OpsPlane, a control plane for running many client deployments and in-store devices from one place.",
  ],
  spokenLanguages: ["English", "Tamil"],
  email: "jaisuriyan97@gmail.com",
  links: {
    github: "https://github.com/Jaya-Suriyan",
    linkedin: "https://in.linkedin.com/in/jaya-suriyan-r-020715178",
  },
};

export const experience: Experience[] = [
  {
    company: "Virtusa Consulting Services",
    role: "Senior Software Engineer",
    location: "Chennai, India",
    start: "Oct 2022",
    end: "Present",
    engagements: [
      {
        name: "Elog",
        client: "Eli Lilly and Company",
        kind: "GenAI application",
        highlights: [
          "Developed a Generative AI application in Python and LangChain that ingests research papers, checks them against company compliance policies and generates draft corrections.",
          "Designed the prompts and LLM workflows that automate manual compliance review and give authors actionable feedback.",
          "Deployed and integrated the AI service on AWS as part of an enterprise workflow.",
        ],
        stack: ["Python", "LangChain", "LLMs", "Prompt engineering", "React", "AWS"],
      },
      {
        name: "IBU MaRS Development",
        client: "Eli Lilly and Company",
        kind: "Full stack web applications",
        highlights: [
          "Developed full stack web applications in React, Vue.js and Node.js that automate manual business operations.",
          "Built REST APIs and PostgreSQL data models, with Redis for caching.",
          "Applied DevOps and CI/CD practices to deploy the applications on AWS and Azure.",
        ],
        stack: ["React", "Vue.js", "Node.js", "PostgreSQL", "Redis", "AWS", "Azure", "CI/CD"],
      },
      {
        name: "AWS ProServe",
        client: "Tata Consumer Products",
        kind: "Agri-marketplace platform",
        highlights: [
          "Built a marketplace where Tata buys produce from farmers and dealers through pre-booking, tasting, bidding and buying.",
          "Developed the React (Nx) front end and the Node.js (TypeScript) REST APIs on PostgreSQL with Sequelize ORM.",
        ],
        stack: ["React", "Nx", "Node.js", "TypeScript", "PostgreSQL", "Sequelize"],
      },
    ],
  },
  {
    company: "Baypac Systems",
    role: "Application Analyst",
    location: "Chennai, India",
    start: "Aug 2019",
    end: "May 2022",
    engagements: [
      {
        name: "SALARITY",
        client: "Hospital Association of Southern California",
        kind: "Survey platform",
        highlights: [
          "Developed a survey platform that delivers HR compensation, benefits and industry trend data to clients.",
        ],
      },
      {
        name: "ONECOMPARE",
        client: "Maseke",
        kind: "Data comparison tool",
        highlights: [
          "Built a tool that compares two files or two points in time, supports seasonality comparison and shows the results side by side.",
          "Implemented XLSX and PDF report export, plus a desk workflow to escalate, assign, resolve or ignore anomalies.",
        ],
        stack: ["React", "Node.js", "TypeScript", "PostgreSQL", "Oracle"],
      },
    ],
  },
  {
    company: "Baypac Systems",
    role: "Developer Intern",
    location: "Chennai, India",
    start: "Jan 2019",
    end: "Jul 2019",
    highlights: ["Developed web pages, debugged code and ran system testing to ensure software quality."],
  },
];

export const projects: Project[] = [
  {
    slug: "feasto",
    name: "Feasto",
    tagline: "Restaurant ordering platform that runs under each restaurant's own brand",
    description:
      "Online ordering, table QR ordering, table booking, marketing and rewards for restaurants. Each restaurant gets its own branded instance, run by one API and served through web, point-of-sale and mobile apps.",
    role: "Main contributor to the API and both web apps, and sole developer of the two mobile apps.",
    period: "2025 – present",
    highlights: [
      "Live orders reach the admin dashboard, the POS and the owner's phone over Socket.IO. Customers get ETA and status emails through AWS SES.",
      "Stripe payments into each restaurant's Stripe Express account, with per-restaurant card statement and payout descriptors.",
      "Role-based access control across web and mobile, staff who work across several branches, and activity logs.",
      "Allergen management for UK and EU food law, and menu items with dependent options and validation rules.",
      "Interfaces in English, Tamil, Malayalam, and right-to-left Arabic and Urdu.",
    ],
    stack: [],
    links: [{ label: "feasto.co.uk", href: "https://feasto.co.uk" }],
    featured: true,
    parts: [
      {
        name: "Restaurant API",
        kind: "Backend",
        description:
          "Serves every app: orders, menus, branches, reservations, loyalty, payments, reports and access control across about 40 route modules, plus scheduled jobs and S3 file storage.",
        stack: ["Node.js", "Express", "MongoDB", "Socket.IO", "Stripe", "AWS S3", "AWS SES"],
      },
      {
        name: "Customer ordering site",
        kind: "Web app for customers",
        description:
          "Menu, cart and Stripe checkout, table QR ordering, live order tracking, loyalty perks and a page builder for the restaurant's own website. An Express server adds SEO metadata to each page.",
        stack: ["React", "TypeScript", "Vite", "TanStack Query", "Stripe", "Google Maps", "i18next"],
      },
      {
        name: "Admin dashboard",
        kind: "Web app for staff",
        description:
          "Back office for live orders with a tracking timeline, a menu editor with option rules, branches, staff roles, reports with PDF, Excel and CSV export, allergens, SEO and POS device setup.",
        stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Radix UI", "Recharts", "Socket.IO"],
        links: [{ label: "Early version", href: "https://github.com/Jaya-Suriyan/Restaurent-System-React" }],
      },
      {
        name: "FeastoPOS",
        kind: "Point-of-sale app",
        description:
          "Runs on Sunmi POS terminals. Alerts staff to new orders with a looping sound, prints receipts on the built-in printer, and connects to a restaurant's server by scanning a QR code.",
        stack: ["React Native", "TypeScript", "Socket.IO", "Sunmi printer SDK"],
      },
      {
        name: "FeastoAdmin",
        kind: "Owner app · iOS & Android",
        description:
          "One build serves every restaurant. The owner scans a QR code from the admin dashboard to connect, then handles live orders, opening hours and stock, and checks reports. Supports biometric app lock.",
        stack: ["Flutter", "Dart", "Socket.IO", "fl_chart"],
      },
      {
        name: "Deployment tooling",
        kind: "Operations",
        description:
          "Sets up each restaurant's instance on a shared server, with its own PM2 processes and Nginx config, and deploys updates through a token-protected webhook.",
        stack: ["Bash", "Nginx", "PM2", "Node.js", "Express"],
        links: [
          { label: "Provisioning", href: "https://github.com/Jaya-Suriyan/feasto-deploy-setup" },
          { label: "Deploy server", href: "https://github.com/Jaya-Suriyan/node-cicd" },
        ],
      },
    ],
  },
  {
    slug: "media-player-classic",
    name: "Media Player Classic",
    tagline: "A music streaming app that keeps playing on slow connections",
    description:
      "Installable web app (PWA) and API for streaming a music library on phones and desktops. Every upload is converted to adaptive streams, so playback starts fast and recovers on weak networks.",
    highlights: [
      "Adaptive HLS streaming: ffmpeg converts each song to 48, 96 and 160 kbps. Playback starts at the lowest bitrate and moves up as the network allows.",
      "Offline downloads that play with no connection on any browser, including iPhone. The server builds each download from existing stream segments without re-encoding, in about 0.1 s.",
      "Search that tolerates typos and spelling variants of transliterated names, running on plain MongoDB in about 20–60 ms over 5,000 songs.",
      "Storage can be local disk, AWS S3, Cloudflare R2 or any S3-compatible store. Audio is served straight from storage, so it never passes through the API.",
      "Admin panel with drag-and-drop folder upload, automatic tag reading, bulk editing and live processing status.",
    ],
    stack: ["React", "TypeScript", "Vite", "PWA", "hls.js", "Node.js", "Fastify", "MongoDB", "ffmpeg", "AWS S3", "Cloudflare R2", "Docker"],
    links: [{ label: "Source", href: "https://github.com/Jaya-Suriyan/media-player-classic" }],
    featured: true,
    pipeline: ["Upload", "ffmpeg", "HLS 48 / 96 / 160k", "S3 · R2 · disk", "Player"],
  },
  {
    slug: "opsplane",
    name: "OpsPlane",
    tagline: "Control plane for running many client deployments and in-store devices",
    description:
      "One place to operate every client deployment: push environment settings, manage processes and maintenance scripts on each client's server, stream logs to the browser, and remotely support in-store Android POS devices.",
    status: "In progress",
    repoPrivate: true,
    highlights: [
      "Secrets encrypted with AES-256-GCM and bound to their record and field, with a rotatable keyring kept outside the database.",
      "Server operations without free-form shell commands: pinned SSH host keys, validated and escaped arguments, a registry of approved scripts, and .env files written atomically over SFTP.",
      "Remote support for Sunmi POS devices through a Kotlin agent: screen sharing over WebRTC, touch input, on-device consent and short-lived TURN credentials.",
      "Append-only, hash-chained audit log with secrets redacted. Operators sign in with mandatory TOTP two-factor authentication.",
    ],
    stack: ["TypeScript", "Node.js", "Express", "MongoDB", "WebSockets", "WebRTC", "Kotlin", "pnpm workspaces", "Docker"],
    links: [],
  },
];

export const skills: SkillGroup[] = [
  {
    label: "Generative AI",
    items: ["LLMs", "LLM integration", "LangChain", "Prompt engineering", "Python"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Nx", "Vue.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "PWA"],
  },
  { label: "Mobile", items: ["React Native", "Flutter", "Dart"] },
  {
    label: "Backend",
    items: ["Node.js", "Express", "NestJS", "Fastify", "Python", "REST APIs", "Socket.IO", "Stripe", "Sequelize ORM"],
  },
  { label: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Oracle", "Redis"] },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "Azure", "CI/CD", "Docker", "Nginx", "PM2", "Git", "GitHub", "GitLab"],
  },
  {
    label: "Practices",
    items: ["Agile / Scrum", "System testing", "Debugging", "Code reviews"],
  },
];

export const credentials: Credential[] = [
  { name: "AWS SimuLearn: AI Practitioner (training badge)", issuer: "Amazon Web Services", date: "Oct 2026" },
  { name: "Architecting on AWS (AWS-ARC)", issuer: "Trainocate", date: "Jul 2023" },
  { name: "React.js skill assessment", issuer: "LinkedIn" },
];

export const education: Education[] = [
  { degree: "Master of Computer Applications (MCA)", school: "Presidency College, Chennai", year: "2019" },
  { degree: "Bachelor of Computer Applications (BCA)", school: "Sun Arts and Science College, Tiruvannamalai", year: "2017" },
];

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-gamma-six-99.vercel.app"
).replace(/\/$/, "");
