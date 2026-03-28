import { useParams, Link } from "react-router-dom";
import { B, fonts } from "../../brand/tokens";
import { concepts } from "../../data/concepts";

export default function ConceptDetail() {
  const { conceptId } = useParams();
  const c = concepts[conceptId];

  if (!c) {
    return (
      <div style={{ padding: "40px 16px", textAlign: "center" }}>
        <p style={{ fontFamily: fonts.body, fontSize: 16, color: B.textMid }}>
          Concept not found.
        </p>
        <Link
          to="/framework"
          style={{
            fontFamily: fonts.body,
            fontSize: 12,
            color: B.accent,
            fontWeight: 600,
          }}
        >
          ← Back to framework
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px 16px" }}>
      <Link
        to="/framework"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: fonts.body,
          fontSize: 12,
          color: B.accent,
          fontWeight: 600,
          padding: 0,
          marginBottom: 16,
          display: "inline-block",
        }}
      >
        ← Back to framework
      </Link>
      <div
        style={{
          fontFamily: fonts.body,
          fontSize: 10,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 1.5,
          color: B.textRed,
          marginBottom: 4,
        }}
      >
        {c.chapter}
      </div>
      <h2
        style={{
          fontFamily: fonts.headline,
          fontSize: 22,
          fontWeight: 700,
          color: B.accent,
          textTransform: "uppercase",
          margin: "0 0 4px",
        }}
      >
        {c.title}
      </h2>
      <p
        style={{
          fontFamily: fonts.accent,
          fontSize: 15,
          fontStyle: "italic",
          color: B.textMid,
          marginBottom: 20,
          lineHeight: 1.5,
        }}
      >
        {c.tagline}
      </p>
      {c.sections.map((s, i) => (
        <div key={i} style={{ marginBottom: 20 }}>
          <h3
            style={{
              fontFamily: fonts.headline,
              fontSize: 14,
              fontWeight: 700,
              color: B.textRed,
              textTransform: "uppercase",
              margin: "0 0 6px",
              letterSpacing: 0.5,
            }}
          >
            {s.head}
          </h3>
          <p
            style={{
              fontFamily: fonts.body,
              fontSize: 15,
              lineHeight: 1.7,
              color: B.textDark,
              margin: 0,
            }}
          >
            {s.text}
          </p>
        </div>
      ))}
    </div>
  );
}
