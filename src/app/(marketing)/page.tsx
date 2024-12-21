"use client";
import React, { useRef } from "react";
import HeroComponent from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import {Solutions} from "./components/Solutions";
import { Navbar } from "../UI/Navbar";
import {Footer} from "./components/Footer";


const MarketingPage = () => {
  const homeRef = useRef<HTMLElement>(null);
  const solutionsRef = useRef<HTMLElement>(null);
  const requestRef = useRef<HTMLElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
       <Navbar 
        scrollToSection={scrollToSection} 
        homeRef={homeRef} 
        solutionsRef={solutionsRef} 
        requestRef={requestRef}
      />
      <HeroComponent ref={homeRef}/>
      <TrustedBy />
      <Solutions ref={solutionsRef} />
      <Footer ref={requestRef}/>
    </div>
  );
};

export default MarketingPage;
