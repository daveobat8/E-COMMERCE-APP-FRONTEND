import React, { useEffect, useState } from "react";

function Welcome() {
  const [categories, setCategories] = useState([]);

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
        <button className="btn">View Shop</button>
      </div>
      <div className="about-details-container">
      <div className="title1">
        <h1>Categories</h1>
      </div>
      <div className="about-containers">
        {categories.map((category) => (
          <div className="details-container" key={category.id}>
            <img src={category.image_url} alt={`${category.name} icon`} className="icon" />
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <p>{category.product_count}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Welcome;
