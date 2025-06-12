"use client";
import AboutUs from "@/components/AboutUs";
import Community from "@/components/Community";
import GetInTouch from "@/components/GetInTouch";
import MenuPage from "@/components/MenuPaga";
import React from "react";

const About = () => {
  return (
    <>
      <MenuPage title="ABOUT US" subtitle="Home" />

      <AboutUs />
      <Community />

      <GetInTouch />
    </>
  );
};

export default About;
