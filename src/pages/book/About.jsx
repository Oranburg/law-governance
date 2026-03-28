import { B, fonts } from "../../brand/tokens";

export default function About() {
  return (
    <div style={{ padding: "28px 20px" }}>
      <h2
        style={{
          fontFamily: fonts.headline,
          fontSize: "1.8rem",
          fontWeight: 700,
          color: B.accent,
          textTransform: "uppercase",
          margin: "0 0 8px",
          borderBottom: `3px solid ${B.accentRed}`,
          paddingBottom: 6,
          display: "inline-block",
        }}
      >
        About the Book
      </h2>
      <p
        style={{
          fontFamily: fonts.accent,
          fontSize: "1rem",
          color: B.muted,
          lineHeight: 1.7,
          marginBottom: 20,
          marginTop: 10,
        }}
      >
        <em style={{ fontFamily: fonts.accent, fontSize: "1.05rem" }}>
          Law &amp; Governance: How Law Makes, Supports, and Weakens Governance
        </em>{" "}
        by Seth C. Oranburg. Forthcoming. The book defines governance as a
        distinct legal object, develops a method for evaluating legal rules by
        their governance effects, and applies that method across six
        institutional domains.
      </p>

      <h3
        style={{
          fontFamily: fonts.headline,
          fontSize: "1.4rem",
          fontWeight: 700,
          color: B.accent,
          margin: "24px 0 10px",
        }}
      >
        Contents
      </h3>

      {/* Introduction */}
      <div style={{ marginBottom: 16 }}>
        <div
          style={{
            fontFamily: fonts.body,
            fontSize: "1rem",
            color: B.textDark,
            padding: "4px 0 4px 14px",
            borderLeft: `2px solid ${B.border}`,
            marginBottom: 2,
            lineHeight: 1.5,
            fontWeight: 500,
          }}
        >
          Introduction
        </div>
      </div>

      {[
        {
          part: "I",
          title: "Defining Governance",
          chs: [
            "What Is Governance?",
            "Languages of Governance",
            "Why Legal Theory Still Lacks a Governance Concept",
            "Legal Conditions for Governance",
          ],
        },
        {
          part: "II",
          title: "The Original Theory",
          chs: [
            "Governance as a Club Good",
            "Member Benefits and Spillovers",
            "How Law Enables and Degrades Governance",
            "A Method for Evaluating Law\u2019s Governance Effects",
          ],
        },
        {
          part: "III",
          title: "Applications",
          chs: [
            "Network Governance and the Missing Institution",
            "Exchange Governance and the Silver Arc",
            "Corporate Governance and the Governance of Governance",
            "Universities, Nonprofits, and the Governance Void",
            "Knowledge Institutions and the Governance of Scholarship",
            "Limits, Gaps, and Research Horizons",
            "What Governance-Literate Law Would Look Like",
          ],
        },
      ].map((p) => (
        <div key={p.part} style={{ marginBottom: 16 }}>
          <div
            style={{
              fontFamily: fonts.body,
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1.5,
              color: B.textRed,
              marginBottom: 6,
            }}
          >
            Part {p.part}: {p.title}
          </div>
          {p.chs.map((c, i) => (
            <div
              key={i}
              style={{
                fontFamily: fonts.accent,
                fontSize: "1rem",
                color: B.text,
                padding: "4px 0 4px 14px",
                borderLeft: `2px solid ${B.border}`,
                marginBottom: 2,
                lineHeight: 1.5,
              }}
            >
              {c}
            </div>
          ))}
        </div>
      ))}

      {/* Conclusion */}
      <div style={{ marginBottom: 16 }}>
        <div
          style={{
            fontFamily: fonts.body,
            fontSize: "1rem",
            color: B.textDark,
            padding: "4px 0 4px 14px",
            borderLeft: `2px solid ${B.border}`,
            marginBottom: 2,
            lineHeight: 1.5,
            fontWeight: 500,
          }}
        >
          Conclusion
        </div>
      </div>

      <div
        style={{
          marginTop: 24,
          padding: "16px 18px",
          background: B.bgSecondary,
          borderRadius: "var(--radius-md)",
          border: `1px solid ${B.border}`,
        }}
      >
        <div
          style={{
            fontFamily: fonts.body,
            fontSize: "0.8rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 1.5,
            color: B.accent,
            marginBottom: 8,
          }}
        >
          Citation
        </div>
        <div
          style={{
            fontFamily: fonts.accent,
            fontSize: "1.05rem",
            color: B.text,
            lineHeight: 1.6,
          }}
        >
          Seth C. Oranburg,{" "}
          <em>
            Law &amp; Governance: How Law Makes, Supports, and Weakens
            Governance
          </em>{" "}
          (forthcoming 2027).
        </div>
      </div>
    </div>
  );
}
