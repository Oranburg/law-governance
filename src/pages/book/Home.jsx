import { Link } from "react-router-dom";
import { B, fonts } from "../../brand/tokens";
import Term from "../../components/Term";
import GoodsGrid from "../../components/GoodsGrid";
import MethodWalkthrough from "../../components/MethodWalkthrough";

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
              desc: "Six original concepts that structure the book\u2019s argument.",
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
