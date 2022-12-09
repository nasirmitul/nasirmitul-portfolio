import React from 'react';
import ui from '../../img/UI images 1.jpg'

const Project = () => {
    return (
        <div>
            <section class="my-works">
                <div class="container">
                    <div class="heading">
                        <div class="heading-title">
                            <div class="heading-line"></div>
                            <p>My Works</p>
                        </div>

                        <div class="scroll-arrow">
                            <div class="scroll-left">
                                <div class="arrow-angle"></div>
                                <div class="arrow-line"></div>
                            </div>
                            <div class="scroll-right">
                                <div class="arrow-line"></div>
                                <div class="arrow-angle"></div>
                            </div>
                        </div>

                    </div>

                    <div class="works">
                        <div class="work work-1 row-1">
                            <div class="work-info">
                                <div class="work-heading">
                                    <p>Portfolio</p>
                                    <p>Web Development</p>
                                </div>
                                <div class="title">
                                    <h3>CP.Studio</h3>
                                </div>
                                <div class="description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aperiam ab numquam
                                        optio quod rerum illum sequi nam quae. Sit iste suscipit quidem explicabo similique
                                        numquam aliquam porro, saepe, amet veritatis doloremque necessitatibus. Quam, aut!</p>
                                </div>
                                <div class="technology">
                                    <p>React, NodeJS, ExpressJS, MongoDB</p>
                                </div>
                                <button>
                                    <div class="action-button">
                                        <p>Case Study &gt;</p>
                                        <div class="button-arrow">
                                            <div class="arrow-line"></div>
                                            <div class="arrow-angle"></div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div class="work-ss">
                                <img src={ui} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Project;