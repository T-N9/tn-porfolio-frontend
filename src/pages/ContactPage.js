import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../redux/slices/NavbarSlice';

/* Components */
import { HomeContact, Footer, ContactHero } from '../components';

const ContactPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentPage('Contact'))
    }, [])

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
