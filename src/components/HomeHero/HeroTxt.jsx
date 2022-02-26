import React from 'react';
import { Link } from 'react-router-dom';

const HeroTxt = () => {
    return (
        <>
           <div className="hero_txt">
                <h1 className="hero_txt--text">
                Hello there, <br className="hide_on_desktop"/> I am <span className="ht_text">TeNyain</span>, <br className="hide_on_mobile"/>
                a <span className="ht_text">front-end</span> developer who
                loves to <span className="ht_text">craft and build</span> web.
                </h1>

                <Link to="/contact">
                    <button className="hero_txt--btn primary_btn">
                        Contact me
                    </button>
                </Link>
            </div> 
        </>
    );
}

export default HeroTxt;
