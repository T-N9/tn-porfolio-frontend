import React from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
    return (
        <>
            <ul className='nav_items'>
                <li className='nav_item link_hover'>
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li className='nav_item link_hover'>
                    <Link to="/works">
                        Works
                    </Link>
                </li>
                <li className='nav_item link_hover'>
                    <Link to="/services">
                        Services
                    </Link>
                </li>
                <li className='nav_item link_hover'>
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default NavItems;