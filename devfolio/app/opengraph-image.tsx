import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

// Route segment config — statically generated at build time.
export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ORANGE = "#FF4D00";

// Social share card. Kept to Latin glyphs on purpose: next/og's built-in
// font is Latin-only, so CJK/kana (元, ツ) would render as tofu boxes.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          padding: "72px 80px",
          border: `10px solid ${ORANGE}`,
          fontFamily: "sans-serif",
        }}
      >
        {/* Top row: status + location */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            fontSize: 26,
            letterSpacing: 2,
            color: "#9ca3af",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: 9999,
                background: ORANGE,
                marginRight: 16,
              }}
            />
            <div style={{ display: "flex" }}>PORTFOLIO</div>
          </div>
          <div style={{ display: "flex" }}>TULSA, OK</div>
        </div>

        {/* Name */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 180,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1,
              letterSpacing: -4,
            }}
          >
            ZACK YUAN
            <div style={{ display: "flex", color: ORANGE }}>.</div>
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 34,
            letterSpacing: 1,
            color: "#d1d5db",
          }}
        >
          Full-Stack Web Developer
          <div style={{ display: "flex", color: ORANGE, margin: "0 14px" }}>
            /
          </div>
          UX / UI Designer
        </div>
      </div>
    ),
    { ...size }
  );
}
