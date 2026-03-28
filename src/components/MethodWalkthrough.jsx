import { useState } from "react";
import { B } from "../brand/tokens";
import { domains, stepMeta } from "../data/domains";

const phaseColor = {
  Describe: B.brightBlue,
  Analyze: B.blue,
  Evaluate: B.red,
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
              background: domain === k ? B.blue : "transparent",
              color: domain === k ? B.white : B.blue,
              border: `1.5px solid ${B.blue}`,
              borderRadius: 20,
              cursor: "pointer",
              fontFamily: "'Roboto', sans-serif",
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
          fontFamily: "'Crimson Text', Georgia, serif",
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
                  background: isA || isP ? pc : "#E0DDD6",
                  color: isA || isP ? B.white : B.textLight,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Roboto', sans-serif",
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
                      : "#E0DDD6",
                  }}
                />
              )}
            </div>
            <div style={{ flex: 1, paddingBottom: isA ? 4 : 2 }}>
              <div
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: 9,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1.2,
                  color: pc,
                }}
              >
                {sm.phase}
              </div>
              <div
                style={{
                  fontFamily: isJ
                    ? "'Oswald', sans-serif"
                    : "'Crimson Text', Georgia, serif",
                  fontSize: isA ? 14.5 : 13.5,
                  fontWeight: isA || isJ ? 700 : 400,
                  color: isJ ? B.red : B.textDark,
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
                    background: isJ ? "#FDF2F2" : B.offWhite,
                    borderLeft: `3px solid ${pc}`,
                    borderRadius: 4,
                    fontFamily: "'Crimson Text', Georgia, serif",
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
            border: `1px solid ${step === 0 ? "#ddd" : B.blue}`,
            background: "transparent",
            color: step === 0 ? "#ccc" : B.blue,
            borderRadius: 4,
            cursor: step === 0 ? "default" : "pointer",
            fontFamily: "'Roboto', sans-serif",
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
              step === 6 ? "#ddd" : step === 5 ? B.red : B.blue,
            color: step === 6 ? "#999" : B.white,
            borderRadius: 4,
            cursor: step === 6 ? "default" : "pointer",
            fontFamily: "'Roboto', sans-serif",
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
