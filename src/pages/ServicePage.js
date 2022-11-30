import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/slices/NavbarSlice";

/* Components */
import { ServiceHero, ServiceBody, Footer } from "../components";
import Transitions from "../components/Animated/Transitions";

const ServicePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("Services"));
  }, []);

  return (
    <>
      <Transitions>
        <div className="nav_spacer"></div>
        <ServiceHero />
        <ServiceBody />
        <Footer />
      </Transitions>
    </>
  );
};

export default ServicePage;
