import { Box, Typography, Button, Stack } from "@mui/material";
import BG from "../../public/getInTouchBG.jpeg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import DemoModalForm from "./DemoModalForm";

const GetInTouch = () => {
  const [openDemoDialog, setOpenDemoDialog] = useState(false);
  return (
    <>
      <DemoModalForm
        open={openDemoDialog}
        onClose={() => setOpenDemoDialog(false)}
      />
      <Box
        sx={{
          position: "relative",
          backgroundImage: "url('/getInTouchBG.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          py: 10,
          px: 2,
          color: "white",
          mb: 0.1,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(5, 30, 52, 0.7)", // Bluish overlay
            zIndex: 1,
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: { md: "left" },
            zIndex: 2,
          }}
        >
          <Typography
            sx={{
              mb: 1,
              color: "#F28F53",
              fontWeight: "600",
              fontSize: "23px",
            }}
          >
            Join Now
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "28px", md: "60px" },
              fontWeight: 600,
              color: "#FFFFFF",
            }}
          >
            Get in Touch with us now!
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "28px", md: "60px" },
              fontWeight: 600,
              color: "#FFFFFF",
            }}
          >
            Call Now – +91 911 601 1899
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
              pr: { xs: 10, md: 10 }, // Responsive right padding
              pl: { md: 4 }, // Responsive left padding
              py: { xs: 3, sm: 1, md: 0.5 }, // Responsive vertical padding
              textTransform: "none",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#346B65",
              },
              mt: { xs: 2, md: 0 },
              ml: { sm: 15, md: 0 },
              width: "auto",
              // Better mobile behavior
              overflow: "hidden",
            }}
          >
            {/* Text - responsive font size and line height */}
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "14px", sm: "15px" },
                lineHeight: { xs: "1.5", sm: "58px" },
                whiteSpace: "nowrap",
              }}
            >
              Book A Free Demo
            </Typography>

            {/* Circle icon - responsive sizing */}
            <Box
              sx={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "#E38A4A",
                borderRadius: "50%",
                width: { xs: 70, sm: 73, md: 65 }, // Responsive size
                height: { xs: 70, sm: 73, md: 65 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                ml: { xs: 1, sm: 2 }, // Responsive margin
              }}
            >
              <ArrowForwardIcon
                sx={{
                  color: "#fff",
                  fontSize: { xs: "1rem", sm: "1.25rem" }, // Responsive icon size
                }}
              />
            </Box>
          </Button>
        </Box>

        {/* Absolute Decorative Images */}
        <Box
          component="img"
          src="/GetInTouch1.svg"
          alt="Decoration"
          sx={{
            position: "absolute",
            top: "40px",
            left: "40px",
            width: { xs: "30px", md: "40px" },
            zIndex: 2,
          }}
        />
        <Box
          component="img"
          src="/GetInTouch2.svg"
          alt="Decoration"
          sx={{
            position: "absolute",
            bottom: "110px",
            left: { xs: "80%", sm: "70%" },
            width: { xs: "30px", md: "50px" },
            zIndex: 2,
          }}
        />
        <Box
          component="img"
          src="/GetInTouch3.svg"
          alt="Decoration"
          sx={{
            position: "absolute",
            top: "5%",
            right: "30px",
            width: { xs: "30px", md: "200px" },
            zIndex: 2,
          }}
        />
        <Box
          component="img"
          src="/GetInTouch4.svg"
          alt="Decoration"
          sx={{
            position: "absolute",
            bottom: "10%",
            right: "10%",
            width: { xs: "30px", md: "50px" },
            zIndex: 2,
          }}
        />
      </Box>
    </>
  );
};

export default GetInTouch;
