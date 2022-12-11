import React, { useEffect, useState } from 'react';
import ui from '../../img/UI images 1.jpg'
import { AiOutlineCaretLeft } from 'react-icons/ai';
import { AiOutlineCaretRight } from 'react-icons/ai';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('JSON/projects.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProjects(data);
            })
    }, [])


    /* Image slider for posts pictures */
    const [currentIndex, setCurrentIndex] = useState(0)

    const goPrev = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const goNext = () => {
        const isLastSlide = currentIndex === projects.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }


    return (
        <div>


            <div className="project-slider">
                <section className="my-works">
                    <div className="container">
                        <div className="heading">
                            <div className="heading-title">
                                <div className="heading-line"></div>
                                <p>My Projects</p>
                                <p className='image-number'>{currentIndex + 1}<span>/{projects.length}</span></p>
                            </div>

                            <div className="change-project">
                                <div className="prev" onClick={goPrev}>
                                    <AiOutlineCaretLeft  className='change-icon'></AiOutlineCaretLeft>
                                </div>
                                <div className="next" onClick={goNext} >
                                    <AiOutlineCaretRight className='change-icon'></AiOutlineCaretRight>
                                </div>
                            </div>

                        </div>

                        <div className="works">
                            <div className="work work-1 row-1" style={{'background':projects[currentIndex]?.background_color}}>
                                <div className="work-info">
                                    <div className="work-heading">
                                        <p>{projects[currentIndex]?.project_type}</p>
                                        <p className='stack'>{projects[currentIndex]?.stack}</p>
                                    </div>
                                    <div className="title">
                                        <h3>{projects[currentIndex]?.name}</h3>
                                    </div>
                                    <div className="description">
                                        <p>{projects[currentIndex]?.description}</p>
                                    </div>
                                    <div className="technology">
                                        <p>{projects[currentIndex]?.technology}</p>
                                    </div>
                                    <button>
                                        <div className="action-button">
                                            <p>Project Detail &gt;</p>
                                            <div className="button-arrow">
                                                <div className="arrow-line"></div>
                                                <div className="arrow-angle"></div>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className="work-ss">
                                    <img src={projects[currentIndex]?.image} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <div className="change-image">
                    {
                        projects.map((image, slideIndex) => (
                            <div className='dot' key={slideIndex}>
                                <VscDebugStackframeDot onClick={() => goToSlide(slideIndex)} className={slideIndex === currentIndex ? 'dot-icon-active' : 'dot-icon'}></VscDebugStackframeDot>
                            </div>
                        ))
                    }
                </div> */}

                <div className="image-count">
                    
                </div>
            </div>


        </div>
    );
};

export default Projects;