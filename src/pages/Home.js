import React from "react";
import Hero from "../Components/Hero/Hero";
import Info from "../Components/InfoSection/Info";
import Service from "../Components/Services/Service";
import Nav from "../Components/Nav";
import {
  aboutData,
  benefitsSection,
  servivesData,
  signUp,
} from "../Components/InfoSection/Data";
import Footer from "../Components/Footer/Footer";

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Info {...aboutData} />
      <Info {...servivesData} />
      <Info {...benefitsSection} />
      <Service />
      <Info {...signUp} />
      <Footer />
    </>
  );
}

export default Home;
