import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

const ProjectDescription = (props) => {

    const { introduction, url } = props;

    return (
        <section className='description'>
            <div className='container_y_2 container_x_sm'>
                <div className='description--introduction container_x_sm container_y_2'>
                    <h1 className='title_text'>
                        Introduction
                    </h1>
                    <div className='block_content'>
                        <BlockContent blocks={introduction} />
                    </div>
                    {
                        url
                    }
                </div>
            </div>
        </section>
    );
}

export default ProjectDescription;
