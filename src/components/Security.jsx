import { Box, Grid, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useState } from "react";
import DemoModalForm from "./DemoModalForm";


const Security = () => {
  const [openDemoDialog, setOpenDemoDialog] = useState(false);
  return (
    <Box sx={{
      height:{xs:"auto"},

    }} px={{ xs: 2, md: 20 }} py={{ xs: 12, sm: 10 }}>
      <Grid container spacing={{xs:0,lg:3}} alignItems="center">
        {/* Left Section - Images */}
        <Grid size={{ xs: 12, lg: 6 }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "900px",
              height: { xs: 500, md: 600 },
              mx: "auto",
              mt:{lg: 8,xs:4},
            }}
          >
            {/* Image 1 - Top Left */}
            <Box
              component="img"
              src="./SecurityImage1.svg"
              alt="Student 1"
              sx={{
                position: "absolute",
                top: 0,
                left: {md:0,xs:34},
                width: { xs: "30%", md: "30%" },
                borderRadius: 2,
                objectFit: "cover",
                
              }}
            />

            {/* Image 2 - Bottom Right */}
            <Box
              component="img"
              src="./SecurityImage3.svg"
              alt="Students talking"
              sx={{
                position: "absolute",
                bottom: {md:100,xs:155},
                right: {md:90,xs:10},
                width: { xs: "55%", md: "45%" },
                borderRadius: 2,
                objectFit: "cover",
               
              }}
            />

            {/* Image 3 - Top Right ( Experience Card ) */}
            <Box
              component="img"
              src="./SecurityImage2.svg"
              sx={{
                position: "absolute",
                top: { md: "50%", lg: 0 },
                right: { xs: "25%", md: "50%", lg: "25%" },
                width: { xs: 100, md: 200, lg: 180 },
                height: { xs: 100, md: 200, lg: 180 },
                border: "1px dashed #fb923c",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: 1,
               
              }}
            ></Box>

            {/* Decorative shape (Top left corner) */}

            <Box
              component="img"
              src="./SecurityImage4.svg"
              alt="Shape"
              sx={{
                position: "absolute",
                top: -30,
                left: -30,
                width: 50,
              }}
            />
          </Box>
        </Grid>

        {/* Right Section - Content */}
        <Grid sx={{

        }} size={{ xs: 12, lg: 6 }}>
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
              }
            }}
            gutterBottom
          >
            <img src="./SecurityIcon.svg" alt="" />
            EDU2ALL SECURITY
          </Typography>

          <Typography
            sx={{
              color: "#0E2A46",
              fontSize: { xs: "35px", sm: "45px" },
              fontWeight: 700,
            }}
          >
            Why Choose Us?
          </Typography>

          <Typography
            sx={{ color: "#4D5756", fontSize: "17px", fontWeight: 400, mb: 2 }}
          >
            choosing edu2all security means choosing peace of mind, reliability,
            and a commitment to creating a safe educational environment where
            students can focus on learning and growth.{" "}
          </Typography>

          <Grid container spacing={2} mb={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="subtitle1" fontWeight={700} color="#0D1B2A">
                Customer Centricity:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Edu2All offers custom workflows, reports, and scalability,
                ensuring seamless adaptation.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="subtitle1" fontWeight={700} color="#0D1B2A">
                Product Usability:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Edu2All’s intuitive interface ensures easy navigation, reducing
                training time and boosting adoption.
              </Typography>
            </Grid>
          </Grid>

          <Typography variant="subtitle1" fontWeight={700} color="#0D1B2A">
            Privacy & Security
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={3}>
            Edu2All ensures top-tier data security with{" "}
            <b>GDPR compliance and ISO/IEC 27001 certification</b>, safeguarding
            sensitive information with the highest privacy standards.
          </Typography>

          <Button
            variant="contained"
            onClick={() => setOpenDemoDialog(true)}
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#04857A",
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
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "#E38A4A",
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
    </Box>
  );
};

export default Security;
