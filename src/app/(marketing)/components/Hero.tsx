
import React from "react";
import Image from "next/image";
import { PlaceHolder } from "@/app/UI/PlaceHolder";

// This is a Server Component
const HeroComponent = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center w-full h-screen text-center rounded-b-2xl font-sans overflow-hidden bg-cover bg-center bg-repeat"
      style={{
        backgroundImage: "url('/Images/bg.svg')", // Static SVG background
        imageRendering: "pixelated",
      }}
    >
      <div className="z-10 pt-36">
        <p className="text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl text-secondary p-5">
          Code • NFTs • Conquer
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-primary mb-6 text-center">
          Showcase Your Product, Win the Crowd
        </h1>

        <PlaceHolder />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden flex justify-center">
        <div className="w-full sm:w-2/3 mt-24 lg:mt-0 h-full relative">
          <Image
            src="/Images/overview.png"
            alt="Financial Overview"
            layout="responsive"
            width={1200}
            height={800}
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
});

HeroComponent.displayName = "HomeSection";
export default HeroComponent;
