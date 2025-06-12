"use client";

import {
  Box,
  Grid,
  Typography,
  Button,
  Link as MuiLink,
  Container,
  OutlinedInput,
  styled,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";
import BG from "../../public/FooterBG.svg";
import ed2All from "../../public/ed2All.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <Box
      sx={{
        color: "#fff",
        width: "100%",
        bgcolor: "#1c3c36",
        backgroundImage: `url(${BG.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Address, Phone & Email Section */}
      <Container maxWidth={false} sx={{ borderBottom: "1px solid white" }}>
        <Grid container>
          <Grid item xs={12} lg={4} sx={{ width: { lg: "33%", xs: "auto" } }}>
            <Box
              onClick={() =>
                window.open(
                  "https://www.google.com/maps?q=A-4-5, A Block, Sector 16, Noida",
                  "_blank"
                )
              }
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                py: 4,
                pl: { lg: 19 },
                borderRight: { lg: "1px solid white" },
                cursor: "pointer",
              }}
            >
              <ConnectImage src="/FooterLocation.svg" alt="location" />
              <Box>
                <Typography sx={{ mb: 1 }}>Address:</Typography>
                <Typography>A-4-5, A Block, Sector 16, Noida</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ width: { lg: "33%", xs: "auto" } }}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                py: 4,
                pl: { lg: 8 },
                borderRight: { lg: "1px solid white" },
              }}
            >
              <ConnectImage
                width={40}
                height={40}
                src="/FooterPhone.svg"
                alt="phone"
              />
              <Box>
                <Typography sx={{ mb: 1 }}>Phone:</Typography>
                <Typography>(+91)911-601 1899</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ width: { lg: "33%", xs: "auto" } }}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                py: 4,
                pl: { lg: 9 },
              }}
            >
              <ConnectImage
                width={40}
                height={40}
                src="/FooterEmail.svg"
                alt="email"
              />
              <Box>
                <Typography sx={{ mb: 1 }}>Email:</Typography>
                <Typography>sales@scriza.in</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Mid Footer */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid
          sx={{
            display: "flex",
            gap: { xs: "34px", lg: "0" },
            flexDirection: { xs: "column", lg: "row" },
          }}
          container
        >
          {/* Logo & Socials */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{ pl: { lg: 5, md: 0 }, width: { lg: "33%", xs: "auto" } }}
          >
            <Image src={ed2All} alt="edu2all" style={{ marginBottom: 16 }} />
            <Typography
              variant="body2"
              sx={{ mb: 2, color: "#fff", fontSize: 17 }}
            >
              edu2all is a comprehensive cloud-based School Management Software.
            </Typography>
            <Box sx={{ display: "flex", gap: 0.5 }}>
              <MuiLink
                to='https://facebook.com'
                component="a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialImg src="/FooterFb.svg" alt="FB" />
              </MuiLink>
              <MuiLink
                to="https://instagram.com"
                component="a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialImg src="/FooterInsta.svg" alt="Insta" />
              </MuiLink>
              <MuiLink
                component="a"
                to='https://youtube.com'
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialImg src="/FooterPinterest.svg" alt="YT" />
              </MuiLink>
              <MuiLink
                to="https://twitter.com"
                component="a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialImg src="/FooterTwitter.svg" alt="TW" />
              </MuiLink>
            </Box>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={12} md={4} sx={{ width: { lg: "33%", xs: "auto" } }}>
            <Typography sx={{ fontWeight: 700, mb: 2 }}>
              Our Services:
            </Typography>
            <Box sx={{ display: "flex", gap: 4 }}>
              {[
                // split into two columns
                [
                  { name: "Home", path: "/" },
                  { name: "About Us", path: "/about" },
                  { name: "FAQ", path: "/faq" },
                  { name: "Contact Us", path: "/contact" },
                ],
                [
                  { name: "Terms & Conditions", path: "/term&condition" },
                  { name: "Privacy Policy", path: "/privacyPolicy" },
                  { name: "Refund Policy", path: "/refundPolicy" },
                ],
              ].map((column, i) => (
                <Box key={i} component="ul" sx={{ pl: 0, listStyle: "none" }}>
                  {column.map((item) => (
                    <Box
                      key={item.name}
                      component="li"
                      sx={{ display: "flex", alignItems: "center", mb: 1.5 }}
                    >
                      <ArrowForwardIosIcon sx={{ fontSize: "medium", mr: 1 }} />
                      <ServicesLink href={item.path}>{item.name}</ServicesLink>
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Subscribe */}
          <Grid item xs={12} md={4} sx={{ width: { lg: "33%", xs: "auto" } }}>
            <Typography sx={{ fontWeight: 700, mb: 2 }}>Subscribe</Typography>
            <OutlinedInput
              placeholder="Enter your email"
              size="small"
              sx={{
                bgcolor: "#fff",
                borderRadius: 1,
                mb: 2,
                width: "100%",
                maxWidth: "300px",
                p: 1,
              }}
            />
            <SubscribeBtn variant="contained">Subscribe Now</SubscribeBtn>
          </Grid>
        </Grid>
      </Container>

      {/* Bottom */}
      <Box sx={{ bgcolor: "#04857A", textAlign: "center", p: 2 }}>
        <Typography sx={{ fontSize: 17 }}>
          Copyright © 2025 <b style={{ color: "#2FC7A1" }}>edu2all</b> | All
          Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

// Styled components
const ServicesLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: transform 0.4s ease;
  &:hover {
    transform: scaleX(1.1);
  }
`;

const SubscribeBtn = styled(Button)`
  background-color: #086159;
  color: #fff;
  max-width: 200px;
  padding: 8px 16px;
  &:hover {
    background-color: #04857a;
  }
`;

const SocialImg = styled("img")`
  width: 45px;
  height: 45px;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const ConnectImage = styled("img")`
  width: 70px;
  height: 80px;
  cursor: pointer;
  transition: transform 0.8s ease;
  &:hover {
    transform: scale(1.2);
  }
`;
