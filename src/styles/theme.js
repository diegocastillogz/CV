const breakpoints = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1020px",
  laptopL: "1440px",
  desktop: "2560px",
};

const fonts = {
  small: {
    title: "20px",
    subtitle: "14px",
    sectionParagraph: "12px",
    sectionTitle: "14px",
    headerParagraph: "11px",
    label: "11px",
  },
  big: {
    title: "26px",
    subtitle: "22px",
    sectionParagraph: "14px",
    sectionTitle: "16px",
    headerParagraph: "13px",
    label: "10px",
  },
};

const BASIC_COLORS = {
  black: "#000",
  silver: "#e3e4e5",
  skyblue: "#13b1e9",
  gold: "#FFD700",
  white: "#fff",
};

export const lightColors = {
  bodyBackground: "#fff",
  headerBackground: "#374457",
  subheaderBackground: "#2c343f",

  titleFontColor: "#000",
  subtitleFontColor: "#ef4f42",
  textFontColor: "#fff",
  paragraphColor: "#000",
  subtextFontColor: "#7e7e7e",
  ...BASIC_COLORS,
};

export const darkColors = {
  bodyBackground: "#222831",
  headerBackground: "#1B2430",
  subheaderBackground: "#393E46",

  titleFontColor: "#EEEEEE",
  subtitleFontColor: "#00ADB5",
  textFontColor: "#fff",
  paragraphColor: "#ffff",
  subtextFontColor: "#7e7e7e",
  ...BASIC_COLORS,
};

const paddings = {
  XXSVerticalPadding: "8px",

  XSHorizontalPadding: "28px",
  XSVerticalPadding: "20px",

  MDHorizontalPadding: "40px",
  MDVerticalPadding: "30px",

  LGVerticalPadding: "50px",
};

const COMMON_STYLES = {
  maxWidthScreen: breakpoints.laptop,
  maxWidthScreenMobile: "80vw",
};

export const lightTheme = {
  paddings,
  fonts,
  breakpoints,
  colors: lightColors,
  ...COMMON_STYLES,
};

export const darkTheme = {
  paddings,
  fonts,
  breakpoints,
  colors: darkColors,
  ...COMMON_STYLES,
};
