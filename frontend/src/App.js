import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import IndustriesPage from "./pages/IndustriesPage";
import AftermarketPage from "./pages/AftermarketPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/aftermarket" element={<AftermarketPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" richColors />
      </div>
    </BrowserRouter>
  );
}

export default App;
