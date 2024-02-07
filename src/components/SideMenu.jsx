import React from "react";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="bg-[#F4DFC8] text-white w-[250px] h-screen font-Sen p-5">
      <h4 className="text-3xl text-[#191919] font-semibold">Components</h4>
      <ul className="text-[#191919] space-y-4 mt-5">
        <li className="bg-[#dbc8b4] hover:bg-[#928578] cursor-pointer hover:text-[#fbf5ee] hover:font-semibold hover:transition 500 rounded-md p-3">
          <Link to={"/alert"}>Alert</Link>
        </li>
        <li className="bg-[#dbc8b4] hover:bg-[#928578] cursor-pointer hover:text-[#fbf5ee] hover:font-semibold hover:transition 500 rounded-md p-3">
          <Link to={"/card"}>Card</Link>
        </li>
        <li className="bg-[#dbc8b4] hover:bg-[#928578] cursor-pointer hover:text-[#fbf5ee] hover:font-semibold hover:transition 500 rounded-md p-3">
          <Link to={"/button"}>Button</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
