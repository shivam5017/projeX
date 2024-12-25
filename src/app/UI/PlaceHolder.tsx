"use client";

import { useState } from "react";
import { PlaceholdersAndVanishInput } from "./acternity/PlaceHolderInput";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/ReactToastify.css";

export function PlaceHolder() {
  const [requestAccess, setRequestAccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequestAccess(e?.target?.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/requestAccess", {
        email: requestAccess,
      });

      // Handle response
      if (response.status === 200) {
        toast.success(response.data.notification || "Subscription successful!");
      } else {
        if (response.data.error && response.data.error === "Email already exists") {
          toast.error(response.data.notification || "Email already exists. Please use another one.");
        } else {
          toast.error(response.data.error || "Something went wrong!");
        }
      }
    } catch (error) {

      if (axios.isAxiosError(error) && error.response) {
      
        toast.error(error.response.data.error || "An error occurred while submitting your request.");
      } else {
      
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center px-4">
      <PlaceholdersAndVanishInput
        placeholder="Enter your email to get early access"
        onChange={handleChange}
        onSubmit={onSubmit}
        value={requestAccess}
      />
      <ToastContainer />
    </div>
  );
}
