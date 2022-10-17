import React, { useState, useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ScrollToTop from "./container/ScrollToTop";
import { NavBar } from "./components";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentTheme } from "./redux/slices/NavbarSlice";
import "css.gg/icons/css/spinner.css";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const ProjectPage = React.lazy(() => import("./pages/ProjectPage"));
const PortfolioPage = React.lazy(() => import("./pages/PortfolioPage"));
const ServicePage = React.lazy(() => import("./pages/ServicePage"));
const CreditPage = React.lazy(() => import("./pages/CreditPage"));
const SimplePage = React.lazy(() => import("./pages/SimplePage"));

const App = () => {
  const [loading, setLoading] = useState(true);
  const { theme } = useSelector((state) => state.navBar);

  const localStorageKey = "theme";

  const dispatch = useDispatch();
  let persistedTheme = localStorage.getItem(localStorageKey);

  useEffect(() => {
    if (persistedTheme === null) {
      localStorage.setItem(localStorageKey, false);
      persistedTheme = localStorage.getItem(localStorageKey) && false;
    } else if (persistedTheme === "true") {
      persistedTheme = true;
    } else if (persistedTheme === "false") {
      persistedTheme = false;
    }

    dispatch(setCurrentTheme(persistedTheme));

    setInterval(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <main className={theme ? "main_content dark" : "main_content"}>
      <NavBar />
      <div className={loading ? "loading_page visible" : "loading_page hidden"}>
        <i className={`gg-${"spinner"}`}></i>
      </div>

      <Suspense
        fallback={
          <div
            className={"loading loading_page"}
          >
            <i className={`gg-${"spinner"}`}></i>
          </div>
        }
      >
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/portfolio/:slug" element={<ProjectPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/credits" element={<CreditPage />} />
            <Route path="/simplify" element={<SimplePage />} />
          </Routes>
        </ScrollToTop>
      </Suspense>
    </main>
  );
};

export default App;
