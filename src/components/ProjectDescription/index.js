import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import "css.gg/icons/css/chevron-right-r.css";

const ProjectDescription = (props) => {

    const { introduction, url, development, mockup, pandp } = props;

    return (
        <section className='description'>
            <div className='container_y_2 container_x_sm'>
                <div className='description--introduction container_sm container_y_2'>
                    <h1 className='title_text'>
                        Introduction
                    </h1>
                    <div className='block_content'>
                        <BlockContent blocks={introduction} />
                    </div>
                    <a href={url} target="_blank" rel='noreferrer'>
                        <button className='secondary_btn view_live_btn'>
                            View live

                            <i className="gg-chevron-right-r"></i>
                        </button>
                    </a>

                </div>

            </div>
            <div className='container_x_sm container_y_1'>
                <div className='description--development container_sm'>
                    <h1 className='title_text'>
                        Development
                    </h1>
                    <div className='block_content'>
                        <BlockContent blocks={development} />
                    </div>
                </div>

                <img className='mockup_img' src={mockup} alt="mockup" />
            </div>
            <div className='container_x_sm'>
                <div className='description--development container_sm'>
                    <h1 className='title_text_1'>
                        Planning and preparation
                    </h1>
                    <div className='block_content'>
                        <BlockContent blocks={pandp}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectDescription;
