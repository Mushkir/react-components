import React, { useState } from "react";
import PropTypes from "prop-types";

const PrimaryButton = ({ name = "Primary Button" }) => {
  return (
    <div className="pt-10 bg-[#FAF6F0] flex justify-center">
      <div className="bg-[#073763] text-white w-[190px] text-center px-5 py-2 rounded-md hover:bg-[#1f4b72] hover:cursor-pointer">
        {name}
      </div>
    </div>
  );
};

PrimaryButton.prototypes = {
  name: PropTypes.string,
};

export default PrimaryButton;
