import { useState, useEffect } from "react";
import styled from "styled-components";
import { jsPDF } from "jspdf";
import downloadLightIcon from "assets/icons/download-light.png";
import downloadDarkIcon from "assets/icons/download-dark.png";

const DownloadCVButton = ({ selectedTheme, header }) => {
  const { socialNetworks } = header;

  const icons = {
    light: downloadLightIcon,
    dark: downloadDarkIcon,
  };
  const doc = new jsPDF({
    orientation: "p",
    unit: "pt",
    format: "a4",
    hotfixes: ["px_scaling"],
    compressPdf: true,
  });

  const [contentHTML, setContentHTML] = useState(null);

  useEffect(() => {
    const element = document.querySelector("main");
    if (element) {
      setContentHTML(element);
    }
  }, []);

  return (
    <StyledDownloadCVButton
      onClick={async () => {
        doc.setDrawColor(0);
        doc.setFillColor(255, 0, 0);

        await doc.link(40, 110, 150, 20, { url: socialNetworks[0].href });
        await doc.link(240, 110, 150, 20, { url: socialNetworks[1].href });
        await doc.link(420, 110, 150, 20, { url: socialNetworks[2].href });
        await doc.link(20, 735, 210, 15, {
          url: "https://github.com/diegocastillogz/Wikipedia-genealogical-Tree",
        });
        await doc.link(25, 755, 200, 15, {
          url: "https://wikipedia-genealogical-tree.netlify.app/",
        });

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
      <img src={icons[selectedTheme]} />
    </StyledDownloadCVButton>
  );
};

const StyledDownloadCVButton = styled.button`
  width: 35px;
  height: 35px;
  position: fixed;
  left: 5px;
  top: 50px;
  border: none;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.subtitleFontColor};
  background: ${({ theme }) => theme.colors.white};
  display: none;
  @media (min-width: ${({ theme }) => `${theme.breakpoints.laptop}`}) {
    display: block;
  }
  img {
    position: absolute;
    top: 3px;
    right: 3.2px;
    width: 22px;
  }
`;

export default DownloadCVButton;
