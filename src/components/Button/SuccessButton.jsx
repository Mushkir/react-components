import React, { useState } from "react";
import PropTypes from "prop-types";

const SuccessButton = ({ name = "Success Button" }) => {
  return (
    <div className="pt-10 bg-[#FAF6F0] flex justify-center">
      <div className="bg-[#1f3e0f] text-white w-[190px] hover:bg-[#355126] hover:cursor-pointer text-center px-5 py-2 rounded-md">
        {name}
      </div>
    </div>
  );
};

SuccessButton.prototypes = {
  name: PropTypes.string,
};

export default SuccessButton;
