import React from "react";

/* Components */
import { AboutHero, AboutTimeline, Footer  } from "../components";

const AboutPage = () => {
  return (
    <>
      <div className="nav_spacer"></div>
      <AboutHero/>
      <AboutTimeline/>
      <Footer/>
    </>
  );
};

export default AboutPage;
