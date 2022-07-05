import styled from "styled-components";

import linkIcon from "assets/icons/link.svg";

const WorkExperience = ({ experience }) => {
  return (
    <StyledWorkExperienceSection>
      <h2>work experience</h2>
      {experience?.map(
        ({ position, company, url, date, location, description }, index) => (
          <StyledExperienceItem key={index}>
            <h3>{position}</h3>
            <StyledLink href={url} target="_blank" rel="noopener noreferrer">
              <h3>{company}</h3>
              <img src={linkIcon} alt={`${company} website`} />
            </StyledLink>
            <StyledDateAndLocation>
              <p>{date}</p>
              <p>{location}</p>
            </StyledDateAndLocation>
            <StyledResponsibilityList>
              {description?.map((itemText, index) => (
                <StyledResponsibilityItem key={index}>
                  <p>{itemText}</p>
                </StyledResponsibilityItem>
              ))}
            </StyledResponsibilityList>
          </StyledExperienceItem>
        )
      )}
    </StyledWorkExperienceSection>
  );
};

const StyledWorkExperienceSection = styled.section`
  padding: ${({ theme }) =>
    `${theme.MDVerticalPadding} ${theme.XSHorizontalPadding} 0`};
  grid-area: experience;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobileL}`}) {
    width: ${({ theme }) => `${theme.maxWidthScreenMobile}`};
    margin: auto;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    padding: ${({ theme }) =>
      `${theme.MDVerticalPadding} ${theme.MDHorizontalPadding} 0`};
    width: 100%;
  }
`;

const StyledExperienceItem = styled.section`
  padding-bottom: ${({ theme }) => `${theme.MDVerticalPadding} `};
  &:last-child {
    padding-bottom: 20px;
  }
  > h3 {
    text-transform: capitalize;
    margin-bottom: 8px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobileL}`}) {
    padding-bottom: ${({ theme }) => `${theme.MDVerticalPadding} `};
  }
`;

const StyledDateAndLocation = styled.div`
  margin: 8px 0;
  color: ${({ theme }) => theme.subtitleFontColor};
`;

const StyledResponsibilityList = styled.ul`
  padding: ${({ theme }) => `0 ${theme.XSHorizontalPadding}`};
`;

const StyledResponsibilityItem = styled.li`
  text-align: justify;
  margin-top: 8px;

  &:last-child {
    list-style: none;
    color: ${({ theme }) => theme.subtitleFontColor};
    font-weight: 500;
  }
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;

  h3 {
    font-weight: 500;
    text-transform: capitalize;
    margin-right: 5px;
  }
  img {
    width: 25px;
    heigth: 25px;
  }
`;

export default WorkExperience;
