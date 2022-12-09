import React from 'react';

const StartProject = () => {
    return (
        <div>
            <section className="new-project">
                <div className="container">
                    <h2 className="title">
                        Got A project in Mind? Let's<br/>
                            Create Together!
                    </h2>
                    <a className="start-project-email" href="mailto:nasirmitul28@gmail.com">
                        <div className="action-button">
                            <p>Email Now &gt;</p>
                            <div className="button-arrow">
                                <div className="arrow-line"></div>
                                <div className="arrow-angle"></div>
                            </div>
                        </div>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default StartProject;