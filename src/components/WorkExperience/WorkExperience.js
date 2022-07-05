import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import { LinkIcon } from "assets/icons";

const WorkExperience = ({ experience }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <StyledWorkExperienceSection>
      <h2>work experience</h2>
      {experience?.map(
        ({ position, company, url, date, location, description }, index) => (
          <StyledExperienceItem key={index}>
            <h3>{position}</h3>
            <StyledLink href={url} target="_blank" rel="noopener noreferrer">
              <h3>{company}</h3>
              <LinkIcon color={colors.subtitleFontColor} />
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

const StyledDateAndLocation = styled.div`
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

  &:last-child {
    list-style: none;
    p {
      color: ${({ theme }) => theme.colors.subtitleFontColor};
      font-weight: 600;
    }
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
