import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/products")
      .then((response) => response.json())
      .then((data) => {

        setProducts(data)
        console.log(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
    <div className="container">
        {products.map((product,index)=> (
            <div className="card" key={index}>
                <img className="product-image" src={product.image_url} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: {product.price}</p>
            </div>
        ))}
    </div>
    </>
  );
}

export default Products;
