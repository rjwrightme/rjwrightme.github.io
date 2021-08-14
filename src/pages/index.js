import * as React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Header from "../components/Header";
import "../styles/style.css";

const IndexPage = () => {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Experience />
    </main>
  );
};

export default IndexPage;
