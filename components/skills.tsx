import { useState } from "react";
import { useWindowDimensions } from "react-native";
import { colors } from "../constants/colors";
import { skills } from "../constants/data";

function ProgressBar({
  level,
  accent,
  animate,
}: {
  level: number;
  accent: string;
  animate: boolean;
}) {
  const pct = (level / 5) * 100;
  return (
    <div
      style={{
        width: "100%",
        height: 4,
        background: "rgba(255,255,255,0.07)",
        borderRadius: 99,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100%",
          width: animate ? `${pct}%` : "0%",
          background: `linear-gradient(90deg, ${accent}99, ${accent})`,
          borderRadius: 99,
          transition: "width 0.6s cubic-bezier(0.4,0,0.2,1)",
          boxShadow: animate ? `0 0 8px ${accent}66` : "none",
        }}
      />
    </div>
  );
}

const levelLabel = [
  "",
  "Beginner",
  "Basic",
  "Intermediate",
  "Advanced",
  "Expert",
];

function CategoryIcon({
  category,
  color,
}: {
  category: string;
  color: string;
}) {
  const s = { width: 18, height: 18 };
  const stroke = {
    stroke: color,
    strokeWidth: "1.6",
    strokeLinecap: "round" as const,
  };

  if (category === "Programming Languages")
    return (
      <svg {...s} viewBox="0 0 24 24" fill="none">
        <path d="M8 6L3 12l5 6M16 6l5 6-5 6M14 4l-4 16" {...stroke} />
      </svg>
    );
  if (category === "Mobile Development")
    return (
      <svg {...s} viewBox="0 0 24 24" fill="none">
        <rect x="7" y="2" width="10" height="20" rx="2" {...stroke} />
        <circle cx="12" cy="18" r="1" fill={color} />
      </svg>
    );
  if (category === "Frontend Web")
    return (
      <svg {...s} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="15" rx="2" {...stroke} />
        <path d="M8 20h8M12 19v1" {...stroke} />
      </svg>
    );
  if (category === "Database")
    return (
      <svg {...s} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="6" rx="8" ry="3" {...stroke} />
        <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" {...stroke} />
        <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" {...stroke} />
      </svg>
    );
  if (category === "Tools")
    return (
      <svg {...s} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2a4 4 0 0 1 4 4 4 4 0 0 1-1.2 2.8l5.4 5.4-1.4 1.4-5.4-5.4A4 4 0 0 1 8 6a4 4 0 0 1 4-4z"
          {...stroke}
        />
        <path d="M3 21l7-7" {...stroke} />
      </svg>
    );
  return (
    <svg {...s} viewBox="0 0 24 24" fill="none">
      <polygon points="12,2 22,8 22,16 12,22 2,16 2,8" {...stroke} />
      <circle cx="12" cy="12" r="3" {...stroke} />
    </svg>
  );
}

const ACCENTS = [
  "#7baaab",
  "#e6bd8b",
  "#5990c0",
  "#c68d5d",
  "#7baaab",
  "#cea273",
];

export default function Skills() {
  const { width } = useWindowDimensions();
  const isMobile = width <= 760;
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [revealedCategories, setRevealedCategories] = useState<Set<number>>(
    new Set(),
  );

  function handleEnter(idx: number) {
    setHoveredCategory(idx);
    setRevealedCategories((prev) => new Set(prev).add(idx));
  }

  return (
    <div
      id="skills"
      className="portfolio-section"
      style={{
        background: `linear-gradient(160deg, ${colors.deepInk} 0%, ${colors.silentNavy} 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            rgba(123,170,171,0.02) 40px,
            rgba(123,170,171,0.02) 41px
          )`,
          pointerEvents: "none",
        }}
      />

      <div
        className="section-inner"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div style={{ marginBottom: 56 }}>
          <p
            style={{
              color: colors.fogAqua,
              fontFamily: "var(--font-body)",
              letterSpacing: "4px",
              fontSize: "0.75rem",
              textTransform: "uppercase" as const,
              marginBottom: 10,
            }}
          >
            Skills
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: isMobile ? "2.15rem" : "2.8rem",
              color: colors.lightCream,
              margin: "0 0 12px",
            }}
          >
            Tech Stack
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: isMobile ? 16 : 24,
          }}
        >
          {skills.map(({ category, items }, idx) => {
            const accent = ACCENTS[idx % ACCENTS.length];
            const isHovered = hoveredCategory === idx;
            const isRevealed = revealedCategories.has(idx);

            return (
              <div
                key={category}
                onMouseEnter={() => handleEnter(idx)}
                onMouseLeave={() => setHoveredCategory(null)}
                style={{
                  background: isHovered
                    ? "rgba(255,255,255,0.04)"
                    : "rgba(255,255,255,0.025)",
                  border: `1px solid ${isHovered ? `${accent}44` : "rgba(255,255,255,0.06)"}`,
                  borderRadius: 10,
                  padding: isMobile ? "22px 18px" : "28px 28px 24px",
                  transition: "all 0.3s ease",
                  transform: isHovered ? "translateY(-3px)" : "none",
                  boxShadow: isHovered
                    ? `0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px ${accent}22`
                    : "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 24,
                    paddingBottom: 16,
                    borderBottom: `1px solid rgba(255,255,255,0.06)`,
                  }}
                >
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 8,
                      background: `${accent}18`,
                      border: `1px solid ${accent}33`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <CategoryIcon category={category} color={accent} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-body)",
                      color: accent,
                      margin: 0,
                      fontSize: "0.78rem",
                      letterSpacing: "2px",
                      textTransform: "uppercase" as const,
                      fontWeight: 700,
                    }}
                  >
                    {category}
                  </h3>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column" as const,
                    gap: 18,
                  }}
                >
                  {items.map(({ name, icon, level }) => (
                    <div key={name}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 12,
                          marginBottom: 8,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 9,
                          }}
                        >
                          <img
                            src={icon}
                            alt={name}
                            style={{
                              width: 18,
                              height: 18,
                              objectFit: "contain",
                              flexShrink: 0,
                            }}
                          />
                          <span
                            style={{
                              fontFamily: "var(--font-body)",
                            color: "rgba(252,237,211,0.85)",
                            fontSize: "0.88rem",
                            fontWeight: 500,
                            overflowWrap: "anywhere",
                          }}
                        >
                            {name}
                          </span>
                        </div>
                        <span
                          style={{
                            fontFamily: "var(--font-body)",
                            color: `${accent}99`,
                            fontSize: "0.68rem",
                            letterSpacing: "1px",
                            textTransform: "uppercase" as const,
                            flexShrink: 0,
                          }}
                        >
                          {levelLabel[level]}
                        </span>
                      </div>

                      <ProgressBar
                        level={level}
                        accent={accent}
                        animate={isRevealed}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
