import React from 'react'
import './Hero.css'
import profilepic from '../assets/me.jpeg'
import AnchorLink from "react-anchor-link-smooth-scroll";


const Hero = () => {
    return (
        <div id="home" className='hero'>
            <img src={profilepic} alt="Profile" />
            <h1> <span>I'm Vikash Kumar</span>, a fullstack web developer from India</h1>
            <p>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className="anchor-link1" offset={50} href='#Contact' >
                        Contact Me</AnchorLink>
                </div>
                <div className="hero-resume">
                    <a
                        href="https://drive.google.com/drive/folders/1bb6wemfn6E_Bk651DDPdny4adlWhxKdz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-link"
                    >
                        My Resume
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Hero