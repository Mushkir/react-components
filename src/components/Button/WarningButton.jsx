import React, { useState } from "react";
import PropTypes from "prop-types";

const WarningButton = ({ name = "Warning Button" }) => {
  return (
    <div className="pt-10 bg-[#FAF6F0] flex justify-center">
      <div className="bg-[#d8ae2d] text-[#181305] w-[190px] hover:bg-[#f1c232] hover:cursor-pointer text-center px-5 py-2 rounded-md">
        {name}
      </div>
    </div>
  );
};

WarningButton.prototypes = {
  name: PropTypes.string,
};

export default WarningButton;
