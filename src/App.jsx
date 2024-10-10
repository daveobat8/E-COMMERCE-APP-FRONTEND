import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import "./Mediaqueries.css"
import Navbar from "./components/Navbar";
import Products from "./sections/Products";
import Home from './sections/Home';
import Product from './sections/Product';
import Cart from './sections/Cart';
import Login from './sections/Login';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/products" element={<Products />} />
      <Route path="/" element={<Home />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
