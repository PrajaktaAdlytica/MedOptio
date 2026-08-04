import { ImageResponse } from "next/og";

export const alt = "MedOptio announces $550K in funding from TipHub";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#17141c",
          color: "#fffdf9",
          padding: "64px 72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 42,
              height: 42,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 14,
              background: "#dcc8d8",
              color: "#664e68",
              fontSize: 22,
            }}
          >
            M
          </div>
          <span style={{ fontSize: 28, fontWeight: 600 }}>MedOptio</span>
          <span
            style={{
              marginLeft: "auto",
              border: "1px solid rgba(255,253,249,.22)",
              borderRadius: 999,
              color: "#e9a68e",
              padding: "10px 16px",
              fontSize: 17,
            }}
          >
            Company announcement
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              maxWidth: 1020,
              fontSize: 76,
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: 0,
            }}
          >
            MedOptio announces $550K in funding from TipHub.
          </div>
          <div style={{ display: "flex", gap: 24, color: "#c8c1c8", fontSize: 22 }}>
            <span>9 November 2025</span>
            <span style={{ color: "#8d6a8f" }}>•</span>
            <span>medoptio.com</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
