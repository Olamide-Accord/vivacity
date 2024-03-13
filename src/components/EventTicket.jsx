import React, { useState } from "react";
import hero from "../assets/order-ticket.png";
import phone from "../assets/ticket-phone.png";

const tab = [
  {
    title: "Ticket Scanner App",
    link: "ticketScannerApp",
  },
  {
    title: "Escrow System",
    link: "escrowSystem",
  },
  {
    title: "Event Promotions",
    link: "eventPromotions",
  },
  {
    title: "Instant Payout",
    link: "instantPayout",
  },
];

const EventTicket = () => {
  const [activeTab, setActiveTab] = useState(0);

  const scrollToSection = (link) => {
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-[#FEF8F8] w-full" id="tools">
      <div className="w-11/12 lg:w-[80%] mx-auto py-6 md:py-16">
        <div className="w-full sm:w-4/5 md:w-1/2 mx-auto">
          <h5 className="text-dark font-bold text-2xl sm:text-3xl text-center">
            All the tools you need to run your event ticket business with ease
          </h5>
        </div>
        <div className="w-full sm:w-11/12 lg:w-9/12 mx-auto mt-10">
          <div className="flex justify-between px-3 md:px-5 py-2.5 rounded-xl bg-white shadow-sm">
            {tab.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`${
                    activeTab === index
                      ? "bg-primary-light/35 text-primary"
                      : "bg-white"
                  } px-3 md:px-4 py-2 rounded-full font-medium text-xs sm:text-sm md:text-base`}
                  onClick={() => {
                    setActiveTab(index);
                    scrollToSection(item.link);
                  }}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row gap-6 md:gap-0 py-10 sm:py-16 justify-between"
          id="ticketScannerApp"
        >
          <div className="basis-full md:basis-[37%]">
            <button className="bg-[#FCE8E8] px-4 py-2 rounded-full text-primary font-medium mb-7">
              Ticket Scanning
            </button>
            <h3 className="text-dark font-bold mb-3 sm:mb-5 text-2xl sm:text-3xl md:text-4xl">
              Scan all ticket purchases at the event venue without any
              additional cost
            </h3>
            <p className="font-medium">
              The application automatically generates QR codes. To utilize this
              feature, simply create a scanner account, assign an event to it,
              and users can effortlessly log in to initiate the scanning
              process.
            </p>
            <button className="bg-primary text-sm sm:text-base text-white px-7 sm:px-10 py-2.5 rounded-full mt-5">
              Download the app
            </button>
          </div>
          <div className="basis-full md:basis-[37%]">
            <img src={phone} alt="ticket scanning" />
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row gap-6 md:gap-0 py-10 sm:py-16 justify-between"
          id="escrowSystem"
        >
          <div className="basis-full order-2 md:order-1 md:basis-[45%]">
            <img src={hero} alt="ticket scanning" />
          </div>
          <div className="basis-full order-1 md:order-2 md:basis-[45%]">
            <button className="bg-[#FCE8E8] px-4 py-2 rounded-full text-primary font-medium mb-7">
              Escrow System
            </button>
            <h3 className="text-dark font-bold mb-3 sm:mb-5 text-2xl sm:text-3xl md:text-4xl">
              We have implemeted an escrow system that enables trust, provides
              an efficient way of selling event tickets
            </h3>
            <p className="font-medium">
              Funds are available for withdrawal within 2 days of sales,
              ensuring satisfaction for both event organizers and attendees.
              This system also enables secure refunds for organizers in case of
              cancellations.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row gap-6 md:gap-0 py-10 sm:py-16 justify-between"
          id="eventPromotions"
        >
          <div className="basis-full md:basis-[37%]">
            <button className="bg-[#FCE8E8] px-4 py-2 rounded-full text-primary font-medium mb-7">
              Event Promotion
            </button>
            <h3 className="text-dark font-bold mb-3 sm:mb-5 text-2xl sm:text-3xl md:text-4xl">
              Get visibility and Sales for your events on vivacity with
              sponsored ads
            </h3>
            <p className="font-medium">
              Sponsored event help you promote your event to most suitable
              buyers, at the most attractive locations (Search Page, Category
              Page and event Page) on vivacity app.
            </p>
            <button className="bg-primary text-white text-sm sm:text-base px-7 sm:px-10 py-2.5 rounded-full mt-5">
              Start promotion
            </button>
          </div>
          <div className="basis-full md:basis-[37%]">
            <img src={phone} alt="ticket scanning" />
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row gap-6 md:gap-0 py-10 sm:py-16 justify-between"
          id="instantPayout"
        >
          <div className="basis-full order-2 md:order-1 md:basis-[45%]">
            <img src={hero} alt="ticket scanning" />
          </div>
          <div className="basis-full order-1 md:order-2 md:basis-[45%]">
            <button className="bg-[#FCE8E8] px-4 py-2 rounded-full text-primary font-medium mb-7">
              Instant Payout
            </button>
            <h3 className="text-dark font-bold mb-3 sm:mb-5 text-2xl sm:text-3xl md:text-4xl">
              We have implemeted an escrow system that enables trust, provides
              an efficient way of selling event tickets
            </h3>
            <p className="font-medium">
              Funds are available for withdrawal within 2 days of sales,
              ensuring satisfaction for both event organizers and attendees.
              This system also enables secure refunds for organizers in case of
              cancellations.
            </p>
            <button className="bg-primary text-white text-sm sm:text-base px-7 sm:px-10 py-2.5 rounded-full mt-5">
              Withdraw funds now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTicket;
