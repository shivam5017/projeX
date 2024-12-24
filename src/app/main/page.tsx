import React from "react";
import { SidebarDemo } from "./sidebar/sidebar";
import ProtectedRoute from "../context/ProtectedRoute";

const ProjeX = () => {
  return (
    <ProtectedRoute>
      <SidebarDemo />
    </ProtectedRoute>
  );
};

export default ProjeX;
