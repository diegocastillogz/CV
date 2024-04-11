import styled from "styled-components";

const Languages = ({ languages }) => (
  <StyledLanguagesSection>
    <h2>languages</h2>
    <StyledLanguagesList>
      {languages?.map(({ language, score, label }, index) => (
        <StyledProfiencyItem key={index}>
          {[...Array.from({ length: score }, (_, i) => i * 10 + 10)]?.map(
            (value, index) => (
              <StyledProfiencyScore scoreValue={value} key={index} />
            )
          )}
          <p>{language}</p>
          <StyledLabelProfiency>{label}</StyledLabelProfiency>
        </StyledProfiencyItem>
      ))}
    </StyledLanguagesList>
  </StyledLanguagesSection>
);

const StyledLanguagesSection = styled.section`
  grid-area: languages;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobileL}`}) {
    width: ${({ theme }) => `${theme.maxWidthScreenMobile}`};
    margin: 0 auto;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    width: 100%;
  }
`;

const StyledLanguagesList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const StyledProfiencyItem = styled.li`
  display: flex;
  align-items: baseline;
  justify-content: left;

  p {
    font-size: ${({ theme }) => theme.fonts.big.sectionParagraph};
    text-transform: capitalize;
    width: 60px;
    &::before {
      display: none;
    }
  }
`;

const StyledProfiencyScore = styled.div`
  width: 10px;
  margin-right: 10px;
  height: ${({ scoreValue }) => `${scoreValue}px`};
  background-color: ${({ theme }) => theme.colors.subtitleFontColor};
  margin-top: auto;
`;

const StyledLabelProfiency = styled.p`
  color: ${({ theme }) => theme.colors.subtitleFontColor};
  margin-top: 2px;
`;

export default Languages;
