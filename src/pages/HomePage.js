import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../redux/slices/NavbarSlice';

/* Components */
import { HomeHero, HomeProject, HomeMotto, HomeSkills, HomeContact, Footer } from '../components';


const HomePage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentPage('Home'))
    }, [])

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
