import React from "react";

/* Components */
import { ResponsiveDesign, Prototyping, Accessibility, SEO } from "../Animated";

const ServiceBody = () => {
  return (
    <section className="service_body">
      <div id="services" className="container content_wrapper">
        <h1 className="title_text center_text">What I do</h1>

        <div className="service_body--grid">
          <div className="service_body--card">
            <div className="img_wrapper">
              <ResponsiveDesign />
            </div>
            <div>
              <h1 className="ht_text">Responsive Design</h1>
              <p>
                Responsiveness of a website plays an important role at user
                experience. I ensure my design is looking good on any kind of
                devices.
              </p>
            </div>
          </div>

          <div className="service_body--card">
            <div className="img_wrapper">
              <Prototyping />
            </div>
            <div>
              <h1 className="ht_text">Prototyping</h1>
              <p>
                Reaching project goals by identifying customer requirements and
                prototyping before diving into an actual project are my first
                stages of development.
              </p>
            </div>
          </div>

          <div className="service_body--card">
            <div className="img_wrapper">
              <Accessibility />
            </div>
            <div>
              <h1 className="ht_text">Accessibility</h1>
              <p>
                {/* Nowadays, websites are developed to be accessible by EVERYONE. I
                manage my user interface and codes to meet W3C standards and
                make the best performance. */}
                Web is for EVERYONE. I manage my user interface and codes to
                meet W3C standards and make the best performance.
              </p>
            </div>
          </div>

          <div className="service_body--card">
            <div className="img_wrapper">
              <SEO />
            </div>
            <div>
              <h1 className="ht_text">Search Engine Optimization</h1>
              <p>
                To be a reachable and engaging website, the implementation must
                proceed prioritizing SEO support concepts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBody;
