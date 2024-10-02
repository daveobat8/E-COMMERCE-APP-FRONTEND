import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import "./Mediaqueries.css"
import Navbar from "./components/Navbar";
import Home from "./sections/Welcome";
import Products from "./sections/Products";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Routes>
      <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
