import styled from "styled-components";

const Education = ({ education }) => {
  return (
    <StyledEducationSection>
      <h2>Education</h2>
      <StyledEducationList>
        {education?.map(({ institute, title }, index) => (
          <li key={index}>
            <h3>{title}</h3>
            <StyledInstitutionName>{institute}</StyledInstitutionName>
          </li>
        ))}
      </StyledEducationList>
    </StyledEducationSection>
  );
};

const StyledEducationSection = styled.section`
  padding: ${({ theme }) =>
    `${theme.paddings.MDVerticalPadding} ${theme.paddings.XSHorizontalPadding} 0`};
  grid-area: education;

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

const StyledEducationList = styled.ul`
  list-style: none;
`;

const StyledInstitutionName = styled.h3`
  font-weight: 400;
  margin-top: 5px;
`;

export default Education;
