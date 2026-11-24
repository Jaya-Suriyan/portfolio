/**
 * All portfolio content lives in this file. Edit it to update the site.
 *
 * Sources: the résumé (summary, experience, skills, education, contact), the
 * public LinkedIn profile (certifications) and the public GitHub repositories
 * (personal projects).
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

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  links: Link[];
  featured?: boolean;
  /** Optional step-by-step pipeline drawn as a small diagram on the featured project. */
  pipeline?: string[];
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
    "Outside work I build and run my own products: a music streaming app with adaptive streaming and offline playback, restaurant management systems, and the deployment tooling that runs them on my own servers.",
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
    slug: "restroman",
    name: "Restroman UK",
    tagline: "Restaurant management dashboard",
    description:
      "Back-office dashboard for running restaurants across branches, from taking orders at the counter to reporting on sales.",
    highlights: [
      "Point-of-sale screen, order tracking and table reservations.",
      "Catalogue management for products, brands, units, add-ons and discounts, plus promotions and content.",
      "Branch, user and transaction management with reporting and analytics charts.",
    ],
    stack: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Recharts"],
    links: [{ label: "Source", href: "https://github.com/Jaya-Suriyan/Restaurent-System-React" }],
  },
  {
    slug: "feasto-deploy",
    name: "Feasto deployment tooling",
    tagline: "Multi-tenant provisioning and push-to-deploy",
    description:
      "Scripts and a small deploy server that set up and update a separate instance of a restaurant platform for each customer on a self-managed server.",
    highlights: [
      "Interactive script generates each customer's PM2 setup (user app, admin app and API) and their Nginx reverse-proxy configuration.",
      "Token-protected deploy webhook that pulls, builds and restarts the right app on request.",
    ],
    stack: ["Bash", "Nginx", "PM2", "Node.js", "Express"],
    links: [
      { label: "Provisioning", href: "https://github.com/Jaya-Suriyan/feasto-deploy-setup" },
      { label: "Deploy server", href: "https://github.com/Jaya-Suriyan/node-cicd" },
    ],
  },
  {
    slug: "earney",
    name: "Earney Projects Manager",
    tagline: "Project management app on Supabase",
    description: "A project and team tracking app with a typed data layer and an accessible component library.",
    highlights: [
      "Supabase (Postgres) backend with TanStack Query for caching and syncing data.",
      "Forms validated with React Hook Form and Zod. UI built on Radix primitives, with charts in Recharts.",
    ],
    stack: ["React", "TypeScript", "Vite", "Supabase", "TanStack Query", "Zod", "Radix UI"],
    links: [{ label: "Source", href: "https://github.com/Jaya-Suriyan/earney-project-manager" }],
  },
  {
    slug: "ic",
    name: "IC Product Catalogue",
    tagline: "Full stack CRUD app with JWT authentication",
    description: "REST API and web front end for managing a product catalogue, both deployed on Vercel.",
    highlights: [
      "Express API on PostgreSQL with Sequelize migrations and seed data, JWT sign-in and bcrypt-hashed passwords.",
      "Next.js front end built with Ant Design.",
    ],
    stack: ["Node.js", "Express", "PostgreSQL", "Sequelize", "JWT", "Next.js", "Ant Design"],
    links: [
      { label: "Live", href: "https://ic-react.vercel.app" },
      { label: "API source", href: "https://github.com/Jaya-Suriyan/ic-node" },
      { label: "App source", href: "https://github.com/Jaya-Suriyan/ic-react" },
    ],
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
  {
    label: "Backend",
    items: ["Node.js", "Express", "NestJS", "Fastify", "Python", "REST APIs", "Sequelize ORM"],
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
