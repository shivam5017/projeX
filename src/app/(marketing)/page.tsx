"use client"; 

import React, { useState, useEffect, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import PulseLoader from "@/app/UI/Loader";  


const HeroComponent = dynamic(() => import("./components/Hero"), { 
  ssr: false, 
  loading: () => <PulseLoader /> 
});
const TrustedBy = dynamic(() => import("./components/TrustedBy"), { 
  ssr: false, 
  loading: () => <PulseLoader /> 
});
const Solutions = dynamic(() => import("./components/Solutions"), { 
  ssr: false, 
  loading: () => <PulseLoader /> 
});
const Navbar = dynamic(() => import("../UI/Navbar"), { 
  ssr: false, 
  loading: () => <PulseLoader /> 
});
const Footer = dynamic(() => import("./components/Footer"), { 
  ssr: false, 
  loading: () => <PulseLoader /> 
});

const MarketingPage = () => {
  const homeRef = useRef<HTMLElement>(null);
  const solutionsRef = useRef<HTMLElement>(null);
  const requestRef = useRef<HTMLElement>(null);

 
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  const scrollToSection = useCallback((sectionRef: React.RefObject<HTMLElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

 
  if (!isClient) {
    return <PulseLoader />; 
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
