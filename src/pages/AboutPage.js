import React from "react";

/* Components */
import { AboutHero, AboutTimeline, Footer, HomeMotto  } from "../components";

const AboutPage = () => {
  return (
    <>
      <div className="nav_spacer"></div>
      <AboutHero/>
      <AboutTimeline/>
      <HomeMotto/>
      <Footer/>
    </>
  );
};

export default AboutPage;
