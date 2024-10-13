import ContactLink from "./ContactLink";

const Contact = () => {
    return (
        <section id="Contact">
            <ContactLink 
                id="email"
                href="mailto:chrispymiracle@gmail.com"
                alt="my gmail"
                tooltip="CLICK TO SEND ME AN EMAIL!"
                text="Contact me"
            />
            {/* <a id="email" class="links" href="mailto:chrispymiracle@gmail.com" 
            target="_blank" alt="my gmail" title="CLICK TO SEND ME AN EMAIL!">Contact me</a> */}
            <a id="resume" class="links" href="./images/CPatchett-Dev-10-2024.pdf" 
            target="_blank" alt="link to my resume" title="CLICK TO SEE MY RESUME!">See my resume!</a>
            <a id="github-profile-link" class="links" href="https://github.com/Chrispy-Miracle" 
            target="_blank" alt="my github profile" title="CLICK TO CHECK OUT MY GITHUB">Let's Work together</a>
        </section>
    )
}

export default Contact;