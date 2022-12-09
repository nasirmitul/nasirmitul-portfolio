import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container main-footer">
                    <div className="left">
                        <div className="title">
                            <h2>Say Hello!</h2>
                            <input type="emmail" placeholder="Email"/>
                                <button type="submit">
                                    <div className="action-button">
                                        <p>Send &gt;</p>
                                        <div className="button-arrow">
                                            <div className="arrow-line"></div>
                                            <div className="arrow-angle"></div>
                                        </div>
                                    </div>
                                </button>
                        </div>
                    </div>
                    <div className="right">
                        <div className="title">
                            <h2>Links</h2>
                        </div>
                        <div className="links">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Works</a></li>
                                <li><a href="#">Service</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>


            <div className="copyright">
                <p>&copy; 2022, Nasir Mitul. All rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;