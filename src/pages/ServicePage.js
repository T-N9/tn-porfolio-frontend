import React from "react";

/* Components */
import { ServiceHero, ServiceBody , Footer } from "../components";

const ServicePage = () => {
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
