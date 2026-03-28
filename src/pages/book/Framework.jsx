import { Link } from "react-router-dom";
import { B, fonts } from "../../brand/tokens";

const items = [
  {
    id: "ontology",
    title: "Governance Ontology",
    ch: "Ch 1",
    desc: "What governance fundamentally is: four elements, specified for legal analysis.",
    borderColor: B.blue,
    textColor: "var(--accent)",
  },
  {
    id: "surplus",
    title: "Governance Surplus",
    ch: "Ch 6",
    desc: "Two distinct outputs. Conflating member benefits with spillovers is the structural error.",
    borderColor: B.brightBlue,
    textColor: "var(--accent)",
  },
  {
    id: "legibility",
    title: "Governance Legibility",
    ch: "Ch 8",
    desc: "Making governance visible as a variable legal analysis can weigh.",
    borderColor: B.blue,
    textColor: "var(--accent)",
  },
  {
    id: "missing",
    title: "The Missing Institution",
    ch: "Ch 9",
    desc: "What every member sees and what no court sees at the moment of decision.",
    borderColor: B.red,
    textColor: "var(--text-red)",
  },
  {
    id: "void",
    title: "The Governance Void",
    ch: "Ch 12",
    desc: "Accountability absence behind an elaborate facade of formal structure.",
    borderColor: B.brightBlue,
    textColor: "var(--accent)",
  },
  {
    id: "laundering",
    title: "Governance Laundering",
    ch: "Ch 14",
    desc: "Invoking governance language to shield private power from scrutiny.",
    borderColor: B.red,
    textColor: "var(--text-red)",
  },
];

export default function Framework() {
  return (
    <div style={{ padding: "28px 20px" }}>
      <h2
        style={{
          fontFamily: fonts.headline,
          fontSize: "1.8rem",
          fontWeight: 700,
          color: B.accent,
          margin: "0 0 6px",
        }}
      >
        The Framework
      </h2>
      <p
        style={{
          fontFamily: fonts.body,
          fontSize: "1rem",
          color: B.textMid,
          marginBottom: 20,
          lineHeight: 1.6,
        }}
      >
        Six original concepts that structure the book's argument. Each names a
        problem that legal analysis currently cannot see, and each supplies a
        tool for making it visible. Tap any to explore.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map((t) => (
          <Link
            key={t.id}
            to={`/framework/${t.id}`}
            style={{
              padding: "16px 18px",
              background: B.white,
              border: `1px solid ${B.border}`,
              borderLeft: `4px solid ${t.borderColor}`,
              borderRadius: 8,
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
                  fontFamily: fonts.headline,
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: t.textColor,
                  marginBottom: 3,
                }}
              >
                {t.title}
              </div>
              <div
                style={{
                  fontFamily: fonts.body,
                  fontSize: "0.85rem",
                  color: B.textLight,
                  fontWeight: 500,
                }}
              >
                {t.ch}
              </div>
            </div>
            <div
              style={{
                fontFamily: fonts.body,
                fontSize: "0.95rem",
                color: B.textMid,
                lineHeight: 1.5,
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
