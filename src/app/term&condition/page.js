"use client";

import GetInTouch from "@/components/GetInTouch";
import MenuPage from "@/components/MenuPaga";

import { styled } from "@mui/material";
import React from "react";

const term_and_conditions = [
  {
    title: "→ Acceptance of Terms",
    content: `
        By registering, accessing, or using Scriza School ERP, you acknowledge that
         you have read, understood, and agreed to these Terms and Conditions. These terms
          define the rules and responsibilities for using the ERP platform, including how you interact with its features and data.
           Your continued use signifies your acceptance of these conditions. If you disagree with any part of the terms, you are not 
           authorized to use the ERP. It is your responsibility to comply with all applicable laws and institutional
         policies while using the service. Scriza reserves the right to modify these terms at any time without prior notice.`,
  },
  {
    title: "→ User Eligibility",
    content: `
      Scriza School ERP is designed exclusively for use by authorized individuals such as school staff, 
      teachers, students, and parents. By accessing or registering on the platform, you confirm that you fall within one 
      of these eligible categories and that the information you provide is true, accurate, and up to date. You must have the 
      legal authority or appropriate permission to access and use the system. Unauthorized access or use of the ERP is strictly 
      prohibited and may result in suspension or legal action. It is your responsibility to ensure your use of the system aligns
       with school and institutional guidelines.`,
  },
  {
    title: "→ User Responsibilities",
    content: `
     Users of Scriza School ERP are expected to act responsibly and ethically. 
     You must keep your login credentials confidential and never share them with others. 
     The ERP should only be used for lawful, educational purposes that support academic and administrative functions.
      Any misuse, including attempts to disrupt, damage, or interfere with the system’s performance, is strictly prohibited.
       Violations may lead to access restrictions, disciplinary action, or legal consequences
       , depending on the nature and severity of the breach.`,
  },
  {
    title: "→ Data Privacy",
    content: `
       We value your privacy and are committed to protecting your personal information.
        All user data is collected, stored, and processed securely, following strict confidentiality standards.
         Our practices fully comply with the guidelines outlined in our [Privacy Policy],
          ensuring your data is used only for authorized educational and administrative purposes.`,
  },
  {
    title: "→ Intellectual Property",
    content: `
       All content, software, and materials in the ERP are the property of Scriza or its licensors. 
       Unauthorized use, copying, or distribution is prohibited.`,
  },
  {
    title: "→ Modification of Services",
    content: `
        Scriza reserves the full right to update, modify, or discontinue any feature,
         functionality, or section of the ERP platform at any time without prior notice.
          These changes may be made to improve performance, security, or usability, 
          and users are responsible for reviewing updates and continuing to comply with revised terms.`,
  },
  {
    title: "→ Limitation of Liability",
    content: `
        Scriza shall not be held liable for any direct, indirect, incidental, or consequential damages arising 
        from the use or inability to use the ERP platform. This includes data loss, service interruptions, or system errors.
         Users assume full responsibility for their use of the platform and its associated risks.`,
  },
  {
    title: "→ Termination",
    content: `
       Scriza reserves the right to suspend or terminate user access to the ERP platform at its sole discretion, 
       particularly in cases of misuse, unauthorized access, or violation of policies. Such actions may be taken without
        prior notice to maintain system integrity, security, and compliance with institutional or legal requirements.`,
  },
];

const Page = () => {
  return (
    <div>
      <MenuPage title="Terms & Conditions" subtitle="Home" />
      <MainContainer>
        <SectionOne>
          <TermText>Terms And Conditions</TermText>
          <ConditionsPara>
            Welcome to Scriza School ERP. By accessing or using our services,
            you agree to comply with the terms and conditions outlined herein.
            These terms govern your use of the platform, including access to
            school-related data, communication tools, and other features
            provided by Scriza. Users are expected to use the system
            responsibly, maintain confidentiality, and avoid any misuse. If you
            are using the ERP on behalf of an institution, you confirm that you
            have the authority to do so. Please review these terms carefully. If
            you do not agree with any part of them, you should not use this
            service.
          </ConditionsPara>
        </SectionOne>

        {term_and_conditions &&
          term_and_conditions.map((curItem, i) => {
            return (
              <CurItemSection>
                <CurItemTitle>{curItem.title}</CurItemTitle>
                <CurItemPara>{curItem.content}</CurItemPara>
              </CurItemSection>
            );
          })}
      </MainContainer>
      <GetInTouch />
    </div>
  );
};

export default Page;

const MainContainer = styled("div")`
  width: 100vw;
  height: auto;
  padding-top: 40px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const SectionOne = styled("div")`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TermText = styled("h1")`
  font: 700 28px "Epilogue";
  color: #0E2A4;

  @media (max-width: 600px) {
    font: 700 24px "Epilogue";
  }
`;

const ConditionsPara = styled("p")`
  font: 400 16px "Sora";
  color: #333931;
  line-height: 30.3px;

  @media (max-width: 600px) {
    font: 400 14px "Sora";
    line-height: 25.3px;
  }
`;

const CurItemSection = styled("div")`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  padding: 20px;
`;

const CurItemTitle = styled("h3")`
  font: 700 18px "Epilogue";
  color: #141414;
`;
const CurItemPara = styled("p")`
  font: 400 16px "Sora";
  color: #333931;
  line-height: 30.3px;

  @media (max-width: 600px) {
    font: 400 14px "Sora";
    line-height: 25.3px;
  }
`;
