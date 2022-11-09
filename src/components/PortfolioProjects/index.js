import React, { useState, useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import ProjectCard from '../HomeProjects/ProjectCard';
import { Link } from 'react-router-dom';
import { client, urlFor } from '../../client';

const PortfolioProjects = () => {

    const [ projects, setProjects ] = useState(null);

    useEffect(()=> {
        const query = '*[_type == "projects"] | order(order asc)';
    
        client.fetch(query).then((data) => {
          setProjects(data);
        });
    }, [])

    let projectList;
    if(projects !== null) {
        projectList = projects.map( project => {
            const { title, description , icon, category, slug} = project;
            return (
                <Link key={nanoid()} to={`/works/${slug.current}`}>
                    <ProjectCard
                        title = {title}
                        desc = {description}
                        image = {urlFor(project.imgUrl)}
                        icon = {icon}
                        category = {category}
                    />
                </Link>
            );  
        });
    }

    return (
        <div id="projects" className="projectContent container">
            {/* <span ></span> */}
            <h1 className="title_text">Recent Works</h1>
            <div className="projectContent--grid">
                {projectList}
            </div>
        </div>
    );
}

export default PortfolioProjects;
