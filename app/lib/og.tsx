import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Shared 1200x630 social card for every page (Open Graph and X/Twitter).
export const ogSize = { width: 1200, height: 630 };
export const ogAlt =
  "Foreturn IQ: golf course food and beverage pre-ordering. Free for the course.";

export async function renderOgImage() {
  const logo = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1B3068",
          padding: "64px 72px",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              background: "#ffffff",
              borderRadius: 20,
              padding: "10px 18px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse (satori) needs a plain img */}
            <img src={logoSrc} width={150} height={100} alt="" />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#3AAA35",
              marginBottom: 18,
            }}
          >
            For Golf Course F&amp;B Operations
          </div>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
            Golfers pre-order food. Your kitchen gets a timed queue.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <div style={{ display: "flex" }}>
            Free for the course · Golfers pay 5% + $0.50 · No hardware
          </div>
          <div style={{ display: "flex", color: "#ffffff", fontWeight: 700 }}>
            foreturniq.com
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
