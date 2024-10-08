import React, { useEffect, useState } from 'react'

function Cart() {

    const[products,setProducts]= useState()

    useEffect(() => {
        fetch("http://127.0.0.1:5000/cart_items")
          .then((response) => response.json())
          .then((data) => {
            setProducts(data);
            console.log(data);
          })
          .catch((error) => console.error("Error fetching cart_items:", error));
      }, []);

  return (
    <div>Cart</div>
  )
}

export default Cart