import { useState } from "react";
import { B, fonts } from "../brand/tokens";
import { quads } from "../data/quads";

const axisLabel = {
  fontFamily: fonts.body,
  fontSize: "0.8rem",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: 1.5,
  color: B.muted,
};

export default function GoodsGrid() {
  const [active, setActive] = useState("club");
  const q = quads.find((x) => x.id === active);

  return (
    <div>
      {/* X-axis header row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "36px 1fr 1fr",
          gap: 0,
          maxWidth: 640,
          margin: "0 auto",
          textAlign: "center",
          marginBottom: 6,
        }}
      >
        <div />
        <div style={axisLabel}>Low excludability</div>
        <div style={axisLabel}>High excludability</div>
      </div>

      {/* Main grid with Y-axis labels */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "36px 1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 3,
          maxWidth: 640,
          margin: "0 auto",
        }}
      >
        {/* Y-axis: Low rivalry */}
        <div
          style={{
            ...axisLabel,
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gridRow: "1",
            gridColumn: "1",
          }}
        >
          Low rivalry
        </div>

        {/* Top row quadrants: public (low excl) + club (high excl) */}
        {quads.filter((qq) => qq.id === "public" || qq.id === "club").map((qq) => {
          const isA = active === qq.id;
          const isH = qq.highlight;
          return (
            <div
              key={qq.id}
              onClick={() => setActive(qq.id)}
              style={{
                padding: "16px 14px",
                background: isH ? B.brightBlue : isA ? B.bgSoft : B.bgSecondary,
                border:
                  isA && !isH
                    ? `2px solid ${B.accent}`
                    : isH
                      ? `2px solid ${B.brightBlue}`
                      : `1px solid ${B.border}`,
                borderRadius: "var(--radius-md)",
                cursor: "pointer",
                transition: "all 0.15s",
                minHeight: 90,
              }}
            >
              <div
                style={{
                  fontFamily: fonts.headline,
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: isH ? B.yellow : B.text,
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                {qq.label}
              </div>
              <div
                style={{
                  fontFamily: fonts.accent,
                  fontSize: "0.95rem",
                  color: isH ? "rgba(255,255,255,0.7)" : B.muted,
                  lineHeight: 1.4,
                }}
              >
                {qq.examples}
              </div>
            </div>
          );
        })}

        {/* Y-axis: High rivalry */}
        <div
          style={{
            ...axisLabel,
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gridRow: "2",
            gridColumn: "1",
          }}
        >
          High rivalry
        </div>

        {/* Bottom row quadrants: common-pool (low excl) + private (high excl) */}
        {quads.filter((qq) => qq.id === "cpr" || qq.id === "private").map((qq) => {
          const isA = active === qq.id;
          const isH = qq.highlight;
          return (
            <div
              key={qq.id}
              onClick={() => setActive(qq.id)}
              style={{
                padding: "16px 14px",
                background: isH ? B.brightBlue : isA ? B.bgSoft : B.bgSecondary,
                border:
                  isA && !isH
                    ? `2px solid ${B.accent}`
                    : isH
                      ? `2px solid ${B.brightBlue}`
                      : `1px solid ${B.border}`,
                borderRadius: "var(--radius-md)",
                cursor: "pointer",
                transition: "all 0.15s",
                minHeight: 90,
              }}
            >
              <div
                style={{
                  fontFamily: fonts.headline,
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: isH ? B.yellow : B.text,
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                {qq.label}
              </div>
              <div
                style={{
                  fontFamily: fonts.accent,
                  fontSize: "0.95rem",
                  color: isH ? "rgba(255,255,255,0.7)" : B.muted,
                  lineHeight: 1.4,
                }}
              >
                {qq.examples}
              </div>
            </div>
          );
        })}
      </div>

      {/* Description note */}
      <div
        style={{
          maxWidth: 640,
          margin: "10px auto 0",
          padding: "14px 16px",
          background: q.highlight ? B.brightBlue : B.bgSecondary,
          borderLeft: `3px solid ${q.highlight ? B.yellow : B.accent}`,
          borderRadius: "var(--radius-md)",
          fontFamily: fonts.accent,
          fontSize: "1rem",
          lineHeight: 1.6,
          color: q.highlight ? "#FFFFFF" : B.text,
        }}
      >
        {q.note}
      </div>
    </div>
  );
}
