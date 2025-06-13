
"use client"
import { Box, Grid, Typography, Button, Stack, styled } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useState } from "react";

import DemoModalForm from "./DemoModalForm";

const AboutUs = () => {
  const [openDemoDialog, setOpenDemoDialog] = useState(false);

  return (
    <AboutBox
      sx={{
        py: { xs: 20, md: 12, sm: 40 },
        pl: { xs: 5, md: 20 },
        pr: { xs: 5, md: 20 },

        height: { lg: "600px", xs: 'auto' }
      }}
    >
      <Grid container spacing={{ lg: 4, xs: 0 }} sx={{

      }} alignItems="center">
        {/* Left Side - Images */}
        <Grid size={{ xs: 12, lg: 6, sm: 7 }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: 1000,
              height: { xs: 600, md: 650 },
              mx: "auto",
              my: { lg: 8 },
            }}
          >
            {/* Top Left Image */}
            <img
              src="/AboutUsImage1.svg" // replace with actual image path
              alt="Top Left"
              sx={{
                position: "absolute",
                top: { md: 80, xs: -113, sm: -240 },
                left: { md: 50, xs: -10, sm: 20 },
                width: { xs: "70%", md: "35%", sm: "100%" },
                borderRadius: 2,
                objectFit: "cover",

              }}
            />
            <img
              src="/AboutUsImage2.svg"
              alt="Top Right"
              sx={{
                position: "absolute",
                top: { md: 180, xs: -43, sm: -100 },
                right: { md: 180, xs: -40, sm: -300 },
                width: { xs: "45%", md: "20%", sm: "58%" },
                borderRadius: 2,
                objectFit: "cover",

              }}
            />

            {/* Bottom Image */}
            <img
              src="/AboutUsImage3.svg"
              alt="Bottom Right"
              sx={{
                position: "absolute",
                bottom: { md: 50, xs: 220, sm: 60 },
                right: { md: 100, sm: -300 },
                width: { xs: "100%", md: "65%", sm: "100%" },
                borderRadius: 2,
                objectFit: "cover",

              }}
            />

            {/* Center Circle Content */}
            <img
              src="/AboutUsImage4.svg"
              sx={{
                position: "absolute",
                top: { md: "50%", xs: '20%', sm: "30%" },
                left: { lg: "45%", xs: "50%", sm: "100%" },
                transform: "translate(-50%, -50%)",
                width: { xs: 140, md: 180, sm: 160 },
                height: { xs: 140, md: 180 },

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                textAlign: "center",
                px: 2,
                zIndex: 1,
              }}
            />
          </Box>
        </Grid>

        {/* Right Side - Content */}
        <Grid size={{ xs: 12, lg: 6 }}>
          <Typography
            sx={{
              color: "#F28F53",
              fontSize: "14px",
              fontWeight: 400,
              display: "flex",
              justifyContent: "flex-start",
              gap: 1,
              alignItems: "center",
              animation: "pulse 6s  ease-in-out",
              "@keyframes pulse": {
                "0%": { transform: "scale(0.4)" },
                "50%": { transform: "scale(1)" },
                "100%": { transform: "scale(1)" },
              },
            }}
            gutterBottom
          >
            <img src="./SecurityIcon.svg" alt="" />
            About Us
          </Typography>

          <Typography
            sx={{
              color: "#0E2A46",
              fontSize: { xs: "25px", sm: "30px", md: "45px" },
              fontWeight: 700,
              mb: 2,
            }}
          >
            We Build Software That Works Like The World Around You.
          </Typography>

          <Typography
            x={{ color: "#4D5756", fontSize: "17px", fontWeight: 400, mb: 4 }}
          >
            We've seen projects fail due to poor planning and communication.
            We're here to ensure yours succeeds — seamlessly and on time.
          </Typography>

          <Grid container spacing={4} sx={{ mt: 2, mb: 2 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography fontWeight={700} gutterBottom>
                Our Mission:
              </Typography>
              <Typography color="text.secondary">
                Empowering growth with secure, scalable, and innovative software
                solutions.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography fontWeight={700} gutterBottom>
                Our Vision:
              </Typography>
              <Typography color="text.secondary">
                Innovative, scalable solutions empowering businesses and
                education for a smarter future.
              </Typography>
            </Grid>
          </Grid>

          <Button
            variant="contained"
            onClick={() => setOpenDemoDialog(true)}
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#04857A", // Green part
              borderRadius: "50px",
              pr: 10,
              pl: 4,
              py: 0.5,
              textTransform: "none",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#346B65",
              },
              width: "auto",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: 400, fontSize: "15px", lineHeight: "58px" }}
            >
              Book A Free Demo
            </Typography>

            <Box
              sx={{
                position: "absolute", // Absolute positioning
                right: 0, // Stick to right
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "#E38A4A", // Orange part
                borderRadius: "50%",
                width: 65,
                height: 65,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                ml: 2,
              }}
            >
              <ArrowForwardIcon sx={{ color: "#fff" }} />
            </Box>
          </Button>
        </Grid>
        <DemoModalForm
          open={openDemoDialog}
          onClose={() => setOpenDemoDialog(false)}
        />
      </Grid>
    </AboutBox>
  );
};

const AboutBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url('/design5.png');
  background-repeat: no-repeat;
  background-position: right 16rem;
  margin-right: 20px;

  @media (max-width: 1400px) {
    background-image: none;
  }
`;

export default AboutUs;
