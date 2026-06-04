import { useState } from "react";
import { useWindowDimensions } from "react-native";
import { colors } from "../constants/colors";
import { personalInfo } from "../constants/data";

function LaptopIllustration() {
  return (
    <svg
      viewBox="0 0 460 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: 480, opacity: 0.88 }}
    >
      <rect
        x="60"
        y="20"
        width="340"
        height="215"
        rx="10"
        stroke="#cea273"
        strokeWidth="2.5"
        fill="none"
      />
      <rect
        x="74"
        y="34"
        width="312"
        height="187"
        rx="4"
        stroke="#e6bd8b"
        strokeWidth="1.2"
        fill="rgba(206,162,115,0.04)"
      />
      <rect
        x="86"
        y="46"
        width="288"
        height="18"
        rx="3"
        fill="rgba(206,162,115,0.1)"
        stroke="#cea273"
        strokeWidth="0.8"
      />
      <circle cx="98" cy="55" r="4" fill="#cea273" opacity="0.5" />
      <circle cx="112" cy="55" r="4" fill="#e6bd8b" opacity="0.4" />
      <circle cx="126" cy="55" r="4" fill="#7baaab" opacity="0.4" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect
          key={i}
          x={i % 2 === 0 ? 86 : 100}
          y={76 + i * 16}
          width={i % 3 === 0 ? 180 : i % 3 === 1 ? 130 : 220}
          height="6"
          rx="3"
          fill="#cea273"
          opacity={0.12 + (i % 3) * 0.06}
        />
      ))}
      <rect
        x="86"
        y="74"
        width="55"
        height="145"
        rx="2"
        fill="rgba(206,162,115,0.07)"
        stroke="#cea273"
        strokeWidth="0.6"
      />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x="92"
          y={82 + i * 22}
          width="42"
          height="7"
          rx="2"
          fill="#e6bd8b"
          opacity={0.15 + i * 0.04}
        />
      ))}
      <path
        d="M82 42 L82 52 L92 52"
        stroke="#e6bd8b"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <path
        d="M374 215 L374 205 L364 205"
        stroke="#e6bd8b"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        x1="60"
        y1="235"
        x2="400"
        y2="235"
        stroke="#cea273"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M30 240 Q30 237 33 237 L427 237 Q430 237 430 240 L445 280 Q446 283 443 283 L17 283 Q14 283 15 280 Z"
        stroke="#cea273"
        strokeWidth="2"
        fill="rgba(206,162,115,0.05)"
      />
      <rect
        x="195"
        y="252"
        width="70"
        height="20"
        rx="4"
        stroke="#e6bd8b"
        strokeWidth="1.2"
        fill="rgba(230,189,139,0.06)"
      />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
        <rect
          key={i}
          x={80 + i * 27}
          y="244"
          width="20"
          height="7"
          rx="2"
          fill="#cea273"
          opacity="0.12"
        />
      ))}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <rect
          key={i}
          x={86 + i * 27}
          y="255"
          width="20"
          height="7"
          rx="2"
          fill="#cea273"
          opacity="0.1"
        />
      ))}
      <ellipse
        cx="230"
        cy="300"
        rx="160"
        ry="18"
        fill="#cea273"
        opacity="0.07"
      />
      <rect
        x="298"
        y="78"
        width="78"
        height="50"
        rx="5"
        stroke="#7baaab"
        strokeWidth="1"
        fill="rgba(123,170,171,0.06)"
        strokeDasharray="4 2"
      />
      <rect
        x="306"
        y="88"
        width="40"
        height="5"
        rx="2"
        fill="#7baaab"
        opacity="0.3"
      />
      <rect
        x="306"
        y="97"
        width="60"
        height="4"
        rx="2"
        fill="#7baaab"
        opacity="0.18"
      />
      <rect
        x="306"
        y="105"
        width="50"
        height="4"
        rx="2"
        fill="#7baaab"
        opacity="0.18"
      />
      <rect
        x="18"
        y="170"
        width="52"
        height="24"
        rx="4"
        stroke="#e6bd8b"
        strokeWidth="1"
        fill="rgba(230,189,139,0.06)"
        strokeDasharray="3 2"
      />
      <rect
        x="25"
        y="178"
        width="36"
        height="4"
        rx="2"
        fill="#e6bd8b"
        opacity="0.3"
      />
      <rect
        x="25"
        y="185"
        width="24"
        height="3"
        rx="1"
        fill="#e6bd8b"
        opacity="0.18"
      />
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={395 + col * 12}
            cy={30 + row * 12}
            r="1.2"
            fill="#cea273"
            opacity="0.18"
          />
        )),
      )}
    </svg>
  );
}

export default function Hero() {
  const { width } = useWindowDimensions();
  const isMobile = width <= 760;
  const [hoveredBtn, setHoveredBtn] = useState<"projects" | "contact" | null>(
    null,
  );

  return (
    <div
      id="home"
      className="portfolio-section"
      style={{
        minHeight: "100vh",
        background: `linear-gradient(160deg,
          ${colors.deepInk}    0%,
          ${colors.silentNavy} 45%,
          ${colors.oceanBlue}  100%)`,
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: isMobile ? 90 : undefined,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 520,
          height: 520,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(123,170,171,0.15) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: "30%",
          width: 260,
          height: 260,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(206,162,115,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: 6,
          height: 180,
          background: `linear-gradient(to bottom, ${colors.fogAqua}, transparent)`,
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          width: "100%",
          margin: "0 auto",
          padding: isMobile ? "0 20px" : "0 48px",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          alignItems: "center",
          gap: isMobile ? 28 : 48,
          zIndex: 1,
        }}
      >
        <div style={{ textAlign: isMobile ? "center" : "left" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(123,170,171,0.12)",
              border: "1px solid rgba(123,170,171,0.3)",
              borderRadius: 100,
              padding: "6px 18px",
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: colors.fogAqua,
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-body)",
                color: colors.fogAqua,
                fontSize: "0.78rem",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
              }}
            >
              {personalInfo.role}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'DM Sans', 'Inter', sans-serif",
              fontSize: isMobile
                ? "clamp(2.1rem, 12vw, 3.2rem)"
                : "clamp(2.6rem, 5.5vw, 5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              margin: "0 0 24px",
              color: colors.lightCream,
              whiteSpace: isMobile ? "normal" : "nowrap",
              letterSpacing: 0,
            }}
          >
            {personalInfo.name}
          </h1>

          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "rgba(252,237,211,0.7)",
              fontSize: "1.1rem",
              lineHeight: 1.85,
              maxWidth: 480,
              margin: isMobile ? "0 auto 32px" : "0 0 40px",
            }}
          >
            {personalInfo.tagline}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-start",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              onMouseEnter={() => setHoveredBtn("projects")}
              onMouseLeave={() => setHoveredBtn(null)}
              style={{
                padding: "14px 32px",
                background: `linear-gradient(135deg, ${colors.oceanBlue}, ${colors.fogAqua})`,
                border: "none",
                color: colors.lightCream,
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "1.5px",
                textTransform: "uppercase" as const,
                cursor: "pointer",
                borderRadius: 3,
                opacity: hoveredBtn === "projects" ? 0.82 : 1,
                transform:
                  hoveredBtn === "projects"
                    ? "translateY(-2px)"
                    : "translateY(0)",
                transition: "opacity 0.2s, transform 0.2s",
              }}
            >
              View Projects
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              onMouseEnter={() => setHoveredBtn("contact")}
              onMouseLeave={() => setHoveredBtn(null)}
              style={{
                padding: "14px 32px",
                background:
                  hoveredBtn === "contact"
                    ? "rgba(230,189,139,0.08)"
                    : "transparent",
                border: `1px solid ${hoveredBtn === "contact" ? colors.warmSand : "rgba(230,189,139,0.45)"}`,
                color: colors.warmSand,
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: "0.85rem",
                letterSpacing: "1.5px",
                textTransform: "uppercase" as const,
                cursor: "pointer",
                borderRadius: 3,
                transition: "all 0.2s",
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: isMobile ? 0 : 40,
            paddingLeft: isMobile ? 0 : 32,
          }}
        >
          <LaptopIllustration />
        </div>
      </div>
    </div>
  );
}
