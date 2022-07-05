import { useCallback } from "react";
import styled from "styled-components";

import profileImage from "assets/profile.jpg";
import locationImage from "assets/icons/location.svg";
import linkedinImage from "assets/icons/linkedin.svg";
import githubImage from "assets/icons/github.svg";
import emailIcon from "assets/icons/email.svg";

const Header = ({ header }) => {
  const getImageIcon = useCallback((image) => {
    switch (image) {
      case "email":
        return emailIcon;
      case "location":
        return locationImage;
      case "linkedin":
        return linkedinImage;
      case "github":
        return githubImage;
      default:
        return "";
    }
  }, []);

  return (
    <StyledHeader>
      <StyledPrimaryInfoContainer>
        <h1>{header.fullname}</h1>
        <StyledProfileImage
          className="profile-image"
          src={profileImage}
          alt="profile"
        />
        <StyledSubtitle>{header.position}</StyledSubtitle>
        <StyledDescription>{header.description}</StyledDescription>
      </StyledPrimaryInfoContainer>
      <StyledLSocialNetworkist>
        {header.socialNetworks?.map(({ href, alt, image, text }, index) => {
          if (href) {
            return (
              <StyledSocialNetworksItem key={index}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <img src={getImageIcon(image)} alt={alt} />
                  <p>{text}</p>
                </a>
              </StyledSocialNetworksItem>
            );
          }
          return (
            <StyledSocialNetworksItem key={index}>
              <div>
                <img src={locationImage} alt={alt} />
                <p>{text}</p>
              </div>
            </StyledSocialNetworksItem>
          );
        })}
      </StyledLSocialNetworkist>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.headerBackground};
  color: ${({ theme }) => theme.colors.textFontColor};
`;

const StyledPrimaryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => `15px ${theme.paddings.XSHorizontalPadding} 0`};

  h1 {
    grid-area: title;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    display: grid;
    grid-template-areas:
      "title profileImage"
      "subtitle profileImage"
      "description profileImage";
    padding: ${({ theme }) =>
      `${theme.paddings.MDVerticalPadding} ${theme.paddings.MDVerticalPadding} ${theme.paddings.XSVerticalPadding}`};
  }
`;

const StyledProfileImage = styled.img`
  grid-area: profileImage;
  width: 120px;
  height: 120px;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 20px;
  border: 5px solid ${({ theme }) => theme.colors.subtitleFontColor};
  margin: 10px 0;
  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobileL}`}) {
    margin: ${({ theme }) => `${theme.paddings.MDVerticalPadding} 0`};
    width: 150px;
    height: 150px;
  }
`;

const StyledSubtitle = styled.h2`
  grid-area: subtitle;
  color: ${({ theme }) => theme.colors.subtitleFontColor};
  margin-bottom: 15px;
`;

const StyledDescription = styled.p`
  grid-area: description;
  font-size: ${({ theme }) => theme.paragraphSize};
  line-height: 25px;
  margin-bottom: 10px;
  text-align: justify;
  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobileL}`}) {
    width: ${({ theme }) => `${theme.maxWidthScreenMobile}`};
  }
  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    width: 95%;
  }
`;

const StyledLSocialNetworkist = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  background: ${({ theme }) => theme.colors.subheaderBackground};
  padding: ${({ theme }) =>
    `${theme.paddings.XSVerticalPadding} ${theme.paddings.XSHorizontalPadding}`};

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobileL}`}) {
    display: flex;
    padding: ${({ theme }) =>
      `${theme.paddings.XXSVerticalPadding} ${theme.paddings.XSHorizontalPadding}`};
  }
`;

const StyledSocialNetworksItem = styled.li`
  width: ${({ theme }) => `${theme.maxWidthScreenMobile}`};
  margin: 7px auto;

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
      img {
        filter: invert(1);
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
