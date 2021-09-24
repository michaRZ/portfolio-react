import { useState } from "react";
import "./contact.scss";
import { LinkedIn, GitHub } from "@material-ui/icons";

export default function Contact() {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        //e.preventDefault();
        setMessage(true);
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <div className="wrapper">
                    <h2>Let's Connect</h2>
                    <p>If you are a recruiter, business owner, another developer, or simply feeling chatty, I'd love to talk with you. Send me an email and say hello!</p>
                    <p>Stay connected around the web:</p>
                    <div className="socials">
                        <a href="https://www.linkedin.com/in/kellaraines/" target="_blank" rel="noopener noreferrer"><LinkedIn/></a>
                        <a href="https://github.com/michaRZ" target="_blank" rel="noopener noreferrer"><GitHub/></a>
                    </div>
                </div>
            </div>
            <div className="right">
                <h2>Get in touch</h2>
                <form action="https://formspree.io/f/mayavkje" 
                method="POST"
                enctype="multipart/form-data"
                name="EmailForm"
                onSubmit={handleSubmit}>
                    <input type="text" name="contactName" id="name" placeholder="Name" required/>
                    <input type="email" name="contactEmail" id="email" placeholder="Email" required/>
                    <input type="text" name="contactOrganization" id="org" placeholder="Organization"/>
                    <textarea name="contactMessage" id="message" placeholder="Your message" required></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks for your message, looking forward to talking!</span>}
                </form>
            </div>
        </div>
    )
}
