// File: Solutions.server.tsx (Server Component)

import React from "react";
import { FeaturesSectionDemoClient } from "@/app/UI/acternity/BentoGridClient"; // Dynamically imported client-side component

const Solutions = React.forwardRef<HTMLElement, React.ComponentPropsWithoutRef<"section">>((props, ref) => {
  return (
    <section className="relative flex flex-col w-full text-left py-12" ref={ref} {...props}>
      <FeaturesSectionDemoClient />
    </section>
  );
});

Solutions.displayName = "SolutionsSection"; // Helpful for debugging purposes

export default Solutions;
