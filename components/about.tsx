import { useState } from "react";
import { useWindowDimensions } from "react-native";
import { colors } from "../constants/colors";
import { personalInfo } from "../constants/data";

export default function About() {
  const { width } = useWindowDimensions();
  const isMobile = width <= 760;
  const [cvHovered, setCvHovered] = useState(false);

  const infoItems = [
    { label: "University", value: personalInfo.university },
    { label: "Batch", value: personalInfo.batch },
    { label: "GPA", value: personalInfo.gpa },
    { label: "Location", value: personalInfo.location },
  ];

  return (
    <div
      id="about"
      className="portfolio-section"
      style={{
        background: colors.lightCream,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: 6,
          background: `linear-gradient(to bottom, ${colors.oceanBlue}, ${colors.fogAqua}, transparent)`,
        }}
      />

      <div
        className="section-inner"
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "auto 1fr",
          gap: isMobile ? 36 : 95,
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingTop: 8,
          }}
        >
          <div
            style={{
              width: isMobile ? 190 : 260,
              height: isMobile ? 190 : 260,
              borderRadius: "50%",
              border: `3px solid ${colors.softShell}`,
              padding: 6,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                backgroundImage: "url('/images/evelyne.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>

        <div style={{ textAlign: isMobile ? "center" : "left" }}>
          <p
            style={{
              color: colors.oceanBlue,
              fontFamily: "var(--font-body)",
              letterSpacing: "4px",
              fontSize: "0.78rem",
              textTransform: "uppercase" as const,
              marginBottom: 12,
            }}
          >
            About Me
          </p>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: isMobile ? "2.1rem" : "2.6rem",
              color: colors.deepInk,
              margin: "0 0 18px",
              lineHeight: 1.15,
            }}
          >
            Who Am <span style={{ color: colors.oceanBlue }}>I?</span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              color: colors.silentNavy,
              lineHeight: 1.75,
              fontSize: "0.97rem",
            }}
          >
            I'm an Informatics student with a strong interest in frontend
            development and mobile app development. I have experience building
            websites and UI/UX interfaces using HTML, CSS and React, developing
            mobile applications with Kotlin, and managing data with MySQL and
            Firebase. I like to work in teams, could help solving problem and
            motivated to learn more about information and technology.
          </p>

          <p
            style={{
              fontFamily: "var(--font-body)",
              color: colors.silentNavy,
              lineHeight: 1.75,
              marginBottom: 24,
              fontSize: "0.97rem",
            }}
          ></p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: 12,
              marginBottom: 24,
              textAlign: "left",
            }}
          >
            {infoItems.map(({ label, value }) => (
              <div
                key={label}
                style={{
                  background: "rgba(39,96,108,0.07)",
                  borderLeft: `3px solid ${colors.oceanBlue}`,
                  padding: "10px 14px",
                  borderRadius: "0 4px 4px 0",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-body)",
                    fontSize: "0.7rem",
                    color: colors.fogAqua,
                    textTransform: "uppercase" as const,
                    letterSpacing: "1.5px",
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    margin: "3px 0 0",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    color: colors.deepInk,
                    fontWeight: 600,
                  }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>

          <a
            href={personalInfo.cvUrl}
            onMouseEnter={() => setCvHovered(true)}
            onMouseLeave={() => setCvHovered(false)}
            style={{
              display: "inline-block",
              padding: "12px 28px",
              background: cvHovered ? colors.oceanBlue : colors.deepInk,
              color: colors.warmSand,
              fontFamily: "var(--font-body)",
              fontSize: "0.82rem",
              letterSpacing: "2px",
              textTransform: "uppercase" as const,
              textDecoration: "none",
              borderRadius: 3,
              transition: "background 0.25s, transform 0.25s",
              transform: cvHovered ? "translateY(-4px)" : "translateY(0)",
              boxShadow: cvHovered
                ? "0 10px 20px rgba(0,0,0,0.15)"
                : "0 0 0 rgba(0,0,0,0)",
            }}
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
