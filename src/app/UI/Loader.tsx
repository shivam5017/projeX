import React from 'react';
import Image from 'next/image'; 

const PulseLoader = ({ message = "Hang tight, we’re fixing things for you!", logoUrl = "/Images/logo.png" }: { message?: string, logoUrl?: string }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-90 z-50">
      <div className="relative flex flex-col items-center justify-center space-y-4">
        
        
        <div className="relative w-24 h-24 mb-4 blink-logo">
          <Image
            src={logoUrl} 
            alt="Logo"
            layout="intrinsic"  
            width={96}  
            height={96}  
            className="z-10"
          />
        </div>

  
        <p className="text-xl text-secondary text-center font-semibold mt-6">{message}</p>
      </div>

      <style jsx>{`
        .blink-logo {
          animation: blink 1.5s infinite ease-in-out;
        }

        @keyframes blink {
          0% {
            opacity: 1;
          }
          25% {
            opacity: 0.3;  
          }
          50% {
            opacity: 0.5;  
          }
          75% {
            opacity: 0.3;  
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default PulseLoader;
