import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Hilight from "./components/Hilight";
import Galery from "./components/Galery";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-black scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Hilight />
      <Galery />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
