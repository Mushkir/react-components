import React from "react";
import PropTypes from "prop-types";

const SuccessAlert = ({
  alertMessage = "A simple secondary alert — Check it out!",
}) => {
  return (
    <div className="flex justify-center">
      <div className="bg-[#1f3e0f] text-[#b4c3d0] w-[500px] text-center p-5 rounded-md mt-10">
        {alertMessage}
      </div>
    </div>
  );
};

SuccessAlert.propTypes = {
  alertMessage: PropTypes.string,
};

export default SuccessAlert;
