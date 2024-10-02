import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:5000/products")
      .then((response) => response.json())
      .then((products) => {
        console.log(products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
    </>
  );
}

export default Products;
