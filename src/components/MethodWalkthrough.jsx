import { useState } from "react";
import { B, fonts } from "../brand/tokens";
import { domains, stepMeta } from "../data/domains";

const phaseColor = {
  Describe: B.brightBlue,
  Analyze: B.blue,
  Evaluate: B.red,
};

const phaseTextColor = {
  Describe: "var(--accent)",
  Analyze: "var(--accent)",
  Evaluate: "var(--text-red)",
};

export default function MethodWalkthrough() {
  const [domain, setDomain] = useState("nyse");
  const [step, setStep] = useState(0);
  const d = domains[domain];

  return (
    <div>
      <div style={{ display: "flex", gap: 6, marginBottom: 18, flexWrap: "wrap" }}>
        {Object.entries(domains).map(([k, v]) => (
          <button
            key={k}
            onClick={() => {
              setDomain(k);
              setStep(0);
            }}
            style={{
              padding: "7px 14px",
              background: domain === k ? B.brightBlue : "transparent",
              color: domain === k ? "#FFFFFF" : B.accent,
              border: `1.5px solid ${B.brightBlue}`,
              borderRadius: "var(--radius-pill)",
              cursor: "pointer",
              fontFamily: fonts.body,
              fontSize: "0.95rem",
              fontWeight: 500,
            }}
          >
            {v.short}
          </button>
        ))}
      </div>
      <div
        style={{
          fontFamily: fonts.body,
          fontSize: "1rem",
          color: B.muted,
          marginBottom: 14,
        }}
      >
        Applying the method to:{" "}
        <strong style={{ color: B.text }}>{d.full}</strong>
      </div>
      {stepMeta.map((sm, i) => {
        const isA = i === step;
        const isP = i < step;
        const pc = phaseColor[sm.phase];
        const ptc = phaseTextColor[sm.phase];
        const isJ = i === 6;
        return (
          <div
            key={i}
            onClick={() => setStep(i)}
            style={{
              display: "flex",
              gap: 12,
              marginBottom: 5,
              cursor: "pointer",
              opacity: i > step ? 0.3 : 1,
              transition: "all 0.2s",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: 28,
                minWidth: 28,
              }}
            >
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: isA || isP ? pc : B.indicatorInactive,
                  color: isA || isP ? "#FFFFFF" : B.muted,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: fonts.body,
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  boxShadow: isA ? `0 0 0 3px ${pc}33` : "none",
                }}
              >
                {i + 1}
              </div>
              {i < 6 && (
                <div
                  style={{
                    width: 1.5,
                    height: 8,
                    background: isP
                      ? phaseColor[stepMeta[i + 1].phase]
                      : B.indicatorInactive,
                  }}
                />
              )}
            </div>
            <div style={{ flex: 1, paddingBottom: isA ? 4 : 2 }}>
              <div
                style={{
                  fontFamily: fonts.body,
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1.2,
                  color: ptc,
                }}
              >
                {sm.phase}
              </div>
              <div
                style={{
                  fontFamily: isJ ? fonts.headline : fonts.accent,
                  fontSize: isA ? "1.05rem" : "1rem",
                  fontWeight: isA || isJ ? 700 : 400,
                  color: isJ ? B.textRed : B.text,
                  textTransform: isJ ? "uppercase" : "none",
                }}
              >
                {sm.label}
              </div>
              {isA && (
                <div
                  style={{
                    marginTop: 6,
                    padding: "12px 14px",
                    background: isJ ? B.bgDanger : B.bgSoft,
                    borderLeft: `3px solid ${pc}`,
                    borderRadius: "var(--radius-md)",
                    fontFamily: fonts.accent,
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    color: B.text,
                  }}
                >
                  {d.steps[i]}
                </div>
              )}
            </div>
          </div>
        );
      })}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 14,
        }}
      >
        <button
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
          style={{
            padding: "8px 18px",
            border: `1px solid ${step === 0 ? B.border : B.brightBlue}`,
            background: "transparent",
            color: step === 0 ? B.muted : B.accent,
            borderRadius: "var(--radius-md)",
            cursor: step === 0 ? "default" : "pointer",
            fontFamily: fonts.body,
            fontSize: "0.95rem",
            fontWeight: 500,
          }}
        >
          Back
        </button>
        <button
          onClick={() => setStep(Math.min(6, step + 1))}
          disabled={step === 6}
          style={{
            padding: "8px 18px",
            border: "none",
            background:
              step === 6 ? B.border : step === 5 ? B.red : B.brightBlue,
            color: step === 6 ? B.muted : "#FFFFFF",
            borderRadius: "var(--radius-md)",
            cursor: step === 6 ? "default" : "pointer",
            fontFamily: fonts.body,
            fontSize: "0.95rem",
            fontWeight: 500,
          }}
        >
          {step === 5 ? "Render Judgment" : "Next"}
        </button>
      </div>
    </div>
  );
}
