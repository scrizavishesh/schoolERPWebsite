"use client"

import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  styled,

} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";


import design4 from "../../../public/design5.png";
import userImage from "../../../public/testimonialUserImage.jpeg";
import MenuPage from "@/components/MenuPaga";
import GetInTouch from "@/components/GetInTouch";

const testimonials = [
  {
    name: "Vivaan Sharma",
    role: "Principal at Greenfield High",
    avatar: userImage,
    text: "Implementing this school management system has been a game-changer. The platform's 50+ modules have helped us centralize every function — from admissions to HR — and improved our school’s efficiency beyond expectations.",
  },
  {
    name: "Arjun Reddy",
    role: "Vice Principal at Silver Oak Academy",
    avatar: userImage,
    text: "What impressed us most is how user-friendly and customizable the system is. It adapts perfectly to our school’s unique needs and has significantly reduced our administrative burden.",
  },
  {
    name: "Rohan Kapoor",
    role: "IT Head at Sunrise Public School",
    avatar: userImage,
    text: "From integration to training and support, the entire experience has been seamless. The platform is secure, scalable, and runs effortlessly on cloud — exactly what a modern school needs.",
  },
  {
    name: "Aditya Iyer",
    role: "Academic Coordinator at Harmony International",
    avatar: userImage,
    text: "The Academic Management module has simplified lesson planning and timetable scheduling. Teachers now spend more time teaching and less time on paperwork.",
  },
  {
    name: "Sai Prasad",
    role: "Admin Head at Lotus Valley School",
    avatar: userImage,
    text: "Managing fees, student records, and HR used to be a challenge. This system has automated everything and brought in complete transparency. We couldn't be happier!",
  },
  {
    name: "Karan Malhotra",
    role: "Teacher at Elite Scholars Academy",
    avatar: userImage,
    text: "As a teacher, I find the platform extremely helpful. Sharing assignments, tracking attendance, and accessing student data has never been easier. It makes teaching more efficient and organized.",
  },
  {
    name: "Nisha Verma",
    role: "Exam Coordinator at Starlight School",
    avatar: userImage,
    text: "The Exam Management module is excellent. From setting up exams to generating report cards, everything is automated, accurate, and time-saving. It's a blessing during board exam season.",
  },
  {
    name: "Rajat Singh",
    role: "HR Manager at Green Leaf School",
    avatar: userImage,
    text: "The HR and payroll modules are so well-designed. They’ve reduced our paperwork drastically and made staff management effortless. The leave and appraisal systems are especially impressive.",
  },
  {
    name: "Priya Nair",
    role: "Parent",
    avatar: userImage,
    text: "As a parent, I love the mobile app! I can track my child’s attendance, exam results, homework, and even fees — all in real-time. It keeps me engaged and informed.",
  },
  {
    name: "Sandeep Mehra",
    role: "Director at Knowledge Tree Group",
    avatar: userImage,
    text: "For multi-campus management, this software is unbeatable. Centralized data access, role-based control, and detailed analytics have helped us manage multiple schools with ease.",
  },
  {
    name: "Meena Rao",
    role: "Librarian at Crescent Academy",
    avatar: userImage,
    text: "The Library Management module has helped us digitize our entire inventory. Issuing and returning books, tracking overdue items — it’s all quick and hassle-free now.",
  },
  {
    name: "Amit Joshi",
    role: "Transport Incharge at Sunbeam School",
    avatar: userImage,
    text: "With the transport and GPS tracking features, we ensure student safety while optimizing our routes. Parents are happy, and we’ve seen a significant reduction in delays.",
  },
];

const Testimonials = () => {
  return (
    <>
      <MenuPage title="TESTIMONIALS" subtitle="Home" />

      <TextimonailBox sx={{ px: { xs: 8, sm: 5, lg: 20 }, py: 4 }}>
        <Grid container spacing={3}>
          {testimonials.map((t, idx) => (
            <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
              <CardContentContainer
                variant="outlined"
                sx={{
                  borderStyle: "dashed",
                  borderColor: "#f97316",
                  borderWidth: "2px",
                  borderRadius: 2,
                  height: "100%",
     
           
                }}
              >
                <CardContent >
                  <Box display="flex" mb={1}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon
                        key={i}
                        fontSize="small"
                        sx={{ color: "#f97316" }}
                      />
                    ))}
                  </Box>
                  <Typography
                    gutterBottom
                    sx={{ width:{xs:"100%"}, fontSize: "17px", fontWeight: 400, color: "#333931" }}
                  >
                    {t.text}
                  </Typography>
                </CardContent>
                <Box display="flex" alignItems="center" mb={3} ml={2}>
                <Avatar src={t.avatar.src} alt={t.name} sx={{ mr: 2 }} />
                <Box>
                    <Typography
                      sx={{
                        color: "#0E2A46",
                        fontSize: "17px",
                        fontWeight: 700,
                      }}
                    >
                      {t.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        fontWeight: 400,
                        color: "#704FE6",
                      }}
                    >
                      {t.role}
                    </Typography>
                  </Box>
                </Box>
              </CardContentContainer>
            </Grid>
          ))}
        </Grid>
      </TextimonailBox>
      <GetInTouch />
    </>
  );
};

const TextimonailBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${design4});
  background-repeat: no-repeat;
  background-position: right 2rem;
  margin-right: 16px;

  @media (max-width: 1400px) {
    background-image: none;
  }
`;

const CardContentContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Testimonials;
