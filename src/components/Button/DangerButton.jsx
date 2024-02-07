import React, { useState } from "react";
import PropTypes from "prop-types";

const DangerButton = ({ name = "Danger Button" }) => {
  return (
    <div className="pt-10 bg-[#FAF6F0] flex justify-center">
      <div className="bg-[#7a0000] text-white w-[190px] hover:bg-[#871919] hover:cursor-pointer text-center px-5 py-2 rounded-md">
        {name}
      </div>
    </div>
  );
};

DangerButton.prototypes = {
  name: PropTypes.string,
};

export default DangerButton;
