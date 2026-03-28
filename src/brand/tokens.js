// Oranburg Style — JS Token Bridge
// Maps CSS custom properties to JS for use in React inline styles.
// Palette colors are constant; functional colors respond to data-theme.

export const B = {
  // Palette (constant across themes)
  blue: "var(--blue-deep)",
  brightBlue: "var(--blue-bright)",
  lightBlue: "var(--blue-light)",
  red: "var(--red-deep)",
  brightRed: "var(--red-bright)",
  lightRed: "var(--red-light)",
  yellow: "var(--yellow)",
  teal: "var(--teal)",

  // Functional (theme-responsive)
  bg: "var(--bg)",
  bgSecondary: "var(--bg-secondary)",
  bgSoft: "var(--bg-soft)",
  text: "var(--text)",
  muted: "var(--muted)",
  border: "var(--border)",
  accent: "var(--accent)",
  accent2: "var(--accent-2)",
  accentRed: "var(--accent-red)",
  textRed: "var(--text-red)",
  bgDanger: "var(--bg-danger)",
  indicatorInactive: "var(--indicator-inactive)",

  // Legacy aliases (mapped to functional vars)
  white: "var(--bg)",
  offWhite: "var(--bg-secondary)",
  textDark: "var(--text)",
  textMid: "var(--muted)",
  textLight: "var(--muted)",
};

export const fonts = {
  headline: "var(--font-headline)",
  body: "var(--font-body)",
  accent: "var(--font-accent)",
  mono: "var(--font-mono)",
};
