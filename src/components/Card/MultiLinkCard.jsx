import React from "react";
import PropTypes from "prop-types";

const MultiLinkCard = ({
  title = "Card Title",
  body = "Some quick example text to build on the card title and make up the bulk of the card's content.",
}) => {
  return (
    <div className="">
      <div className="bg-[#f3e8dc] max-w-[300px] h-[400px] rounded-md overflow-hidden">
        <div className=" bg-gray-600 h-[200px] text-gray-300 flex justify-center items-center">
          {title}
        </div>
        <div className="p-3">
          <h3 className=" font-semibold text-xl ">Card Title</h3>
          <p className="mt-1">{body}</p>
          <button className="bg-[#073763] mt-5 text-white w-[190px] text-center px-5 py-2 rounded-md hover:bg-[#1f4b72] hover:cursor-pointer">
            Go Somewhere
          </button>
        </div>
      </div>
    </div>
  );
};

MultiLinkCard.PropTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default MultiLinkCard;
