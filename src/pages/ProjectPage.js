import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { client, urlFor } from "../client";
import {
  ProjectDescription,
  ProjectHero,
  ProjectStatus,
  Footer,
} from "../components";
import "css.gg/icons/css/spinner.css";
import "css.gg/icons/css/arrow-right-o.css";

const ProjectPage = () => {
  const [slugs, setSlugs] = useState([]);
  const [nextProject, setNextProject] = useState("");
  const [project, setProject] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const query = `*[_type == "projects" ] | order(order asc)`;

    client.fetch(query).then((data) => {
      data.map((item) => {
        setSlugs((prev) => [...prev, item.slug.current]);
        return item;
      });

      let my_project = data.filter((item) => {
        return slug === item.slug.current;
      });

      setProject(my_project);
    });
  }, [slug]);

  useEffect(() => {
    if (slugs !== []) {
      setNextProject(slugs[slugs.indexOf(slug) + 1]);
    }
  }, [slugs, slug]);

  let title,
    image,
    intro,
    category,
    icon,
    status,
    url,
    period,
    type,
    role,
    introduction,
    development,
    mockup,
    pandp,
    designing,
    mockup_d,
    palette,
    typo,
    logo;
  if (project !== null) {
    let source = project[0];

    title = source.title;
    image = urlFor(source.imgUrl);
    intro = source.description;
    category = source.category;
    icon = source.icon;
    status = source.status;
    type = source.type;
    role = source.role;
    url = source.url;
    period = source.period;
    introduction = source.introduction;
    development = source.development;
    mockup = urlFor(source.mockup);
    pandp = source.pandp;
    designing = source.designing;
    mockup_d = urlFor(source.mockup_d);
    palette = source?.colors && source?.colors;
    typo = source?.typo && urlFor(source?.typo);
    logo = source?.logo && urlFor(source?.logo);
  }

  return (
    <>
      <div className="nav_spacer"></div>
      {project === null ? (
        <div className="loading_page">
          <i className={`gg-${"spinner"}`}></i>
        </div>
      ) : (
        <>
          <ProjectHero
            title={title}
            mainImage={image}
            intro={intro}
            category={category}
            icon={icon}
          />
          <ProjectStatus
            status={status}
            type={type}
            role={role}
            period={period}
          />
          <ProjectDescription
            introduction={introduction}
            url={url}
            development={development}
            mockup={mockup}
            pandp={pandp}
            designing={designing}
            mockup_d={mockup_d}
            palette={palette}
            typo={typo}
            logo={logo}
          />
          <div className="button_bar container_y_2 container_sm">
            <Link to={`/portfolio/${nextProject}`}>
              <button className="outlined_btn">
                <i className="gg-arrow-right-o"></i>
              </button>
            </Link>
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default ProjectPage;
