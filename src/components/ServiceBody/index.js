import React from "react";

/* Components */
import {
  ResponsiveDesign,
  Prototyping,
  Accessibility,
  SEO,
  DesignToCode,
  Frontend,
} from "../Animated";

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

          <div className="service_body--card">
            <div className="img_wrapper scale-2">
              <DesignToCode />
            </div>
            <div>
              <h1 className="ht_text">Design to Code</h1>
              <p>
                If web design is already crafted, I am here to convert Figma,
                PSD, and Xd templates into well-performed websites.
              </p>
            </div>
          </div>

          <div className="service_body--card">
            <div className="img_wrapper">
              <Frontend />
            </div>
            <div>
              <h1 className="ht_text">Front-end Development</h1>
              <p>
                I use React.js to build scalable, reusable, maintainable, and to
                provide fast Single Page Applications.
              </p>
            </div>
          </div>
        </div>

        <div className="service_body--promote">
          <h1>Your goals are my milestones.</h1>
          <p>
            As a front-end web developer, I make sure that my website has good
            design qualities, from colors, and typography to clean coding and
            performance. Nowadays, there are so many ways to create web content
            but to attract users at the very first seconds of your webpage, the
            content has to be clear and interactive to various devices.
            <br /><br />
            My design is simple, minimal, and reachable to users. I build and
            learn newer technologies to deliver fast and reliable websites.
            <br /><br />I care about your business values and targeted customers to
            meet your golden goals for tomorrow.
          </p>
        </div>
        <a href="mailto:tenyainmoelwin@gmail.com">
          <button className="primary_btn">Contact Me</button>
        </a>
      </div>
    </section>
  );
};

export default ServiceBody;
