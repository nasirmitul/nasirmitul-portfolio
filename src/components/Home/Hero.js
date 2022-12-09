import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';


const Hero = () => {

    return (
        <div className='hero-section'>
            <div class="hero-content container">
                <div class="left-content">
                    <div class="title">
                        <h1>Looking for a<br />Website<br />for your Business? </h1>
                    </div>
                    <div class="description">
                        <p>We help fast growth teams scale their design<br />
                            roadmaps at lightning speeds</p>
                    </div>
                    <div class="action-button">
                        <p>Check Works &gt;</p>
                        <div class="button-arrow">
                            <div class="arrow-line"></div>
                            <div class="arrow-angle"></div>
                        </div>
                    </div>
                    <div class="social">
                        <p>Get in touch</p>
                        <div class="social-icons">
                            <ul>
                                <li><a href="#"><FaLinkedinIn></FaLinkedinIn></a></li>
                                <li><a href="#"><AiOutlineGithub></AiOutlineGithub></a></li>
                                <li><a href="#"><FaFacebookF></FaFacebookF></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="right-content">
                    <div class="number-one number">
                        <h3>5.0</h3>
                        <p>Rated By 40+ Clients</p>
                    </div>
                    <div class="number-two number">
                        <h3>25+</h3>
                        <p>International Clients</p>
                    </div>
                    <div class="number-three number">
                        <h3>55+</h3>
                        <p>Project Done</p>
                    </div>
                    <div class="number-four number">
                        <h3>10+</h3>
                        <p>Design Awards</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;