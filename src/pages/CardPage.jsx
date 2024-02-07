import React from "react";
import ImgCard from "../components/Card/ImageCard";
import MultiLinkCard from "../components/Card/MultiLinkCard";

const CardPage = () => {
  return (
    <div className="bg-[#FAF6F0] h-screen font-Sen p-20">
      <h3 className=" text-center text-3xl font-semibold mb-5">
        Card Components
      </h3>
      <div className="flex justify-center items-center space-x-32">
        <ImgCard />

        <MultiLinkCard />
      </div>
    </div>
  );
};

export default CardPage;
