import React from 'react';
import ui from '../../img/UI images 1.jpg'

const Project = () => {
    return (
        <div>
            <section className="my-works">
                <div className="container">
                    <div className="heading">
                        <div className="heading-title">
                            <div className="heading-line"></div>
                            <p>My Works</p>
                        </div>

                        <div className="scroll-arrow">
                            <div className="scroll-left">
                                <div className="arrow-angle"></div>
                                <div className="arrow-line"></div>
                            </div>
                            <div className="scroll-right">
                                <div className="arrow-line"></div>
                                <div className="arrow-angle"></div>
                            </div>
                        </div>

                    </div>

                    <div className="works">
                        <div className="work work-1 row-1">
                            <div className="work-info">
                                <div className="work-heading">
                                    <p>Portfolio</p>
                                    <p>Web Development</p>
                                </div>
                                <div className="title">
                                    <h3>CP.Studio</h3>
                                </div>
                                <div className="description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aperiam ab numquam
                                        optio quod rerum illum sequi nam quae. Sit iste suscipit quidem explicabo similique
                                        numquam aliquam porro, saepe, amet veritatis doloremque necessitatibus. Quam, aut!</p>
                                </div>
                                <div className="technology">
                                    <p>React, NodeJS, ExpressJS, MongoDB</p>
                                </div>
                                <button>
                                    <div className="action-button">
                                        <p>Case Study &gt;</p>
                                        <div className="button-arrow">
                                            <div className="arrow-line"></div>
                                            <div className="arrow-angle"></div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className="work-ss">
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