import React, { useEffect, useState } from "react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";  
import axios from "axios";  

const CustomWalletButton = () => {
  const {  connected, publicKey } = useWallet();
  const { setVisible } = useWalletModal();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setVisible(true); 
  };

  useEffect(() => {
    const registerWallet = async () => {
      if (connected && publicKey) {
        try {
          setLoading(true);

          const response = await axios.post("/api/walletRegistration", {
            walletAddress: publicKey?.toBase58(),
          });

          if (response.status === 200) {
            toast.success(response.data.notification || "Wallet connected successfully");
            router.push("/main");
          } else {
            toast.info(response.data.notification || "Wallet already registered");
            router.push("/main");
          }
        } catch (error) {
          toast.error("Something went wrong with wallet registration.");
          console.error("Error during wallet registration:", error);
        } finally {
          setLoading(false);
        }
      }
    };

  
    if (connected && publicKey) {
      registerWallet();
    }
  }, [connected, publicKey, router]); 

  return (
    <div>
      <button
        onClick={handleClick}
        className="w-full flex items-center justify-center gap-2 cursor-pointer"
        style={{
          backgroundColor: "#8b85ff",
          color: "#fff",
          padding: "8px 16px",
          borderRadius: "5px",
          fontWeight: "600",
        }}
        disabled={loading}
      >
        <img src="/Images/solana.svg" alt="Solana" width={30} height={30} className="rounded-lg" />
        <span>
          {loading ? `Loading...` : "Sign In with Solana"}
        </span>
      </button>
    </div>
  );
};

export default CustomWalletButton;
