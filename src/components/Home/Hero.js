import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import resume from '../../files/Mitul Resume.pdf'


const Hero = () => {

    return (
        <div className='hero-section'>
            <div className="hero-content container">
                <div className="left-content">
                    <div className="title">
                        <h1>Looking for a<br />Website<br />for your Business? </h1>
                    </div>
                    <div className="description">
                        <p>Hi there! It's Abu Al Nasir Mitul you're visiting right now. I'm a Web Developer, UI/UXDesigner and Programmer.</p>
                    </div>

                    <div className="hero-actions">
                        {/* <div className="action-button">
                            <p>Check Works &gt;</p>
                            <div className="button-arrow">
                                <div className="arrow-line"></div>
                                <div className="arrow-angle"></div>
                            </div>
                        </div> */}
                        <a href="https://drive.google.com/file/d/1lcGKI0OVZwMHQC7K7ROMRIF_1APPjS0S/view?usp=sharing" target="_blank" className="action-button">
                            <p>Download resume &gt;</p>
                            <div className="button-arrow">
                                <div className="arrow-line"></div>
                                <div className="arrow-angle"></div>
                            </div>
                        </a>
                    </div>

                    <div className="social">
                        <p>Get in touch</p>
                        <div className="social-icons">
                            <ul>
                                <li><a href="https://www.linkedin.com/in/abu-al-nasir-mitul/" target="_blank"><FaLinkedinIn></FaLinkedinIn></a></li>
                                <li><a href="https://github.com/nasirmitul" target="_blank"><AiOutlineGithub></AiOutlineGithub></a></li>
                                <li><a href="https://www.facebook.com/nasirmitul28/" target="_blank"><FaFacebookF></FaFacebookF></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right-content">
                    <div className="number-one number">
                        <h3>07+</h3>
                        <p>Project Completed</p>
                    </div>
                    <div className="number-two number">
                        <h3>03</h3>
                        <p>Full Stack Project</p>
                    </div>
                    <div className="number-three number">
                        <h3>04+</h3>
                        <p>Front End Project</p>
                    </div>
                    <div className="number-four number">
                        <h3>01</h3>
                        <p>Mobile App UI Design</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;