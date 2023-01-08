const theme = {
  colors: {
    background: "#FFF",
    primaryColorText: "#000",
    secondaryColorText: "gray",
    primary: "#05cd99",
    secondary: "#b33b72",
    backgroundImage: "#EFF0F7",
    grey600: "#999",
    grey200: "#CCC",
    grey100: "#EEE",
    error: "red",
  },

  fontSizes: {
    xxs: "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "4xl": "2rem",
    "5xl": "2.25rem",
    "6xl": "3rem",
    "7xl": "4rem",
    "8xl": "4.5rem",
    "9xl": "6rem",
  },

  media: {
    mobile: "(max-width: 768px)",
  },

  breakpoints: {
    xs: "480px",
    sm: "768px",
    smd: "860px",
    md: "950px",
    lg: "1200px",
    xl: "1536px",
  },
} as const;

export default theme;

export const { colors, fontSizes, breakpoints, media } = theme;
