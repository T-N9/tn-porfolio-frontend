import React from 'react';
import { Link } from 'react-router-dom';

const HeroTxt = () => {
    return (
        <>
           <div className="hero_txt">
                <h1 className="hero_txt--text">
                Hello there, <br className="hide_on_desktop"/> I am <span className="ht_text">TeNyain</span>, <br className="hide_on_mobile"/>
                a <span className="ht_text">front-end</span> developer who
                delivers <span className="ht_text">fast and reliable</span> websites.
                </h1>

                <Link to='/works'>
                    <button aria-label='contact tenyain' className="hero_txt--btn primary_btn">
                        View works
                    </button>
                </Link>
            </div> 
        </>
    );
}

export default HeroTxt;
