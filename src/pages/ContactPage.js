import React from 'react';
import { HomeContact, Footer, ContactHero } from '../components';

const ContactPage = () => {
    return (
        <>
            <div className="nav_spacer"></div>
            <ContactHero/>
            <HomeContact/>
            <Footer/>
        </>
    );
}

export default ContactPage;
