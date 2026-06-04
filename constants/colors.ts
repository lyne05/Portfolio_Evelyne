export const colors = {
  // Palet 1: Ultramarine Blue
  silentNavy: "#102a6b",
  sandyAmber: "#cea273",
  blueCurrent: "#015185",
  skyBlue: "#5990c0",
  lightCream: "#fcedd3",

  // Palet 2: Film of the Sea
  deepInk: "#0f1217",
  oceanBlue: "#27606c",
  fogAqua: "#7baaab",
  softShell: "#c68d5d",
  warmSand: "#e6bd8b",

  white: "#ffffff",
  transparent: "transparent",
} as const;

export type ColorKey = keyof typeof colors;
