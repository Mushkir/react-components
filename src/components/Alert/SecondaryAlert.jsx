import React from "react";
import PropTypes from "prop-types";

const SecondaryAlert = ({
  alertMessage = "A simple secondary alert — Check it out!",
}) => {
  return (
    <div className="flex justify-center">
      <div className="bg-[#323232] text-[#b4c3d0] w-[500px] text-center p-5 rounded-md mt-10">
        {alertMessage}
      </div>
    </div>
  );
};

SecondaryAlert.propTypes = {
  alertMessage: PropTypes.string,
};

export default SecondaryAlert;
