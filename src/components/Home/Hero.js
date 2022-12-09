import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';


const Hero = () => {

    return (
        <div className='hero-section'>
            <div className="hero-content container">
                <div className="left-content">
                    <div className="title">
                        <h1>Looking for a<br />Website<br />for your Business? </h1>
                    </div>
                    <div className="description">
                        <p>We help fast growth teams scale their design<br />
                            roadmaps at lightning speeds</p>
                    </div>
                    <div className="action-button">
                        <p>Check Works &gt;</p>
                        <div className="button-arrow">
                            <div className="arrow-line"></div>
                            <div className="arrow-angle"></div>
                        </div>
                    </div>
                    <div className="social">
                        <p>Get in touch</p>
                        <div className="social-icons">
                            <ul>
                                <li><a href="#"><FaLinkedinIn></FaLinkedinIn></a></li>
                                <li><a href="#"><AiOutlineGithub></AiOutlineGithub></a></li>
                                <li><a href="#"><FaFacebookF></FaFacebookF></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right-content">
                    <div className="number-one number">
                        <h3>5.0</h3>
                        <p>Rated By 40+ Clients</p>
                    </div>
                    <div className="number-two number">
                        <h3>25+</h3>
                        <p>International Clients</p>
                    </div>
                    <div className="number-three number">
                        <h3>55+</h3>
                        <p>Project Done</p>
                    </div>
                    <div className="number-four number">
                        <h3>10+</h3>
                        <p>Design Awards</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;