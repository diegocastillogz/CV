import styled from "styled-components";

const Skills = ({ skills }) => {
  return (
    <StyleSkillsSection>
      <h2>skills</h2>
      <ul>
        {skills?.map(({ text, score, label }, index) => {
          const filledDots = score;
          const unfilledDots = 5 - filledDots;
          return (
            <StyledItemSkillContainer key={index}>
              <StyledSkillName>{text}</StyledSkillName>
              <StyledScore>
                <StyledScoreLabel>{label}</StyledScoreLabel>
                <StyledDotsContainer>
                  {[...Array.from({ length: filledDots })]?.map((_, index) => (
                    <StyledFillDot key={index} />
                  ))}
                  {[...Array.from({ length: unfilledDots }).keys()]?.map(
                    (_, index) => (
                      <StyledEmptyDot key={index} />
                    )
                  )}
                </StyledDotsContainer>
              </StyledScore>
            </StyledItemSkillContainer>
          );
        })}
      </ul>
    </StyleSkillsSection>
  );
};

const StyleSkillsSection = styled.section`
  grid-area: skills;
  padding: ${({ theme }) =>
    `${theme.paddings.MDVerticalPadding} ${theme.paddings.XSHorizontalPadding} 0`};

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobileL}`}) {
    width: ${({ theme }) => `${theme.maxWidthScreenMobile}`};
    margin: 0 auto;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    width: 100%;
    padding: ${({ theme }) =>
      `${theme.paddings.MDVerticalPadding} ${theme.paddings.MDHorizontalPadding} 0`};
  }
`;

const StyledItemSkillContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    margin-bottom: 20px;
    flex-direction: row;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 3px;
    @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
      margin-bottom: 0px;
    }
    &::before {
      display: none;
    }
  }
`;

const StyledDotsContainer = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  margin-top: 5px;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    width: 75%
    margin: auto 0;
  }
`;

const StyledScoreLabel = styled.p`
  color: ${({ theme }) => theme.colors.subtitleFontColor};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.small.label};

  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    font-size: ${({ theme }) => theme.fonts.big.label};
    width: 25%;
    margin: auto 0;
  }
`;

const StyledEmptyDot = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.subtitleFontColor};
  border: 2px solid ${({ theme }) => theme.colors.textFontColor};
`;

const StyledFillDot = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.subtitleFontColor};
  border: 2px solid ${({ theme }) => theme.colors.textFontColor};
  background-color: ${({ theme }) => theme.colors.subtitleFontColor};
`;

const StyledScore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    width: 45%;
    justify-content: space-between;
    flex-direction: row;
  }
`;

const StyledSkillName = styled.p`
  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    width: 40%;
  }
`;

export default Skills;
