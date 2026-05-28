"use client";

import dynamic from "next/dynamic";
import PageLoader from "@/components/PageLoader";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

// Dynamically import Three.js scene to avoid SSR issues
const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
});

// Wrap the contact 3D scene in its own component for dynamic import
const ContactSceneWrapper = dynamic(
  () => import("@/components/three/ContactSceneWrapper"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <PageLoader />
      <CustomCursor />
      <SmoothScroll>
        <Navbar />
        <main>
          {/* Hero with 3D background */}
          <section className="relative">
            <HeroScene />
            <HeroSection />
          </section>

          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <CertificationsSection />

          {/* Contact with 3D wave background */}
          <section className="relative">
            <ContactSceneWrapper />
            <ContactSection />
          </section>
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
