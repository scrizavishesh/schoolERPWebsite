"use client";

import Image from "next/image";
import { styled } from "@mui/material";

import design1 from   "../../public/design1.png";
import design2 from   "../../public/design2.png";
import design3 from   "../../public/design3.png";
import design4 from   "../../public/design4 2.png";
import menuImage from "../../public/menuImageKa.jpeg";

const MenuPage = ({ title, subtitle }) => {
  return (
    <MenuPageContainer>
      <DesignOne>
        <StyledImage src={design1} alt="Design 1" width={77} height={85} style={{ marginBottom: 90 }} />
      </DesignOne>
      <DesignOne>
        <StyledImage src={design2} alt="Design 2" width={85} height={24} style={{ marginTop: 150 }} />
      </DesignOne>
      <MenuContentSection>
        <ContentTitle>{title}</ContentTitle>
        <ContentDescription>
          {subtitle} <ContentSpan>//</ContentSpan> {title}
        </ContentDescription>
      </MenuContentSection>
      <DesignOne>
        <StyledImage src={design3} alt="Design 3" width={41} height={37} style={{ marginTop: 240, marginLeft: 60 }} />
      </DesignOne>
      <DesignOne>
        <StyledImage src={design4} alt="Design 4" width={66} height={65} style={{ marginBottom: 240, marginLeft: 130 }} />
      </DesignOne>
    </MenuPageContainer>
  );
};

export default MenuPage;

// Styled components
const MenuPageContainer = styled("div")`
  width: 100vw;
  height: 365px;
  background-image: url(${menuImage.src});
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-columns: 17% 17% 32% 17% 17%;

  @media (max-width: 1400px) {
    width: auto;
  }
  @media (max-width: 1100px) {
    width: auto;
  }
  @media (max-width: 600px) {
    width: auto;
  }
`;

const DesignOne = styled("div")`
  width: 100%;
  height: 100%;
  padding: 23px;
  display: flex;
  align-items: center;
`;

const MenuContentSection = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;
`;

const ContentTitle = styled("h2")`
width:140%;
text-align:center;
  color: #0e2a46;
  font: 700 60px "Epilogue";
  text-transform: uppercase;

  @media (max-width: 1100px) {
    font: 700 38px "Epilogue";
  }
  @media (max-width: 600px) {
    font: 700 25px "Epilogue";
  }
`;

const ContentSpan = styled("span")`
  color: #fc6441;
`;

const ContentDescription = styled("p")`
  color: #0e2a46;
  font: 400 16px "Sora";

  @media (max-width: 1100px) {
    font: 400 14px "Sora";
  }

  @media (max-width: 600px) {
    font: 400 8px "Sora";
  }
`;

const StyledImage = styled(Image)`
  @media (max-width: 1300px) {
    display: none;
  }
`;
