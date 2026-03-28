import { Link, useLocation } from "react-router-dom";
import { B } from "../brand/tokens";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/framework", label: "Framework" },
  { to: "/book", label: "Book" },
];

export default function Nav() {
  const { pathname } = useLocation();

  const isActive = (to) => {
    if (to === "/") return pathname === "/";
    return pathname.startsWith(to);
  };

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 16px",
        background: B.blue,
        borderBottom: `3px solid ${B.red}`,
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <Link
        to="/"
        style={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: 13,
          fontWeight: 700,
          color: B.white,
          textTransform: "uppercase",
          letterSpacing: 1.5,
        }}
      >
        Law &amp; Governance
      </Link>
      <div style={{ display: "flex", gap: 14 }}>
        {navItems.map((n) => {
          const active = isActive(n.to);
          return (
            <Link
              key={n.to}
              to={n.to}
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: 11,
                fontWeight: active ? 700 : 500,
                color: active ? B.yellow : B.lightBlue,
                textTransform: "uppercase",
                letterSpacing: 0.8,
                borderBottom: active
                  ? `2px solid ${B.yellow}`
                  : "2px solid transparent",
                paddingBottom: 2,
              }}
            >
              {n.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
