import React from "react";
import phone from "../assets/phone.png";

const GetStarted = () => {
  return (
    <div className="w-11/12 lg:w-[80%] mx-auto py-6 md:py-16">
      <div className="flex flex-col md:flex-row gap-12 items-center md:items-end">
        <div className="basis-full md:basis-[45%]">
          <img src={phone} alt="phone" />
        </div>
        <div className="text-left basis-full md:basis-[57%]">
          <div className="w-full sm:w-9/12 pt-8 md:pt-0">
            <h3 className="font-bold text-3xl sm:text-4xl mb-3">
              How to get started as an organizer
            </h3>
            <p>
              Your journey with vivacity starts here! Just follow these easy
              steps
            </p>
          </div>
          <div className="w-full flex gap-3 pt-4">
            <div className="basis-16">
              <div className="bg-[#FCE8E8] w-16 h-16 rounded-full flex items-center justify-center text-primary font-semibold text-lg">
                1
              </div>
              <div className="w-[1px] mx-auto bg-primary h-20"></div>
              <div className="bg-[#FCE8E8] w-16 h-16 rounded-full flex items-center justify-center text-primary font-semibold text-lg">
                2
              </div>
              <div className="w-[1px] mx-auto bg-primary h-20"></div>
              <div className="bg-[#FCE8E8] w-16 h-16 rounded-full flex items-center justify-center text-primary font-semibold text-lg">
                3
              </div>
            </div>
            <div className="basis-[83%]">
              <div className="mb-10 xs:mb-16 md:mb-14">
                <h4 className="font-extrabold text-xl md:text-2xl text-[#020203] mb-2.5">
                  Create an account
                </h4>

                <p className="text-[#020203] text-sm md:text-base font-medium">
                  Sign up for an account with either registered business or
                  personal account. it only takes 5 minutes.
                </p>
              </div>
              <div className="mb-8 xs:mb-16 md:mb-14">
                <h4 className="font-extrabold text-xl md:text-2xl text-[#020203] mb-2.5">
                  Set up your bank details for withdrawal
                </h4>

                <p className="text-[#020203] text-sm md:text-base font-medium">
                  When you successfully sign up and you make successful sales in
                  your escrow after 3 days you get credited
                </p>
              </div>
              <div className="mb-16 md:mb-14">
                <h4 className="font-extrabold text-xl md:text-2xl text-[#020203] mb-2.5">
                  Start receiving payments
                </h4>

                <p className="text-[#020203] text-sm md:text-base font-medium">
                  it’s as simple as a normal bank withdrawal automatically to
                  your preferred bank account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
