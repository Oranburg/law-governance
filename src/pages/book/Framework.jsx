import { Link } from "react-router-dom";
import { B, fonts } from "../../brand/tokens";

const groups = [
  {
    label: "Foundational Theory",
    items: [
      {
        id: "ontology",
        title: "Governance Ontology",
        ch: "Ch 1",
        desc: "What governance is: four elements, specified for legal analysis.",
        borderColor: B.blue,
        textColor: "var(--accent)",
      },
      {
        id: "clubgood",
        title: "Governance as a Club Good",
        ch: "Ch 5",
        desc: "The central theoretical move. Why exclusion is constitutive and governance is undersupplied.",
        borderColor: B.brightBlue,
        textColor: "var(--accent)",
      },
      {
        id: "surplus",
        title: "Governance Surplus",
        ch: "Ch 6",
        desc: "Produced as a club good, consumed as a public good. Attacking production destroys both.",
        borderColor: B.blue,
        textColor: "var(--accent)",
      },
    ],
  },
  {
    label: "Analytical Tools",
    items: [
      {
        id: "degradation",
        title: "How Law Degrades Governance",
        ch: "Ch 7",
        desc: "Seven mechanisms through which legal rules damage governance institutions.",
        borderColor: B.red,
        textColor: "var(--text-red)",
      },
      {
        id: "legibility",
        title: "Governance Legibility",
        ch: "Ch 8",
        desc: "Making governance visible as a variable legal analysis can weigh.",
        borderColor: B.brightBlue,
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
    ],
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
          textTransform: "uppercase",
          margin: "0 0 6px",
          borderBottom: `3px solid ${B.accentRed}`,
          paddingBottom: 6,
          display: "inline-block",
        }}
      >
        The Framework
      </h2>
      <p
        style={{
          fontFamily: fonts.body,
          fontSize: "1rem",
          color: B.muted,
          marginBottom: 24,
          marginTop: 10,
          lineHeight: 1.6,
        }}
      >
        Seven original concepts that structure the book's argument. Each names a
        problem that legal analysis currently cannot see, and each supplies a
        tool for making it visible.
      </p>
      {groups.map((group) => (
        <div key={group.label} style={{ marginBottom: 28 }}>
          <div
            style={{
              fontFamily: fonts.body,
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1.5,
              color: B.muted,
              marginBottom: 10,
            }}
          >
            {group.label}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {group.items.map((t) => (
              <Link
                key={t.id}
                to={`/framework/${t.id}`}
                style={{
                  padding: "16px 18px",
                  background: B.bgSecondary,
                  border: `1px solid ${B.border}`,
                  borderLeft: `4px solid ${t.borderColor}`,
                  borderRadius: "var(--radius-md)",
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
                      color: B.muted,
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
                    color: B.muted,
                    lineHeight: 1.5,
                  }}
                >
                  {t.desc}
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
