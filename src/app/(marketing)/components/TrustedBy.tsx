import React from "react";
import Image from "next/image";

const TrustedBy = () => {
  return (
    <section className="relative flex flex-col items-center  w-full h-full text-center  py-12">
      <div className="flex text-center">
        <Image
          src={"/Images/logo2.png"}
          alt="Trusted"
          width={50}
          height={50}
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
        />
      </div>
      <div className="mt max-w-4xl px-6 text-center">
        <h2 className="text-xl lg:text-4xl font-semibold text-primary mb-6">
          Trusted by Tomorrow's Innovators
        </h2>
        <p className="text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl text-secondary p-5">
          Be among the first to trust us—exclusive benefits for early adopters!
        </p>
      </div>
    </section>
  );
};

export default TrustedBy;
