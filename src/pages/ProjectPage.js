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

    let title, image, intro, category, icon, status, url, period, type, role, introduction, development, mockup , pandp;
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
        mockup = urlFor(source.mockup)
        pandp = source.pandp;
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
                                role={role}
                                period={period}
                            />
                            <ProjectDescription
                                introduction = {introduction}
                                url = {url}
                                development= {development}
                                mockup = {mockup}
                                pandp = {pandp}
                            />
                        </>

                    )
            }

        </>
    );
}

export default ProjectPage;
