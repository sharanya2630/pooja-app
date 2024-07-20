

import React from "react";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />

      <div
        className="d-flex justify-content-around align-content-center"
        style={{ alignItems: "center" }}
      >
        <h2>
          Pray daily with Sri Mandir. <br />
          One App for all your devotional needs.
        </h2>

        <img
          src="https://i.ibb.co/Wv3WhVJ/img-hero-artwork-en.webp"
          style={{ height: "480px", width: "50%", marginTop: "20px" }}
        />
      </div>
    </div>
  );
};

export default HomePage;
