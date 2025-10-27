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
          alignItems: "stretch",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at 20% 20%, rgba(56,189,248,0.35), transparent 70%), radial-gradient(circle at 80% 30%, rgba(14,165,233,0.2), transparent 70%), linear-gradient(135deg, #050505 0%, #111827 60%, #1f2937 100%)",
          color: "#f8fafc",
          padding: "72px",
          fontFamily: "'Inter', 'Segoe UI', sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            maxWidth: "880px",
          }}
        >
          <span
            style={{
              fontSize: 24,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#38bdf8",
            }}
          >
            {Strings.fullName}
          </span>

          <span
            style={{
              fontSize: 68,
              lineHeight: 1.05,
              fontWeight: 700,
            }}
          >
            Building secure and scalable products across the stack.
          </span>

          <span
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "#cbd5f5",
            }}
          >
            Software Engineer · Cybersecurity Enthusiast · IIT Jodhpur
          </span>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={{ color: "#94a3b8" }}>
              Full Stack • Cybersecurity • DevSecOps
            </span>
            <span style={{ color: "#94a3b8" }}>{domain}</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(56,189,248,0.12)",
              border: "1px solid rgba(56,189,248,0.24)",
              borderRadius: 9999,
              padding: "16px 36px",
              fontWeight: 600,
              color: "#38bdf8",
            }}
          >
            Let’s collaborate
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
