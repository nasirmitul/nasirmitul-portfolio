import React from 'react';

const About = () => {
    return (
        <div>
            <section class="about-me">
                <div class="container">
                    <div class="heading">
                        <div class="heading-line"></div>
                        <p>About Me</p>
                    </div>

                    <div class="about-me-main">
                        <div class="about-left">
                            <div class="bg-box"></div>
                            <div class="main-box">
                                <div class="left">
                                    <div class="box-one">
                                        <i class="uil uil-pen"></i>
                                        <p>Web<br/>Design</p>
                                    </div>
                                    <div class="box-two">
                                        <i class="uil uil-wrench"></i>
                                        <p>Website<br/>Maintenence</p>
                                    </div>
                                </div>
                                <div class="right">
                                    <div class="box-three">
                                        <i class="uil uil-brackets-curly"></i>
                                        <p>Web<br/>Development</p>
                                    </div>
                                    <div class="box-four">
                                        <i class="uil uil-database"></i>
                                        <p>Database<br/>Management</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="about-right">
                            <div class="title">
                                <h2>Better Design<br/>
                                    Better Development<br/>
                                        Better Experience
                                    </h2>
                                </div>
                                    <div class="description">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit esse nisi minima, sed,
                                            magnam ipsum eveniet quas saepe deleniti aliquid incidunt? Unde, repudiandae! Quod, ipsam?
                                        </p>
                                    </div>
                                    <div class="actions">
                                        <div class="download">
                                            <a href="#">Download resume</a>
                                        </div>
                                        <div class="action-button">
                                            <p>Contact ME &gt;</p>
                                            <div class="button-arrow">
                                                <div class="arrow-line"></div>
                                                <div class="arrow-angle"></div>
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