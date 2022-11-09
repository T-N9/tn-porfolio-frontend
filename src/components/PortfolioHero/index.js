import React from "react";
import "css.gg/icons/css/arrow-down.css";

const PortfolioHero = () => {
  return (
    <>
      <div className="hero_portfolio">
        <div className="flex_auto gradient_bg_transparent">
          <div className="hero_txt">
            <h1 style={{ marginBottom: "1rem" }} className="title_text ht_text">
              My Works
            </h1>
            <h1>The followings are my practical and personal projects.</h1>
          </div>

          <a href="#projects">
            <button className="downToContent">
              <i className={`gg-${"arrow-down"}`}></i>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default PortfolioHero;
