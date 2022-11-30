import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../redux/slices/NavbarSlice";
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
import "css.gg/icons/css/arrow-left-o.css";

import Transitions from "../components/Animated/Transitions";

const ProjectPage = () => {
  const [slugs, setSlugs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextProject, setNextProject] = useState("");
  const [prevProject, setPrevProject] = useState("");
  const [project, setProject] = useState(null);
  const { slug } = useParams();

  const projectNo = slugs.indexOf(slug) + 1;

  let isPrev = projectNo > 1;
  let isNext = projectNo < slugs.length + 1;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage("Works"));
  }, []);

  useEffect(() => {
    const query = `*[_type == "projects" ] | order(order asc)`;
    setLoading(true);
    client.fetch(query).then((data) => {
      let slugData = data.map((item) => {
        // setSlugs((prev) => [...prev, item.slug.current]);
        return item.slug.current;
      });

      setSlugs(slugData);

      let my_project = data.filter((item) => {
        return slug === item.slug.current;
      });

      setProject(my_project);
      setLoading(false);
    });
  }, [slug]);

  useEffect(() => {
    if (slugs !== []) {
      setNextProject(slugs[slugs.indexOf(slug) + 1]);
    }

    if (isPrev) {
      setPrevProject(slugs[slugs.indexOf(slug) - 1]);
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
    development = source.development && source.development;
    mockup = source.mockup && urlFor(source.mockup);
    pandp = source.pandp && source.pandp;
    designing = source.designing && source.designing;
    mockup_d = source.mockup_d && urlFor(source.mockup_d);
    palette = source?.colors && source?.colors;
    typo = source?.typo && urlFor(source?.typo);
    logo = source?.logo && urlFor(source?.logo);
  }

  return (
    <>
      <Transitions>
        <div className="nav_spacer"></div>
        {project === null || loading ? (
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
              <div>
                {isPrev && (
                  <Link to={`/works/${prevProject}`}>
                    <button className="outlined_btn">
                      <i className="gg-arrow-left-o"></i>
                    </button>
                  </Link>
                )}
              </div>

              <div>
                {nextProject !== undefined && (
                  <Link to={`/works/${nextProject}`}>
                    <button className="outlined_btn">
                      <i className="gg-arrow-right-o"></i>
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </>
        )}
        <Footer />
      </Transitions>
    </>
  );
};

export default ProjectPage;
