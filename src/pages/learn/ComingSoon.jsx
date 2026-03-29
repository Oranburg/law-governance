import { useParams, Link } from "react-router-dom";
import { B, fonts } from "../../brand/tokens";

const labels = {
  economics: "Economics",
  "political-science": "Political Science",
  sociology: "Sociology",
  "organizational-theory": "Organizational Theory",
  "commons-research": "Commons Research",
};

export default function ComingSoon() {
  const { discipline } = useParams();
  const name = labels[discipline] || discipline;

  return (
    <div style={{ padding: "60px 20px", textAlign: "center" }}>
      <div
        style={{
          fontFamily: fonts.body,
          fontSize: "0.8rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 1.5,
          color: B.muted,
          marginBottom: 8,
        }}
      >
        Interdisciplinary Foundations
      </div>
      <h2
        style={{
          fontFamily: fonts.headline,
          fontSize: "1.8rem",
          fontWeight: 700,
          color: B.accent,
          margin: "0 0 16px",
        }}
      >
        {name}
      </h2>
      <p
        style={{
          fontFamily: fonts.accent,
          fontSize: "1.05rem",
          color: B.muted,
          lineHeight: 1.6,
          maxWidth: 500,
          margin: "0 auto 24px",
          fontStyle: "italic",
        }}
      >
        This learning portal is under development. It will explore how{" "}
        <em>Law &amp; Governance</em> draws on and contributes to the{" "}
        {name.toLowerCase()} literature.
      </p>
      <Link
        to="/"
        style={{
          fontFamily: fonts.body,
          fontSize: "0.95rem",
          color: B.accent,
          fontWeight: 600,
        }}
      >
        &larr; Back to home
      </Link>
    </div>
  );
}
