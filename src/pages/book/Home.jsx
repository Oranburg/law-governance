import { useState } from "react";
import { Link } from "react-router-dom";
import { B, fonts } from "../../brand/tokens";
import Term from "../../components/Term";
import GoodsGrid from "../../components/GoodsGrid";
import MethodWalkthrough from "../../components/MethodWalkthrough";

/* ───── link helper ───── */
const citeLink = (text, url) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: B.accent, textDecoration: "underline" }}
  >
    {text}
  </a>
);

/* ───── patterns (reverse chronological) ───── */
const patterns = [
  {
    title: "Delaware–Texas Corporate Migration",
    year: "2024–25",
    summary:
      "After a single judicial intervention, 64% of companies with pending reincorporation proposals moved to leave Delaware — degrading the governance ecosystem that had disciplined American corporate law for a century.",
    detail: (
      <>
        <p>
          In January 2024, the Delaware Court of Chancery struck down governance
          arrangements at Moelis & Company that the board and its controlling
          stockholder had maintained for years. Months later, the same court
          rescinded Elon Musk's compensation package at Tesla. Musk reincorporated
          Tesla in Texas. By the 2025 proxy season, 64.3% of U.S. companies with
          pending reincorporation proposals had proposed leaving Delaware.
        </p>
        <p>
          Texas responded with Senate Bill 29, codifying the business judgment rule
          by statute — converting a judicially evolved governance norm into
          legislative text. The migration is not a story about one company or one
          ruling. It is a story about a governance ecosystem: Delaware's Court of
          Chancery, its specialized bar, its iterative common-law process, and the
          reputational discipline that system imposed on corporate boards. A legal
          intervention designed to protect stockholders triggered a jurisdictional
          exodus that may degrade the very institution that had maintained
          stockholder protection most effectively.
        </p>
        <p>
          The blind spot is structural: the court could see the specific governance
          arrangement it was evaluating, but not the institutional architecture —
          the ecosystem of precedent, specialization, and repeat-player discipline —
          that its intervention would destabilize.
        </p>
      </>
    ),
  },
  {
    title: "Alpine Securities v. FINRA",
    year: "2024",
    summary:
      "A constitutional challenge to FINRA's self-regulatory authority reached the D.C. Circuit — threatening the delegated governance institution that has maintained market integrity since the Securities Exchange Act.",
    detail: (
      <>
        <p>
          In 2024, the D.C. Circuit decided{" "}
          {citeLink(
            "Alpine Securities Corp. v. FINRA",
            "https://scholar.google.com/scholar_case?case=13162553055685029482"
          )}{" "}
          (121 F.4th 1314), a constitutional challenge to FINRA's authority to
          expel broker-dealers. The plaintiff argued that FINRA's disciplinary
          process — delegated self-regulation under Section 19 of the Securities
          Exchange Act — violated due process and the nondelegation doctrine. The
          Supreme Court denied certiorari in June 2025.
        </p>
        <p>
          FINRA's governance architecture is a direct descendant of the private
          exchange governance the Supreme Court disrupted in{" "}
          <em>Silver v. NYSE</em> (1963). After Silver, Congress formalized
          self-regulatory authority in the 1975 Securities Acts Amendments,
          requiring SEC pre-approval of rule changes and full due process for
          disciplinary actions. The result was a governance institution that
          retained the form of self-regulation but operated under increasingly
          heavy procedural constraints. Alpine is the latest iteration: each
          constitutional challenge adds procedural requirements that further
          convert governance authority from a property rule to a liability rule.
        </p>
        <p>
          The pattern is cumulative. No single intervention destroys the
          governance institution. But each one — Silver, the 1975 Amendments,
          Alpine — erodes the institution's capacity to exclude bad actors
          quickly, which is the mechanism through which market governance produces
          integrity.
        </p>
      </>
    ),
  },
  {
    title: "University Antisemitism Crisis",
    year: "2023–24",
    summary:
      "Federal enforcement mandated new policies and coordinators at major universities. The governance architecture — self-perpetuating boards, compromised reporting lines — remained untouched.",
    detail: (
      <>
        <p>
          After October 7, 2023, antisemitic incidents surged on American
          university campuses. At UCLA, 115 faculty endorsed academic boycotts,
          including 20 in academic leadership positions. At UC Berkeley, 171
          endorsers included 19 in academic leadership. At UC Santa Cruz, the
          Associate Campus Provost and four residential college provosts were
          among 55 endorsers. A 2024 survey found that 57.3% of Jewish
          university community members reported direct experiences of
          antisemitism.
        </p>
        <p>
          The federal response followed the template established after the Nassar
          scandal: require revised policies, appoint coordinators, mandate
          training, conduct retrospective review. These are compliance
          interventions — they address the surface manifestations. But the
          governance architecture that enabled the failures remained untouched:
          self-perpetuating boards of trustees face no meaningful accountability
          mechanism; reporting lines between academic units and central
          administration remain structurally compromised; and faculty governance
          bodies operate without effective oversight of how governance authority
          is exercised.
        </p>
        <p>
          This is the governance void described in Chapter 12: an elaborate
          facade of formal structure — policies, committees, compliance offices —
          behind which no institution is accountable for governance outcomes. The
          compliance mandates did not create accountability. They added another
          layer of facade.
        </p>
      </>
    ),
  },
  {
    title: "Michigan State / Nassar",
    year: "2018",
    summary:
      "A serial predator operated for decades because the reporting line was structurally compromised. The federal response mandated new policies — not governance reform.",
    detail: (
      <>
        <p>
          Larry Nassar sexually abused hundreds of athletes over two decades at
          Michigan State University. The university received the largest Clery
          Act fine in history at the time — $4.5 million. The federal response
          required revised Title IX policies, new compliance coordinators,
          mandatory training programs, and retrospective case review.
        </p>
        <p>
          But the governance failure was architectural, not procedural. The
          reporting line between athletic medicine and the athletic department
          was structurally compromised: the people responsible for reporting
          abuse reported to the people who benefited from suppressing it. The
          Board of Trustees was self-perpetuating and faced no external
          accountability mechanism capable of forcing structural change. These
          were governance design failures — failures in the institution's
          decision-making structure, monitoring architecture, and sanction
          mechanisms.
        </p>
        <p>
          No federal mandate required restructuring the reporting line. No
          mandate required reforming the Board's accountability architecture.
          The compliance interventions addressed symptoms. The governance void
          — the absence of institutional accountability behind an elaborate
          facade of formal structure — remained intact.
        </p>
      </>
    ),
  },
  {
    title: "The Israeli Daycare Fines",
    year: "2000",
    summary:
      "A fine for late pickups doubled tardiness and permanently destroyed the social norm that had governed parental behavior.",
    detail: (
      <>
        <p>
          In a{" "}
          {citeLink(
            "landmark 2000 study",
            "https://doi.org/10.1086/468061"
          )}{" "}
          published in the <em>Journal of Legal Studies</em>, Uri Gneezy and Aldo
          Rustichini documented what happened when ten daycare centers in Haifa,
          Israel introduced a monetary fine for parents who arrived late to pick
          up their children. Standard deterrence theory predicted that the fine
          would reduce tardiness. Instead, late arrivals roughly doubled.
        </p>
        <p>
          The fine displaced a governance institution — the informal social norm
          of reciprocal obligation between parents and teachers. Before the fine,
          parents who arrived late felt guilt about inconveniencing the teachers
          who stayed with their children. The fine converted this moral obligation
          into a market transaction: parents could now "buy" the right to be
          late. When the fine was removed after twelve weeks, the higher rate of
          tardiness persisted. The norm did not recover.
        </p>
        <p>
          This is governance degradation in its purest form. The legal
          intervention (a fine) was designed to strengthen compliance with an
          existing behavioral standard. Instead, it destroyed the governance
          institution (the social norm) that had maintained that standard more
          effectively than the fine ever could. The mechanism is what Chapter 7
          calls <em>crowding out</em>: a formal legal rule displaces an informal
          governance mechanism, and the informal mechanism cannot be restored once
          displaced.
        </p>
      </>
    ),
  },
  {
    title: "Silver v. New York Stock Exchange",
    year: "1963",
    summary:
      "The Supreme Court rightly stopped an abuse — but the remedy degraded the governance institution that had maintained market integrity across all four elements.",
    detail: (
      <>
        <p>
          The New York Stock Exchange expelled a competing broker without
          explanation. The Supreme Court rightly intervened in{" "}
          {citeLink(
            "Silver v. NYSE",
            "https://supreme.justia.com/cases/federal/us/373/341/"
          )}{" "}
          (373 U.S. 341, 1963), holding that the exchange could not cut off a
          broker's private wire connections without notice or an opportunity to be
          heard. The specific abuse was real and the remedy was justified.
        </p>
        <p>
          But the remedy converted the exchange's authority to exclude — the core
          mechanism through which it governed — from a property rule to a
          liability rule. Congress extended the logic in the 1975 Securities Acts
          Amendments, requiring SEC pre-approval of all exchange rule changes and
          full due process for every disciplinary action. The governance
          institution that had maintained market integrity for decades was
          degraded across all four elements: its decision-making authority was
          subordinated to SEC review; its monitoring capacity was constrained by
          procedural requirements; its sanction mechanisms were slowed by
          mandatory hearings; and its ability to adjust rules was frozen by
          bureaucratic pre-approval.
        </p>
        <p>
          The Court could see the specific broker who was harmed. It could not
          see the governance institution — the self-regulatory architecture of
          the exchange — that its remedy would degrade. This is the foundational
          case study of the book: not because the Court was wrong to intervene,
          but because it intervened without seeing what it was changing.
        </p>
      </>
    ),
  },
];

/* ───── boundaries ───── */
const boundaries = [
  {
    claim: "It does not override rights.",
    detail: (
      <>
        <p>
          Anti-discrimination violations warrant remedy regardless of governance
          function. The framework does not ask courts to tolerate civil rights
          violations because the violating institution serves a governance
          purpose. What it adds is a recognition that remedies can be{" "}
          <em>designed</em> — that a court or regulator choosing between two
          remedies that equally vindicate the right should prefer the one that
          preserves governance capacity.
        </p>
        <p>
          This builds on the remedial design tradition in{" "}
          {citeLink(
            "Calabresi & Melamed's",
            "https://doi.org/10.2307/1340059"
          )}{" "}
          foundational distinction between property rules and liability rules (
          <em>Harvard Law Review</em>, 1972). Their framework showed that the
          choice of remedy has allocative consequences independent of the
          underlying right. This book extends that insight to governance: the
          choice of remedy has <em>institutional</em> consequences — it can
          preserve or destroy the governance institution that manages a shared
          problem beyond the specific dispute.
        </p>
      </>
    ),
  },
  {
    claim: "It does not create an affirmative defense.",
    detail: (
      <>
        <p>
          Courts applying anti-discrimination law should not be required to
          conduct a governance evaluation before ordering compliance. The
          framework's role is as a{" "}
          <em>remedial design tool</em>, not a litigation-stage defense. It
          operates after liability is established, not before.
        </p>
        <p>
          This distinction tracks{" "}
          {citeLink(
            "Lon Fuller's",
            "https://doi.org/10.2307/1272235"
          )}{" "}
          analysis of the polycentric problem in adjudication: some problems
          cannot be resolved by bilateral proceedings because the consequences
          radiate outward to parties not before the court. Governance effects are
          paradigmatically polycentric — a remedy that addresses one party's
          injury may degrade the institution that serves thousands of members.
          Neil Komesar's{" "}
          {citeLink(
            "comparative institutional analysis",
            "https://www.press.umich.edu/16438/imperfect_alternatives"
          )}{" "}
          makes a complementary point: choosing among imperfect institutional
          alternatives requires seeing the systemic costs of each option, not
          just the costs visible in the immediate dispute.
        </p>
      </>
    ),
  },
  {
    claim: "It is not a theory of deregulation.",
    detail: (
      <>
        <p>
          The most common misreading of governance analysis is that it argues for
          less legal intervention. It does not. Governance-literate law may
          require <em>more</em> intervention — restructuring governance
          architecture, creating accountability mechanisms, redesigning reporting
          lines — rather than simply mandating compliance policies that leave
          dysfunctional structures intact.
        </p>
        <p>
          This aligns with{" "}
          {citeLink(
            "Ayres & Braithwaite's",
            "https://doi.org/10.1093/0198254040.001.0001"
          )}{" "}
          responsive regulation framework, which showed that effective regulation
          matches the intervention to the institutional context rather than
          applying uniform rules. It also builds on{" "}
          {citeLink(
            "Elinor Ostrom's",
            "https://doi.org/10.1017/CBO9780511807763"
          )}{" "}
          design principles for durable governance institutions: successful
          governance requires institutional fit, not institutional uniformity.
          The framework asks legal actors to see what their rules do to
          governance institutions — and sometimes the answer is that they need
          to do <em>more</em>, not less.
        </p>
      </>
    ),
  },
  {
    claim: "It is more complete law, not more deferential law.",
    detail: (
      <>
        <p>
          The framework does not ask courts to defer to governance institutions.
          It asks them to <em>see</em> governance institutions — to recognize
          that legal rules have institutional effects and that those effects
          should inform how rules are designed and applied. This is an expansion
          of legal analysis, not a contraction.
        </p>
        <p>
          After{" "}
          {citeLink(
            "Loper Bright Enterprises v. Raimondo",
            "https://supreme.justia.com/cases/federal/us/603/369/"
          )}{" "}
          (2024) replaced Chevron deference, courts assumed greater
          responsibility for interpreting regulatory statutes. Governance
          analysis provides a conceptual vocabulary for exercising that
          responsibility: courts that can see governance effects can evaluate
          regulatory interventions with greater precision. Combined with{" "}
          {citeLink(
            "Ostrom's Institutional Analysis and Development (IAD) framework",
            "https://doi.org/10.1017/CBO9781139165525"
          )}
          , the approach gives legal actors a structured method for evaluating
          how rules interact with institutional contexts — making legal analysis
          more rigorous, not more permissive.
        </p>
      </>
    ),
  },
];

/* ───── interdisciplinary disciplines ───── */
const disciplines = [
  { label: "Economics", path: "/learn/economics" },
  { label: "Political Science", path: "/learn/political-science" },
  { label: "Sociology", path: "/learn/sociology" },
  { label: "Organizational Theory", path: "/learn/organizational-theory" },
  { label: "Commons Research", path: "/learn/commons-research" },
];

/* ───── ExpandCard ───── */
function ExpandCard({ item, accent }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        padding: "14px 16px",
        background: B.bgSecondary,
        border: `1px solid ${B.border}`,
        borderRadius: "var(--radius-md)",
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
          {item.title || item.claim}
        </div>
        {item.year && (
          <div
            style={{
              fontFamily: fonts.body,
              fontSize: "0.85rem",
              color: B.muted,
              fontWeight: 500,
            }}
          >
            {item.year}
          </div>
        )}
      </div>
      {item.summary && (
        <div
          style={{
            fontFamily: fonts.body,
            fontSize: "0.95rem",
            color: B.muted,
            lineHeight: 1.5,
          }}
        >
          {item.summary}
        </div>
      )}
      {open && (
        <div
          style={{
            marginTop: 10,
            paddingTop: 10,
            borderTop: `1px solid ${B.border}`,
            fontFamily: fonts.accent,
            fontSize: "1rem",
            color: B.text,
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
          color: B.muted,
          marginTop: 6,
          textAlign: "right",
        }}
      >
        {open ? "Collapse" : "Read more"}
      </div>
    </div>
  );
}

/* ───── BoundaryCard (for the box layout) ───── */
function BoundaryCard({ item, borderSide }) {
  const [open, setOpen] = useState(false);
  const borderStyle = { [`border${borderSide}`]: `3px solid ${B.accentRed}` };
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        padding: "14px 16px",
        background: B.bgSecondary,
        border: `1px solid ${B.border}`,
        borderRadius: "var(--radius-md)",
        cursor: "pointer",
        transition: "all 0.15s",
        ...borderStyle,
      }}
    >
      <div
        style={{
          fontFamily: fonts.headline,
          fontSize: "1rem",
          fontWeight: 700,
          color: B.accent,
          marginBottom: 4,
        }}
      >
        {item.claim}
      </div>
      {open && (
        <div
          style={{
            marginTop: 10,
            paddingTop: 10,
            borderTop: `1px solid ${B.border}`,
            fontFamily: fonts.accent,
            fontSize: "1rem",
            color: B.text,
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
          color: B.muted,
          marginTop: 6,
          textAlign: "right",
        }}
      >
        {open ? "Collapse" : "Read more"}
      </div>
    </div>
  );
}

/* ───── Home ───── */
export default function Home() {
  return (
    <div>
      {/* Hero */}
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

      {/* Red banner */}
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

      {/* Interdisciplinary links */}
      <div
        style={{
          padding: "12px 20px",
          background: B.bg,
          textAlign: "center",
          borderBottom: `1px solid ${B.border}`,
        }}
      >
        <span
          style={{
            fontFamily: fonts.body,
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: 1.5,
            color: B.muted,
            marginRight: 8,
          }}
        >
          Interdisciplinary foundations:
        </span>
        {disciplines.map((d, i) => (
          <span key={d.path}>
            <Link
              to={d.path}
              style={{
                fontFamily: fonts.body,
                fontSize: "0.75rem",
                fontWeight: 600,
                color: B.accent,
                textDecoration: "none",
              }}
            >
              {d.label}
            </Link>
            {i < disciplines.length - 1 && (
              <span
                style={{
                  color: B.muted,
                  margin: "0 6px",
                  fontSize: "0.7rem",
                }}
              >
                ·
              </span>
            )}
          </span>
        ))}
      </div>

      {/* The Pattern */}
      <section style={{ padding: "32px 20px 36px", background: B.bg }}>
        <div
          style={{
            fontFamily: fonts.body,
            fontSize: "0.8rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 2,
            color: B.muted,
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
          Many Institutions, One Blind Spot
        </h2>
        <p
          style={{
            fontFamily: fonts.body,
            fontSize: "1rem",
            color: B.muted,
            textAlign: "center",
            margin: "0 auto 20px",
            maxWidth: 620,
            lineHeight: 1.6,
          }}
        >
          Across jurisdictions and decades, the pattern repeats: law addresses a
          visible problem while degrading the governance institution that managed
          a broader one. Tap any to see the full story.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          {patterns.map((p) => (
            <ExpandCard key={p.title} item={p} accent={B.textRed} />
          ))}
        </div>
      </section>

      {/* Where Governance Lives */}
      <section style={{ padding: "32px 20px 36px", background: B.bgSecondary }}>
        <div
          style={{
            fontFamily: fonts.body,
            fontSize: "0.8rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 2,
            color: B.muted,
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
            textTransform: "uppercase",
            borderBottom: "none",
          }}
        >
          Where Governance Lives
        </h2>
        <p
          style={{
            fontFamily: fonts.body,
            fontSize: "1rem",
            color: B.muted,
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
      <section style={{ padding: "32px 20px 36px", background: B.bg }}>
        <div
          style={{
            fontFamily: fonts.body,
            fontSize: "0.8rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 2,
            color: B.muted,
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
            color: B.muted,
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

      {/* What This Framework Is Not — boundary box */}
      <section style={{ padding: "32px 20px 36px", background: B.bgSecondary }}>
        <div
          style={{
            fontFamily: fonts.body,
            fontSize: "0.8rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 2,
            color: B.muted,
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
            margin: "0 0 20px",
          }}
        >
          What This Framework Is Not
        </h2>

        <div
          style={{
            maxWidth: 700,
            margin: "0 auto",
            border: `2px solid ${B.border}`,
            borderRadius: "var(--radius-md)",
            padding: 10,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {/* Top row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 10,
            }}
          >
            <BoundaryCard item={boundaries[0]} borderSide="Top" />
            <BoundaryCard item={boundaries[1]} borderSide="Top" />
          </div>

          {/* Central thesis */}
          <div
            style={{
              padding: "16px 20px",
              textAlign: "center",
              background: B.bg,
              borderRadius: "var(--radius-md)",
              border: `1px solid ${B.border}`,
            }}
          >
            <p
              style={{
                fontFamily: fonts.accent,
                fontSize: "1.1rem",
                fontStyle: "italic",
                color: B.text,
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              The framework makes governance visible. It does not make
              governance supreme.
            </p>
          </div>

          {/* Bottom row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 10,
            }}
          >
            <BoundaryCard item={boundaries[2]} borderSide="Bottom" />
            <BoundaryCard item={boundaries[3]} borderSide="Bottom" />
          </div>
        </div>
      </section>

      {/* Navigation cards */}
      <section style={{ padding: "28px 20px", background: B.bg }}>
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
                background: B.bgSecondary,
                border: `1px solid ${B.border}`,
                borderRadius: "var(--radius-md)",
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
                    color: B.muted,
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

      {/* Closing quote */}
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
