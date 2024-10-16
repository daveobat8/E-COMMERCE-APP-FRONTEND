import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import "./App.css";
import "./Mediaqueries.css"
import Navbar from "./components/Navbar";
import Products from "./sections/Products";
import Home from './sections/Home';
import Product from './sections/Product';
import Cart from './sections/Cart';
import Login from './sections/Login';
import Blog from './sections/Blog';
import About from './sections/About';
import Contact from './sections/Contact';

function App() {

    const location = useLocation()

  return (
    <>
      {location.pathname !== '/' && <Navbar />}
      <Routes>
      <Route path="/products" element={<Products />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/" element={<Login />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/#about" element={<About />} />
      <Route path="/#contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
