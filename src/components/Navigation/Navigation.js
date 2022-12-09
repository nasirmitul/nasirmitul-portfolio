import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../img/logo.png'

const Navigation = () => {

    const navigate = useNavigate();


    return (
        <div className='navbar'>
            <section class="hero">
                <div id="myNav" class="overlay">
                    <div class="overlay-content">

                        <div class="overlay-nav">
                            <div class="logo">
                                <img src={logo} alt="" />
                            </div>
                            <div class="cross" onclick="closeNav()">
                                <div class="one"></div>
                                <div class="two"></div>
                            </div>
                        </div>

                        <div class="menu-items">
                            <ul>
                                <li>
                                    <div class="inner">
                                        <div class="menu"><a href="#" onclick="closeNav()">Home</a></div>
                                        <div class="line"></div>
                                        <div class="number">01</div>
                                    </div>

                                </li>
                                <li>
                                    <div class="inner">
                                        <div class="menu"><a href="#" onclick="closeNav()">About</a></div>
                                        <div class="line"></div>
                                        <div class="number">02</div>
                                    </div>

                                </li>
                                <li>
                                    <div class="inner">
                                        <div class="menu"><a href="#" onclick="closeNav()">Works</a></div>
                                        <div class="line"></div>
                                        <div class="number">03</div>
                                    </div>
                                </li>
                                <li>
                                    <div class="inner">
                                        <div class="menu"><a href="#" onclick="closeNav()">Services</a></div>
                                        <div class="line"></div>
                                        <div class="number">04</div>
                                    </div>

                                </li>
                                <li>
                                    <div class="inner">
                                        <div class="menu"><a href="#" onclick="closeNav()">Blogs</a></div>
                                        <div class="line"></div>
                                        <div class="number">05</div>
                                    </div>

                                </li>
                                <li>
                                    <div class="inner">
                                        <div class="menu"><a href="#" onclick="closeNav()">Contact</a></div>
                                        <div class="line"></div>
                                        <div class="number">06</div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="socials">
                            <ul>
                                <li><a href=""><i class="uil uil-facebook-f"></i></a></li>
                                <li><a href=""><i class="uil uil-instagram"></i></a></li>
                                <li><a href=""><i class="uil uil-dribbble"></i></a></li>
                                <li><a href=""><i class="uil uil-linkedin"></i></a></li>
                                <li><a href=""><i class="uil uil-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="nav-bar">
                    <nav>
                        <div class="logo">
                            <a href="#"><img src={logo} alt="" /></a>
                        </div>
                        <div class="menus" id="menus" onscroll="scroll()">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Works</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Blogs</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div class="action">
                            <div class="contact-action">
                                <a href="#">Let's Talk</a>
                            </div>
                            <div class="active-hamburger">
                                <div class="hamburger" onclick="openNav()">
                                    <div class="one"></div>
                                    <div class="two"></div>
                                    <div class="three"></div>
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