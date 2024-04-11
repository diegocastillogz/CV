import { useEffect, useState } from "react";
import styled from "styled-components";

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

  return (
    <StyledProjectSection>
      <h2>Projects</h2>
      <StyledProjectsList>
        {repos
          ?.filter(({ name }) => name !== "CV")
          ?.map(({ name, id, description, clone_url, topics, language }) => (
            <StyledItemProjectsContainer key={id}>
              <ProjectSubtitle>
                {name}
                <a target="_blank" href={clone_url} rel="noreferrer">
                  <ProjectParagraph hasTitleColor>
                    {description}
                  </ProjectParagraph>
                </a>
              </ProjectSubtitle>
              <ProjectParagraph>
                <span>Made on {language}</span>
              </ProjectParagraph>
              <ProjectParagraph>{topics?.join(", ")}</ProjectParagraph>
            </StyledItemProjectsContainer>
          ))}
      </StyledProjectsList>
    </StyledProjectSection>
  );
};

const ProjectSubtitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.small.sectionTitle};
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.subtitleFontColor} !important;
  font-weight: 300;
  margin-right: 7px;
  a {
    color: ${({ theme }) => theme.colors.subtitleFontColor} !important;
  }

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
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledItemProjectsContainer = styled.li`
  width: calc(50% - 30px);
  p {
    &:before {
      display: none;
    }
  }
`;

export default Projects;
