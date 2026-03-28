export const domains = {
  nyse: {
    short: "NYSE",
    full: "Silver v. New York Stock Exchange",
    steps: [
      "Market integrity among interconnected broker-dealers sharing trading infrastructure.",
      "The NYSE: membership standards, trading surveillance, rapid internal discipline, periodic rule revision. All four elements operative before 1963.",
      "Exchange Act of 1934 recognized the NYSE as a self-regulatory organization. Membership boundaries enforced. Internal rules enforceable through expulsion.",
      "Reduced fraud risk, credible counterparty assurance, reputational certification, access to the most liquid equity market in the world.",
      "Non-member investors, listed companies, and the capital market received market integrity, price discovery, and systemic stability without bearing governance costs.",
      "Silver converted exclusion from a property rule to a liability rule. The 1975 Amendments required SEC pre-approval of all rule changes and full due process for every disciplinary action.",
      "The Court addressed a real abuse. But the remedy degraded sanctioning and adjustment across the institution. A narrower intervention would have disciplined the specific failure without degrading the governance architecture.",
    ],
  },
  ddc: {
    short: "Diamond Club",
    full: "New York Diamond Dealers Club",
    steps: [
      "Enforcing honesty in handshake trading where goods are portable, valuable, and exchanged without written contracts.",
      "Mandatory internal arbitration, reputation network across thousands of relationships, graduated sanctions, periodic revision of arbitration rules.",
      "Incorporated under New York law. Arbitration enforceable under Federal Arbitration Act. Exclusion protected by limited judicial review.",
      "Near-zero default rates, rapid dispute resolution, reputational certification reducing transaction costs across every deal.",
      "Lower retail diamond prices, supply chain integrity for the jewelry industry, reduced court caseloads.",
      "Law has largely enabled DDC governance by enforcing arbitration and limiting judicial review. Primary risk: antitrust challenge to the exclusion mechanism.",
      "Current law is enabling. Courts confronting antitrust challenges should apply rule-of-reason analysis and preserve the exclusion mechanism while requiring procedural fairness for contested cases.",
    ],
  },
  university: {
    short: "University",
    full: "American University Governance",
    steps: [
      "Producing and certifying knowledge, educating students, maintaining institutional integrity with public significance.",
      "Formal structures exist (boards, senates, accreditation). Functional governance is largely absent: decisions do not govern conduct, monitoring does not generate usable information, rules do not change when they fail.",
      "Strong legal recognition and tax exemption. But: no stakeholder standing, unenforceable fiduciary duties against self-perpetuating boards, no meaningful accountability.",
      "Member benefits captured by organized factions. The board serves its own continuity. Administration serves its own expansion.",
      "Unreliable credentials, suppressed misconduct, misallocated research funding, public subsidies flowing to unaccountable institutions.",
      "Compliance mandates address outputs without repairing architecture. Title IX coordinators and Clery Act reporting add layers that satisfy regulators while leaving the structural void untouched.",
      "Create stakeholder standing. Require board turnover. Condition tax exemption on governance functionality, not compliance paperwork. Target the architecture, not the symptoms.",
    ],
  },
};

export const stepMeta = [
  { label: "Shared problem", phase: "Describe" },
  { label: "Governance institution", phase: "Describe" },
  { label: "Legal conditions", phase: "Describe" },
  { label: "Member benefits", phase: "Analyze" },
  { label: "Spillovers", phase: "Analyze" },
  { label: "How law acts", phase: "Evaluate" },
  { label: "Judgment & remedy", phase: "Evaluate" },
];
