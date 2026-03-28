import { B, fonts } from "../brand/tokens";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "16px 16px",
        borderTop: `1px solid ${B.border}`,
        background: B.bgSecondary,
      }}
    >
      <p
        style={{
          fontFamily: fonts.body,
          fontSize: "0.85rem",
          color: B.muted,
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        <span style={{ borderBottom: `1px dashed ${B.lightBlue}` }}>
          Dashed terms
        </span>{" "}
        are interactive. Tap for definitions. · Seth C. Oranburg · NYU Law,
        Classical Liberal Institute · © 2026
      </p>
    </footer>
  );
}
