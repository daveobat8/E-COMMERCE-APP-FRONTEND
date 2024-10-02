import React from "react";
import Card from "../components/Card";

function Home() {
  return (
    <>
      <div className="home">
        <div className="title">
          <h1>Welcome to Nunua</h1>
        </div>
        <div className="section-text">
          <p>A fast and affordable option</p>
        </div>
        <button className="btn">
          View Shop
        </button>
      </div>
      <div className="home-image">
       <img src="image1.png" alt="home-image" className="image1"/>
       </div>
    </>
  );
}

export default Home;
