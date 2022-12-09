import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../img/logo.png'

const Navigation = () => {

    const navigate = useNavigate();


    return (
        <div className='navbar'>
            <section className="hero">
                <div id="myNav" className="overlay">
                    <div className="overlay-content">

                        <div className="overlay-nav">
                            <div className="logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="cross" onclick="closeNav()">
                                <div className="one"></div>
                                <div className="two"></div>
                            </div>
                        </div>

                        <div className="menu-items">
                            <ul>
                                <li>
                                    <div className="inner">
                                        <div className="menu"><a href="#" onclick="closeNav()">Home</a></div>
                                        <div className="line"></div>
                                        <div className="number">01</div>
                                    </div>

                                </li>
                                <li>
                                    <div className="inner">
                                        <div className="menu"><a href="#" onclick="closeNav()">About</a></div>
                                        <div className="line"></div>
                                        <div className="number">02</div>
                                    </div>

                                </li>
                                <li>
                                    <div className="inner">
                                        <div className="menu"><a href="#" onclick="closeNav()">Works</a></div>
                                        <div className="line"></div>
                                        <div className="number">03</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="inner">
                                        <div className="menu"><a href="#" onclick="closeNav()">Services</a></div>
                                        <div className="line"></div>
                                        <div className="number">04</div>
                                    </div>

                                </li>
                                <li>
                                    <div className="inner">
                                        <div className="menu"><a href="#" onclick="closeNav()">Blogs</a></div>
                                        <div className="line"></div>
                                        <div className="number">05</div>
                                    </div>

                                </li>
                                <li>
                                    <div className="inner">
                                        <div className="menu"><a href="#" onclick="closeNav()">Contact</a></div>
                                        <div className="line"></div>
                                        <div className="number">06</div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="socials">
                            <ul>
                                <li><a href=""><i className="uil uil-facebook-f"></i></a></li>
                                <li><a href=""><i className="uil uil-instagram"></i></a></li>
                                <li><a href=""><i className="uil uil-dribbble"></i></a></li>
                                <li><a href=""><i className="uil uil-linkedin"></i></a></li>
                                <li><a href=""><i className="uil uil-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="nav-bar">
                    <nav>
                        <div className="logo">
                            <a href="#"><img src={logo} alt="" /></a>
                        </div>
                        <div className="menus" id="menus" onscroll="scroll()">
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
                            <div className="active-hamburger">
                                <div className="hamburger" onclick="openNav()">
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