import { ImageResponse } from "next/og";
import Strings from "@/constants/strings";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shivanshu.site";
  const domain = siteUrl.replace(/^https?:\/\//, "");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(160deg, #0f172a 10%, #0b1120 50%, #020617 100%)",
          color: "#e2e8f0",
          padding: "64px",
          fontFamily: "'Inter', 'Segoe UI', sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span
            style={{
              fontSize: 22,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#38bdf8",
            }}
          >
            {Strings.fullName}
          </span>

          <span
            style={{
              fontSize: 60,
              lineHeight: 1.1,
              fontWeight: 700,
              maxWidth: "880px",
            }}
          >
            Empowering builders with secure, scalable engineering.
          </span>

          <span
            style={{
              fontSize: 26,
              lineHeight: 1.4,
              color: "#94a3b8",
            }}
          >
            Software engineer · Cybersecurity enthusiast · IIT Jodhpur
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "#94a3b8",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <span>Full Stack · DevSecOps · Cloud</span>
            <span>{domain}</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 28px",
              borderRadius: 9999,
              background: "rgba(56,189,248,0.15)",
              border: "1px solid rgba(56,189,248,0.3)",
              color: "#38bdf8",
              fontWeight: 600,
            }}
          >
            @ShivanshuV_
          </div>
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    }
  );
}
