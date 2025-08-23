import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../assets/theme_pattern.svg'
import mail_icon from '../assets/mail_icon.svg'
import location_icon from '../assets/location_icon.svg'
import { ToastContainer, toast } from 'react-toastify';


const Contact = () => {

    //web3 form
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_WEB3FORM_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Form Submitted Successfully!", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult("");
            toast.error("❌ " + data.message, {
                position: "bottom-right",
                autoClose: 3000,
                theme: "dark",
            });
        }
    };

    return (
        <div id="Contact" className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img className="pattern" src={theme_pattern} alt="" />
            </div>

            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>
                        Whether you want to get in touch, talk about a project collaboration,
                        or just say hi, I'd love to hear from you.
                        Simply fill the form and send me an email.
                    </p>

                    <div className="contact-deatils">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /><p>kumar.vkvikash3@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /><p>India</p>
                        </div>
                    </div>
                </div>


                <form className='contact-right' onSubmit={onSubmit} autoComplete="off">
                    <label>Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' required />

                    <label>Your Email</label>
                    <input type="email" placeholder='Enter Your Email' name='email' required />

                    <label>Write your message here</label>
                    <textarea name="message" rows='8' placeholder='Enter your message' required></textarea>

                    <button type='submit' className='contact-submit'>Submit Now</button>
                    <span>{result}</span>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Contact
