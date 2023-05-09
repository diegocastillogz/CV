import { useContext, useEffect, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { LinkIcon, GithubIcon } from "assets/icons";

const Projects = () => {
  const [repos, setRepos] = useState([]);

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

  const { colors } = useContext(ThemeContext);

  return (
    <StyledProjectSection>
      <h2>Projects</h2>
      <ul>
        {repos
          ?.filter(({ name }) => name !== "CV")
          ?.map(
            ({
              name,
              id,
              description,
              clone_url,
              topics,
              language,
              homepage,
            }) => (
              <StyledItemProjectsContainer key={id}>
                <ProjectSubtitle>
                  <h3>{name}</h3>
                  <a target="_blank" href={homepage} rel="noreferrer">
                    <LinkIcon color={colors.subtitleFontColor} />
                  </a>
                  <a target="_blank" href={clone_url} rel="noreferrer">
                    <GithubIcon color={colors.subtitleFontColor} />
                  </a>
                </ProjectSubtitle>
                <ProjectParagraph hasTitleColor>{description}</ProjectParagraph>
                <ProjectParagraph>
                  <span>Made on {language}</span>
                </ProjectParagraph>
                <ProjectParagraph>{topics?.join(", ")}</ProjectParagraph>
              </StyledItemProjectsContainer>
            )
          )}
      </ul>
    </StyledProjectSection>
  );
};

const ProjectSubtitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.small.sectionTitle};
  display: flex;
  margin: 30px 0 5px;
  h3 {
    color: ${({ theme }) => theme.colors.subtitleFontColor} !important;
    font-weight: 300;
    margin-right: 7px;
  }
  a {
    color: ${({ theme }) => theme.colors.subtitleFontColor} !important;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    font-size: ${({ theme }) => theme.fonts.big.sectionTitle};
  }
`;

const StyledProjectSection = styled.section`
  grid-area: projects;
  padding: ${({ theme }) =>
    `${theme.paddings.MDVerticalPadding} ${theme.paddings.XSHorizontalPadding} 0`};

  @media (min-width: ${({ theme }) => `${theme.breakpoints.mobileL}`}) {
    width: ${({ theme }) => `${theme.maxWidthScreenMobile}`};
    margin: 0 auto;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    width: 100%;
    padding: ${({ theme }) =>
      `${theme.paddings.MDVerticalPadding} ${theme.paddings.MDHorizontalPadding} 0`};
  }
`;

const ProjectParagraph = styled.p`
  margin-top: 7px;
  padding-left: 10px;
  color: ${({ theme, hasTitleColor = false }) => {
    if (hasTitleColor) return theme.colors.titleFontColor;
    return theme.colors.subtitleFontColor;
  }};
  span {
    color: ${({ theme }) => theme.colors.subtitleFontColor};
    font-weight: 600;
  }
`;

const StyledItemProjectsContainer = styled.li`
  margin-bottom: 14px;
  p {
    &:before {
      display: none;
    }
  }
`;

export default Projects;
