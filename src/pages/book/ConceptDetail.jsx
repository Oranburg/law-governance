import { useParams, Link } from "react-router-dom";
import { B, fonts } from "../../brand/tokens";
import { concepts } from "../../data/concepts";

export default function ConceptDetail() {
  const { conceptId } = useParams();
  const c = concepts[conceptId];

  if (!c) {
    return (
      <div style={{ padding: "40px 20px", textAlign: "center" }}>
        <p style={{ fontFamily: fonts.body, fontSize: "1rem", color: B.textMid }}>
          Concept not found.
        </p>
        <Link
          to="/framework"
          style={{
            fontFamily: fonts.body,
            fontSize: "0.95rem",
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
    <div style={{ padding: "28px 20px" }}>
      <Link
        to="/framework"
        style={{
          fontFamily: fonts.body,
          fontSize: "0.95rem",
          color: B.accent,
          fontWeight: 600,
          marginBottom: 18,
          display: "inline-block",
        }}
      >
        ← Back to framework
      </Link>
      <div
        style={{
          fontFamily: fonts.body,
          fontSize: "0.8rem",
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
          fontSize: "1.8rem",
          fontWeight: 700,
          color: B.accent,
          margin: "0 0 6px",
        }}
      >
        {c.title}
      </h2>
      <p
        style={{
          fontFamily: fonts.accent,
          fontSize: "1.15rem",
          fontStyle: "italic",
          color: B.textMid,
          marginBottom: 24,
          lineHeight: 1.6,
        }}
      >
        {c.tagline}
      </p>
      {c.sections.map((s, i) => (
        <div key={i} style={{ marginBottom: 24 }}>
          <h3
            style={{
              fontFamily: fonts.headline,
              fontSize: "1.4rem",
              fontWeight: 700,
              color: B.textRed,
              margin: "0 0 8px",
            }}
          >
            {s.head}
          </h3>
          <p
            style={{
              fontFamily: fonts.body,
              fontSize: "1rem",
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
