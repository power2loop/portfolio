import React from 'react'
import './Footer.css'
import { FaGithub } from "react-icons/fa";

const Footer = () => {

    return (

        <div className='footer'>
            <div className="footer-left">
                <h1>Designed and Developed by Vikash Kumar</h1>
                <h1>All rights reserved.</h1>
            </div>

            <div className="social-icon">
                <a
                    href="https://github.com/power2loop/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
            </div>


        </div>
    )
}

export default Footer