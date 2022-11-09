import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/slices/NavbarSlice";

/* Components */
import { PortfolioHero, PortfolioProjects, Footer } from "../components";

const PortfolioPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("Works"));
  }, []);

  return (
    <>
      <section className="portfolio_route_wrapper">
        <div className="nav_spacer"></div>
        <PortfolioHero />
        <div className="content_wrapper">
          <PortfolioProjects />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PortfolioPage;
