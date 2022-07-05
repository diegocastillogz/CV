import styled from "styled-components";

const Languages = ({ languages }) => (
  <StyledLanguagesSection>
    <h2>languages</h2>
    <StyledLanguagesList>
      {languages?.map(({ language, score }, index) => (
        <StyledProfiencyItem key={index}>
          <StyledProfiencyContainer>
            {[...Array.from({ length: score }, (_, i) => i * 10 + 10)]?.map(
              (value, index) => (
                <StyledProfiencyScore scoreValue={value} key={index} />
              )
            )}
          </StyledProfiencyContainer>
          <p>{language}</p>
        </StyledProfiencyItem>
      ))}
    </StyledLanguagesList>
  </StyledLanguagesSection>
);

const StyledLanguagesSection = styled.section`
  padding: ${({ theme }) =>
    `${theme.paddings.MDVerticalPadding} ${theme.paddings.XSHorizontalPadding} 0`};
  grid-area: languages;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobileL}`}) {
    width: ${({ theme }) => `${theme.maxWidthScreenMobile}`};
    margin: 0 auto;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    padding: ${({ theme }) =>
      `${theme.paddings.MDVerticalPadding} ${theme.paddings.MDHorizontalPadding} 0`};
    width: 100%;
  }
`;

const StyledLanguagesList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
`;

const StyledProfiencyItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  p {
    text-transform: capitalize;
    margin-top: 8px;
  }
`;

const StyledProfiencyContainer = styled.div`
  display: flex;
  height: 60px;
`;

const StyledProfiencyScore = styled.div`
  width: 10px;
  margin-right: 10px;
  height: ${({ scoreValue }) => `${scoreValue}px`};
  background-color: ${({ theme }) => theme.colors.subtitleFontColor};
  margin-top: auto;
`;

export default Languages;
