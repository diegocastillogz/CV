import styled from "styled-components";

const WorkExperience = ({ experience }) => {
  return (
    <StyledWorkExperienceSection>
      <h2>work experience</h2>
      {experience?.map(({ position, company, date, description }, index) => (
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
      )).reverse()}
    </StyledWorkExperienceSection>
  );
};

const StyledWorkExperienceSection = styled.section`
  padding: ${({ theme }) =>
    `${theme.paddings.MDVerticalPadding} ${theme.paddings.XSHorizontalPadding} 0`};
  grid-area: experience;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobileL}`}) {
    width: ${({ theme }) => `${theme.maxWidthScreenMobile}`};
    margin: auto;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    padding: ${({ theme }) =>
      `${theme.paddings.MDVerticalPadding} ${theme.paddings.MDHorizontalPadding} 0`};
    width: 100%;
  }
`;

const StyledExperienceItem = styled.section`
  padding-bottom: ${({ theme }) => `${theme.paddings.MDVerticalPadding} `};
  &:last-child {
    padding-bottom: 20px;
  }
  > h3 {
    text-transform: capitalize;
    margin-bottom: 8px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobileL}`}) {
    padding-bottom: ${({ theme }) => `${theme.paddings.MDVerticalPadding} `};
  }
`;

const StyledDate = styled.div`
  margin: 8px 0;
  p {
    color: ${({ theme }) => theme.colors.subtitleFontColor};
  }
`;

const StyledResponsibilityList = styled.ul`
  padding: ${({ theme }) => `0 ${theme.paddings.XSHorizontalPadding}`};
`;

const StyledResponsibilityItem = styled.li`
  text-align: justify;
  margin-top: 8px;
`;

const StyleCompanyName = styled.a`
  font-weight 300;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.subtitleFontColor};
`;

export default WorkExperience;
