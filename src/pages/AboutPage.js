import React from "react";

/* Components */
import { AboutHero, AboutTimeline, Footer, HomeMotto, HomeAbout  } from "../components";

const AboutPage = () => {
  return (
    <>
      <div className="nav_spacer"></div>
      <AboutHero/>
      <HomeAbout/>
      <AboutTimeline/>
      <HomeMotto/>
      <Footer/>
    </>
  );
};

export default AboutPage;
