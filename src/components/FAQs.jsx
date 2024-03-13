import React from "react";
import { PiCaretDown } from "react-icons/pi";

const questions = [
  "What is escrow system?",
  "What documents do I need to open a business organizer",
  "Is there a fee for opening an account?",
  "Is vivacity safe?",
  "Can a personal bank account be used for business?",
  "How do i promote my event?",
  "How do i access my fund after sales",
];

const FAQs = () => {
  return (
    <div className="w-11/12 lg:w-[85%] mx-auto py-6 md:py-12">
      <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
        <div className="basis-full sm:basis-[38%]">
          <h4 className="font-bold text-2xl sm:text-3xl md:text-[2.75rem] leading-normal md:leading-[1.2]">
            Frequently Asked Questions
          </h4>
        </div>

        <div className="flex flex-col gap-3 basis-full sm:basis-[70%]">
          {questions.map((item, index) => {
            return (
              <div
                className="w-full flex justify-between items-center border-[1.5px] border-black p-3.5 sm:p-4 md:p-6 rounded-lg"
                key={index}
              >
                <h6 className="basis-10/12 font-semibold text-sm xs:text-base sm:text-lg">
                  {item}
                </h6>
                <button>
                  <PiCaretDown />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
