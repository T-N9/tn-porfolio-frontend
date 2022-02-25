import React from "react";
import Greetings from "./Greeting";
import ReachMe from "./ReachMe";

const Footer = () => {
    return (
        <footer className="footer_page_wrapper">
            <div className="footer_page container_sm">
                <div className="footer_flexbox">
                    <Greetings />
                    <ReachMe />
                </div>
                <div className="footer_line">
                    <p>
                        Designed & Implemented by Te Nyain
                        |
                        &copy; 2022
                        |
                        <a href="testing.com">
                            &nbsp; Credits & Attributions
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;