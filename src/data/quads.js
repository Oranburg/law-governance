import { B } from "../brand/tokens";

export const quads = [
  {
    id: "public",
    label: "Public Goods",
    examples: "National defense · Clean air",
    note: "Non-excludable, non-subtractable. Government typically provides because private producers cannot capture enough value.",
    bg: B.offWhite,
  },
  {
    id: "club",
    label: "Club Goods",
    examples: "Governance institutions · Trading networks",
    note: "Excludable, shared up to congestion, voluntarily joined. This book argues that many important governance arrangements share this structure, which explains why exclusion is often constitutive of governance and why weakening it has large institutional effects.",
    bg: B.blue,
    highlight: true,
  },
  {
    id: "cpr",
    label: "Common-Pool",
    examples: "Fisheries · Irrigation · Groundwater",
    note: "Hard to exclude, but one person's use reduces what remains. Ostrom showed these can be governed through institutional design.",
    bg: B.offWhite,
  },
  {
    id: "private",
    label: "Private Goods",
    examples: "Food · Clothing · Automobiles",
    note: "Excludable and subtractable. Markets handle these well.",
    bg: B.offWhite,
  },
];
