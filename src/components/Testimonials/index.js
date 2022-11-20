import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper";

/* Component */
import Card from "./Card";

const data = [
  {
    name: "Hein Htet",
    country: "Myanmar",
    position: "Instructor",
    company: "MMSIT",
    saying:
      "Te Nyain is a well-trained student who took the \"Special Web Design\" course from us. He is specialized in Front-end development and delivering trustworthy interactive websites to his consumers.",
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="background_div">
        <div className="container_sm">
          <h1 className="title_text text_center">What they say</h1>
          <p className="text_center desc_text">
            Things my mentors and seniors talk about me.
          </p>
        
          <div className="card_wrapper">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[FreeMode, Pagination, Autoplay]}
              className="mySwiper"
              breakpoints={{
                640: {
                  slidesPerView: 1,
        
                },
                768: {
                  slidesPerView: 1,
        
                },
                1024: {
                  slidesPerView: 2,
        
                },
              }}
            >
              {data.map((person, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Card person={person} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
