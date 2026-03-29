import React from "react";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Header from "./components/Header";
import Reimagining from "./components/Reimagining";
import Digit from "./components/Digit";
import LatestSection from "./components/LatestSection";
import Footer from "./components/Footer";
import Supporter from "./components/Supporter";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Reimagining />
        <Digit />
        <LatestSection />
        <Supporter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
