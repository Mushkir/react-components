import React, { useState } from "react";
import PropTypes from "prop-types";

const SecondaryButton = ({ name = "Secondary Button" }) => {
  return (
    <div className="pt-10 bg-[#FAF6F0] flex justify-center">
      <div className="bg-[#323232] text-white w-[190px] hover:bg-[#464646] hover:cursor-pointer text-center px-5 py-2 rounded-md">
        {name}
      </div>
    </div>
  );
};

SecondaryButton.prototypes = {
  name: PropTypes.string,
};

export default SecondaryButton;
