import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client, urlFor } from '../client';
import { ProjectDescription, ProjectHero, ProjectStatus } from '../components';

const ProjectPage = () => {

    const [project, setProject] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        const query = `*[_type == "projects" ]`;

        client.fetch(query).then((data) => {
            let my_project = data.filter(item => {
                return slug === item.slug.current
            });

            setProject(my_project);
        });
    }, [slug])

    let title, image, intro, category, icon, status, url, period, type, role, introduction;
    if (project !== null) {

        title = project[0].title;
        console.log(project);
        image = urlFor(project[0].imgUrl);
        intro = project[0].description;
        category = project[0].category;
        icon = project[0].icon;
        status = project[0].status;
        type = project[0].type;
        role = project[0].role;
        url = project[0].url;
        period = project[0].period;
        introduction = project[0].introduction;
    }

    return (
        <>
            <div className="nav_spacer"></div>
            {
                project === null ?
                    (
                        <div>
                            Loading...
                        </div>
                    )
                    :
                    (
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
                                url={url}
                                role={role}
                                period={period}
                            />
                            <ProjectDescription
                                introduction = {introduction}
                            />
                        </>

                    )
            }

        </>
    );
}

export default ProjectPage;
