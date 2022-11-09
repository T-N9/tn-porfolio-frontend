import React from "react";

const ServiceHero = () => {
  return (
    <section className="service_hero">
      <div>
        <div className="service_hero--overlay">
        </div>
        <h1 style={{ marginBottom: "1rem", zIndex : "500", position : 'relative', textAlign: "center" }} className="title_text ht_text">My Services</h1>
        <h1 className="service_hero--text">
          <span className="">Craft</span> and{" "}
          <span className="">Build</span> Web
          <br />
          beyond <span className="">creativity</span>.
        </h1>

        <a href="#services">
          <button className="downToContent"><i className="gg-arrow-down"></i></button>
        </a>
      </div>
    </section>
  );
};

export default ServiceHero;
