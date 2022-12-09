import React from 'react';
import man from '../../img/man.jpeg'
import { AiOutlineCaretLeft } from 'react-icons/ai';
import { AiOutlineCaretRight } from 'react-icons/ai';

const Reviews = () => {
    return (
        <div>
            <section className="testimonial">
                <div className="container">
                    <div className="testimonial-heading">
                        <h2>What People Talks About Me!</h2>
                    </div>

                    <div className="main-review">
                        <div className="carousel ">
                            <div className="review-before">
                                <div className="active">
                                    <div className="review review1">
                                        <div className="review-head">
                                            <div className="review-img">
                                                <img src={man} alt=""/>
                                            </div>

                                            <div className="head-detail">
                                                <div className="name">
                                                    <h4>Brady Cooper 1</h4>
                                                </div>
                                                <div className="position">
                                                    <p>CEO at Company</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="review-quote">
                                            <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aliquam ipsam
                                                ea
                                                quos
                                                voluptates quaerat dolorem beatae perferendis quibusdam laboriosam. Neque optio
                                                consequuntur
                                                voluptatum ab harum voluptatibus culpa voluptatem.</q>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="change-review">
                                <div className="prev">
                                    <AiOutlineCaretLeft className='change-icon'></AiOutlineCaretLeft>
                                </div>
                                <div className="next" onclick="chengeRight()">
                                    <AiOutlineCaretRight className='change-icon'></AiOutlineCaretRight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Reviews;