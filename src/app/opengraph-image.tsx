import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name}, ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Link-preview image shown when the site is shared on LinkedIn, Slack, X, etc.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0C0D0F",
          color: "#ECECE7",
          backgroundImage: "radial-gradient(rgba(156,156,150,0.22) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "#5EEAD4",
              color: "#08201D",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            {profile.initials}
          </div>
          <div style={{ fontSize: 24, letterSpacing: 4, textTransform: "uppercase", color: "#5EEAD4" }}>
            {profile.headline}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>{profile.name}</div>
          <div style={{ marginTop: 28, fontSize: 34, color: "#9C9C96", maxWidth: 980, lineHeight: 1.35 }}>
            {`${profile.role} at ${profile.currentCompany} · React, Node.js, TypeScript, AWS, LangChain`}
          </div>
        </div>

        <div style={{ display: "flex", gap: 40, fontSize: 24, color: "#9C9C96" }}>
          <div style={{ display: "flex" }}>{`${profile.yearsOfExperience} years experience`}</div>
          <div style={{ display: "flex" }}>{profile.city}</div>
        </div>
      </div>
    ),
    size,
  );
}
