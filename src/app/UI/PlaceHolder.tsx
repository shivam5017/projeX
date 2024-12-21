"use client";

import { useState } from "react";
import { PlaceholdersAndVanishInput } from "./acternity/PlaceHolderInput";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

export function PlaceHolder() {
  const [requestAccess, setRequestAccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequestAccess(e?.target?.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Send POST request using Axios
      const response = await axios.post("/api/requestAccess", {
        email: requestAccess,
      });

      // Handle response
      if (response.status === 200) {
        toast.success(response.data.notification || "Subscription successful!");
        setRequestAccess(""); // Clear the input after successful submission
      } else {
        // Check if the response contains "Email already exists" and show a specific toast message
        if (response.data.error && response.data.error === "Email already exists") {
          toast.error(response.data.notification || "Email already exists. Please use another one.");
        } else {
          // Show a general error returned from the backend
          toast.error(response.data.error || "Something went wrong!");
        }
      }
    } catch (error) {
      // If the error is not from the backend, show a generic error
      if (axios.isAxiosError(error) && error.response) {
        // Handle server-side errors (e.g., email already exists)
        toast.error(error.response.data.error || "An error occurred while submitting your request.");
      } else {
        // Handle other kinds of errors (network issues, etc.)
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
