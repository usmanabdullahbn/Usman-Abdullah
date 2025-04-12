import React from "react";
import About from "../component/About";
import Contact from "../component/Contact";
import Hero from "../component/Hero";
import LogoSlider from "../component/LogoSlider";
import Service from "../component/Service";
import StoriesSection from "../component/Stories";
import Testimorials from "../component/Testimorials";
import Work from "../component/Work";

const Home = () => {
  return (
    <div>
      <Hero />
      <LogoSlider /> {/* dark:false */}
      <About /> {/* dark:false */}
      <Service />
      <Work /> {/* dark:false */}
      <Testimorials />
      <StoriesSection /> {/* dark:false */}
      <Contact />
    </div>
  );
};

export default Home;
