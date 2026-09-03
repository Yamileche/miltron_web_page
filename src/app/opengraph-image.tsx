import { ImageResponse } from "next/og";

export const alt = "Milton Velazquez — Backend, Cloud & AI Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        padding: "72px",
        background: "#0a0b0a",
        color: "#edf1ed",
        fontFamily: "sans-serif",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", color: "#59d6b5", fontSize: 24 }}>~/milton</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", maxWidth: 980, fontSize: 82, fontWeight: 650, lineHeight: 1.02, letterSpacing: -4 }}>
          Backend systems.<br />Cloud foundations.<br />AI engineering.
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 23, color: "#a4aaa5" }}>
        <span>Milton Velazquez</span>
        <span>Python · LangGraph · Azure · AWS · Rust</span>
      </div>
    </div>,
    size,
  );
}
