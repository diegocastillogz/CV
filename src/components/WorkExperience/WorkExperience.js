import styled from "styled-components";

const WorkExperience = ({ experience }) => {
  return (
    <StyledWorkExperienceSection>
      <h2>work experience</h2>
      <StyledWorkExperienceContainer>
        {experience
          ?.map(
            ({ position, company, date, description, techstack }, index) => (
              <StyledExperienceItem key={index}>
                <h3>{position}</h3>
                <StyleCompanyName>{company}</StyleCompanyName>
                <StyledDate>
                  <p>{date}</p>
                </StyledDate>
                <StyledResponsibilityList>
                  {description?.map((itemText, index) => (
                    <StyledResponsibilityItem key={index}>
                      <p>{itemText}</p>
                    </StyledResponsibilityItem>
                  ))}
                </StyledResponsibilityList>
              </StyledExperienceItem>
            )
          )
          .reverse()}
      </StyledWorkExperienceContainer>
    </StyledWorkExperienceSection>
  );
};

const StyledWorkExperienceSection = styled.section`
  grid-area: experience;
`;

const StyledWorkExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.tablet}`}) {
    flex-direction: row;
  }
`;

const StyledExperienceItem = styled.div`
  @media (min-width: ${({ theme }) => `${theme.breakpoints.tablet}`}) {
    width: calc(50% - 25px);
  }

  > h3 {
    text-transform: capitalize;
    margin-bottom: 8px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobileL}`}) {
    padding-bottom: ${({ theme }) => `${theme.paddings.XXSVerticalPadding} `};
  }
`;

const StyledDate = styled.div`
  margin: 8px 0;
  p {
    color: ${({ theme }) => theme.colors.subtitleFontColor};
  }
`;

const StyledResponsibilityList = styled.ul`
  padding: ${({ theme }) => `0 ${theme.paddings.SHorizontalPadding}`};
`;

const StyledResponsibilityItem = styled.li`
  text-align: justify;
  margin-top: 5px;
  p {
    font-size: ${({ theme }) => theme.fonts.big.sectionParagraph};
  }
`;

const StyleCompanyName = styled.h4`
  font-weight 300;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.subtitleFontColor};
`;

const StyledTechStackItem = styled.p`
  font-weight: 600;
  span {
    color: ${({ theme }) => theme.colors.subtitleFontColor};
  }
`;

export default WorkExperience;
