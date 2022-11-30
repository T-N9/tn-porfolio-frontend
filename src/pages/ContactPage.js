import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/slices/NavbarSlice";

/* Components */
import { HomeContact, Footer, ContactHero } from "../components";
import Transitions from "../components/Animated/Transitions";

const ContactPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("Contact"));
  }, []);

  return (
    <>
      <Transitions>
        <div className="nav_spacer"></div>
        <ContactHero />
        <HomeContact />
        <Footer />
      </Transitions>
    </>
  );
};

export default ContactPage;
