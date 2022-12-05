import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/slices/NavbarSlice";

/* Components */
import {
  AboutHero,
  AboutTimeline,
  Footer,
  HomeMotto,
  HomeAbout,
  Testimonials,
  AboutWriting,
  AboutWishing
} from "../components";
import Transitions from "../components/Animated/Transitions";

const AboutPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("About"));
  }, []);

  return (
    <>
      <Transitions>
        <div className="nav_spacer"></div>
        <AboutWishing/>
        <AboutHero />
        <HomeAbout />
        <AboutTimeline />
        <HomeMotto />
        <Testimonials />
        <AboutWriting />
        <Footer />
      </Transitions>
    </>
  );
};

export default AboutPage;
