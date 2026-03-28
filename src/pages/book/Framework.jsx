import { Link } from "react-router-dom";
import { B } from "../../brand/tokens";

const items = [
  {
    id: "ontology",
    title: "Governance Ontology",
    ch: "Ch 1",
    desc: "What governance fundamentally is: four elements, specified for legal analysis.",
    color: B.blue,
  },
  {
    id: "surplus",
    title: "Governance Surplus",
    ch: "Ch 6",
    desc: "Two distinct outputs. Conflating member benefits with spillovers is the structural error.",
    color: B.brightBlue,
  },
  {
    id: "legibility",
    title: "Governance Legibility",
    ch: "Ch 8",
    desc: "Making governance visible as a variable legal analysis can weigh.",
    color: B.blue,
  },
  {
    id: "missing",
    title: "The Missing Institution",
    ch: "Ch 9",
    desc: "What every member sees and what no court sees at the moment of decision.",
    color: B.red,
  },
  {
    id: "void",
    title: "The Governance Void",
    ch: "Ch 12",
    desc: "Accountability absence behind an elaborate facade of formal structure.",
    color: B.brightBlue,
  },
  {
    id: "laundering",
    title: "Governance Laundering",
    ch: "Ch 14",
    desc: "Invoking governance language to shield private power from scrutiny.",
    color: B.red,
  },
];

export default function Framework() {
  return (
    <div style={{ padding: "20px 16px" }}>
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
        The Framework
      </h2>
      <p
        style={{
          fontFamily: "'Crimson Text', Georgia, serif",
          fontSize: 14.5,
          color: B.textMid,
          marginBottom: 18,
          lineHeight: 1.5,
        }}
      >
        Six original concepts that structure the book's argument. Each names a
        problem that legal analysis currently cannot see, and each supplies a
        tool for making it visible. Tap any to explore.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {items.map((t) => (
          <Link
            key={t.id}
            to={`/framework/${t.id}`}
            style={{
              padding: "14px 16px",
              background: B.white,
              border: `1px solid ${B.border}`,
              borderLeft: `4px solid ${t.color}`,
              borderRadius: 4,
              cursor: "pointer",
              display: "block",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <div
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  color: t.color,
                  textTransform: "uppercase",
                  marginBottom: 2,
                }}
              >
                {t.title}
              </div>
              <div
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: 10,
                  color: B.textLight,
                  fontWeight: 600,
                }}
              >
                {t.ch}
              </div>
            </div>
            <div
              style={{
                fontFamily: "'Crimson Text', Georgia, serif",
                fontSize: 13.5,
                color: B.textMid,
                lineHeight: 1.4,
              }}
            >
              {t.desc}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
