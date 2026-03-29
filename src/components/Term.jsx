import { useState, useEffect } from "react";
import { B, fonts } from "../brand/tokens";
import { glossary } from "../data/glossary";

export default function Term({ children, id }) {
  const [open, setOpen] = useState(false);
  const key = (id || children).toLowerCase();
  const def = glossary[key];

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    const timer = setTimeout(() => window.addEventListener("click", close), 10);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("click", close);
    };
  }, [open]);

  if (!def) return <span>{children}</span>;

  return (
    <span style={{ position: "relative", display: "inline" }}>
      <span
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
        style={{
          borderBottom: `1.5px dashed ${B.lightBlue}`,
          cursor: "pointer",
        }}
      >
        {children}
      </span>
      {open && (
        <span
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "absolute",
            bottom: "calc(100% + 8px)",
            left: "50%",
            transform: "translateX(-50%)",
            width: 280,
            background: B.bgSecondary,
            border: `1px solid ${B.border}`,
            borderTop: `3px solid ${B.accent}`,
            borderRadius: "var(--radius-md)",
            padding: "12px 14px",
            boxShadow: "0 6px 24px rgba(0,0,0,0.25)",
            zIndex: 100,
            fontFamily: fonts.accent,
            fontSize: "0.95rem",
            lineHeight: 1.5,
            color: B.text,
            textAlign: "left",
          }}
        >
          <span
            style={{
              display: "block",
              fontFamily: fonts.body,
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1.5,
              color: B.accent,
              marginBottom: 4,
            }}
          >
            {key}
          </span>
          {def}
        </span>
      )}
    </span>
  );
}
