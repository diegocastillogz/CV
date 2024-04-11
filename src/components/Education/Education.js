import styled from "styled-components";

const Education = ({ education }) => {
  return (
    <StyledEducationSection>
      <h2>Education</h2>
      <StyledEducationList>
        {education?.map(({ institute, title }, index) => (
          <StyledEducationItem key={index}>
            <p>{title}</p>
            <StyledInstitutionName>{institute}</StyledInstitutionName>
          </StyledEducationItem>
        ))}
      </StyledEducationList>
    </StyledEducationSection>
  );
};

const StyledEducationSection = styled.section`
  grid-area: education;
  max-width: 100%;
  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobileL}`}) {
    width: ${({ theme }) => `${theme.maxWidthScreenMobile}`};
    margin: 0 auto;
  }
`;

const StyledEducationList = styled.ul`
  p {
    &:before {
      display: none;
    }
  }
`;

const StyledEducationItem = styled.li`
  p {
    font-size: ${({ theme }) => theme.fonts.big.sectionParagraph};
    &:nth-child(2) {
      color: ${({ theme }) => theme.colors.subtitleFontColor};
    }
  }
`;

const StyledInstitutionName = styled.p`
  margin-top: 5px;
`;

export default Education;
