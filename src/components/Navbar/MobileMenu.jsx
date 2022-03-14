import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Hamburger from './Hamburger';
import Toggler from './Toggler';
import { setActive } from '../../redux/slices/NavbarSlice';

const MobileMenu = () => {

    const dispatch = useDispatch();
    const { active } = useSelector((state) => state.navBar);
    const toggleClick = () => {
        dispatch(setActive());
    }

    return (
        <>
            <section className={active ? "nav_mobile_wrapper active" : "nav_mobile_wrapper"}>
                <Hamburger/>
                <ul className="nav_mobile_items">
                    <li onClick={toggleClick} className="nav_item">
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li onClick={toggleClick} className="nav_item">
                        <Link to="/portfolio">
                            Portfolio
                        </Link>
                    </li>
                    <li onClick={toggleClick} className="nav_item">
                        <Link to="/services">
                            Services
                        </Link>
                    </li>
                    <li onClick={toggleClick} className="nav_item">
                        <Link to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>

                <Toggler/>
            </section>
        </>
    );
}

export default MobileMenu;
