import styled from "styled-components";

const Skills = ({ skills }) => {
  return (
    <StyleSkillsSection>
      <h2>skills</h2>
      <ul>
        {skills?.map(({ text, score }, index) => {
          const filledDots = score;
          const unfilledDots = 5 - filledDots;
          return (
            <StyledItemSkillContainer key={index}>
              <p>{text}</p>
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
    `${theme.MDVerticalPadding} ${theme.XSHorizontalPadding} 0`};

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobileL}`}) {
    width: ${({ theme }) => `${theme.maxWidthScreenMobile}`};
    margin: 0 auto;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    width: 100%;
    padding: ${({ theme }) =>
      `${theme.MDVerticalPadding} ${theme.MDHorizontalPadding} 0`};
  }
`;

const StyledItemSkillContainer = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  p {
    text-transform: capitalize;
  }
`;

const StyledDotsContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`;

const StyledEmptyDot = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.subtitleFontColor};
  border: 2px solid ${({ theme }) => theme.textFontColor};
`;

const StyledFillDot = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.subtitleFontColor};
  border: 2px solid ${({ theme }) => theme.textFontColor};
  background-color: ${({ theme }) => theme.subtitleFontColor};
`;

export default Skills;
