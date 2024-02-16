import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Footer from "./Footer.jsx/Footer";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} exact/>
          <Route path="/skincare" element={<ShopCategory category="skincare" />} />
          <Route path="/makeup" element={<ShopCategory category="makeup" />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/product" element={<Products />}>
            <Route path=":productId" element={<Products />} />

          </Route>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<LoginSignup />} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
