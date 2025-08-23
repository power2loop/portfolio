import React from 'react'
import './About.css'
import theme_pattern from '../assets/theme_pattern.svg'
import logo from '../assets/al4.jpg'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const About = () => {
    return (
        <div id="about" className="about">

            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="about-section">
                <div className="left">
                    <div className="description">
                        <h1>Who I am?</h1>
                        <p>
                            I'm vikash kumar, a full-stack developer with a recent degree from IIIT Bhagalpur. <br />
                            My self-learning mindset and passion for problem-solving empower me to tackle any challenge. <br />
                            I am dedicated to using my skills to build innovative web applications that contribute to a more open and connected web.
                        </p>
                    </div>
                </div>

                <div className="right">
                    <img src={logo} alt="logo" />
                </div>
            </div>

            <div className="social-links">
                <a href="https://github.com/power2loop" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon" />
                </a>
                <a href="https://www.linkedin.com/in/vikash-kumar-b56a68228/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icon" />
                </a>
            </div>
        </div>
    )
}

export default About
