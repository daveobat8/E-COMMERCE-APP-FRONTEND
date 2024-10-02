import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import "./Mediaqueries.css"
import Navbar from "./components/Navbar";
import Products from "./sections/Products";
import Welcome from './components/Welcome';
import Home from './sections/Home';
import Product from './sections/Product';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/products" element={<Products />} />
      <Route path="/" element={<Home />} />
      <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
