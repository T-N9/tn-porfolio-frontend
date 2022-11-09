import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { client, urlFor } from "../../client";
import { nanoid } from "@reduxjs/toolkit";

// import required modules
import { Pagination } from "swiper";

// Import Swiper styles
// import "swiper-bundle.min.css";

const SwiperCards = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const query = '*[_type == "projects"] | order(order asc)';

    client.fetch(query).then((data) => {
      setProjects(data);
    });
  }, []);

  if (projects !== []) {
    // console.log(projects);
  }

  const ProjectCards = projects.map((project) => {
    const { title, description, icon, category, slug } = project;
    return (
      <SwiperSlide key={nanoid()}>
        <Link to={`/works/${slug.current}`}>
          <ProjectCard
            title={title}
            desc={description}
            image={urlFor(project.imgUrl)}
            icon={icon}
            category={category}
          />
        </Link>
      </SwiperSlide>
    );
  });

  return (
    <>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={16}
        slidesOffsetAfter={0}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1366: {
            slidesPerView: 2,
            spaceBetween: 40,
            centeredSlides: false,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: false,
          },
          414: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
          },
        }}
        className="mySwiper"
      >
        {ProjectCards}
      </Swiper>
    </>
  );
};

export default SwiperCards;
