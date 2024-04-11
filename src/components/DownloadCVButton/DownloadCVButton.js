import { useState, useEffect, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { jsPDF } from "jspdf";
import { DownloadIcon } from "assets/icons";

const DownloadCVButton = () => {
  const doc = new jsPDF({
    orientation: "p",
    unit: "pt",
    format: "a4",
    hotfixes: ["px_scaling"],
    compressPdf: true,
  });

  const [contentHTML, setContentHTML] = useState(null);

  const { colors } = useContext(ThemeContext);

  useEffect(() => {
    const element = document.querySelector("main");
    if (element) {
      setContentHTML(element);
    }
  }, []);

  return (
    <StyledDownloadCVButton
      onClick={async () => {
        await doc.html(contentHTML, {
          callback: (doc) => {
            doc.save("DiegoCastilloCV.pdf");
          },
          margin: [0, 0],
          html2canvas: {
            scale: 0.59,
          },
        });
      }}
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
