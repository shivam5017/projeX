import React from "react";
import Image from "next/image";

// Server-rendered Footer Section
const Footer = React.forwardRef<HTMLElement, React.ComponentPropsWithoutRef<"section">>((props, ref) => {
  return (
    <>
      <section className="bg-primary text-white flex flex-col sm:flex-row justify-between h-auto sm:h-80 px-6 py-10" ref={ref} {...props}>
        {/* Hero Section */}
        <main className="flex flex-col items-start justify-start flex-grow text-center sm:text-left mb-8 sm:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8">
            Ready to level up your Idea?
          </h1>
          <div className="space-x-4 mb-4">
            <a href="#" className="text-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.944 9.944 0 0 1-2.825.775A4.932 4.932 0 0 0 23.337 3.1a9.868 9.868 0 0 1-3.127 1.184 4.923 4.923 0 0 0-8.388 4.482A13.965 13.965 0 0 1 1.671 3.149 4.922 4.922 0 0 0 3.195 9.723a4.904 4.904 0 0 1-2.228-.616v.062a4.926 4.926 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.224.085 4.928 4.928 0 0 0 4.6 3.417A9.868 9.868 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.002-7.496 14.002-13.986 0-.213-.005-.425-.015-.637A9.936 9.936 0 0 0 24 4.557z" />
              </svg>
            </a>
          </div>
        </main>

        {/* Footer Section */}
        <footer className="py-6 flex flex-col justify-center items-center gap-8 sm:gap-20">
          <div className="flex flex-row items-center justify-center text-center sm:space-x-4 space-y-4 sm:space-y-0">
            <Image
              src="/Images/logo.png"
              alt="100xRewards"
              width={60}
              height={60}
              className="rounded-lg"
            />
            <h1 className="text-2xl sm:text-4xl font-bold text-accent">ProjeX</h1>
          </div>
        </footer>
      </section>

      {/* Footer Copyright Section */}
      <div className="text-center text-gray-400 bg-[#232427] text-sm py-4">
        © 2024 ProjeX. All Rights Reserved.
      </div>
    </>
  );
});

Footer.displayName = "FooterSection"; // Helpful for debugging
export default Footer;
