import React from 'react';
import './Skill.css';
import theme_pattern from '../assets/theme_pattern.svg'
import reactLogo from '../assets/React.png'
import jsLogo from "../assets/javascript.png";
import nodeLogo from "../assets/node-js.png";
import expressLogo from "../assets/express.png";
import mongoLogo from "../assets/mongodb.png";
import mysqlLogo from "../assets/mysql.png";
import htmlLogo from "../assets/Html.png";
import cssLogo from "../assets/Css.png";
import cppLogo from "../assets/c++.png";
import pythonLogo from "../assets/python.png";
import tailwindlogo from "../assets/tailwind.png"
import PostgreSQLlogo from "../assets/postgreysql.png"

const Skill = () => {
    const skills = [
        { name: "React", icon: reactLogo },
        { name: "JavaScript", icon: jsLogo },
        { name: "Node.js", icon: nodeLogo },
        { name: "Express.js", icon: expressLogo },
        { name: "MongoDB", icon: mongoLogo },
        { name: "MySQL", icon: mysqlLogo },
        { name: "HTML", icon: htmlLogo },
        { name: "CSS", icon: cssLogo },
        { name: "Tailwind", icon: tailwindlogo },
        { name: "C++", icon: cppLogo },
        { name: "Python", icon: pythonLogo },
        { name: "PostgreySQL", icon: PostgreSQLlogo },
    ];

    return (
        <div id="Skill" className="skill">
            <div className="skill-heading">
                <h1>My Skills</h1>
                <img className='skill-underline' src={theme_pattern} alt="Logo" />
            </div>
            <div className="skill-slider">
                <div className="skill-track">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <img src={skill.icon} alt={skill.name} className="skill-icon" />
                            <p>{skill.name}</p>
                        </div>
                    ))}

                    {skills.map((skill, index) => (
                        <div key={index + skills.length} className="skill-card">
                            <img src={skill.icon} alt={skill.name} className="skill-icon" />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skill;
