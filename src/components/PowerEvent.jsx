import React from "react";
import { FaArrowRight } from "react-icons/fa";

const PowerEvent = () => {
  return (
    <div className="header h-[60vh] w-full bg-primary-dark flex items-center justify-center">
      <div
        className="w-11/12 sm:w-4/5 md:w-1/2 text-center flex flex-col items-center'
      "
      >
        <h3 className="font-extrabold leading-[1.6] text-2xl xs:text-3xl md:text-4xl text-white mb-4">
          We're powering the <br />
          thousands of event organizer businesses.
        </h3>
        <h6 className="text-white text-sm sm:text-base">
          Let's power yours too.
        </h6>
        <button className="flex text-sm sm:text-base gap-2 bg-[#FFF0C2] py-3 w-48 sm:w-56 mx-auto rounded-full justify-center mt-4 items-center">
          Create an account
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default PowerEvent;
