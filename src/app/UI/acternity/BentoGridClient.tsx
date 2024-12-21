// File: BentoGridClient.tsx (Client-side Component)

"use client";

import React from "react";
import { FeaturesSectionDemo } from "@/app/UI/acternity/BentoGrid";

export const FeaturesSectionDemoClient = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>((props, ref) => {
  return (
    <div ref={ref} {...props}>
      <FeaturesSectionDemo /> {/* This is the dynamic part that relies on client-side JS */}
    </div>
  );
});

FeaturesSectionDemoClient.displayName = "FeaturesSectionDemoClient";

export default FeaturesSectionDemoClient;
