import React, { useEffect, useState } from "react";
import hero from "../assets/hero.png";
import { RiMenu3Fill } from "react-icons/ri";

const Hero = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navBackground, setNavBackground] = useState("transparent");
  const toggleMobileNav = () => setMobileOpen(!mobileOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const heroSection = document.getElementById("heroSection");
      const heroSectionHeight = heroSection.offsetHeight;
      if (heroSection) {
        if (currentScrollPos > heroSectionHeight) {
          setNavBackground("white");
        } else {
          setNavBackground("transparent");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="header relative min-h-screen w-full bg-primary"
      id="heroSection"
    >
      <nav
        className={`fixed right-0 left-0 top-0 z-[75] bg-${
          navBackground === "white" ? "white" : "primary"
        }`}
      >
        <div className="flex justify-between w-11/12 lg:w-[85%] mx-auto py-5">
          <a
            href="#"
            className={`text-${
              navBackground === "transparent" ? "white" : "primary"
            } font-black text-2xl sm:text-3xl`}
          >
            vivacity
          </a>

          <div>
            <div className="hidden md:flex items-center w-full gap-9">
              <ul className="flex gap-4">
                <li>
                  <a
                    href="#"
                    className={`text-${
                      navBackground === "white" ? "black" : "white"
                    } text-sm font-normal`}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`text-${
                      navBackground === "white" ? "black" : "white"
                    } text-sm font-normal`}
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`text-${
                      navBackground === "white" ? "black" : "white"
                    } text-sm font-normal`}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
              <div className="flex gap-3">
                <button
                  className={`bg-transparent text-${
                    navBackground === "white" ? "primary" : "white"
                  } px-5 py-2 rounded-full border-[1.5px] ${
                    navBackground === "white"
                      ? "border-primary"
                      : "border-white"
                  } font-semibold text-sm`}
                >
                  Buy Ticket
                </button>
                <button
                  className={`bg-${
                    navBackground === "white" ? "primary" : "white"
                  } text-${
                    navBackground === "white" ? "white" : "primary"
                  } px-5 py-2 rounded-full font-semibold text-sm`}
                >
                  Sell Ticket
                </button>
              </div>
            </div>
            <button
              onClick={toggleMobileNav}
              className={`block md:hidden text-lg xs:text-xl sm:text-2xl border-2 ${
                navBackground === "white" ? "border-primary" : "border-white"
              } rounded-md p-1 font-bold text-${
                navBackground === "white" ? "primary" : "white"
              } relative`}
            >
              <RiMenu3Fill />
            </button>
          </div>
        </div>
        {mobileOpen && <MobileNav navBackground={navBackground} />}
      </nav>

      <div className="w-11/12 lg:w-[85%] mx-auto pt-24 md:pt-44">
        <div className="flex flex-col md:flex-row gap-10 sm:gap-4 md:gap-32">
          <div className="basis-10/12 md:basis-3/12">
            <h2 className="text-4xl sm:text-5xl md:text-[86px] leading-[1.2] md:leading-[1.05] tracking-tight text-white font-extrabold mb-4 sm:mb-8">
              It's Digital Ticketing Simplified.
            </h2>
            <h5 className="text-white text-xl xs:text-2xl sm:text-3xl font-semibold">
              Experience it now.
            </h5>
          </div>
          <div className="pt-6 md:pt-20 relative">
            <img
              src={hero}
              alt="hero"
              className="w-[150%] sm:w-full h-[150%] sm:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

const MobileNav = ({ navBackground }) => {
  return (
    <div
      className={`absolute right-0 w-full xs:w-72 top-16 py-5 px-4 bg-${
        navBackground === "white" ? "white" : "primary"
      } z-50 md:hidden`}
    >
      <ul className="w-full flex flex-col items-center gap-2">
        <li>
          <a
            href="#"
            className={`text-${
              navBackground === "white" ? "black" : "white"
            } text-sm font-normal`}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`text-${
              navBackground === "white" ? "black" : "white"
            } text-sm font-normal`}
          >
            How it works
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`text-${
              navBackground === "white" ? "black" : "white"
            } text-sm font-normal`}
          >
            Contact Us
          </a>
        </li>
      </ul>
      <div className="flex justify-center gap-3 mt-3">
        <button
          className={`bg-transparent text-${
            navBackground === "white" ? "primary" : "white"
          } px-5 py-2 rounded-full border-[1.5px] ${
            navBackground === "white" ? "border-primary" : "border-white"
          } font-semibold text-xs`}
        >
          Buy Ticket
        </button>
        <button
          className={`bg-${
            navBackground === "white" ? "primary" : "white"
          } text-${
            navBackground === "white" ? "white" : "primary"
          } px-5 py-2 rounded-full font-semibold text-xs`}
        >
          Sell Ticket
        </button>
      </div>
    </div>
  );
};
