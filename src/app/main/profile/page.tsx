import React, { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";  
import { toast } from "react-toastify";  
import axios from "axios";  
import { useRouter } from "next/navigation";
import { LoadingBackdrop } from "@/app/UI/LoadingBackdrop";

// Define the structure of the user data
interface User {
  username: string;
  wallet: string;
}

const Profile = () => {
  const { publicKey, connected } = useWallet();
  const [userData, setUserData] = useState<User | null>(null);  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);  
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      if (connected && publicKey) {
        setLoading(true);
        try {
          const response = await axios.get("/api/walletRegistration", {
            headers: {
              "x-wallet-address": publicKey.toBase58(), 
            },
          });

          if (response.status === 200) {
            setUserData(response.data);  
          } else {
            toast.info(response.data.notification || "User not found");
          }
        } catch (err) {
          toast.error("Failed to fetch user data.");
        } finally {
          setLoading(false);
        }
      }
    };

    if (connected && publicKey) {
      fetchUserData();
    }
  }, [connected, publicKey]);

  if (!connected) {
    return (
      <div className="text-center">
        <p>Please connect your wallet to view your profile.</p>
      </div>
    );
  }

  console.log(userData); 

  return (
    <div className="profile-container">
      <h2 className="text-center text-xl font-bold">User Profile</h2>

      {loading && <LoadingBackdrop />}

      {error && <div className="error">{error}</div>}

      {userData ? (
        <div className="profile-details">
          <p><strong>Wallet Address:</strong> {userData.wallet}</p>
          <p><strong>Username:</strong> {userData.username}</p>
        </div>
      ) : (
        <div className="text-center">
          <p>Fetching Data or No data Available</p>
        </div>
      )}
    </div>
  );
};




export default Profile;
