import React from "react";

/* Images */
import HeroImage from "../../assets/aboutHero.webp";

const AboutHero = () => {
  return (
    <section className="about_hero">
      <div className="container">
        <div className="about_hero--wrapper">
          <div className="about_hero--content">
            <h1 className="">
              Hi there, I am <span className="ht_text">Te Nyain</span> Moe Lwin,
              21 years old creative <span className="ht_text">front-end</span> web developer with 1+ years experience. I am here to help
              turn your <span className="ht_text">idea into life.</span>{" "}
            </h1>
          </div>

          <div className="about_hero--image">
            <img src={HeroImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
