import React from "react";
import TheNavBar from "../components/TheNavBar";
import { Outlet } from "react-router-dom";
import SideMenu from "../components/SideMenu";

const GuestLayout = () => {
  return (
    <div>
      <TheNavBar />
      <div className="flex items-start">
        <div>
          <SideMenu />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default GuestLayout;
