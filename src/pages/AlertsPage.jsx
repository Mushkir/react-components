import React from "react";
import AlertComponent from "../components/Alert/PrimaryAlert";
import SecondaryAlert from "../components/Alert/SecondaryAlert";
import SuccessAlert from "../components/Alert/SuccessAlert";
import DangerAlert from "../components/Alert/DangerAlert";

const AlertPage = () => {
  return (
    <div className="bg-[#FAF6F0] h-screen font-Sen">
      <h3 className=" text-center text-3xl font-semibold pt-20 mb-5">
        Alert Components
      </h3>
      <AlertComponent alertMessage="Hello It is your primary alert" />

      <SecondaryAlert alertMessage="Hello It is your secondary alert" />

      <SuccessAlert alertMessage="Hello It is your success alert" />

      <DangerAlert alertMessage="Hello It is your danger alert" />
    </div>
  );
};

export default AlertPage;
