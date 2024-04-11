import styled from "styled-components";

const Skills = ({ skills }) => {
  return (
    <StyleSkillsSection>
      <h2>skills</h2>

      {skills?.map(({ text, experience, list }) => (
        <StyledItemSkillContainer key={text}>
          <SkillSubtitle>
            {text} ({experience})
          </SkillSubtitle>
          <p>{list}</p>
        </StyledItemSkillContainer>
      ))}
    </StyleSkillsSection>
  );
};

const StyleSkillsSection = styled.section`
  grid-area: skills;
  font-size: ${({ theme }) => theme.fonts.big.sectionParagraph};

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobileL}`}) {
    width: ${({ theme }) => `${theme.maxWidthScreenMobile}`};
    margin: 0 auto;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    width: 100%;
  }
`;

const SkillSubtitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.small.sectionTitle};
  color: ${({ theme }) => theme.colors.subtitleFontColor} !important;
  font-weight: 300;
  text-transform: capitalize;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    font-size: ${({ theme }) => theme.fonts.big.sectionParagraph};
  }
`;

const StyledItemSkillContainer = styled.div`
  margin-bottom: 15px;
  p {
    margin-top: 5px;
    font-size: ${({ theme }) => theme.fonts.small.sectionTitle};
    text-transform: capitalize;
  }
`;

export default Skills;
