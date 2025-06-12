"use client";

import GetInTouch from "@/components/GetInTouch";
import MenuPage from "@/components/MenuPaga";

import { styled } from "@mui/material";
import React from "react";

const refundPolicy = [
  {
    title: "→ Subscription-based Services",
    content: `
    All our ERP services are offered on a subscription basis. Once a subscription is purchased, it is considered final and non-refundable. We encourage you to evaluate our demo or trial version before subscribing.`,
  },
  {
    title: "→ No Refund for Partial Usage",
    content: `
    We do not provide refunds or credits for partially used services or unused time during your subscription. Once a subscription begins, all charges are final. Please ensure your commitment before purchasing, as cancellation or non-usage does not qualify for any refund or credit during the active subscription period.`,
  },
  {
    title: "→ Technical Issues",
    content: `
    If you experience any technical issues, our support team will make every effort to resolve the problem promptly. Refunds will not be issued for temporary service interruptions.`,
  },
  {
    title: "→ Cancellation",
    content: `
  You may cancel your subscription at any time. The cancellation will be effective at the end of the current billing cycle, and no further charges will be applied. However, no refund will be provided for the remaining period.`,
  },
  {
    title: "→ Exceptional Cases",
    content: `
      In rare and exceptional cases (e.g., duplicate payment or billing error), you may request a refund by contacting us at [Insert Contact Email]. Each request will be reviewed individually.`,
  },

  {
    title: "→ Policy Updates",
    content: `
       We may update or change this refund policy anytime. Any modifications will be posted on this page along with the updated date, so please review it periodically to stay informed about any changes.`,
  },
  
];

const Page = () => {
  return (
    <div>
      <MenuPage title="Refund Policy" subtitle="Home" />
      <MainContainer>
        <SectionOne>
          <RefundPolicyText>Refund Policy</RefundPolicyText>
          <RefundDetails>
          Thank you for choosing Scriza ERP. We strive to provide the best possible experience and support for our customers. Please read our refund policy carefully before making a purchase.
          </RefundDetails>
        </SectionOne>

        {refundPolicy &&
          refundPolicy.map((curItem, i) => {
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

const RefundPolicyText = styled("h1")`
  font: 700 28px "Epilogue";
  color: #0E2A4;

  @media (max-width: 600px) {
    font: 700 24px "Epilogue";
  }
`;

const RefundDetails = styled("p")`
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
