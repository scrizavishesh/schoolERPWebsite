'use client';

import Welcome from '@/components/Welcome';
import Security from '@/components/Security';
import AboutUs from '@/components/AboutUs';
import GetInTouch from '@/components/GetInTouch';
import Community from '@/components/Community';
import FeatureTypePage from './feature/layout';
import BlogSection from '@/components/BlogSection';


export default function Home() {


  return (
    <>
      <Welcome />
      <Security />
      <FeatureTypePage />
      <AboutUs />
      <GetInTouch />
      <Community />
      <BlogSection />

    </>
  );
}
