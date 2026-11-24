import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Credentials } from "@/components/Credentials";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Skills } from "@/components/Skills";
import { education, experience, profile, siteUrl, skills } from "@/data/profile";

// Structured data so search engines understand who this page is about.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  jobTitle: profile.role,
  description: profile.intro,
  worksFor: { "@type": "Organization", name: experience[0]?.company },
  address: { "@type": "PostalAddress", addressLocality: "Chennai", addressRegion: "Tamil Nadu", addressCountry: "IN" },
  alumniOf: education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.school })),
  knowsAbout: skills.flatMap((g) => g.items).slice(0, 30),
  knowsLanguage: profile.spokenLanguages,
  sameAs: [profile.links.linkedin, profile.links.github],
  ...(profile.email ? { email: `mailto:${profile.email}` } : {}),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <SiteHeader />
      <main id="main">
        <Hero />
        <div className="mx-auto max-w-page px-6">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Credentials />
          <Contact />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
