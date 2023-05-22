import About from "./components/about/About";
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-t dark:from-sage-400 dark:to-sage-600 dark:via-sage-600 via-80%">
        <Hero />
      </div>
      <About />
    </>
  );
}
