import { useState } from "react";
import { B, fonts } from "../brand/tokens";
import { domains, stepMeta } from "../data/domains";

const phaseColor = {
  Describe: B.brightBlue,
  Analyze: B.blue,
  Evaluate: B.red,
};

// Theme-safe text colors for phase labels
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
              borderRadius: 20,
              cursor: "pointer",
              fontFamily: fonts.body,
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            {v.short}
          </button>
        ))}
      </div>
      <div
        style={{
          fontFamily: fonts.body,
          fontSize: 13.5,
          color: B.textLight,
          marginBottom: 14,
        }}
      >
        Applying the method to:{" "}
        <strong style={{ color: B.textDark }}>{d.full}</strong>
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
                width: 26,
                minWidth: 26,
              }}
            >
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: isA || isP ? pc : B.indicatorInactive,
                  color: isA || isP ? "#FFFFFF" : B.textLight,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: fonts.body,
                  fontSize: 10,
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
                  fontSize: 9,
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
                  fontFamily: isJ ? fonts.headline : fonts.body,
                  fontSize: isA ? 14.5 : 13.5,
                  fontWeight: isA || isJ ? 700 : 400,
                  color: isJ ? B.textRed : B.textDark,
                  textTransform: isJ ? "uppercase" : "none",
                }}
              >
                {sm.label}
              </div>
              {isA && (
                <div
                  style={{
                    marginTop: 6,
                    padding: "10px 12px",
                    background: isJ ? B.bgDanger : B.offWhite,
                    borderLeft: `3px solid ${pc}`,
                    borderRadius: 8,
                    fontFamily: fonts.body,
                    fontSize: 14.5,
                    lineHeight: 1.6,
                    color: B.textDark,
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
            padding: "7px 16px",
            border: `1px solid ${step === 0 ? B.border : B.brightBlue}`,
            background: "transparent",
            color: step === 0 ? B.textLight : B.accent,
            borderRadius: 8,
            cursor: step === 0 ? "default" : "pointer",
            fontFamily: fonts.body,
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          Back
        </button>
        <button
          onClick={() => setStep(Math.min(6, step + 1))}
          disabled={step === 6}
          style={{
            padding: "7px 16px",
            border: "none",
            background:
              step === 6 ? B.border : step === 5 ? B.red : B.brightBlue,
            color: step === 6 ? B.textLight : "#FFFFFF",
            borderRadius: 8,
            cursor: step === 6 ? "default" : "pointer",
            fontFamily: fonts.body,
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          {step === 5 ? "Render Judgment" : "Next"}
        </button>
      </div>
    </div>
  );
}
