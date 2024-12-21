"use client";
import React, { useRef, useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";


const HeroComponent = dynamic(() => import("./components/Hero"), { ssr: false });
const TrustedBy = dynamic(() => import("./components/TrustedBy"), { ssr: false });
const Solutions = dynamic(() => import("./components/Solutions"), { ssr: false });
const Navbar = dynamic(() => import("../UI/Navbar"), { ssr: false });
const Footer = dynamic(() => import("./components/Footer"), { ssr: false });

const MarketingPage = () => {
  const homeRef = useRef<HTMLElement>(null);
  const solutionsRef = useRef<HTMLElement>(null);
  const requestRef = useRef<HTMLElement>(null);

  // Use state to check if client-side rendering is done
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Update after the initial render on the client
  }, []);

  const scrollToSection = useCallback((sectionRef: React.RefObject<HTMLElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  if (!isClient) {
    return null; 
  }

  return (
    <>
 
      <Navbar 
        scrollToSection={scrollToSection} 
        homeRef={homeRef} 
        solutionsRef={solutionsRef} 
        requestRef={requestRef} 
      />
      
      
      <HeroComponent ref={homeRef} />
      <TrustedBy />
      <Solutions ref={solutionsRef} />
      <Footer ref={requestRef} />
    </>
  );
};

export default MarketingPage;
