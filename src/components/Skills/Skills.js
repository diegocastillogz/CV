import styled from "styled-components";

const Skills = ({ skills }) => {
  const getSectionItems = (sectionName) => (
    <UnorderedList>
      {skills
        ?.filter(({ label }) => label === sectionName)
        .map(({ text }, index) => {
          return (
            <StyledItemSkillContainer key={index}>
              <p>{text}</p>
            </StyledItemSkillContainer>
          );
        })}
    </UnorderedList>
  );

  return (
    <StyleSkillsSection>
      <h2>skills</h2>
      <SkillSubtitle>Complete (4+ years of experience)</SkillSubtitle>
      {getSectionItems("complete")}

      <SkillSubtitle>Extensive (3+ years of experience)</SkillSubtitle>
      {getSectionItems("extensive")}

      <SkillSubtitle>Solid (2+ years of experience)</SkillSubtitle>
      {getSectionItems("solid")}

      <SkillSubtitle>Explorative (1+ years of experience)</SkillSubtitle>
      {getSectionItems("explorative")}

      <SkillSubtitle>Specific (Less than 1 year of experience)</SkillSubtitle>
      {getSectionItems("specific")}
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

const SkillSubtitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.small.sectionTitle};
  color: ${({ theme }) => theme.colors.subtitleFontColor} !important;
  font-weight: 300;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    font-size: ${({ theme }) => theme.fonts.big.sectionTitle};
  }
`;

const UnorderedList = styled.ul`
  margin-top: 10px;
  margin-bottom: 20px;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    margin-bottom: 30px;
  }
`;

const StyledItemSkillContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    margin-bottom: 10px;
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

export default Skills;
