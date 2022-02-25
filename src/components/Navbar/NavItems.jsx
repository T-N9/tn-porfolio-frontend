import React from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
    return (
        <>
            <ul className='nav_items'>
                <li className='nav_item link_hover'>
                    <Link to="/tn.dev/about">
                        About
                    </Link>
                </li>
                <li className='nav_item link_hover'>
                    <Link to="/tn.dev/portfolio">
                        Portfolio
                    </Link>
                </li>
                <li className='nav_item link_hover'>
                    <Link to="/tn.dev/services">
                        Services
                    </Link>
                </li>
                <li className='nav_item link_hover'>
                    <Link to="/tn.dev/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default NavItems;