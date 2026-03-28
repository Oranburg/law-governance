// Oranburg Style tokens for React inline styles.
// Palette colors are constant across themes.
// Functional colors reference CSS custom properties and adapt to dark/light.

export const B = {
  // Palette (constant across themes — used for brand elements)
  red: "#B21F2C",
  blue: "#0A3255",
  brightRed: "#E82F35",
  brightBlue: "#2459A9",
  lightRed: "#E96955",
  lightBlue: "#6DACDE",
  yellow: "#FFD65C",
  teal: "#B5E1E1",

  // Functional (theme-aware via CSS custom properties)
  white: "var(--bg)",
  offWhite: "var(--bg-secondary)",
  bgSoft: "var(--bg-soft)",
  textDark: "var(--text)",
  textMid: "var(--muted)",
  textLight: "var(--muted)",
  border: "var(--border)",
  accent: "var(--accent)",
  accentRed: "var(--accent-red)",
  textRed: "var(--text-red)",
  bgDanger: "var(--bg-danger)",
  indicatorInactive: "var(--indicator-inactive)",
};

export const fonts = {
  headline: "var(--font-headline)",
  body: "var(--font-body)",
  accent: "var(--font-accent)",
  mono: "var(--font-mono)",
};
