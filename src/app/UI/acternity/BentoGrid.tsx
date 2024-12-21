"use client";
import React, { useMemo} from "react";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const Globe = dynamic(() => import("./Globe"), { ssr: false });

export function FeaturesSectionDemo() {
  const features = useMemo(() => [
    {
      title: "Submit Your Projects",
      description:
        "Showcase your innovative projects to the world. Submit your work, gain visibility, and compete for rewards.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Vote for the Best Ideas",
      description:
        "Empower developers by voting for their projects. Help decide the winners and inspire groundbreaking innovation.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Mint NFTs for Your Projects",
      description:
        "Transform your projects into NFTs. Sell the source code securely and manage ownership seamlessly.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "Promote Your Brand",
      description:
        "Companies can list their projects to attract talent and promote their brand to a global audience.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ], []);
  return (
    <div className="relative z-20 py-10 lg:py-10 max-w-7xl mx-auto ">
      <div className="px-8">
        <h4 className="text-xl lg:text-4xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-semibold text-primary dark:text-white">
          ProjeX Solutions
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-secondary text-center font-normal dark:text-neutral-300">
          A Comprehensive Platform for Teams to Build, Mint, and Monetize
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

// Memoizing components to prevent unnecessary re-renders
const FeatureCard = React.memo(({ children, className }: { children?: React.ReactNode; className?: string }) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
});

const FeatureTitle = React.memo(({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-primary dark:text-white font-semibold text-md md:text-2xl md:leading-snug">
      {children}
    </p>
  );
});

const FeatureDescription = React.memo(({ children }: { children?: React.ReactNode }) => {
  return (
    <p className={cn(
      "text-sm md:text-base max-w-4xl text-left mx-auto",
      "text-secondary text-center font-normal dark:text-neutral-300",
      "text-left max-w-sm mx-0 md:text-sm my-2"
    )}>
      {children}
    </p>
  );
});

export const SkeletonOne = () => (
  <div className="relative flex py-8 px-2 gap-10 h-full">
    <div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
      <div className="flex flex-1 w-full h-full flex-col space-y-2">
        <Image
          src="/Images/project.png"
          alt="header"
          width={800}
          height={200}
          className="h-96 w-full aspect-square object-cover object-left-top rounded-sm"
          loading="lazy"
        />
      </div>
    </div>

    <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-primary via-white dark:via-primary to-transparent w-full pointer-events-none" />
    <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-primary via-transparent to-transparent w-full pointer-events-none" />
  </div>
);

export const SkeletonThree = () => (
  <Link
    href="https://www.youtube.com/watch?v=RPa3_AD1_Vs"
    target="__blank"
    className="relative flex gap-10 h-full group/image"
  >
    <div className="w-full mx-auto bg-transparent dark:bg-transparent group h-full">
      <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
        <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto " />
        <Image
          src="https://assets.aceternity.com/fireship.jpg"
          alt="header"
          width={800}
          height={800}
          className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
          loading="lazy"
        />
      </div>
    </div>
  </Link>
);

export const SkeletonTwo = () => (
  <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
    <Image
      src="/Images/vote5.png"
      alt="bali images"
      width="500"
      height="500"
      className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
      loading="lazy"
    />
    <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-primary to-transparent h-full pointer-events-none" />
    <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-primary to-transparent h-full pointer-events-none" />
  </div>
);

export const SkeletonFour = () => (
  <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
    <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
  </div>
);


export default FeaturesSectionDemo;
