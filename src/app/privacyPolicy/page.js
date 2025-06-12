"use client";

import GetInTouch from "@/components/GetInTouch";
import MenuPage from "@/components/MenuPaga";

import { styled } from "@mui/material";
import React from "react";

const privacy_policy = [
  {
    title: "→ Information We Collect",
    content: `
        We use the collected information to:`,
    bulletPoints: [
      "Personal details: Name, email, contact number, address, student ID, etc.",
      "Academic data: Attendance, grades, assignments, exam results.",
      "Login credentials and usage history.",
    ],
  },
  {
    title: "→ How We Use Your Information",
    content: `
   We use the collected information to:`,
    bulletPoints: [
      "Provide and manage school-related services.",
      "Communicate important updates or announcements.",
      "Improve system performance and user experience.",
      "Ensure compliance with school and regulatory policies.",
    ],
  },
  {
    title: "→ Data Sharing",
    content: `
     We do not sell, rent, or trade your personal data to any third parties. The information you provide may only be shared with authorized school staff and verified service providers who support the ERP’s academic and administrative functions. Such sharing is done under strict confidentiality agreements and only when necessary to deliver services or improve system performance. We ensure that all data sharing is secure, limited in scope, and compliant with privacy laws and school policies.`,
  },
  {
    title: "→ Data Security",
    content: `
   We use advanced technical and organizational safeguards to ensure your data remains secure at all times. These measures protect against unauthorized access, misuse, alteration, or disclosure of personal information stored within the ERP system, ensuring a safe and trusted environment for all users, including students, parents, and school staff.`,
  },
  {
    title: "→ Cookies and Tracking",
    content: `
   Our platform uses cookies to improve user experience by remembering preferences and enhancing functionality. These cookies help provide a smoother and more personalized experience. You can disable cookies through your browser settings; however, doing so may affect certain features or limit functionality within the ERP platform for optimal use.`,
  },
  {
    title: "→ User Rights",
    content: `
       You have the right to access, update, or request the deletion of your personal data at any time, in accordance with school policies and applicable legal regulations governing data privacy and protection.`,
  },
  {
    title: "→ Changes to this Policy",
    content: `
       We may revise this Privacy Policy occasionally to reflect changes in our practices or legal requirements. Any updates will be posted on this page, along with the new effective date, so users remain informed about how their data is protected.`,
  },
  {
    title: "→ Contact Us",
    content: `
       If you have any questions or concerns regarding this Privacy Policy, please contact us at:`,
    bulletPoints: [
      "Contact Email - sales@scriza.in",
      "Contact Number - +919116011899",
      "Address - Ground Floor, Logix Park (Supreme Work), A-4-5, A Block, Sector 16, Noida, Uttar Pradesh 201301",
    ],
  },
];

const Page = () => {
  return (
    <div>
      <MenuPage title="Privacy Policy" subtitle="Home" />
      <MainContainer>
        <SectionOne>
          <PolicyText>Privacy Policy</PolicyText>
          <PolicyDetails>
            Scriza School ERP is fully committed to safeguarding the privacy and
            personal information of all its users, including school staff,
            students, parents, and administrators. This Privacy Policy explains
            how we collect, use, store, and protect your data while you interact
            with our platform. We ensure that all information provided is
            handled with strict confidentiality and used solely for authorized
            educational and administrative purposes. We follow industry-standard
            security practices to prevent unauthorized access, misuse, or loss
            of data. By using our ERP, you consent to the terms outlined in this
            policy. For any concerns, you may contact our support team anytime.
          </PolicyDetails>
        </SectionOne>

        {privacy_policy &&
          privacy_policy.map((curItem, i) => {
            return (
              <CurItemSection key={i}>
                <CurItemTitle>{curItem.title}</CurItemTitle>
                <CurItemPara>{curItem.content}</CurItemPara>

                {curItem.bulletPoints &&
                  curItem.bulletPoints.map((curBulet, i) => {
                    return <BulletList key={i}>{curBulet}</BulletList>;
                  })}
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

const PolicyText = styled("h1")`
  font: 700 28px "Epilogue";
  color: #0E2A4;

  @media (max-width: 600px) {
    font: 700 24px "Epilogue";
  }
`;

const PolicyDetails = styled("p")`
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


const BulletList=styled('li')`

  font: 400 15px "Sora";
  color: #333931;


  @media (max-width: 600px) {
    font: 400 14px "Sora";
    line-height: 25.3px;
    text-align:left;
  }

`