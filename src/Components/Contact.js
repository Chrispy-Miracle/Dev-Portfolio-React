import '../Styles/Contact.css';
import ContactLink from "./ContactLink";
import { myContactLinks } from '../data/myContactLinks';

const Contact = () => {
    return (
        <div>
            <section id="Contact">
                {myContactLinks.map(link => 
                    <ContactLink 
                        id={link.id}
                        key={`${link.id}-key`}
                        href={link.href}
                        alt={link.alt}
                        tooltip={link.tooltip}
                        text={link.text}
                    />
                )}
            </section>
            <h2 className="contact-h2">Thanks so much for checking out my portfolio!</h2>   
            <h2 className="contact-h2">Created by Christopher Patchett 2024, All rights reserved.</h2>    
        </div>
    )
}

export default Contact;