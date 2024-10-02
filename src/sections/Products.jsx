import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate= useNavigate()

  useEffect(() => {
    fetch("http://127.0.0.1:5000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleAddToCart = (product) => {
    console.log(`${product.name} added to cart!`);
    // Add functionality to actually add product to cart
  };

  const handleViewProduct = (product) => {
    navigate(`/product/${product.id}`)
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>
      <div className="container">
        {filteredProducts.map((product, index) => (
          <div className="card" key={index}>
            <img className="product-image" src={product.image_url} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <div className="buttons">
              <button
                onClick={() => handleAddToCart(product)}
                className="add-to-cart"
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleViewProduct(product)}
                className="view-product"
              >
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
