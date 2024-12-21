"use client";
import React from "react";
import Button from "./Button";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface NavbarProps {
  scrollToSection: (sectionRef: React.RefObject<HTMLElement>) => void;
  homeRef: React.RefObject<HTMLElement>;
  solutionsRef: React.RefObject<HTMLElement>;
  requestRef: React.RefObject<HTMLElement>;
}

interface ScrollToSectionButtonProps {
  title: string;
  onClick: () => void;
}

const ScrollToSectionButton = ({ title, onClick }: ScrollToSectionButtonProps) => (
  <span
    className="hidden sm:block  text-sm font-medium text-primary cursor-pointer hover:bg-primary hover:text-white px-2 py-2 rounded-md transition duration-300"
    onClick={onClick}
  >
    {title}
  </span>
);



export function Navbar({
  scrollToSection,
  homeRef,
  solutionsRef,
  requestRef,
}: NavbarProps) {
  const router = useRouter();
  return (
    <div className="fixed top-4 left-0 right-0 max-w-2xl mx-auto z-50 font-faculty">
      <div className="relative rounded-xl border border-[#e3e3e3] flex justify-between items-center px-2 py-2 mx-4 mt-5 bg-white sm:mx-4">
        <Image
          src="/Images/logo.png"
          alt="100xRewards"
          width={40}
          height={40}
          className="rounded-lg"
        />

        <div className="flex space-x-6">
          <ScrollToSectionButton 
            title="Home" 
            onClick={() => scrollToSection(homeRef)} 
          />
          <ScrollToSectionButton 
            title="Solutions" 
            onClick={() => scrollToSection(solutionsRef)} 
          />
          <ScrollToSectionButton 
            title="Request Access" 
            onClick={() => scrollToSection(requestRef)} 
          />
        </div>

        <Button
          title="Open App"
          rounded="rounded-lg"
          endIcon={<FiArrowUpRight />}
          backgroundColor="bg-accent"
          color="text-white"
          onClick={()=>router.push("/signup")}
        />
      </div>
    </div>
  );
}
