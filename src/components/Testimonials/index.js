import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

/* Component */
import Card from "./Card";

const data = [
  {
    name: "Chen",
    company: "BTBB",
    country: "USA",
    position: "Business Owner",
    saying:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas accusantium suscipit aliquid, aut eum sequi assumenda excepturi accusamus magnam quod doloremque? Omnis autem nesciunt ipsam deserunt debitis ex cumque obcaecati.",
  },
  {
    name: "David",
    country: "Myanmar",
    position: "Front-end developer",
    saying:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Michael",
    country: "Japan",
    position: "Senior Programmer",
    saying:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Gabriel",
    country: "Myanmar",
    position: "Instructor",
    company: "Lorem Media",
    saying:
      "Massa tincidunt dui ut ornare. Sed elementum tempus egestas sed sed risus pretium quam. In eu mi bibendum neque egestas congue. Risus commodo viverra maecenas accumsan.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container_sm">
        <h1 className="title_text text_center">What they say</h1>
        <p className="text_center">
          Things my mentors and seniors talk about me.
        </p>

        <div className="card_wrapper">
          <Swiper
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
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
                <SwiperSlide>
                  <Card person={person} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
