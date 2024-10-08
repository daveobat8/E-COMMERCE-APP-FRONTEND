import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import About from "../sections/About";

function Welcome() {
  const [categories,setCategories]= useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:5000/category")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);
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
        <div className="welcome-container">
          <h1>Browse Our Categories</h1>
        </div>
        <About />
    </>
  );
}

export default Welcome;
