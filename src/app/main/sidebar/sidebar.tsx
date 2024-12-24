"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/app/UI/acternity/Sidebar";
import { IconBrandTabler } from "@tabler/icons-react";
import Image from "next/image";
import { cn } from "@/app/lib/utils";
import DashboardPage from "../dashboard/page";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/navigation";

type SelectedType = "dashboard" | "logout";

export function SidebarDemo() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<SelectedType>("dashboard");

  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      onClick: () => setSelected("dashboard"),
    },
  ];

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full h-screen flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden font-faculty"
      )}
    >
      <nav className="fixed top-0 left-0 w-full bg-white z-10 hidden md:block">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-3">
            <Image
              src="/Images/logo.png"
              alt="ProjeX Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-lg font-semibold text-primary">ProjeX</span>
          </div>

          <div className="flex items-center space-x-4">
            <WalletInfo />
          </div>
        </div>
      </nav>

      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 h-full mt-0 md:mt-12 lg:mt-12">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>

      <Dashboard selected={selected} />
    </div>
  );
}

const WalletInfo = () => {
  const { publicKey, disconnect } = useWallet();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter(); // Initialize the useRouter hook

  const publicKeyString = publicKey ? publicKey.toBase58() : "";

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleDisconnect = () => {
    disconnect();
    router.push("/signup");
  };

  return (
    <div className="relative">
      <div
        className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg hover:bg-gray-200"
        onClick={toggleDropdown}
      >
        <span className="text-sm text-primary">
          {publicKeyString
            ? `${publicKeyString.slice(0, 6)}...${publicKeyString.slice(-4)}`
            : "ShivamMalik"}
        </span>

        <span className="text-gray-500 text-lg">▼</span>
      </div>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <ul className="py-2">
            <li
              className="px-4 py-2 text-sm text-red-600 cursor-pointer font-semibold rounded-lg hover:bg-red-100 transition duration-200 ease-in-out"
              onClick={handleDisconnect}
            >
              Disconnect
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const Dashboard: React.FC<{ selected: SelectedType }> = ({ selected }) => {
  let Content;
  if (selected === "dashboard") {
    Content = <DashboardPage />;
  }

  return (
    <div className="flex flex-1 h-full mt-0 md:mt-20 lg:mt-20">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full overflow-y-auto ">
        {Content}
      </div>
    </div>
  );
};
