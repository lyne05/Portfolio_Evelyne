import { useState } from "react";
import { useWindowDimensions } from "react-native";
import { createPortal } from "react-dom";
import { colors } from "../constants/colors";
import { projectDetails, projects, projectTags } from "../constants/data";

export default function Projects() {
  const { width } = useWindowDimensions();
  const isMobile = width <= 760;
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredFilter, setHoveredFilter] = useState<string | null>(null);
  const [hoveredProjectButton, setHoveredProjectButton] = useState<
    number | null
  >(null);
  const [hoveredCloseButton, setHoveredCloseButton] = useState(false);
  const [hoveredProjectLink, setHoveredProjectLink] = useState(false);
  const [hoveredGithubLink, setHoveredGithubLink] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tag === activeFilter);

  const selectedDetail = projectDetails.find((p) => p.id === selectedProject);
  const selectedProjectInfo = projects.find((p) => p.id === selectedProject);

  return (
    <div
      id="projects"
      className="portfolio-section"
      style={{ background: colors.fogAqua }}
    >
      <div className="section-inner">
        <div
          style={{
            marginBottom: 48,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap" as const,
            gap: 24,
          }}
        >
          <div>
            <p
              style={{
                color: colors.deepInk,
                fontFamily: "var(--font-body)",
                letterSpacing: "4px",
                fontSize: "0.78rem",
                textTransform: "uppercase" as const,
                marginBottom: 10,
                opacity: 0.6,
              }}
            >
              Campus
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: isMobile ? "2.15rem" : "2.8rem",
                color: colors.deepInk,
                margin: 0,
              }}
            >
              Projects
            </h2>
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap" as const,
              width: isMobile ? "100%" : "auto",
            }}
          >
            {projectTags.map((tag) => {
              const isActive = activeFilter === tag;
              const isHovered = hoveredFilter === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setActiveFilter(tag)}
                  onMouseEnter={() => setHoveredFilter(tag)}
                  onMouseLeave={() => setHoveredFilter(null)}
                  style={{
                    padding: "8px 20px",
                    flex: isMobile ? "1 1 auto" : "0 0 auto",
                    background: isActive
                      ? colors.deepInk
                      : isHovered
                        ? "rgba(15,18,23,0.18)"
                        : "rgba(15,18,23,0.1)",
                    border: "none",
                    color: isActive ? colors.warmSand : colors.deepInk,
                    fontFamily: "var(--font-body)",
                    fontSize: "0.78rem",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase" as const,
                    cursor: "pointer",
                    borderRadius: 2,
                    fontWeight: isActive ? 700 : 400,
                    transition: "all 0.2s",
                  }}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : filtered.length === 1
                ? "minmax(290px, calc((100% - 48px) / 3))"
                : "repeat(auto-fit, minmax(min(100%, 270px), 1fr))",
            gap: isMobile ? 16 : 24,
            justifyContent: "start",
          }}
        >
          {filtered.map((project) => {
            const isHovered = hoveredCard === project.id;
            const isProjectButtonHovered = hoveredProjectButton === project.id;
            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: colors.lightCream,
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: isHovered
                    ? "0 16px 40px rgba(15,18,23,0.22)"
                    : "0 4px 20px rgba(15,18,23,0.12)",
                  transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  display: "flex",
                  flexDirection: "column" as const,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: isMobile ? 180 : 200,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {project.ongoing ? (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background:
                          project.id % 2 === 0
                            ? `linear-gradient(135deg, ${colors.oceanBlue}, ${colors.silentNavy})`
                            : `linear-gradient(135deg, ${colors.deepInk}, ${colors.oceanBlue})`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{
                          color: "rgba(230,189,139,0.8)",
                          fontFamily: "var(--font-body)",
                          fontSize: "0.75rem",
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                          fontWeight: 600,
                        }}
                      >
                        Work in Progress
                      </span>
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "fill",
                      }}
                    />
                  )}
                </div>

                <div
                  style={{
                    padding: isMobile ? 18 : 24,
                    display: "flex",
                    flexDirection: "column" as const,
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 15,
                    }}
                  >
                    <span
                      style={{
                        background: "rgba(39,96,108,0.12)",
                        color: colors.oceanBlue,
                        padding: "3px 10px",
                        borderRadius: 2,
                        fontFamily: "var(--font-body)",
                        fontSize: "0.73rem",
                        letterSpacing: "1px",
                        fontWeight: 600,
                      }}
                    >
                      {project.tag}
                    </span>
                    <span
                      style={{
                        color: "rgba(15,18,23,0.4)",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.8rem",
                      }}
                    >
                      {project.year}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      color: colors.deepInk,
                      margin: "0 0 10px",
                      fontSize: "1.3rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "rgba(15,18,23,0.6)",
                      fontSize: "0.9rem",
                      lineHeight: 1.75,
                      margin: "0 0 16px",
                    }}
                  >
                    {project.desc}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap" as const,
                      gap: 6,
                      marginBottom: 20,
                    }}
                  >
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        style={{
                          background: colors.sandyAmber,
                          color: colors.white,
                          padding: "3px 10px",
                          borderRadius: 99,
                          fontFamily: "var(--font-body)",
                          fontSize: "0.7rem",
                          letterSpacing: "0.5px",
                          fontWeight: 600,
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      marginTop: "auto",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                    }}
                  >
                    {project.ongoing ? (
                      <span
                        style={{
                          color: colors.oceanBlue,
                          fontFamily: "var(--font-body)",
                          fontSize: "0.78rem",
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          fontWeight: 600,
                        }}
                      >
                        In Progress
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project.id)}
                        onMouseEnter={() => setHoveredProjectButton(project.id)}
                        onMouseLeave={() => setHoveredProjectButton(null)}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 6,
                          padding: "10px 16px",
                          background: isProjectButtonHovered
                            ? colors.oceanBlue
                            : "rgba(39,96,108,0.1)",
                          border: `1px solid ${
                            isProjectButtonHovered
                              ? colors.oceanBlue
                              : "rgba(39,96,108,0.25)"
                          }`,
                          borderRadius: 4,
                          color: isProjectButtonHovered
                            ? colors.white
                            : colors.oceanBlue,
                          fontFamily: "var(--font-body)",
                          fontSize: "0.75rem",
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          cursor: "pointer",
                          fontWeight: 600,
                          boxShadow: isProjectButtonHovered
                            ? "0 8px 20px rgba(39,96,108,0.28)"
                            : "none",
                          transform: isProjectButtonHovered
                            ? "translateY(-2px)"
                            : "translateY(0)",
                          transition:
                            "background 0.2s ease, border 0.2s ease, color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
                        }}
                      >
                        View Project
                      </button>
                    )}

                    {project.featured && (
                      <span
                        title="Featured project"
                        aria-label="Featured project"
                        style={{
                          color: colors.sandyAmber,
                          fontSize: "1.5rem",
                          lineHeight: 1,
                        }}
                      >
                        ★
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedDetail &&
        createPortal(
          <div
            onClick={() => setSelectedProject(null)}
            style={{
              position: "fixed",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(15,18,23,0.78), rgba(16,42,107,0.64))",
              backdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              padding: 20,
              overflowY: "auto",
              animation: "fadeIn 0.2s ease both",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%",
                maxWidth: 720,
                maxHeight: isMobile ? "calc(100vh - 24px)" : "calc(100vh - 40px)",
                background: colors.lightCream,
                borderRadius: 8,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 28px 80px rgba(0,0,0,0.42)",
                animation: "modalRise 0.24s ease both",
              }}
            >
              <div
                style={{
                  background: `linear-gradient(
                      135deg,
                      ${colors.deepInk} 0%,
                      ${colors.oceanBlue} 58%,
                      ${colors.silentNavy} 100%
                    )`,
                  padding: isMobile ? "28px 22px" : "32px 34px",
                  position: "relative",
                  flexShrink: 0,
                }}
              >
                <button
                  type="button"
                  aria-label="Close project detail"
                  onClick={() => setSelectedProject(null)}
                  onMouseEnter={() => setHoveredCloseButton(true)}
                  onMouseLeave={() => setHoveredCloseButton(false)}
                  style={{
                    position: "absolute",
                    top: 16,
                    right: isMobile ? 14 : 18,
                    width: isMobile ? 38 : 42,
                    height: isMobile ? 38 : 42,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: hoveredCloseButton
                      ? "rgba(252,237,211,0.22)"
                      : "rgba(252,237,211,0.1)",
                    border: "1px solid rgba(252,237,211,0.24)",
                    borderRadius: 6,
                    color: colors.white,
                    fontSize: 0,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  ×
                </button>

                <h2
                  style={{
                    margin: 0,
                    color: colors.white,
                    fontFamily: "var(--font-display)",
                    fontSize: isMobile
                      ? "clamp(1.55rem, 9vw, 2.2rem)"
                      : "clamp(2rem, 4vw, 3rem)",
                    lineHeight: 1.1,
                    maxWidth: isMobile ? "78%" : "85%",
                  }}
                >
                  {selectedDetail.title}
                </h2>

                {selectedProjectInfo?.tag && (
                  <div
                    style={{
                      marginTop: 20,
                    }}
                  >
                    <span
                      style={{
                        background: "rgba(230,189,139,0.15)",
                        color: colors.warmSand,
                        padding: "6px 12px",
                        borderRadius: 4,
                        fontFamily: "var(--font-body)",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                      }}
                    >
                      {selectedProjectInfo.tag}
                    </span>
                  </div>
                )}
              </div>

              <div
                style={{
                  padding: isMobile ? "22px" : "34px",
                  overflowY: "auto",
                  flex: 1,
                  minHeight: 0,
                  background: colors.lightCream,
                }}
              >
                <p
                  style={{
                    marginTop: 0,
                    marginBottom: 20,
                    color: colors.oceanBlue,
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    letterSpacing: "1.4px",
                    textTransform: "uppercase",
                  }}
                >
                  {selectedDetail.role}
                </p>

                <p
                  style={{
                    margin: 0,
                    color: "rgba(15,18,23,0.72)",
                    fontSize: "1rem",
                    lineHeight: 1.9,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {selectedDetail.detail}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 10,
                    marginTop: 28,
                  }}
                >
                  {selectedDetail.link && (
                    <button
                      onClick={() => window.open(selectedDetail.link, "_blank")}
                      onMouseEnter={() => setHoveredProjectLink(true)}
                      onMouseLeave={() => setHoveredProjectLink(false)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 6,
                        padding: "10px 16px",
                        background: hoveredProjectLink
                          ? colors.oceanBlue
                          : "rgba(39,96,108,0.1)",
                        border: `1px solid ${
                          hoveredProjectLink
                            ? colors.oceanBlue
                            : "rgba(39,96,108,0.25)"
                        }`,
                        borderRadius: 4,
                        color: hoveredProjectLink
                          ? colors.white
                          : colors.oceanBlue,
                        cursor: "pointer",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.75rem",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        fontWeight: 600,
                        transition:
                          "background 0.2s ease, border 0.2s ease, color 0.2s ease, transform 0.2s ease",
                        transform: hoveredProjectLink
                          ? "translateY(-2px)"
                          : "translateY(0)",
                      }}
                    >
                      Project Link
                    </button>
                  )}

                  {selectedDetail.githubLink && (
                    <button
                      onClick={() => window.open(selectedDetail.githubLink, "_blank")}
                      onMouseEnter={() => setHoveredGithubLink(true)}
                      onMouseLeave={() => setHoveredGithubLink(false)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 6,
                        padding: "10px 16px",
                        background: hoveredGithubLink
                          ? colors.oceanBlue
                          : "rgba(39,96,108,0.1)",
                        border: `1px solid ${
                          hoveredGithubLink
                            ? colors.oceanBlue
                            : "rgba(39,96,108,0.25)"
                        }`,
                        borderRadius: 4,
                        color: hoveredGithubLink
                          ? colors.white
                          : colors.oceanBlue,
                        cursor: "pointer",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.75rem",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        fontWeight: 600,
                        transition:
                          "background 0.2s ease, border 0.2s ease, color 0.2s ease, transform 0.2s ease",
                        transform: hoveredGithubLink
                          ? "translateY(-2px)"
                          : "translateY(0)",
                      }}
                    >
                      GitHub
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        @keyframes modalRise {
          from {
            opacity: 0;
            transform: translateY(14px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        button[aria-label="Close project detail"]::before {
          content: "\\00d7";
          font-size: 1.35rem;
          line-height: 1;
        }
      `}</style>
    </div>
  );
}
