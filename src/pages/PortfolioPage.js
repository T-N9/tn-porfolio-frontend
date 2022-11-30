import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/slices/NavbarSlice";

/* Components */
import { PortfolioHero, PortfolioProjects, Footer } from "../components";
import Transitions from "../components/Animated/Transitions";

const PortfolioPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("Works"));
  }, []);

  return (
    <>
      <Transitions>
        <section className="portfolio_route_wrapper">
          <div className="nav_spacer"></div>
          <PortfolioHero />
          <div className="content_wrapper">
            <PortfolioProjects />
          </div>
        </section>
        <Footer />
      </Transitions>
    </>
  );
};

export default PortfolioPage;
