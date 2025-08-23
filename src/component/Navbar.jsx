import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import underline from '../assets/nav_underline.svg';
import AnchorLink from "react-anchor-link-smooth-scroll";

import { IoHomeOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { LuBookOpen } from "react-icons/lu";
import { MdContactMail } from "react-icons/md";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="Logo" />

            {/* Hamburger Icon (only visible on mobile) */}
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <HiX size={30} /> : <HiOutlineMenuAlt3 size={30} />}
            </div>

            {/* Nav Menu */}
            <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
                <li>
                    <AnchorLink className="anchor-link" href="#home">
                        <p onClick={() => { setMenu("home"); setIsOpen(false); }}>
                            <IoHomeOutline /> <span>Home</span>
                        </p>
                    </AnchorLink>
                    {menu === "home" ? <img src={underline} alt="" /> : <></>}
                </li>

                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#about">
                        <p onClick={() => { setMenu("about"); setIsOpen(false); }}>
                            <VscAccount /> <span>About</span>
                        </p>
                    </AnchorLink>
                    {menu === "about" ? <img src={underline} alt="" /> : <></>}
                </li>

                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#Skill">
                        <p onClick={() => { setMenu("Skill"); setIsOpen(false); }}>
                            <LuBookOpen /> <span>Skills</span>
                        </p>
                    </AnchorLink>
                    {menu === "Skill" ? <img src={underline} alt="" /> : <></>}
                </li>

                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#project">
                        <p onClick={() => { setMenu("project"); setIsOpen(false); }}>
                            <AiOutlineFundProjectionScreen /> <span>Project</span>
                        </p>
                    </AnchorLink>
                    {menu === "project" ? <img src={underline} alt="" /> : <></>}
                </li>

                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#Contact">
                        <p onClick={() => { setMenu("Contact"); setIsOpen(false); }}>
                            <MdContactMail /> <span>Contact</span>
                        </p>
                    </AnchorLink>
                    {menu === "Contact" ? <img src={underline} alt="" /> : <></>}
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
