import styled from "styled-components";

const BodyContainer = styled.div`
  padding: ${({ theme }) =>
    `${theme.paddings.XSVerticalPadding} ${theme.paddings.MDHorizontalPadding}`};

  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    display: grid;
    grid-template-areas:
      "skills education"
      "skills languages"
      "experience experience"
      "projects projects";
    grid-template-columns: calc(50% - 25px) calc(50% - 25px);
    grid-row-gap: 5px;
    grid-column-gap: 50px;
    padding-bottom: 0px;
  }

  h2 {
    text-decoration: underline;
    margin-bottom: ${({ theme }) => theme.paddings.XSVerticalPadding};
  }

  h3 {
    color: ${({ theme }) => theme.colors.titleFontColor};
  }

  a p {
    color: ${({ theme }) => theme.colors.titleFontColor};
  }
`;

export default BodyContainer;
