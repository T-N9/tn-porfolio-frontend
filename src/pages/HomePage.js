import React from 'react';
import { HomeHero, HomeAbout, HomeProject, HomeMotto, HomeSkills, HomeContact, Footer } from '../components';

const HomePage = () => {
    return (
        <>
           <div className="nav_spacer"></div>
            <HomeHero/> 
            {/* <HomeAbout/> */}
            <div id="portfolio">
                <HomeProject/>
            </div>
            <HomeMotto/>
            <HomeSkills/>
            <HomeContact/>
            <Footer/>
        </>
    );
}

export default HomePage;
