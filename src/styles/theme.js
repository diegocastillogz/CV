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
    headerParagraph: "13px",
  },
  big: {
    title: "26px",
    subtitle: "22px",
    sectionParagraph: "14px",
    sectionTitle: "16px",
    headerParagraph: "13px",
  },
};

const BASIC_COLORS = {
  black: "#000",
};

export const lightTheme = {
  bodyBackground: "#fff",
  headerBackground: "#374457",
  subheaderBackground: "#2c343f",

  titleFontColor: "#000",
  subtitleFontColor: "#ef4f42",
  textFontColor: "#fff",
  subtextFontColor: "#7e7e7e",

  XXSVerticalPadding: "8px",

  XSHorizontalPadding: "28px",
  XSVerticalPadding: "20px",

  MDHorizontalPadding: "40px",
  MDVerticalPadding: "30px",

  LGVerticalPadding: "50px",

  lineHeight: "25px",

  maxWidthScreen: breakpoints.laptop,
  maxWidthScreenMobile: "80vw",

  fonts,
  breakpoints,
  ...BASIC_COLORS,
};

export const darkTheme = {
  fonts,
  breakpoints,
  ...BASIC_COLORS,
};
