import styled from "styled-components";

const BodyContainer = styled.div`
  width: 100%;
  padding-bottom: ${({ theme }) => `${theme.paddings.MDVerticalPadding}`};

  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    display: grid;
    grid-template-areas:
      "experience skills"
      "experience education"
      "experience languages"
      "experience projects"
      "experience interests";
    grid-template-columns:
      calc(50% - ${({ theme }) => theme.paddings.MDHorizontalPadding} - 25px)
      calc(50% - ${({ theme }) => theme.paddings.MDHorizontalPadding} - 25px);
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
