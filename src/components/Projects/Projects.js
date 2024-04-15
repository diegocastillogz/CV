import { useEffect, useState } from "react";
import styled from "styled-components";
import githubLightIcon from "assets/icons/github-light.png";
import githubDarkIcon from "assets/icons/github-dark.png";

const Projects = ({ selectedTheme }) => {
  const [repos, setRepos] = useState([]);

  const icons = {
    light: githubLightIcon,
    dark: githubDarkIcon,
  };
  const getGithubReposByUser = async (githubUsername = "diegocastillogz") => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${githubUsername}/repos`
      );

      return await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getReposData = async () => {
      const reposData = await getGithubReposByUser();
      setRepos(reposData);
    };
    getReposData();
  }, []);

  return (
    <StyledProjectSection>
      <h2>Personal Projects</h2>
      <StyledProjectsList>
        {repos
          ?.filter(({ name }) => name !== "CV")
          ?.map(({ name, id, description, clone_url, homepage, language }) => (
            <StyledItemProjectsContainer key={id}>
              <ProjectTitle>
                {name}
                <a href={clone_url}>
                  <img
                    src={icons[selectedTheme]}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </a>
              </ProjectTitle>
              <ProjectSubtitle>
                <ProjectParagraph>{homepage}</ProjectParagraph>
                <ProjectParagraph hasTitleColor>{description}</ProjectParagraph>
              </ProjectSubtitle>
              <ProjectParagraph>
                <span>Made on {language}</span>
              </ProjectParagraph>
            </StyledItemProjectsContainer>
          ))}
      </StyledProjectsList>
    </StyledProjectSection>
  );
};

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.small.sectionTitle};
  letter-spacing: 0.02px;
  display: flex;
  color: ${({ theme }) => theme.colors.subtitleFontColor} !important;
  font-weight: 300;
  margin-right: 7px;
  a {
    color: ${({ theme }) => theme.colors.subtitleFontColor} !important;
    img {
      width: 20px;
      margin-left: 7px;
    }
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    font-size: ${({ theme }) => theme.fonts.big.sectionTitle};
  }
`;

const ProjectSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fonts.small.sectionTitle};
  letter-spacing: 0.02px;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.subtitleFontColor} !important;
  font-weight: 300;
  margin-right: 7px;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    font-size: ${({ theme }) => theme.fonts.big.sectionTitle};
  }
`;

const StyledProjectSection = styled.section`
  grid-area: projects;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobileL}`}) {
    width: ${({ theme }) => `${theme.maxWidthScreenMobile}`};
    margin: 0 auto;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    width: 100%;
  }
`;

const ProjectParagraph = styled.p`
  margin-top: 7px;
  padding-left: 10px;
  font-size: ${({ theme }) => theme.fonts.big.sectionParagraph};
  color: ${({ theme, hasTitleColor = false }) => {
    if (hasTitleColor) return theme.colors.titleFontColor;
    return theme.colors.subtitleFontColor;
  }};
  span {
    color: ${({ theme }) => theme.colors.subtitleFontColor};
    font-weight: 600;
  }
`;

const StyledProjectsList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (min-width: ${({ theme }) => `${theme.breakpoints.tablet}`}) {
    flex-direction: row;
  }
`;

const StyledItemProjectsContainer = styled.li`
  @media (min-width: ${({ theme }) => `${theme.breakpoints.tablet}`}) {
    width: calc(50% - 30px);
  }
  p {
    &:before {
      display: none;
    }
  }
`;

export default Projects;
