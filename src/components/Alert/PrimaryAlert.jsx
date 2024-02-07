import React, { useState } from "react";
import PropTypes from "prop-types";

const AlertComponent = ({
  alertMessage = "A simple primary alert - Check it out!",
}) => {
  return (
    <div className="pt-10 flex justify-center">
      <div className="bg-[#073763] text-[#b4c3d0] w-[500px] text-center p-5 rounded-md">
        {alertMessage}
      </div>
    </div>
  );
};

AlertComponent.prototypes = {
  alertMessage: PropTypes.string,
};

export default AlertComponent;
