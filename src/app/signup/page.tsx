"use client";
import React, { useState, useEffect } from "react";
import { BgSvg } from "@/app/UI/SVGS/bgsvg";
import ReactDOMServer from "react-dom/server";

import CustomWalletButton from "../UI/SolanaButton";

import "react-toastify/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Signup = () => {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

 
  const svgString = ReactDOMServer.renderToStaticMarkup(<BgSvg />);
  const base64Svg = `data:image/svg+xml;base64,${btoa(svgString)}`;

  if (!isClient) return null;

  return (
    <section
      className="relative flex flex-col items-center justify-center w-full h-screen text-center rounded-b-2xl font-sans overflow-hidden"
      style={{
        backgroundImage: `url('${base64Svg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        imageRendering: "pixelated",
      }}
    >
      <div className="absolute inset-0 bg-cover bg-center flex justify-center items-center">
        <div className="bg-white rounded-xl shadow-lg p-8 w-96 text-center">
          <div className="flex justify-center mb-6">
            <img src="/Images/logo.png" alt="projeX logo" className="h-10" />
          </div>
          <h1 className="text-2xl font-semibold mb-6">ProjeX</h1>
          <CustomWalletButton />
        </div>
      </div>
    </section>
  );
};

export default Signup;
