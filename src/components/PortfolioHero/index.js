import React from 'react';
import "css.gg/icons/css/arrow-down.css";

const PortfolioHero = () => {
    return (
        <>
            <div className="hero_portfolio">
                <div className="flex_auto">
                    <h1>
                        The <span className="ht_text">followings</span> are my practical 
                        and personal projects.
                    </h1>

                    <a href="#projects">
                        <button className="downToContent">
                            <i className={`gg-${"arrow-down"}`}></i>
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default PortfolioHero;
