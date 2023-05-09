import styled from "styled-components";
import sunImage from "assets/icons/sun.svg";
import moonIcon from "assets/icons/moon.svg";

const ThemeSwitch = ({ toggleTheme, selectedTheme }) => {
  return (
    <StyledThemeSwitch onClick={toggleTheme} selectedTheme={selectedTheme}>
      <img
        src={selectedTheme === "light" ? moonIcon : sunImage}
        alt={
          selectedTheme === "light"
            ? "light mode selected"
            : "dark mode selected"
        }
      />
    </StyledThemeSwitch>
  );
};

const StyledThemeSwitch = styled.button`
  width: 35px;
  height: 35px;
  position: fixed;
  left: 5px;
  top: 7px;
  background: ${({ theme, selectedTheme }) =>
    selectedTheme === "light" ? theme.colors.black : theme.colors.skyblue};
  border: 2px solid
    ${({ theme, selectedTheme }) =>
      selectedTheme === "light" ? theme.colors.silver : theme.colors.gold};
  border-radius: 50%;

  img {
    position: relative;
    top: 1px;
    right: 2px;
  }
`;

export default ThemeSwitch;
