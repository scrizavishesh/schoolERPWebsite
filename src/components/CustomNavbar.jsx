"use client";
import {
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import ed2All from '../../public/ed2All.svg'


import Image from "next/image";
import DemoModalForm from "./DemoModalForm";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "FAQ", path: "/faq" },
  { name: "Terms & Condition", path: "/term&condition" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

const CustomNavbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [openDemoDialog, setOpenDemoDialog] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const isActive = (path) => {
    if (path === "/") {
      return (
        pathname === "/" ||
        pathname.startsWith("/academics") ||
        pathname.startsWith("/student") ||
        pathname.startsWith("/transportation") ||
        pathname.startsWith("/exam") ||
        pathname.startsWith("/hr")
      );
    }
    return pathname === path;
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "space-between", md: "space-around" },
        alignItems: "center",
        flexDirection: "row",
        gap: { xs: 2, sm: 2, md: 0 },
        py: 1,
        px: { sm: 4, md: 12 },
      }}
    >
      {/* Logo */}
      <LogoLink href="/">
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Image src={ed2All} alt="Logo" width={120} height={40} />
        </Box>
      </LogoLink>

      {/* Nav Items */}
      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 3 }} alignItems="center">
          {navItems.map((item) => (
            <MenuItemLinks href={item.path} key={item.name}>
              <Typography
                variant="body1"
                sx={{
                  cursor: "pointer",
                  border: isActive(item.path) ? "1px solid #3A7E76" : "none",
                  borderRadius: "20px",
                  px: 2,
                  py: 0.5,
                  color: "#0E2A46",
                  textAlign: "center",
                }}
              >
                {item.name}
              </Typography>
            </MenuItemLinks>
          ))}
        </Stack>
      </Box>

      {/* Free Demo Button */}
      <Box>
        <Button
          onClick={() => setOpenDemoDialog(true)}
          variant="contained"
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#04857A",
            borderRadius: "50px",
            height: { xs: "60px" },
            pr: 10,
            pl: 4,
            py: 0.2,
            textTransform: "none",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#346B65",
            },
            width: { xs: "100%", md: "auto" },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              padding: { xs: "0px" },
              fontWeight: 400,
              fontSize: { md: "15px", xs: "10px" },
              lineHeight: { md: "58px" },
            }}
          >
            Free Demo
          </Typography>
          <Box
            sx={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "#E38A4A",
              borderRadius: "50%",
              width: 60,
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ml: 2,
            }}
          >
            <ArrowForwardIcon sx={{ color: "#fff" }} />
          </Box>
        </Button>
      </Box>

      {/* Hamburger Menu for mobile */}
      <IconButton onClick={() => setOpenMenu(true)} sx={{ display: { xs: "block", lg: "none" } }}>
        <MenuIcon fontSize="large" />
      </IconButton>

      <DemoModalForm open={openDemoDialog} onClose={() => setOpenDemoDialog(false)} />

      <Drawer anchor="right" open={openMenu} onClose={() => setOpenMenu(false)}>
        <List sx={{ width: 300 }}>
          {navItems.map((item) => (
            <ListItem
              key={item.name}
              onClick={() => {
                router.push(item.path);
                setOpenMenu(false);
              }}
              sx={{
                fontFamily: "Sora",
                marginLeft: "23px",
                marginTop: "23px",
                padding: "10px 20px",
                color: pathname === item.path ? "#04857a" : "black",
                textDecoration: "none",
                border: pathname === item.path ? "1px solid #04857a" : "none",
                borderRadius: "20px",
                fontWeight: pathname === item.path ? 600 : "normal",
                cursor: "pointer",
              }}
            >
              {item.name}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default CustomNavbar;

// Styled Components
const MenuItemLinks = styled(Link)`
  text-decoration: none;
  &:hover {
    transition: transform 1s ease;
    transform: scale(1.1);
  }
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  &:hover {
    transition: transform 1.5s ease;
    transform: scale(1.1);
  }
`;
