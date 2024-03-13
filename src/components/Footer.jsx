import React from "react";
import apple from "../assets/apple-store.png";
import play from "../assets/play-store.png";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-footer-bg">
      <div className="w-11/12 lg:w-[85%] mx-auto py-8">
        <div className="flex flex-col gap-7 lg:gap-0 lg:flex-row py-10">
          <div className="basis-full sm:basis-2/5">
            <div className="flex gap-3">
              <img src={apple} alt="apple store" />
              <img src={play} alt="google store" />
            </div>
            <p className="mt-4 text-white/[0.7] text-sm">
              Download our mobile app now on Playstore and Apple store
            </p>
          </div>
          <div className="w-full sm:w-3/5">
            <div className="flex flex-col xs:flex-row gap-4 lg:gap-0 flex-wrap w-full justify-between">
              <div>
                <h6 className="text-white text-base sm:text-lg mb-2.5">
                  For Business
                </h6>
                <ul className="flex flex-col gap-2 sm:gap-[5px]">
                  <li className="text-white/70 font-light text-sm sm:text-base">
                    Business Account
                  </li>
                  <li className="text-white/70 font-light text-sm sm:text-base">
                    Scanner App
                  </li>
                  <li className="text-white/70 font-light text-sm sm:text-base">
                    Escrow App
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="text-white text-base sm:text-lg mb-2.5">
                  For Personal
                </h6>
                <ul className="flex flex-col gap-2 sm:gap-[5px]">
                  <li className="text-white/70 font-light text-sm sm:text-base">
                    Refund
                  </li>
                  <li className="text-white/70 font-light text-sm sm:text-base">
                    Ticket Sharing
                  </li>
                  <li className="text-white/70 font-light text-sm sm:text-base">
                    Payment
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="text-white text-base sm:text-lg mb-2.5">
                  Company
                </h6>
                <ul className="flex flex-col gap-2 sm:gap-[5px]">
                  <li className="text-white/70 font-light text-sm sm:text-base">
                    About Us
                  </li>
                  <li className="text-white/70 font-light text-sm sm:text-base">
                    How It works
                  </li>
                  <li className="text-white/70 font-light text-sm sm:text-base">
                    Join Our Team
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="text-white text-base sm:text-lg mb-2.5">
                  Connect with us
                </h6>
                <ul className="flex flex-col gap-2 sm:gap-[5px]">
                  <li className="text-white/70 font-light text-sm sm:text-base">
                    Live Chat
                  </li>
                  <li className="text-white/70 font-light text-sm sm:text-base">
                    Contact Us
                  </li>
                  <div className="flex items-center mt-1.5 gap-1.5">
                    <div className="w-8 h-8 bg-white/10 rounded-full text-white/40 flex items-center justify-center text-base">
                      <FaLinkedin />
                    </div>
                    <div className="w-8 h-8 bg-white/10 rounded-full text-white/40 flex items-center justify-center text-base">
                      <FaTwitter />
                    </div>
                    <div className="w-8 h-8 bg-white/10 rounded-full text-white/40 flex items-center justify-center text-base">
                      <FaFacebookF />
                    </div>
                    <div className="w-8 h-8 bg-white/10 rounded-full text-white/40 flex items-center justify-center text-base">
                      <FaInstagram />
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#BDD7EE26]/15 text-white/40 flex flex-col gap-3 sm:gap-0 sm:flex-row sm:items-center xs:justify-between pt-4">
          <p className="text-sm">
            Copyright © 2024, Vivacity Technology Limited
          </p>
          <ul className="flex gap-4">
            <li className="font-light text-sm">Privacy Policy</li>
            <li className="font-light text-sm">Cookie Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
