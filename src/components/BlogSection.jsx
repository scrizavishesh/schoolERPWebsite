"use client";

import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  styled,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";

const blogs = [
  {
    img: "/BlogImage1.svg",
    date: "14 June 2023",
    comment: "06",
    desc: "Explore lesson planning, assignments, reports, and communication tools for educators.",
  },
  {
    img: "/BlogImage2.svg",
    date: "21 April 2024",
    comment: "06",
    desc: "Guide for school administrators to select the best ERP solution based on their needs.",
  },
  {
    img: "/BlogImage3.svg",
    date: "14 June 2023",
    comment: "06",
    desc: "Showcase real-time notifications, chat features, and student performance tracking.",
  },
];

const BlogSection = () => {
  return (
    <Box
      sx={{ px: { xs: 6, sm: 20, md: 15, lg: 22 }, mb: 6, maxWidth: "1400px" }}
      py={4}
    >
      {/* Section Heading */}
      <Box textAlign="left" mb={4}>
        <Button
          sx={{
            backgroundColor: "#04857A",
            color: "white",
            maxWidth: "125px",
            height: "32px",
            mb: 2,
            borderRadius: "5px",
          }}
        >
          BLOG POST
        </Button>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: { xs: "25px", sm: "28px" },
            lineHeight: { xs: "45px", sm: "58px" },
            color: "#0E2A46",
          }}
        >
          Most Popular Post.
        </Typography>
      </Box>

      {/* Blog Cards */}
      <Grid container spacing={2}>
        {blogs.map((item, index) => (
          <Grid
            sx={{ mr: { xs: 130, lg: 0 } }}
            item
            xs={12}
            md={6}
            lg={4}
            key={index}
          >
            <Card
              sx={{
                p: { xs: 0, lg: 2 },
                borderRadius: 3,
                bgcolor: "#F5F5F5",
                width: "335px",
                height: "450px",
              }}
            >
              <ImageBox>
                <StyledImage
                  src={item.img}
                  alt={`blog-${index}`}
                  width={500}
                  height={250}
                />
              </ImageBox>

              <CardContent>
                <Typography
                  sx={{
                    color: "#0E2A46",
                    fontSize: "19px",
                    fontWeight: 600,
                    mt: 2,
                  }}
                  my={1}
                >
                  {item.desc}
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#04857A",
                    borderRadius: "50px",
                    pr: 10,
                    pl: 4,
                    py: 0,
                    textTransform: "none",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#346B65",
                    },
                    width: "auto",
                    mt: 2,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      lineHeight: "58px",
                    }}
                  >
                    Read More
                  </Typography>

                  <Box
                    sx={{
                      position: "absolute",
                      right: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                      backgroundColor: "#1A635D",
                      borderRadius: "50%",
                      width: 55,
                      height: 55,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      ml: 2,
                    }}
                  >
                    <ArrowForwardIcon sx={{ color: "#fff" }} />
                  </Box>
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogSection;

const ImageBox = styled(Box)`
  border-radius: 16px;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  transition: transform 0.8s ease;
  object-fit: cover;
  height: auto;
  width: 100%;

  &:hover {
    transform: scale(0.9);
  }
`;
