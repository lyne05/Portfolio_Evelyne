import { useWindowDimensions } from "react-native";
import { colors } from "../constants/colors";
import { personalInfo } from "../constants/data";

export default function Footer() {
  const { width } = useWindowDimensions();
  const isMobile = width <= 760;
  const currentYear = new Date().getFullYear();

  return (
    <div
      style={{
        padding: isMobile ? "22px 20px" : "22px 48px",
        background: colors.deepInk,
        display: "flex",
        justifyContent: "space-between",
        alignItems: isMobile ? "flex-start" : "center",
        flexDirection: isMobile ? "column" : "row",
        borderTop: "1px solid rgba(123,170,171,0.12)",
        flexWrap: "wrap" as const,
        gap: 12,
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-body)",
          color: "rgba(230,189,139,0.35)",
          fontSize: "0.78rem",
          margin: 0,
        }}
      >
        © {currentYear} {personalInfo.name}. All rights reserved.
      </p>

      <p
        style={{
          fontFamily: "var(--font-body)",
          color: "rgba(123,170,171,0.45)",
          fontSize: "0.78rem",
          margin: 0,
        }}
      >
        Designed &amp; Built with{" "}
        <span style={{ color: colors.warmSand }}>React</span> &amp;{" "}
        <span style={{ color: colors.fogAqua }}>TypeScript</span>
      </p>
    </div>
  );
}
