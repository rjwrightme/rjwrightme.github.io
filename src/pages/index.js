import * as React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/style.css";

const IndexPage = () => {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Footer />
    </main>
  );
};

export default IndexPage;
