import { Link } from "react-router-dom";
import { B, fonts } from "../../brand/tokens";
import Term from "../../components/Term";
import GoodsGrid from "../../components/GoodsGrid";
import MethodWalkthrough from "../../components/MethodWalkthrough";

export default function Home() {
  return (
    <div>
      <div style={{ background: B.blue, padding: "36px 20px 28px", textAlign: "center" }}>
        <div
          style={{
            fontFamily: fonts.body,
            fontSize: 10,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 3,
            color: B.lightBlue,
            marginBottom: 10,
          }}
        >
          Seth C. Oranburg
        </div>
        <h1
          style={{
            fontFamily: fonts.headline,
            fontSize: 34,
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.1,
            margin: "0 0 8px",
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          Law &amp; Governance
        </h1>
        <p
          style={{
            fontFamily: fonts.accent,
            fontSize: 16,
            color: B.lightBlue,
            fontStyle: "italic",
            margin: 0,
          }}
        >
          How Law Makes, Supports, and Weakens Governance
        </p>
      </div>

      <div style={{ background: B.red, padding: "14px 20px" }}>
        <p
          style={{
            fontFamily: fonts.accent,
            fontSize: 15,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.5,
            textAlign: "center",
          }}
        >
          Law often changes institutions without seeing what those institutions
          do. This book makes{" "}
          <Term id="governance">governance</Term> visible as a legal object and
          supplies a method for judging law by its institutional effects.
        </p>
      </div>

      <section style={{ padding: "24px 16px 28px", background: B.white }}>
        <div
          style={{
            fontFamily: fonts.body,
            fontSize: 10,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 2,
            color: B.textLight,
            marginBottom: 3,
            textAlign: "center",
          }}
        >
          A Theoretical Move
        </div>
        <h2
          style={{
            fontFamily: fonts.headline,
            fontSize: 20,
            fontWeight: 700,
            color: B.accent,
            textAlign: "center",
            margin: "0 0 4px",
            textTransform: "uppercase",
          }}
        >
          Where Governance Lives
        </h2>
        <p
          style={{
            fontFamily: fonts.body,
            fontSize: 13.5,
            color: B.textMid,
            textAlign: "center",
            margin: "0 auto 16px",
            maxWidth: 540,
            lineHeight: 1.45,
          }}
        >
          Many governance arrangements share the features of{" "}
          <Term id="club good">club goods</Term>. Tap a quadrant.
        </p>
        <GoodsGrid />
      </section>

      <section style={{ padding: "24px 16px 28px", background: B.offWhite }}>
        <div
          style={{
            fontFamily: fonts.body,
            fontSize: 10,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 2,
            color: B.textLight,
            marginBottom: 3,
            textAlign: "center",
          }}
        >
          The Method
        </div>
        <h2
          style={{
            fontFamily: fonts.headline,
            fontSize: 20,
            fontWeight: 700,
            color: B.accent,
            textAlign: "center",
            margin: "0 0 4px",
            textTransform: "uppercase",
          }}
        >
          Seven Steps to Judgment
        </h2>
        <p
          style={{
            fontFamily: fonts.body,
            fontSize: 13.5,
            color: B.textMid,
            textAlign: "center",
            margin: "0 auto 18px",
            maxWidth: 540,
            lineHeight: 1.45,
          }}
        >
          Pick an institution. Walk through the analysis. Step 7 renders a
          judgment and specifies a remedy.
        </p>
        <MethodWalkthrough />
      </section>

      <section style={{ padding: "24px 16px", background: B.white }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
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
                padding: "14px 16px",
                background: B.white,
                border: `1px solid ${B.border}`,
                borderRadius: 8,
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  background: c.iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: c.iconColor || "#FFFFFF",
                  fontFamily: fonts.headline,
                  fontSize: 16,
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
                    fontSize: 13,
                    fontWeight: 700,
                    color: B.accent,
                    textTransform: "uppercase",
                  }}
                >
                  {c.title}
                </div>
                <div
                  style={{
                    fontFamily: fonts.body,
                    fontSize: 13,
                    color: B.textMid,
                  }}
                >
                  {c.desc}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div style={{ background: B.blue, padding: "22px 20px", textAlign: "center" }}>
        <p
          style={{
            fontFamily: fonts.accent,
            fontSize: 15.5,
            color: B.lightBlue,
            margin: 0,
            lineHeight: 1.5,
            fontStyle: "italic",
          }}
        >
          Legal analysis has learned to see rights, incentives, and remedies with
          great precision. Its next task is to learn to see governance.
        </p>
      </div>
    </div>
  );
}
