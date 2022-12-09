import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className="contact">
                <div className="container">
                    <div className="title">
                        <h2>Contact</h2>
                    </div>

                    <div className="contact-form">
                        <form action="#">
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Email" required />
                            <input type="text" placeholder="Tell Me About Your Project" required />
                            <p className="needs">Select What You Need!</p>
                            <div className="select">
                                <label>
                                    <input type="checkbox" value="UI Design" />
                                    <p>UI Design</p>
                                </label>
                                <label>
                                    <input type="checkbox" value="Website Design" />
                                    <p>Website Design</p>
                                </label>
                                <label>
                                    <input type="checkbox" value="Web Development" />
                                    <p>Web Development</p>
                                </label>
                                <label>
                                    <input type="checkbox" value="Website Maintenence" />
                                    <p>Website Maintenence</p>
                                </label>
                                <label>
                                    <input type="checkbox" value="DataBase Management" />
                                    <p>DataBase Management</p>
                                </label>
                            </div>

                            <button type="submit">
                                <div className="action-button">
                                    <p>Send &gt;</p>
                                    <div className="button-arrow">
                                        <div className="arrow-line"></div>
                                        <div className="arrow-angle"></div>
                                    </div>
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;