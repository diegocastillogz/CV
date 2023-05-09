import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html,
  body,
  header,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  li
  { 
    padding: 0;
    margin: 0;
  }

  body {
    background: ${({ theme }) => theme.colors.black};
    font-family: "Montserrat", sans-serif;
  }
   
  h1, h2, .subheader {
    font-family: "Ubuntu", sans-serif;
  }

  h1 {
    font-size: ${({ theme }) => theme.fonts.small.title};
    font-weight: 600;

    @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
      font-size: ${({ theme }) => theme.fonts.big.title};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.fonts.small.subtitle};
    color: ${({ theme }) => theme.colors.subtitleFontColor};
    font-weight: 500;
    text-transform: capitalize;

    @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
      font-size: ${({ theme }) => theme.fonts.big.subtitle};
    }
  } 

  section h2 {
    font-size: ${({ theme }) => theme.fonts.small.subtitle};

    @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
      font-size: ${({ theme }) => theme.fonts.big.subtitle};
    }
  }

  section h3 {
    font-size: ${({ theme }) => theme.fonts.small.sectionTitle};

    @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
      font-size: ${({ theme }) => theme.fonts.big.sectionTitle};
    }
  }

  section p {
    font-size: ${({ theme }) => theme.fonts.small.sectionParagraph};
    color: ${({ theme }) => theme.colors.paragraphColor};


    @media (min-width: ${({ theme }) =>
      `${theme.breakpoints.titleFontColor}`}) {
      font-size: ${({ theme }) => theme.fonts.big.sectionParagraph};
    }
  }

  header p {
    font-size: ${({ theme }) => theme.fonts.small.headerParagraph};

    @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
      font-size: ${({ theme }) => theme.fonts.big.headerParagraph};
    }
  }

  section ul {
    list-style: none;
    li {
    margin-bottom: 15px;

    p::before {
      content: "\\2022";
      color: ${({ theme }) => theme.colors.subtitleFontColor};
      font-weight: bolder;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }
  }

  a {
    text-decoration: none;
  }
  `;
