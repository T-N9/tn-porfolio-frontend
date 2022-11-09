import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../redux/slices/NavbarSlice';

/* Components */
import { AboutHero, AboutTimeline, Footer, HomeMotto, HomeAbout  } from "../components";

const AboutPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(setCurrentPage('About'))
  }, [])

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
