import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import html2pdf from "html2pdf.js";

import { DownloadIcon } from "assets/icons";

const DownloadCVButton = () => {
  const { colors } = useContext(ThemeContext);
  const pdfFile = document.querySelector("main");

  let pdfOptions = {
    filename: "DiegoCastilloCV.pdf",
    image: { type: "png", quality: 1 },
    pagebreak: { mode: "avoid-all" },
    html2canvas: { scale: 2 },
    jsPDF: { format: [245, 640], orientation: "portrait" },
  };

  return (
    <StyledDownloadCVButton
      onClick={() => html2pdf().set(pdfOptions).from(pdfFile).save()}
    >
      <DownloadIcon color={colors.subtitleFontColor} />
    </StyledDownloadCVButton>
  );
};

const StyledDownloadCVButton = styled.button`
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
    top: 3px;
    right: 2px;
  }
`;

export default DownloadCVButton;
