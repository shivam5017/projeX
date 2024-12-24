import React from "react";
import Image from "next/image";
import { PlaceHolder } from "@/app/UI/PlaceHolder";
import { BgSvg } from "@/app/UI/SVGS/bgsvg";
import ReactDOMServer from "react-dom/server";

const HeroComponent = React.forwardRef<HTMLElement>((props, ref) => {
  const svgString = ReactDOMServer.renderToStaticMarkup(<BgSvg />);
  const base64Svg = `data:image/svg+xml;base64,${btoa(svgString)}`;

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center w-full h-screen text-center rounded-b-2xl font-sans overflow-hidden"
      style={{
        backgroundImage: `url('${base64Svg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
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
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
});

HeroComponent.displayName = "HomeSection";
export default HeroComponent;
