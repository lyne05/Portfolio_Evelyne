import { useState } from "react";
import { useWindowDimensions } from "react-native";
import { colors } from "../constants/colors";
import { personalInfo } from "../constants/data";

const contactLinks = [
  {
    key: "email",
    label: "Email",
    value: () => "evelyne.natalie2705@gmail.com",
    href: () => `mailto:${personalInfo.email}`,
    icon: "/images/icon-email.png",
    iconSize: 28,
    accent: "#7baaab",
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    value: () => "+62 821-8187-3469",
    href: () => personalInfo.whatsapp,
    icon: "/images/icon-whatsapp.png",
    iconSize: 28,
    accent: "#e6bd8b",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: () => personalInfo.name,
    href: () => personalInfo.linkedin,
    icon: "/images/icon-linkedin.png",
    iconSize: 28,
    accent: "#5990c0",
  },
  {
    key: "github",
    label: "GitHub",
    value: () => "lyne05",
    href: () => personalInfo.github,
    icon: "/images/icon-github.png",
    iconSize: 28,
    accent: "#cea273",
  },
];

export default function Contact() {
  const { width } = useWindowDimensions();
  const isMobile = width <= 760;
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div
      id="contact"
      className="portfolio-section"
      style={{
        background: `linear-gradient(150deg, ${colors.deepInk} 0%, ${colors.silentNavy} 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -100,
          left: -100,
          width: 360,
          height: 360,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(39,96,108,0.3) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="section-inner"
        style={{ maxWidth: 1040, position: "relative", zIndex: 1 }}
      >
        <div style={{ textAlign: "center", marginBottom: isMobile ? 40 : 64 }}>
          <p
            style={{
              color: colors.fogAqua,
              fontFamily: "var(--font-body)",
              letterSpacing: "4px",
              fontSize: "0.78rem",
              textTransform: "uppercase" as const,
              marginBottom: 12,
            }}
          >
            Contact
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: isMobile ? "2.15rem" : "2.8rem",
              color: colors.lightCream,
              margin: "0 0 21px",
            }}
          >
            Let&apos;s Connect
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "rgba(230,189,139,0.6)",
              lineHeight: 1.8,
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            Looking forward to connecting with new people, collaborating and
            build new things together
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "rgba(230,189,139,0.6)",
              lineHeight: 1.8,
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            Currently looking for an internship opportunity
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "rgba(230,189,139,0.6)",
              lineHeight: 1.8,
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            Feel free to reach out to me through the contact information below
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(4, minmax(0, 1fr))",
            gap: isMobile ? 14 : 20,
          }}
        >
          {contactLinks.map(
            ({ key, label, value, href, icon, iconSize, accent }) => {
              const isHovered = hoveredCard === key;
              return (
                <a
                  key={key}
                  href={href()}
                  target={key !== "email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredCard(key)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    display: "flex",
                    flexDirection: "column" as const,
                    alignItems: "center",
                    gap: 16,
                    padding: isMobile ? "28px 18px" : "36px 24px",
                    background: isHovered
                      ? "rgba(255,255,255,0.05)"
                      : "rgba(255,255,255,0.025)",
                    border: `1px solid ${isHovered ? accent : "rgba(255,255,255,0.08)"}`,
                    borderRadius: 8,
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                    transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                    boxShadow: isHovered
                      ? `0 10px 30px rgba(0,0,0,0.3)`
                      : "none",
                  }}
                >
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background: isHovered
                        ? `${accent}22`
                        : "rgba(255,255,255,0.06)",
                      border: `1.5px solid ${isHovered ? accent : "rgba(255,255,255,0.1)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.25s ease",

                      opacity: isHovered ? 1 : 0.65,
                    }}
                  >
                    <img
                      src={icon}
                      alt={label}
                      style={{
                        width: iconSize,
                        height: iconSize,
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        color: isHovered ? accent : "rgba(252,237,211,0.5)",
                        fontSize: "0.72rem",
                        letterSpacing: "2px",
                        textTransform: "uppercase" as const,
                        margin: "0 0 4px",
                        transition: "color 0.25s",
                      }}
                    >
                      {label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        color: isHovered
                          ? colors.lightCream
                          : "rgba(252,237,211,0.7)",
                        fontSize: "0.80rem",
                        margin: 0,
                        transition: "color 0.25s",
                        wordBreak: "break-all" as const,
                      }}
                    >
                      {value()}
                    </p>
                  </div>
                </a>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
}
