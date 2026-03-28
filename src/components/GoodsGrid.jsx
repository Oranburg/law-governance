import { useState } from "react";
import { B, fonts } from "../brand/tokens";
import { quads } from "../data/quads";

export default function GoodsGrid() {
  const [active, setActive] = useState("club");
  const q = quads.find((x) => x.id === active);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
          maxWidth: 600,
          margin: "0 auto",
          textAlign: "center",
          fontFamily: fonts.body,
          fontSize: 10,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 1.5,
          color: B.textLight,
          marginBottom: 6,
        }}
      >
        <div>Low excludability</div>
        <div>High excludability</div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 3,
          maxWidth: 600,
          margin: "0 auto",
        }}
      >
        {quads.map((qq) => {
          const isA = active === qq.id;
          const isH = qq.highlight;
          return (
            <div
              key={qq.id}
              onClick={() => setActive(qq.id)}
              style={{
                padding: "16px 12px",
                background: isH ? B.brightBlue : isA ? B.offWhite : B.white,
                border:
                  isA && !isH
                    ? `2px solid ${B.accent}`
                    : isH
                      ? `2px solid ${B.brightBlue}`
                      : `1px solid ${B.border}`,
                borderRadius: 8,
                cursor: "pointer",
                transition: "all 0.15s",
                minHeight: 80,
              }}
            >
              <div
                style={{
                  fontFamily: fonts.headline,
                  fontSize: 14,
                  fontWeight: 700,
                  color: isH ? B.yellow : B.textDark,
                  textTransform: "uppercase",
                  marginBottom: 3,
                }}
              >
                {qq.label}
              </div>
              <div
                style={{
                  fontFamily: fonts.body,
                  fontSize: 12.5,
                  color: isH ? "rgba(255,255,255,0.65)" : B.textLight,
                  lineHeight: 1.3,
                }}
              >
                {qq.examples}
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          maxWidth: 600,
          margin: "10px auto 0",
          padding: "12px 14px",
          background: q.highlight ? B.brightBlue : B.white,
          borderLeft: `3px solid ${q.highlight ? B.yellow : B.accent}`,
          borderRadius: 8,
          fontFamily: fonts.body,
          fontSize: 14.5,
          lineHeight: 1.55,
          color: q.highlight ? "#FFFFFF" : B.textDark,
        }}
      >
        {q.note}
      </div>
    </div>
  );
}
