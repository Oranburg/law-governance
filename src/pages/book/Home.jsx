import { useState } from "react";
import { Link } from "react-router-dom";
import { B, fonts } from "../../brand/tokens";
import Term from "../../components/Term";
import GoodsGrid from "../../components/GoodsGrid";
import MethodWalkthrough from "../../components/MethodWalkthrough";

const patterns = [
  {
    title: "Silver v. New York Stock Exchange",
    year: "1963",
    summary:
      "A court fixed a real abuse at the NYSE \u2014 but the remedy degraded the governance institution that maintained market integrity for decades.",
    detail:
      "The NYSE excluded a competing broker without explanation. The Supreme Court rightly intervened. But the remedy converted the exchange\u2019s authority to exclude from a property rule to a liability rule, and Congress extended the logic to require SEC pre-approval of all rule changes and full due process for every disciplinary action. The governance institution that had maintained market integrity was degraded across all four elements \u2014 not because the Court acted in bad faith, but because it could not see the institution it was changing.",
  },
  {
    title: "Michigan State / Nassar",
    year: "2018",
    summary:
      "After the Nassar scandal, regulators mandated new policies and coordinators. The governance architecture that enabled the failure was untouched.",
    detail:
      "A serial predator operated for decades within university athletics because the reporting line between athletic medicine and the athletic department was structurally compromised, and a self-perpetuating Board of Trustees faced no accountability mechanism. The federal response required revised policies, new coordinators, mandatory training, and retrospective review. No mandate required restructuring the reporting line. No mandate required reforming the Board. The compliance mandates addressed symptoms. The governance void remained.",
  },
  {
    title: "The Israeli Daycare Fines",
    year: "2000",
    summary:
      "A fine for late pickups doubled tardiness and destroyed the social norm that had governed parental behavior.",
    detail:
      "Parents routinely arrived late to pick up children from daycare. Researchers introduced a monetary fine for lateness. Standard deterrence theory predicted tardiness would fall. Instead it roughly doubled. When the fine was removed after twelve weeks, the higher rate persisted. The fine displaced a social norm \u2014 guilt about inconveniencing teachers \u2014 converting a moral obligation into a market transaction. The governance institution (the informal norm of reciprocal obligation) was destroyed by a legal intervention designed to strengthen it.",
  },
];

const boundaries = [
  {
    claim: "This framework does not override rights.",
    detail:
      "Anti-discrimination violations warrant remedy regardless of governance function. The framework adds a recognition that remedies can be designed to achieve civil rights objectives while minimizing unnecessary governance destruction.",
  },
  {
    claim: "It does not create an affirmative defense.",
    detail:
      "Courts applying anti-discrimination law should not be required to conduct a governance evaluation before ordering compliance. The framework\u2019s role in that context is as a remedial design tool, not a litigation-stage defense.",
  },
  {
    claim: "Governance-literate law is not more deferential law. It is more complete law.",
    detail:
      "The framework asks legal actors to see what their rules do to governance institutions \u2014 not to defer to those institutions. It is available to reformers as much as to defenders.",
  },
];

function ExpandCard({ item, accent }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        padding: "14px 16px",
        background: B.white,
        border: `1px solid ${B.border}`,
        borderRadius: 8,
        cursor: "pointer",
        transition: "all 0.15s",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 4,
        }}
      >
        <div
          style={{
            fontFamily: fonts.headline,
            fontSize: "1.05rem",
            fontWeight: 700,
            color: accent || B.accent,
          }}
        >
          {item.title}
        </div>
        {item.year && (
          <div
            style={{
              fontFamily: fonts.body,
              fontSize: "0.85rem",
              color: B.textLight,
              fontWeight: 500,
            }}
          >
            {item.year}
          </div>
        )}
      </div>
      <div
        style={{
          fontFamily: fonts.body,
          fontSize: "0.95rem",
          color: B.textMid,
          lineHeight: 1.5,
        }}
      >
        {item.summary || item.claim}
      </div>
      {open && (
        <div
          style={{
            marginTop: 10,
            paddingTop: 10,
            borderTop: `1px solid ${B.border}`,
            fontFamily: fonts.body,
            fontSize: "1rem",
            color: B.textDark,
            lineHeight: 1.7,
          }}
        >
          {item.detail}
        </div>
      )}
      <div
        style={{
          fontFamily: fonts.body,
          fontSize: "0.8rem",
          color: B.textLight,
          marginTop: 6,
          textAlign: "right",
        }}
      >
        {open ? "Collapse" : "Read more"}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <div style={{ background: B.blue, padding: "48px 20px 36px", textAlign: "center" }}>
        <div
          style={{
            fontFamily: fonts.body,
            fontSize: "0.85rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 2,
            color: B.lightBlue,
            marginBottom: 12,
          }}
        >
          Seth C. Oranburg
        </div>
        <h1
          style={{
            fontFamily: fonts.headline,
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.1,
            margin: "0 0 10px",
          }}
        >
          Law &amp; Governance
        </h1>
        <p
          style={{
            fontFamily: fonts.accent,
            fontSize: "1.2rem",
            color: B.lightBlue,
            fontStyle: "italic",
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          How Law Makes, Supports, and Weakens Governance
        </p>
      </div>

      <div style={{ background: B.red, padding: "16px 20px" }}>
        <p
          style={{
            fontFamily: fonts.accent,
            fontSize: "1.15rem",
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.6,
            textAlign: "center",
            maxWidth: 700,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Law often changes institutions without seeing what those institutions
          do. This book makes{" "}
          <Term id="governance">governance</Term> visible as a legal object and
          supplies a method for judging law by its institutional effects.
        </p>
      </div>

      {/* The Pattern */}
      <section style={{ padding: "32px 20px 36px", background: B.white }}>
        <div
          style={{
            fontFamily: fonts.body,
            fontSize: "0.8rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 2,
            color: B.textLight,
            marginBottom: 4,
            textAlign: "center",
          }}
        >
          The Pattern
        </div>
        <h2
          style={{
            fontFamily: fonts.headline,
            fontSize: "1.8rem",
            fontWeight: 700,
            color: B.accent,
            textAlign: "center",
            margin: "0 0 6px",
          }}
        >
          Three Institutions, One Blind Spot
        </h2>
        <p
          style={{
            fontFamily: fonts.body,
            fontSize: "1rem",
            color: B.textMid,
            textAlign: "center",
            margin: "0 auto 20px",
            maxWidth: 580,
            lineHeight: 1.6,
          }}
        >
          In each case, law addressed a visible problem while degrading the
          governance institution that managed a broader one. Tap any to see the
          full story.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            maxWidth: 650,
            margin: "0 auto",
          }}
        >
          {patterns.map((p) => (
            <ExpandCard key={p.title} item={p} accent={B.textRed} />
          ))}
        </div>
      </section>

      {/* Where Governance Lives */}
      <section style={{ padding: "32px 20px 36px", background: B.offWhite }}>
        <div
          style={{
            fontFamily: fonts.body,
            fontSize: "0.8rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 2,
            color: B.textLight,
            marginBottom: 4,
            textAlign: "center",
          }}
        >
          A Theoretical Move
        </div>
        <h2
          style={{
            fontFamily: fonts.headline,
            fontSize: "1.8rem",
            fontWeight: 700,
            color: B.accent,
            textAlign: "center",
            margin: "0 0 6px",
          }}
        >
          Where Governance Lives
        </h2>
        <p
          style={{
            fontFamily: fonts.body,
            fontSize: "1rem",
            color: B.textMid,
            textAlign: "center",
            margin: "0 auto 20px",
            maxWidth: 540,
            lineHeight: 1.6,
          }}
        >
          Many governance arrangements share the features of{" "}
          <Term id="club good">club goods</Term>. Tap a quadrant.
        </p>
        <GoodsGrid />
      </section>

      {/* Seven Steps */}
      <section style={{ padding: "32px 20px 36px", background: B.white }}>
        <div
          style={{
            fontFamily: fonts.body,
            fontSize: "0.8rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 2,
            color: B.textLight,
            marginBottom: 4,
            textAlign: "center",
          }}
        >
          The Method
        </div>
        <h2
          style={{
            fontFamily: fonts.headline,
            fontSize: "1.8rem",
            fontWeight: 700,
            color: B.accent,
            textAlign: "center",
            margin: "0 0 6px",
          }}
        >
          Seven Steps to Judgment
        </h2>
        <p
          style={{
            fontFamily: fonts.body,
            fontSize: "1rem",
            color: B.textMid,
            textAlign: "center",
            margin: "0 auto 22px",
            maxWidth: 540,
            lineHeight: 1.6,
          }}
        >
          Pick an institution. Walk through the analysis. Step 7 renders a
          judgment and specifies a remedy.
        </p>
        <MethodWalkthrough />
      </section>

      {/* What This Framework Is Not */}
      <section style={{ padding: "32px 20px 36px", background: B.offWhite }}>
        <div
          style={{
            fontFamily: fonts.body,
            fontSize: "0.8rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 2,
            color: B.textLight,
            marginBottom: 4,
            textAlign: "center",
          }}
        >
          Boundaries
        </div>
        <h2
          style={{
            fontFamily: fonts.headline,
            fontSize: "1.8rem",
            fontWeight: 700,
            color: B.accent,
            textAlign: "center",
            margin: "0 0 6px",
          }}
        >
          What This Framework Is Not
        </h2>
        <p
          style={{
            fontFamily: fonts.body,
            fontSize: "1rem",
            color: B.textMid,
            textAlign: "center",
            margin: "0 auto 20px",
            maxWidth: 580,
            lineHeight: 1.6,
          }}
        >
          The framework makes governance visible. It does not make governance
          supreme.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            maxWidth: 650,
            margin: "0 auto",
          }}
        >
          {boundaries.map((b) => (
            <ExpandCard key={b.claim} item={b} accent={B.accent} />
          ))}
        </div>
      </section>

      {/* Navigation cards */}
      <section style={{ padding: "28px 20px", background: B.white }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          {[
            {
              to: "/framework",
              icon: "\u25C7",
              iconBg: B.red,
              title: "The Framework",
              desc: "Seven original concepts that structure the book\u2019s argument.",
            },
            {
              to: "/book",
              icon: "\u00A7",
              iconBg: B.brightBlue,
              iconColor: B.yellow,
              title: "About the Book",
              desc: "Table of contents, abstract, and citation.",
            },
          ].map((c) => (
            <Link
              key={c.to}
              to={c.to}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "16px 18px",
                background: B.white,
                border: `1px solid ${B.border}`,
                borderRadius: 8,
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background: c.iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: c.iconColor || "#FFFFFF",
                  fontFamily: fonts.headline,
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                {c.icon}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: fonts.headline,
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: B.accent,
                  }}
                >
                  {c.title}
                </div>
                <div
                  style={{
                    fontFamily: fonts.body,
                    fontSize: "0.95rem",
                    color: B.textMid,
                    lineHeight: 1.4,
                  }}
                >
                  {c.desc}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div style={{ background: B.blue, padding: "28px 20px", textAlign: "center" }}>
        <p
          style={{
            fontFamily: fonts.accent,
            fontSize: "1.15rem",
            color: B.lightBlue,
            margin: 0,
            lineHeight: 1.6,
            fontStyle: "italic",
            maxWidth: 700,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Legal analysis has learned to see rights, incentives, and remedies with
          great precision. Its next task is to learn to see governance.
        </p>
      </div>
    </div>
  );
}
