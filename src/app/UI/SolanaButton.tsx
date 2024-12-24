import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image"; // Import Image component from Next.js

const CustomWalletButton = () => {
  return (
    <WalletMultiButton
      className="w-full flex items-center justify-center gap-2 cursor-pointer"
      
      style={{
        backgroundColor: "#8b85ff",
        color: "#fff",
        padding: "8px 16px",
        borderRadius: "5px",
         fontWeight: "600"
      }}
    >
      <Image
        src="/Images/solana.svg"
        alt="SPL"
        width={30}
        height={30}
        className="rounded-lg"
      />
      <span>Sign in with Solana</span>
    </WalletMultiButton>
  );
};

export default CustomWalletButton;
