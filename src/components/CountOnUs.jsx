import React from "react";
import mil from "../assets/mil-icon.png";

const CountOnUs = () => {
  return (
    <div className="w-11/12 lg:w-[85%] mx-auto py-10 md:py-16">
      <div className="flex gap-5 md:gap-0 flex-col md:flex-row justify-between">
        <div className="flex flex-col xs:flex-row items-start gap-4 basis-2/5">
          <h5 className="text-[#020203] font-bold text-2xl basis-[45%]">
            Businesses that Count On Us
          </h5>

          <p className="basis-[50%] text-sm font-semibold">
            Join over <span className="text-primary">2 million</span> successful
            business owners who trust vivacity for all their event ticket
            business needs.
          </p>
        </div>
        <img src={mil} alt="mil icon" className="w-56" />
      </div>
    </div>
  );
};

export default CountOnUs;
