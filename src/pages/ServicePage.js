import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../redux/slices/NavbarSlice';

/* Components */
import { ServiceHero, ServiceBody , Footer } from "../components";

const ServicePage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(setCurrentPage('Services'))
  }, [])

  return (
    <>
      <div className="nav_spacer"></div>
      <ServiceHero />
      <ServiceBody/>
      <Footer />
    </>
  );
};

export default ServicePage;
