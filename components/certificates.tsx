import { useState } from "react";
import { useWindowDimensions } from "react-native";
import { colors } from "../constants/colors";
import { certificates } from "../constants/data";

const getDriveThumbnail = (url: string): string | null => {
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return match
    ? `https://drive.google.com/thumbnail?id=${match[1]}&sz=w400`
    : null;
};

export default function Certificates() {
  const { width } = useWindowDimensions();
  const isMobile = width <= 760;
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div
      id="certificates"
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
          top: -80,
          right: -80,
          width: 350,
          height: 350,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(206,162,115,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="section-inner"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div style={{ marginBottom: 48 }}>
          <p
            style={{
              color: colors.warmSand,
              fontFamily: "var(--font-body)",
              letterSpacing: "4px",
              fontSize: "0.78rem",
              textTransform: "uppercase" as const,
              marginBottom: 10,
              opacity: 0.7,
            }}
          >
            Learning
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: isMobile ? "2.05rem" : "2.8rem",
              color: colors.lightCream,
              margin: 0,
            }}
          >
            Courses &amp; Certificates
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
            gap: isMobile ? 16 : 24,
          }}
        >
          {certificates.map((cert) => {
            const isHovered = hoveredCard === cert.id;

            return (
              <div
                key={cert.id}
                onMouseEnter={() => setHoveredCard(cert.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: "rgba(123,170,171,0.06)",
                  border: `1px solid ${isHovered ? colors.fogAqua : "rgba(123,170,171,0.15)"}`,
                  borderRadius: 8,
                  overflow: "hidden",
                  transform: isHovered ? "translateY(-5px)" : "translateY(0)",
                  boxShadow: isHovered
                    ? "0 12px 32px rgba(0,0,0,0.35)"
                    : "none",
                  transition: "all 0.25s ease",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: isMobile ? 160 : 180,
                    background: `linear-gradient(135deg, rgba(39,96,108,0.4) 0%, rgba(16,42,107,0.5) 100%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {cert.link &&
                  cert.link !== "#" &&
                  getDriveThumbnail(cert.link) ? (
                    <img
                      src={getDriveThumbnail(cert.link)!}
                      alt={cert.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        pointerEvents: "none",
                        userSelect: "none",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column" as const,
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                      >
                        <rect
                          x="6"
                          y="8"
                          width="36"
                          height="28"
                          rx="4"
                          stroke={colors.warmSand}
                          strokeWidth="1.5"
                          fill="rgba(230,189,139,0.07)"
                        />
                        <path
                          d="M13 18h22M13 23h16M13 28h10"
                          stroke={colors.warmSand}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          opacity="0.5"
                        />
                        <circle
                          cx="38"
                          cy="38"
                          r="7"
                          fill={colors.oceanBlue}
                          stroke={colors.fogAqua}
                          strokeWidth="1.5"
                        />
                        <path
                          d="M35 38l2 2 4-4"
                          stroke={colors.lightCream}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          color: "rgba(230,189,139,0.4)",
                          fontSize: "0.7rem",
                          letterSpacing: "1.5px",
                          textTransform: "uppercase" as const,
                        }}
                      >
                        Certificate Image
                      </span>
                    </div>
                  )}
                </div>

                <div style={{ padding: isMobile ? "18px" : "20px 22px 22px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      color: colors.lightCream,
                      fontSize: "1.05rem",
                      margin: "0 0 8px",
                      lineHeight: 1.35,
                    }}
                  >
                    {cert.title}
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 12,
                      flexWrap: "wrap",
                      marginBottom: 18,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "rgba(252,237,211,0.5)",
                        fontSize: "0.82rem",
                        margin: 0,
                      }}
                    >
                      {cert.issuer}
                    </p>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "rgba(230,189,139,0.45)",
                        fontSize: "0.78rem",
                      }}
                    >
                      {cert.year}
                    </span>
                  </div>

                  {cert.link && cert.link !== "#" && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 6,
                        padding: "9px 14px",
                        background: "rgba(123,170,171,0.1)",
                        border: `1px solid rgba(123,170,171,0.25)`,
                        borderRadius: 4,
                        color: colors.fogAqua,
                        fontFamily: "var(--font-body)",
                        fontSize: "0.75rem",
                        letterSpacing: "1px",
                        textTransform: "uppercase" as const,
                        textDecoration: "none",
                        fontWeight: 600,
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background =
                          "rgba(123,170,171,0.2)";
                        (e.currentTarget as HTMLElement).style.borderColor =
                          colors.fogAqua;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background =
                          "rgba(123,170,171,0.1)";
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "rgba(123,170,171,0.25)";
                      }}
                    >
                      View
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
