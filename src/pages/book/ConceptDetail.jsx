import { useParams, Link } from "react-router-dom";
import { B } from "../../brand/tokens";
import { concepts } from "../../data/concepts";

export default function ConceptDetail() {
  const { conceptId } = useParams();
  const c = concepts[conceptId];

  if (!c) {
    return (
      <div style={{ padding: "40px 16px", textAlign: "center" }}>
        <p style={{ fontFamily: "'Crimson Text', Georgia, serif", fontSize: 16, color: B.textMid }}>
          Concept not found.
        </p>
        <Link
          to="/framework"
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: 12,
            color: B.brightBlue,
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
          fontFamily: "'Roboto', sans-serif",
          fontSize: 12,
          color: B.brightBlue,
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
          fontFamily: "'Roboto', sans-serif",
          fontSize: 10,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 1.5,
          color: B.red,
          marginBottom: 4,
        }}
      >
        {c.chapter}
      </div>
      <h2
        style={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: 22,
          fontWeight: 700,
          color: B.blue,
          textTransform: "uppercase",
          margin: "0 0 4px",
        }}
      >
        {c.title}
      </h2>
      <p
        style={{
          fontFamily: "'Crimson Text', Georgia, serif",
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
              fontFamily: "'Oswald', sans-serif",
              fontSize: 14,
              fontWeight: 700,
              color: B.red,
              textTransform: "uppercase",
              margin: "0 0 6px",
              letterSpacing: 0.5,
            }}
          >
            {s.head}
          </h3>
          <p
            style={{
              fontFamily: "'Crimson Text', Georgia, serif",
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
