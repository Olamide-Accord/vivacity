import React from "react";
import bbc from "../assets/bbc.png";
import spotify from "../assets/spotify.png";
import rakuten from "../assets/rakuten.png";
import trivago from "../assets/trivago.png";
import tiktok from "../assets/tiktok.png";

const Brands = () => {
  return (
    <div className="w-11/12 lg:w-8/12 mx-auto py-8">
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center">
        <img src={spotify} alt="spotify" />
        <img src={tiktok} alt="tiktok" />
        <img src={bbc} alt="bbc" />
        <img src={trivago} alt="trivago" />
        <img src={rakuten} alt="rakuten" />
      </div>
    </div>
  );
};

export default Brands;
