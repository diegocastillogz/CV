import styled from "styled-components";

import githubLightIcon from "assets/icons/github-light.png";
import githubDarkIcon from "assets/icons/github-dark.png";

import linkedinLightIcon from "assets/icons/linkedin-light.png";
import linkedinDarkIcon from "assets/icons/linkedin-dark.png";

import emailLightIcon from "assets/icons/email-light.png";
import emailDarkIcon from "assets/icons/email-dark.png";

const Header = ({ header, selectedTheme }) => {
  const icons = {
    "github.light": githubLightIcon,
    "github.dark": githubDarkIcon,
    "linkedin.light": linkedinLightIcon,
    "linkedin.dark": linkedinDarkIcon,
    "email.light": emailLightIcon,
    "email.dark": emailDarkIcon,
  };

  return (
    <StyledHeader id="header">
      <StyledPrimaryInfoContainer>
        <h1>{header.fullname}</h1>
        <StyledSubtitle>{header.position}</StyledSubtitle>
        <StyledDescription>{header.description}</StyledDescription>
      </StyledPrimaryInfoContainer>
      <StyledLSocialNetworkist>
        {header.socialNetworks?.map(({ href, text, image }, index) => (
          <StyledSocialNetworksItem key={index}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <img src={icons[`${image}.${selectedTheme}`]} />
              <p>{text}</p>
            </a>
          </StyledSocialNetworksItem>
        ))}
      </StyledLSocialNetworkist>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  background: ${({ theme }) => theme.colors.headerBackground};
  color: ${({ theme }) => theme.colors.textFontColor};
`;

const StyledPrimaryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) =>
    `${theme.paddings.XSVerticalPadding} ${theme.paddings.SHorizontalPadding} 0`};

  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    align-items: flex-start;
    padding: ${({ theme }) =>
      `${theme.paddings.SVerticalPadding} ${theme.paddings.MDHorizontalPadding}`};
  }
`;

const StyledSubtitle = styled.h2`
  color: ${({ theme }) => theme.colors.subtitleFontColor};
  margin-bottom: 15px;
  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    margin-bottom: 10px;
  }
`;

const StyledDescription = styled.p`
  font-size: ${({ theme }) => theme.fonts.big.sectionParagraph};
  line-height: 25px;
  text-align: justify;
  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobileL}`}) {
    width: ${({ theme }) => `${theme.maxWidthScreenMobile}`};
  }
  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    width: 100%;
  }
`;

const StyledLSocialNetworkist = styled.ul`
  display: flex;
  font-size: ${({ theme }) => theme.fonts.big.headerParagraph};

  list-style: none;
  flex-wrap: wrap;
  background: ${({ theme }) => theme.colors.subheaderBackground};
  padding: ${({ theme }) =>
    `${theme.paddings.XSVerticalPadding} ${theme.paddings.SHorizontalPadding}`};

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobileL}`}) {
    display: flex;
    padding: ${({ theme }) =>
      `${theme.paddings.XXSVerticalPadding} ${theme.paddings.SHorizontalPadding}`};
  }
`;

const StyledSocialNetworksItem = styled.li`
  width: ${({ theme }) => `${theme.maxWidthScreenMobile}`};
  margin: 7px auto;
  img {
    width: 20px;
    height: 20px;
  }
  p {
    text-align: left;
    letter-spacing: 0.02px;
    color: ${({ theme }) => theme.colors.subtitleFontColor};
  }
  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobileL}`}) {
    width: 50%;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    width: 20%;
  }

  a,
  div {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.textFontColor};
    &:hover {
      color: ${({ theme }) => theme.colors.subtitleFontColor};
      font-weight: 600;
      svg path {
        fill: ${({ theme }) => theme.colors.subtitleFontColor};
      }
    }
    @media (min-width: ${({ theme }) => `${theme.breakpoints.mobileL}`}) {
      justify-content: center;
    }
  }

  p {
    margin-left: 10px;
  }
`;

export default Header;
