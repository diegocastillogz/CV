import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import { LinkIcon } from "assets/icons";

const Education = ({ education }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <StyledEducationSection>
      <h2>Education</h2>
      <StyledEducationList>
        {education?.map(({ href, institute, date, location, title }, index) => (
          <li key={index}>
            <h3>{title}</h3>
            <StyledEducationLink
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{institute}</h3>
              <LinkIcon color={colors.subtitleFontColor} />
            </StyledEducationLink>
            <StyledDateAndLocation>
              <p>{date}</p>
              <p>{location}</p>
            </StyledDateAndLocation>
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

const StyledEducationLink = styled.a`
  display: flex;
  align-items: center;
  margin-top: 8px;

  h3 {
    font-weight: 500;
  }

  img {
    width: 25px;
    heigth: 25px;
  }
`;

const StyledDateAndLocation = styled.div`
  margin: 8px 0;
  color: ${({ theme }) => theme.colors.subtitleFontColor};
`;

export default Education;
