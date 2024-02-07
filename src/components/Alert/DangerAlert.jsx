import React from "react";
import PropTypes from "prop-types";

const DangerAlert = ({
  alertMessage = "A simple secondary alert — Check it out!",
}) => {
  return (
    <div className="flex justify-center">
      <div className="bg-[#7a0000] text-[#b4c3d0] w-[500px] text-center p-5 rounded-md mt-10">
        {alertMessage}
      </div>
    </div>
  );
};

DangerAlert.propTypes = {
  alertMessage: PropTypes.string,
};

export default DangerAlert;
