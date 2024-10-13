import Certificate from "./Certificate";
import { myCertificates } from "../data/myCertificates";

const Credentials = () => {
    return (
        <section id="Credentials">
            <h2>My Credentials:</h2>
            <div id="cred-container">
                {myCertificates.map(cert => 
                    <Certificate 
                        id={cert.id}
                        href={cert.href}
                        src={cert.src}
                        alt={cert.alt}
                    />                    
                )}
            </div>  
        </section>
    )
}

export default Credentials;