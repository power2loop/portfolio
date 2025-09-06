import React, { useState } from 'react'
import './MyWork.css'
import theme_pattern from '../assets/theme_pattern.svg'
import mywork_data from '../assets/mywork_data'
import arrow_icon from '../assets/arrow_icon.svg'

const MyWork = () => {
    const [showAll, setShowAll] = useState(false);

    // Only show first 4 projects
    const visibleProjects = showAll ? mywork_data : mywork_data.slice(0, 4);

    return (
        <div id="project" className='mywork'>
            <div className="mywork-title">
                <h1>My Work</h1>
                <img className="pattern" src={theme_pattern} alt="" />
            </div>

            <div className="mywork-container">
                {visibleProjects.map((work, index) => (
                    <div className="work-card" key={index}>
                        <div className="work-left">
                            <div className="work-image">
                                <img src={work.w_img} alt={work.w_name} />
                            </div>

                            <div className="work-buttons">
                                <a href={work.live} target="_blank" rel="noopener noreferrer" className="btn live">
                                    Live
                                </a>
                                <a href={work.github} target="_blank" rel="noopener noreferrer" className="btn github">
                                    Repo
                                </a>
                            </div>
                        </div>

                        <div className="work-content">
                            <h3 className="work-title">{work.w_name}</h3>
                            <div className="work-technologies">
                                <span className="tech-label">Technologies Used:</span>
                                <span className="tech-list">{work.technologies}</span>
                            </div>

                            <div className="work-description">
                                <ul>
                                    <li>{work.description1}</li>
                                    <li>{work.description2}</li>
                                    <li>{work.description3}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Show More / Show Less Button */}
            <div className="mywork-showmore" onClick={() => setShowAll(!showAll)}>
                <p>{showAll ? "Show Less" : "Show More"}</p>
                <img src={arrow_icon} alt="" style={{ transform: showAll ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s" }} />
            </div>
        </div>
    )
}

export default MyWork
