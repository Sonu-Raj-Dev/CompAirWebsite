import React from "react";
import "./App.css";
import { Toaster } from "./components/ui/sonner";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { Features } from "./components/Features";
import { Downloads } from "./components/Downloads";
import { CTA } from "./components/CTA";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Features />
        <Downloads />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;
