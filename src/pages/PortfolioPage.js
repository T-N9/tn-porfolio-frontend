import React from 'react';
import { PortfolioHero, PortfolioProjects, Footer } from '../components';

const PortfolioPage = () => {
    return (
        <>
            <section className='portfolio_route_wrapper'>
                <div className='nav_spacer'></div>
                <PortfolioHero/>
                <div className="content_wrapper">
                    <PortfolioProjects/>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default PortfolioPage;
