import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./App.css";
import PowerEvent from "./components/PowerEvent";
import CountOnUs from "./components/CountOnUs";
import Brands from "./components/Brands";
import FAQs from "./components/FAQs";
import GetStarted from "./components/GetStarted";
import WhatMore from "./components/WhatMore";
import EventTicket from "./components/EventTicket";

function App() {
  return (
    <>
      <Hero />
      <CountOnUs />
      <Brands />
      <EventTicket />
      <WhatMore />
      <GetStarted />
      <FAQs />
      <PowerEvent />
      <Footer />
    </>
  );
}

export default App;
