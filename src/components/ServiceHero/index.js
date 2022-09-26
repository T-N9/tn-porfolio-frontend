import React from "react";

const ServiceHero = () => {
  return (
    <section className="service_hero">
      <div>
        <div className="service_hero--overlay">

        </div>
        <h1 className="service_hero--text">
          <span className="ht_text">Craft</span> and{" "}
          <span className="ht_text">Build</span> Web
          <br />
          beyond <span className="ht_text">creativity</span>.
        </h1>

        <a href="#services">
          <button className="downToContent"><i class="gg-arrow-down"></i></button>
        </a>
      </div>
    </section>
  );
};

export default ServiceHero;
