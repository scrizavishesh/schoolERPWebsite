
'use client'
import {
    Box,
    Grid,
    Typography,
    Card,
    CardContent,
    Avatar,
    Stack,
    Button,
  } from "@mui/material";
  import Slider from "react-slick";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  

import Counter from "@/app/helper/Counter";
import Image from "next/image";


  const stats = [
    { icon: "/Community1.svg", number: 1000, label: "Schools" },
    { icon: "/Community2.svg", number: 4000, label: "Teachers" },
    { icon: "/Community3.svg", number: 100000, label: "Students" },
    { icon: "/Community4.svg", number: 25, label: "Distributors" },
  ];
  
  const testimonials = [
    {
      name: "Vivaan Sharma",
      position: "Principal at Greenfield High",
      id: 1,
      quote:
        "Implementing this school management system has been a game-changer. The platform's 50+ modules have helped us centralize every function — from admissions to HR — and improved our school’s efficiency beyond expectations.",
    },
    {
      name: "Arjun Reddy",
      position: "Vice Principal at Silver Oak ",
      id: 2,
      quote:
        "What impressed us most is how user-friendly and customizable the system is. It adapts perfectly to our school’s unique needs and has significantly reduced our administrative burden.",
    },
    {
      name: "Rohan Kapoor",
      position: "IT Head at Sunrise  School",
      id: 3,
      quote:
        "From integration to training and support, the entire experience has been seamless. The platform is secure, scalable, and runs effortlessly on cloud — exactly what a modern school needs.",
    },
    {
      name: "Aditya Iyer",
      position: " Coordinator at Harmony ",
      id: 4,
      quote:
        "The Academic Management module has simplified lesson planning and timetable scheduling. Teachers now spend more time teaching and less time on paperwork.",
    },
    {
      name: "Sai Prasad",
      position: " Head at Lotus Valley School",
      id: 5,
      quote:
        "Managing fees, student records, and HR used to be a challenge. This system has automated everything and brought in complete transparency. We couldn't be happier!",
    },
    {
      name: "Karan Malhotra",
      position: "Teacher at Elite Scholars ",
      id: 6,
      quote:
        "As a teacher, I find the platform extremely helpful. Sharing assignments, tracking attendance, and accessing student data has never been easier. It makes teaching more efficient and organized.",
    },
    {
      name: "Nisha Verma",
      position: " Coordinator at Starlight School",
  
      quote:
        "The Exam Management module is excellent. From setting up exams to generating report cards, everything is automated, accurate, and time-saving. It's a blessing during board exam season.",
    },
  ];
  
  const Community = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Box
        sx={{
          position: "relative",
          py: 10,
          px: 2,
          backgroundImage: `url('/communityBG.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          mt: 10,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#3A7E76",
            backgroundImage: `url('.png')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: "50px",
            px: { xs: 2, sm: 3, md: 5 },
            py: { xs: 2, sm: 2.5, md: 3 },
            position: "absolute",
            left: "50%",
            top: 0,
            transform: "translate(-50%, -50%)",
            display: "flex",
  
            gap: { xs: 2, sm: 3, md: 5 },
  
            justifyContent: "center",
            color: "white",
            zIndex: 2,
          }}
        >
      
        {stats.map((item, index) => (
            <Box
              key={index}
              sx={{
                width:{xs:'65px',lg:"auto"},
                display: "flex",
                flexDirection: { md: "row",xs:"column"},
                alignItems: "center",
                gap: { xs: 0.2, sm: 1 },
                justifyContent: "center",
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "white",
                  color: "#3A7E76",
                  mb: 1,
                  width: { xs: 40, sm: 40, md: 50 },
                  height: { xs: 40, sm: 40, md: 50 },
                }}
              >
                <Image 
                width={100}
                height={100}
                  src={item.icon}
                  alt={item.label}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Avatar>
  
              <Box
                sx={{
                  display: { xs: "flex" },
                  flexDirection: { xs: "column" },
                  alignItems: { xs: "center" },
                  justifyContent: { xs: "center" },
                }}
              >
                <Counter
                  target={item.number}
                  format={(val) =>
                    item.number >= 1000
                      ? `${(val >= item.number
                          ? item.number
                          : val
                        ).toLocaleString()}+`
                      : val
                  }
                />
  
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "12px", sm: "13px", md: "14px", lg: "15px" },
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            </Box>
          ))}
  
        </Box>
  
        {/* White Testimonial Section */}
        <Box
          sx={{
            px: { xs: 0, md: 12 },
            py: 5,
       
            overflow: "hidden",
            "& .slick-slide": { overflow: "visible" },
            "& .slick-track": { overflow: "visible" },
            "& .slick-list": { overflow: "visible" },
          }}
        >
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <Box key={testimonial.id} sx={{ px: 2 }}>
                <Box sx={{ position: "relative" }}>
                  {/* Image overlaps the Card */}
                  <Box
                    component="img"
                    src="/CommunityQuote.svg"
                    alt="Quote Icon"
                    sx={{
                      position: "absolute",
                      top: -28,
                      left:-3,
                      width: 50,
                      height: 50,
                      zIndex: 10,
                    }}
                  />
  
                  <Card
                    sx={{
                      borderRadius: "15px",
                      border: "1px solid black",
                      p: 2,
                      width: "406px",
                      height: "301px",
                      maxWidth: { xs: "250px", sm: "300px" },
                      textAlign: "left",
                      background: "transparent",
                      m:{xs:3},
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography sx={{ color: "#333931", fontWeight: 400, mt: 2 }}>
                      {testimonial.quote}
                    </Typography>
                    <CardContent sx={{ px: 0 }}>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: "#0E2A46",
                          fontSize: "20px",
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography sx={{ color: "#04857A", fontWeight: 400 }}>
                        {testimonial.position}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    );
  };
  
  export default Community;
  