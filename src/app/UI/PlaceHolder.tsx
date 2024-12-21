"use client";

import { useState } from "react";
import { PlaceholdersAndVanishInput } from "./acternity/PlaceHolderInput";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function PlaceHolder() {
  const [requestAccess,setRequestAccess]=useState('');


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequestAccess(e?.target?.value);
  };
  const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response=await fetch('/api/requestAccess',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: requestAccess }),
    })
    const data = await response.json();
    if (response.ok) {
      toast.success(data.notification || 'Subscription successful!');
      setRequestAccess("");
    } else {
      toast.error(data.error || 'Something went wrong!');
    }
  };
  return (
    <div className="flex flex-col justify-center  items-center px-4">
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
