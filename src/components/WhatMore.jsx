import React from "react";
import { MdQuestionMark } from "react-icons/md";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { BsFillFileEarmarkSpreadsheetFill } from "react-icons/bs";

const WhatMore = () => {
  return (
    <div className="w-11/12 lg:w-[80%] mx-auto py-6 md:py-16">
      <div className="w-full sm:w-9/12 md:w-1/2 flex flex-col xs:flex-row gap-2.5 justify-between">
        <h5 className="font-extrabold text-2xl text-black basis-4/12 sm:basis-1/3">
          What's more?
        </h5>
        <div className="basis-7/12 sm:basis-5/12">
          <p className="text-sm text-[#020203] font-medium">
            Explore more ways to take your business to the next level.
          </p>
        </div>
      </div>
      <div className="flex w-full gap-5 flex-col sm:flex-row sm:flex-wrap mt-12">
        <div className="border border-[#CCCCCC80] basis-full sm:basis-[47%] lg:basis-[31%] p-8 shadow-sm rounded-2xl">
          <div className="w-16 h-16 bg-[#FCE8E8] rounded-xl text-primary mb-6 flex items-center justify-center text-3xl">
            <BsFillFileEarmarkSpreadsheetFill />
          </div>
          <h6 className="font-extrabold text-xl mb-2.5">
            Increase your visibility
          </h6>
          <p className="font-medium">
            Get an opportunity to showcase your products on the top of the
            search and
          </p>
        </div>
        <div className="border border-[#CCCCCC80] basis-full sm:basis-[47%] lg:basis-[31%] p-8 shadow-sm rounded-2xl">
          <div className="w-16 h-16 bg-[#FCE8E8] rounded-xl text-primary mb-6 flex items-center justify-center text-3xl">
            <BiSolidBarChartAlt2 />
          </div>
          <h6 className="font-extrabold text-xl mb-2.5">
            Business Performance
          </h6>
          <p className="font-medium">
            Keep your finger on the pulse of your business
          </p>
        </div>
        <div className="border border-[#CCCCCC80] basis-full sm:basis-[47%] lg:basis-[31%] p-8 shadow-sm rounded-2xl">
          <div className="w-16 h-16 bg-[#FCE8E8] rounded-xl text-primary mb-6 flex items-center justify-center text-3xl">
            <MdQuestionMark />
          </div>
          <h6 className="font-extrabold text-xl mb-2.5">
            Self Service Campaigns
          </h6>
          <p className="font-medium">
            Have complete control over your campaign with options to select your
            own bids and budgets
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatMore;
