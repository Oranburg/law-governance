import { B, fonts } from "../../brand/tokens";

export default function About() {
  return (
    <div style={{ padding: "20px 16px" }}>
      <h2
        style={{
          fontFamily: fonts.headline,
          fontSize: 22,
          fontWeight: 700,
          color: B.accent,
          textTransform: "uppercase",
          margin: "0 0 6px",
        }}
      >
        About the Book
      </h2>
      <p
        style={{
          fontFamily: fonts.body,
          fontSize: 15,
          color: B.textMid,
          lineHeight: 1.6,
          marginBottom: 16,
        }}
      >
        <em style={{ fontFamily: fonts.accent }}>
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
          fontSize: 15,
          fontWeight: 700,
          color: B.accent,
          textTransform: "uppercase",
          margin: "18px 0 8px",
        }}
      >
        Contents
      </h3>
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
        <div key={p.part} style={{ marginBottom: 14 }}>
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
            Part {p.part}: {p.title}
          </div>
          {p.chs.map((c, i) => (
            <div
              key={i}
              style={{
                fontFamily: fonts.body,
                fontSize: 14,
                color: B.textDark,
                padding: "3px 0 3px 12px",
                borderLeft: `2px solid ${B.border}`,
                marginBottom: 2,
              }}
            >
              {c}
            </div>
          ))}
        </div>
      ))}

      <div
        style={{
          marginTop: 20,
          padding: "14px 16px",
          background: B.offWhite,
          borderRadius: 8,
          border: `1px solid ${B.border}`,
        }}
      >
        <div
          style={{
            fontFamily: fonts.body,
            fontSize: 10,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 1.5,
            color: B.accent,
            marginBottom: 6,
          }}
        >
          Citation
        </div>
        <div
          style={{
            fontFamily: fonts.accent,
            fontSize: 14,
            color: B.textDark,
            lineHeight: 1.5,
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
