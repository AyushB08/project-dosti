"use client"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Contact from "./components/Contact";
import AOS from "aos";
import 'aos/dist/aos.css';
import React from "react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    
    <>
      <Navbar
					pages={
						new Map([
							["/", "Home"],
							["#projects", "Projects"],
							["#team", "Team"],
              				["#contact", "Contact"]
						])
					}
				/>

      <Hero/>
      <Impact/>
      <Testimonials/>
      <Projects/>
      <Team/>
      <Contact/>
      <Footer />
    </>
  );
}
