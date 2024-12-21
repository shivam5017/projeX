"use client";
import React from "react";
import { FeaturesSectionDemo } from "@/app/UI/acternity/BentoGrid";

export const Solutions =React.forwardRef<HTMLElement>((props, ref) =>{
  return (
    <section className="relative flex flex-col w-full text-left py-12"  ref={ref}>
      <FeaturesSectionDemo />
    </section>
  );
});

Solutions.displayName = "SolutionsSection";


