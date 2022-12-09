import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import logo from '../../img/logo.png'
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Navigation = () => {

    const [navActive, setNavActive] = useState(false);

    console.log('data', navActive);

    return (
        <div className='navbar'>
            <section className="hero">

                <div id="myNav" className={`overlay ${navActive ? 'nav-active' : 'nav-diactive'}`} >
                    <div className="overlay-content">

                        <div className="overlay-nav">
                            <div className="logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="cross" onClick={() => setNavActive(false)}>
                                <div className="one"></div>
                                <div className="two"></div>
                            </div>
                        </div>

                        <div className="menu-items">
                            <ul>
                                <li>
                                    <div className="inner" onClick={() => setNavActive(false)}>
                                        <div className="menu"><a href="#">Home</a></div>
                                        <div className="line"></div>
                                        <div className="number">01</div>
                                    </div>

                                </li>
                                <li>
                                    <div className="inner" onClick={() => setNavActive(false)}>
                                        <div className="menu"><a href="#">About</a></div>
                                        <div className="line"></div>
                                        <div className="number">02</div>
                                    </div>

                                </li>
                                <li>
                                    <div className="inner" onClick={() => setNavActive(false)}>
                                        <div className="menu"><a href="#">Works</a></div>
                                        <div className="line"></div>
                                        <div className="number">03</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="inner" onClick={() => setNavActive(false)}>
                                        <div className="menu"><a href="#">Services</a></div>
                                        <div className="line"></div>
                                        <div className="number">04</div>
                                    </div>

                                </li>
                                <li>
                                    <div className="inner" onClick={() => setNavActive(false)}>
                                        <div className="menu"><a href="#">Blogs</a></div>
                                        <div className="line"></div>
                                        <div className="number">05</div>
                                    </div>

                                </li>
                                <li>
                                    <div className="inner" onClick={() => setNavActive(false)}>
                                        <div className="menu"><a href="#">Contact</a></div>
                                        <div className="line"></div>
                                        <div className="number">06</div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="socials">
                            <ul>
                                <li><a href=""><FaFacebook></FaFacebook></a></li>
                                <li><a href=""><FaInstagram></FaInstagram></a></li>
                                <li><a href=""><FaDribbble></FaDribbble></a></li>
                                <li><a href=""><FaLinkedin></FaLinkedin></a></li>
                                <li><a href=""><FaTwitter></FaTwitter></a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="nav-bar">
                    <nav>
                        <div className="logo">
                            <a href="#"><img src={logo} alt="" /></a>
                        </div>
                        <div className="menus" id="menus">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Works</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Blogs</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="action">
                            <div className="contact-action">
                                <a href="#">Let's Talk</a>
                            </div>
                            <div className="active-hamburger" onClick={() => setNavActive(true)}>
                                <div className="hamburger">
                                    <div className="one"></div>
                                    <div className="two"></div>
                                    <div className="three"></div>
                                </div>
                            </div>
                        </div>
                    </nav>

                </div>
            </section>
        </div>
    );
};

export default Navigation;