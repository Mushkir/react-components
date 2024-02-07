import React from "react";
import PrimaryButton from "../components/Button/PrimaryButton";
import SecondaryButton from "../components/Button/SecondaryButton";
import SuccessButton from "../components/Button/SuccessButton";
import DangerButton from "../components/Button/DangerButton";
import WarningButton from "../components/Button/WarningButton";

const ButtonPage = () => {
  return (
    <div className="bg-[#FAF6F0] h-screen font-Sen">
      <h3 className=" text-center text-3xl font-semibold pt-20 mb-5">
        Button Components
      </h3>
      <PrimaryButton />

      <SecondaryButton />

      <SuccessButton />

      <DangerButton />

      <WarningButton />
    </div>
  );
};

export default ButtonPage;
