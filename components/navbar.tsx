import { useState } from "react";
import { useWindowDimensions } from "react-native";
import { colors } from "../constants/colors";
import { personalInfo } from "../constants/data";
import { useScrollY } from "../constants/scrollcontext";

const NAV_LINKS = [
  "Home",
  "About",
  "Skills",
  "Certificates",
  "Projects",
  "Contact",
];

function scrollToSection(id: string) {
  document
    .getElementById(id.toLowerCase())
    ?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const scrollY = useScrollY();
  const { width } = useWindowDimensions();
  const isMobile = width <= 760;
  const scrolled = scrollY > 60;
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavClick(link: string) {
    scrollToSection(link);
    setMenuOpen(false);
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: isMobile
          ? scrolled
            ? "10px 20px"
            : "16px 20px"
          : scrolled
            ? "10px 48px"
            : "22px 48px",
        background: scrolled ? "rgba(15, 18, 23, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(123,170,171,0.2)" : "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition:
          "padding 0.35s ease, background 0.35s ease, border-bottom 0.35s ease",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: isMobile ? "1.35rem" : "1.5rem",
          fontWeight: 700,
          color: colors.warmSand,
          letterSpacing: "0.5px",
          cursor: "default",
        }}
      >
        {personalInfo.shortName}
        <span style={{ color: colors.fogAqua }}>.</span>
      </div>

      {isMobile && (
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
          style={{
            width: 42,
            height: 42,
            border: "1px solid rgba(230,189,139,0.28)",
            borderRadius: 6,
            display: "inline-flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            background: menuOpen ? "rgba(230,189,139,0.12)" : "transparent",
          }}
        >
          {[0, 1, 2].map((line) => (
            <span
              key={line}
              style={{
                width: 18,
                height: 2,
                borderRadius: 99,
                background: colors.warmSand,
                display: "block",
              }}
            />
          ))}
        </button>
      )}

      <ul
        style={{
          display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 6 : "28px",
          listStyle: "none",
          margin: 0,
          padding: isMobile ? "14px" : 0,
          position: isMobile ? "absolute" : "static",
          top: "calc(100% + 8px)",
          left: 20,
          right: 20,
          background: isMobile ? "rgba(15, 18, 23, 0.96)" : "transparent",
          border: isMobile ? "1px solid rgba(123,170,171,0.2)" : "none",
          borderRadius: isMobile ? 8 : 0,
          boxShadow: isMobile ? "0 18px 40px rgba(0,0,0,0.28)" : "none",
        }}
      >
        {NAV_LINKS.map((link) => {
          const isHovered = hoveredLink === link;
          return (
            <li key={link}>
              <button
                onClick={() => handleNavClick(link)}
                onMouseEnter={() => setHoveredLink(link)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  letterSpacing: "1.8px",
                  textTransform: "uppercase" as const,
                  width: isMobile ? "100%" : "auto",
                  textAlign: isMobile ? "left" : "center",
                  color: isHovered
                    ? colors.lightCream
                    : "rgba(230,189,139,0.75)",
                  transition: "color 0.25s ease",
                  padding: isMobile ? "12px 10px" : "4px 0",
                  borderBottom: isHovered
                    ? `1px solid ${colors.lightCream}`
                    : "1px solid transparent",
                }}
              >
                {link}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
