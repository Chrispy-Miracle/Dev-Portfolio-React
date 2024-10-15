import '../Styles/Contact.css';
import ContactLink from "./ContactLink";

const Contact = () => {
    return (
        <div>
            <div height="10vw"></div>
            <section id="Contact">
                <ContactLink 
                    id="email"
                    href="mailto:chrispymiracle@gmail.com"
                    alt="my gmail"
                    tooltip="CLICK TO SEND ME AN EMAIL!"
                    text="Contact me"
                />
                <a id="resume" className="links" href="./images/CPatchett-Dev-10-2024.pdf" 
                target="_blank" rel="noreferrer" alt="link to my resume" title="CLICK TO SEE MY RESUME!">See my resume!</a>
                <a id="github-profile-link" className="links" href="https://github.com/Chrispy-Miracle" 
                target="_blank" rel="noreferrer" alt="my github profile" title="CLICK TO CHECK OUT MY GITHUB">Let's Work together</a>
            </section>
            <h2 className="contact-h2">Thanks so much for checking out my portfolio!</h2>   
            <h2 className="contact-h2">Created by Christopher Patchett 2024, All rights reserved.</h2>    
        </div>

    )
}

export default Contact;