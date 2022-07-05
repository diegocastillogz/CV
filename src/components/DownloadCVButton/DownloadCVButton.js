import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import CVFile from "files/DiegoCastilloCV.pdf";

import { DownloadIcon } from "assets/icons";

const DownloadCVButton = ({ toggleTheme, selectedTheme }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <StyledDownloadCVButton
      onClick={toggleTheme}
      selectedTheme={selectedTheme}
      href={CVFile}
      download="DiegoCastilloCV"
    >
      <DownloadIcon color={colors.subtitleFontColor} />
    </StyledDownloadCVButton>
  );
};

const StyledDownloadCVButton = styled.a`
  width: 30px;
  height: 30px;
  position: fixed;
  left: 5px;
  top: 50px;
  border: none;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.subtitleFontColor};
  background: ${({ theme }) => theme.colors.white};

  svg {
    position: absolute;
    top: 5px;
    right: 5px;
  }
`;

export default DownloadCVButton;
