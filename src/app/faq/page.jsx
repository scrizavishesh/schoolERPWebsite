'use client'
import React, { useState } from "react";
import edu2all from "../../../public/edu2All.jpg";
import edu2AllEligible from "../../../public/edu2AllEligible.jpg";
import cloudBased from "../../../public/cloudBased.jpg";
import features from   "../../../public/feaures.jpg";
import features2 from   "../../../public/features.jpg";


import {Accordion, AccordionSummary,AccordionDetails,Typography,styled,
} from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import MenuPage from "@/components/MenuPaga";
import GetInTouch from "@/components/GetInTouch";
import Image from "next/image";

const accordianContent = [
  {
    header: "What is edu2all?",
    leftContent: (
      <>
        <strong>edu2all </strong> is a comprehensive cloud-based School
        Management Software designed to streamline and automate all
        administrative and academic operations of educational institutions. It
        offers 50+ powerful modules including academic, student, exam, HR,
        finance, and communication management.
      </>
    ),
    image: cloudBased,
  },
  {
    header: "Who can use edu2all?",
    leftContent: (
      <>
        Our platform is ideal for all types of educational institutions —
        schools, colleges, coaching centers, and multi-branch academic groups.
        It is suitable for principals, administrators, teachers, students,
        parents, and staff.
      </>
    ),
    image: features,
  },
  {
    header: "Is the software cloud-based or on-premise?",
    leftContent: (
      <>
        edu2all is 100% <strong>cloud-based</strong>, which means you can access
        it anytime, anywhere from any internet-enabled device — no local
        installation required.
      </>
    ),
    image: edu2all,
  },
  {
    header: "What are the main features of edu2all?",
    leftContent: "Some key features include : ",
    bulletPoints: [
      "Academic Management",
      "Student & Attendance Tracking",
      "Examination & Report Card Generation",
      "Fee & Payment Management",
      "HR & Payroll",
      "Transport with GPS",
      "Library & Inventory",
      "Mobile App Access",
      "Parent-Teacher Communication",
      "Real-time Notifications & Reports",
    ],
    endPoints:
      "With 50+ modules, the system can be customized to meet your institution’s unique needs.",
    image: features2,
  },
  {
    header: "Is there a mobile app available?",
    leftContent: (
      <>
        Yes, edu2all comes with a <strong>dedicated mobile app</strong> for
        Android and iOS. It provides real-time access to attendance, homework,
        fees, results, announcements, and communication for parents, teachers,
        and students.
      </>
    ),
    image: edu2AllEligible,
  },
];

const FaQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <FaqMainContainer>
      <MenuPage title="FaQs" subtitle="Home" />
      <AccordianSection>
        {accordianContent &&
          accordianContent.map((curAccordian, index) => (
            <AccordianContainer
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
            >
              <AccordianSummary
                expandIcon={
                  expanded === `panel${index}` ? (
                    <RemoveOutlinedIcon />
                  ) : (
                    <AddOutlinedIcon />
                  )
                }
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                expanded={expanded === `panel${index}`}
              >
                <AccordianHeader
                  variant="h6"
                  expanded={expanded === `panel${index}`}
                >
                  {curAccordian.header}
                </AccordianHeader>
              </AccordianSummary>
              <AccordianDetails>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {curAccordian.leftContent && (
                    <DetailsTypography>
                      {curAccordian.leftContent}
                    </DetailsTypography>
                  )}
                  {curAccordian.bulletPoints && (
                    <BulletList>
                      {curAccordian.bulletPoints.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </BulletList>
                  )}
                  {curAccordian.endPoints && (
                    <DetailsTypography>
                      {curAccordian.endPoints}
                    </DetailsTypography>
                  )}
                </div>
                {curAccordian.image &&  (
                  <DetailsImage
                  width={420}

                  style={{borderRadius:"13px"}}
                    src={curAccordian.image}
                    alt="FAQ Image"
                    className="faq-image"
                  />
                )}
              </AccordianDetails>
            </AccordianContainer>
          ))}
      </AccordianSection>
<GetInTouch/>
    </FaqMainContainer>
  );
};

export default FaQ;

// Styled components

const AccordianSection = styled("div")`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;
const AccordianContainer = styled(Accordion)`
  width: 70%;
  border-bottom: 1px solid gray;

  @media (max-width: 1100px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const FaqMainContainer = styled("div")`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const AccordianHeader = styled(Typography)`
  font: 600 14px "Epilogue";
  color: ${(props) => (props.expanded ? "#FFFFFF" : "#333931")};
  @media (max-width: 1100px) {
    font: 600 16px "Epilogue";
  }

  @media (max-width: 600px) {
    font: 600 14px "Epilogue";
  }
`;

const AccordianSummary = styled(AccordionSummary)`
  background-color: ${(props) => (props.expanded ? "#04857A" : "#FFFFFF")};
  height:62px;
`;

const AccordianDetails = styled(AccordionDetails)`
 display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;

 @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const DetailsTypography = styled(Typography)`
width:90%;
  font: 400 14px "Sora";
  color: #333931;
  white-space: pre-line;

  @media (max-width: 1100px) {
    font: 400 18px "Sora";
  }

  @media (max-width: 600px) {
    font: 400 12px "Sora";
  }
`;

const DetailsImage = styled(Image)`
@media (max-width: 600px) {
    width: 100%;
    height: 150px;
  }
`;

const BulletList = styled("ul")`
  font: 400 14px "Sora";
  color: #333931;
  padding-left: 20px;
  list-style-type: disc;

  @media (max-width: 1100px) {
    font: 400 16px "Sora";
  }

  @media (max-width: 600px) {
    font: 400 12px "Sora";
  }

  li {
    margin-bottom: 8px;
  }
`;
