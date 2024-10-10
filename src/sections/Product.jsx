import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/products/${productId}`) // Fetching single product by productId
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching product data");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);

      })
      .catch((error) => {
        console.error("Error fetching product:", error);

      });
  }, [productId]);

  return (
    <div className="product-page">
      {product ? ( // Check if the product is available
        <div className="product">
          <h1 className="product-title">{product.name}</h1>
          <div className="product-detail">
            <img
              className="product-image2"
              src={product.image_url}
              alt={product.name}
            />
            <div className="product-info">
              <p className="product-description">{product.description}</p>
              <p className="product-rating">Rating: {product.rating} / 5</p>
              <p className="product-price">Price: ${product.price}</p>
              <p className="product-stock">In stock: {product.stock}</p>
              <button
                className="add-to-cart2"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading product...</p> // Loading state while fetching
      )}
    </div>
  );
}

export default Product;
