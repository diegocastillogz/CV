import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/globalStyles";
import { lightTheme, darkTheme } from "styles/theme";

import Header from "components/Header/Header";
import BodyContainer from "components/BodyContainer/BodyContainer";
import WorkExperience from "components/WorkExperience/WorkExperience";

import CVData from "mocks/mock.json";
import Skills from "components/Skills/Skills";
import Education from "components/Education/Education";
import Languages from "components/Languages/Languages";
import Layout from "components/Layout/Layout";
import Projects from "components/Projects/Projects";
import ThemeSwitch from "components/ThemeSwitch/ThemeSwitch";
import DownloadCVButton from "components/DownloadCVButton/DownloadCVButton";

function App() {
  const {
    data: { header, experience, skills, education, languages },
  } = CVData;

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Layout>
        <Header header={header} selectedTheme={theme} />
        <BodyContainer>
          <WorkExperience experience={experience} />
          <Skills skills={skills} />
          <Education education={education} />
          <Languages languages={languages} />
          <Projects selectedTheme={theme} />
          <ThemeSwitch selectedTheme={theme} toggleTheme={toggleTheme} />
        </BodyContainer>
      </Layout>
      <DownloadCVButton selectedTheme={theme} header={header} />
    </ThemeProvider>
  );
}

export default App;
