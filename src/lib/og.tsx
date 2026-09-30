import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const ogSize = { width: 1200, height: 630 };

const fontDir = join(process.cwd(), "node_modules/geist/dist/fonts");
const fonts = Promise.all([
  readFile(join(fontDir, "geist-sans/Geist-Regular.ttf")),
  readFile(join(fontDir, "geist-sans/Geist-SemiBold.ttf")),
  readFile(join(fontDir, "geist-mono/GeistMono-Regular.ttf")),
]);

const palette = {
  bg: "#0a0a0b",
  fg: "#ededef",
  muted: "#a1a3ac",
  faint: "#8b8e97",
  line: "#242428",
  accent: "#22c55e",
};

type OgCard = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  metric?: { value: string; label: string };
};

// Shared 1200×630 card: hairline rails, mono eyebrow, big title, optional metric.
export async function renderOgImage({
  eyebrow,
  title,
  subtitle,
  metric,
}: OgCard): Promise<ImageResponse> {
  const [regular, semibold, mono] = await fonts;
  const domain = site.url.replace(/^https?:\/\//, "");
  const rail = { position: "absolute", background: palette.line } as const;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        background: palette.bg,
        color: palette.fg,
        fontFamily: "Geist",
      }}
    >
      <div style={{ ...rail, top: 0, bottom: 0, left: 64, width: 1 }} />
      <div style={{ ...rail, top: 0, bottom: 0, right: 64, width: 1 }} />
      <div style={{ ...rail, left: 0, right: 0, top: 104, height: 1 }} />
      <div style={{ ...rail, left: 0, right: 0, bottom: 104, height: 1 }} />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 104,
          right: 104,
          height: 104,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <svg width="44" height="44" viewBox="0 0 128 128">
          <rect width="128" height="128" rx="28" fill={palette.fg} />
          <path
            d="M30 36h68l-12 18H48l32 38H30l12-18h38L30 36z"
            fill={palette.bg}
            fillRule="evenodd"
          />
        </svg>
        <span
          style={{
            fontFamily: "Geist Mono",
            fontSize: 22,
            color: palette.muted,
          }}
        >
          {domain}
        </span>
      </div>

      <div
        style={{
          position: "absolute",
          top: 104,
          bottom: 104,
          left: 104,
          right: 104,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 22,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontFamily: "Geist Mono",
            fontSize: 22,
            color: palette.muted,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: palette.accent,
            }}
          />
          {eyebrow}
        </div>
        <div
          style={{
            fontSize: title.length > 24 ? 64 : 88,
            lineHeight: 1.05,
            fontWeight: 600,
            letterSpacing: "-0.045em",
          }}
        >
          {title}
        </div>
        {subtitle ? (
          <div style={{ fontSize: 32, lineHeight: 1.35, color: palette.muted }}>
            {subtitle}
          </div>
        ) : null}
        {metric ? (
          <div style={{ display: "flex", alignItems: "baseline", gap: 18 }}>
            <span
              style={{
                fontSize: 64,
                fontWeight: 600,
                letterSpacing: "-0.04em",
                color: palette.accent,
              }}
            >
              {metric.value}
            </span>
            <span
              style={{
                fontFamily: "Geist Mono",
                fontSize: 22,
                color: palette.muted,
              }}
            >
              {metric.label}
            </span>
          </div>
        ) : null}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 104,
          right: 104,
          height: 104,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "Geist Mono",
          fontSize: 20,
          color: palette.faint,
        }}
      >
        <span>{site.name}</span>
        <span>Backend · Infrastructure · Security</span>
      </div>
    </div>,
    {
      ...ogSize,
      fonts: [
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist", data: semibold, weight: 600, style: "normal" },
        { name: "Geist Mono", data: mono, weight: 400, style: "normal" },
      ],
    },
  );
}
