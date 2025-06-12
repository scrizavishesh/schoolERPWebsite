
"use client"; 

import { Box, Typography, Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import address from "../../public/address.svg";
import email from "../../public/email.svg";
import phone from "../../public/phone.svg";
import linkdin1 from "../../public/linkdin1.svg";
import insta1 from "../../public/insta1.svg";
import youtube1 from "../../public/youtube1.svg";
import faceBook1 from "../../public/faceBook1.svg";


const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        bgcolor: "#04857A",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 1, md: 2 },
        mb: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          py: 1,
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 1, md: 2 },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Image src={phone} alt="Phone" width={20} height={20} />
          <Typography sx={{ color: "white", fontSize: "16px", fontWeight: 400 }}>
            +91 911 601 1899
          </Typography>
        </Box>

        <Divider orientation="vertical" flexItem sx={{ borderColor: "rgba(255,255,255,0.3)" }} />

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Image src={email}alt="Email" width={20} height={20} />
          <Typography sx={{ color: "white", fontSize: "16px", fontWeight: 400 }}>
            sales@scriza.in
          </Typography>
        </Box>

        <Divider orientation="vertical" flexItem sx={{ borderColor: "rgba(255,255,255,0.3)" }} />

        <a
          href="https://www.google.com/maps/search/?api=1&query=A-4-5,+A+Block,+Sector+16,+Noida"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }}>
            <Image src={address} alt="Location" width={20} height={20} />
            <Typography sx={{ color: "white", fontSize: "16px", fontWeight: 400 }}>
              A-4-5, A Block, Sector 16, Noida
            </Typography>
          </Box>
        </a>
      </Box>

      <Box
        sx={{
          backgroundColor: "#F28F53",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          p: 1.4,
          cursor: "pointer",
        }}
      >
        <Link href="https://facebook.com" target="_blank">
          <Image src={faceBook1} alt="Facebook" />
        </Link>
        <Link href="https://www.linkedin.com/company/scriza" target="_blank">
          <Image src={linkdin1} alt="LinkedIn"  />
        </Link>
        <Link href="https://instagram.com" target="_blank">
          <Image src={insta1}alt="Instagram"  />
        </Link>
        <Link href="https://youtube.com" target="_blank">
          <Image src={youtube1} alt="YouTube" />
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
