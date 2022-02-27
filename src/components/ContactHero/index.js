import React from 'react';

const ContactHero = () => {
    return (
        <section className='contact_hero_wrapper'>
            <div className='container_sm contact_hero container_y_2'>
                <div className='content'>
                    <h1 className='title_text'>
                        Open to work
                    </h1>
                    <div className="description">
                        <p className='lg_para'>
                        I am currently seeking job opportunities and experiences to build a better version of myself in the web development field. I am open to internship, entry-level, and junior-level positions. Feel free to contact me and I would love to work with you and your team.

                        </p>
                        
                        <div className='opening_positions'>
                            <p>Opening positions are as follows;</p>
                            <ul className='position_list'>
                                <li>
                                    Front-end development intern
                                </li>
                                <li>
                                    Front-end development trainee
                                </li>
                                <li>
                                    Junior front-end developer
                                </li>
                                <li>
                                    Junior React developer
                                </li>
                                <li>
                                    Junior web designer
                                </li>
                                <li>
                                    Junior UI designer
                                </li>
                            </ul>
                        </div>
                        <button className='secondary_btn'>
                            My Skills
                        </button>
                    </div>


                </div>
            </div>
        </section>
    );
}

export default ContactHero;
