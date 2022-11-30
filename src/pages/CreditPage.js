import React from "react";

/* Components */
import { AllCredits, Footer } from "../components";
import Transitions from "../components/Animated/Transitions";

const CreditPage = () => {
  return (
    <>
      <Transitions>
        <div className="nav_spacer"></div>
        <AllCredits />
        <Footer />
      </Transitions>
    </>
  );
};

export default CreditPage;
