import React from 'react';

const About = () => {
    return (
        <div>
            <section className="about-me">
                <div className="container">
                    <div className="heading">
                        <div className="heading-line"></div>
                        <p>About Me</p>
                    </div>

                    <div className="about-me-main">
                        <div className="about-left">
                            <div className="bg-box"></div>
                            <div className="main-box">
                                <div className="left">
                                    <div className="box-one">
                                        <i className="uil uil-pen"></i>
                                        <p>Web<br/>Design</p>
                                    </div>
                                    <div className="box-two">
                                        <i className="uil uil-wrench"></i>
                                        <p>Website<br/>Maintenence</p>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="box-three">
                                        <i className="uil uil-brackets-curly"></i>
                                        <p>Web<br/>Development</p>
                                    </div>
                                    <div className="box-four">
                                        <i className="uil uil-database"></i>
                                        <p>Database<br/>Management</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-right">
                            <div className="title">
                                <h2>Better Design<br/>
                                    Better Development<br/>
                                        Better Experience
                                    </h2>
                                </div>
                                    <div className="description">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit esse nisi minima, sed,
                                            magnam ipsum eveniet quas saepe deleniti aliquid incidunt? Unde, repudiandae! Quod, ipsam?
                                        </p>
                                    </div>
                                    <div className="actions">
                                        <div className="download">
                                            <a href="#">Download resume</a>
                                        </div>
                                        <div className="action-button">
                                            <p>Contact ME &gt;</p>
                                            <div className="button-arrow">
                                                <div className="arrow-line"></div>
                                                <div className="arrow-angle"></div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

            </section>
        </div>
    );
};

export default About;