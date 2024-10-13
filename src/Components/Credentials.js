import Certificate from "./Certificate";

const Credentials = () => {
    return (
<section id="Credentials">
          <h2>My Credentials:</h2>
          <div id="cred-container">
            <Certificate 
                id="cs50" 
                href="https://certificates.cs50.io/7e58a919-6539-46da-b6d7-12b8792073f1"
                src="images/CS50x.png" 
                alt="Harvard University CS50x Intro to Computer Science certificate"
            />

            <a id="cs50" target="_blank" 
              href="https://courses.edx.org/certificates/dd59bd1bfa454952976b65ff16168220">
              <img id="cs50-edX-cert" class="certs" src="images/CS50x-verified.png" alt="Harvard University CS50x Intro to Computer Science verified certificate" />
            </a>
            <a id="cs50W" target="_blank" 
              href="https://certificates.cs50.io/e2b3cc33-dd57-4697-861b-4410282419f0.pdf?size=letter">
              <img id="cs50W-png" class="certs" src="images/CS50W.png" alt="Harvard University CS50W- Web Programming withPython and Javascript certificate" />
            </a>
            <a id="web-design" target="_blank" 
              href="https://www.freecodecamp.org/certification/fccac50d365-340e-44bc-9376-576e27476707/responsive-web-design">
              <img id="web-Cert" class="certs" src="images/Web-design-cert.png" alt="Responsive Web Design certification" />
            </a>
            <a id="javascript" target="_blank"
              href="https://www.freecodecamp.org/certification/fccac50d365-340e-44bc-9376-576e27476707/javascript-algorithms-and-data-structures">
              <img id="js-Cert" class="certs" src="images/Javascript-cert.png" alt="Javascript Algorithms and Data Structures certification" />
            </a>
            <a id="libraries" target="_blank"
              href="https://www.freecodecamp.org/certification/fccac50d365-340e-44bc-9376-576e27476707/front-end-development-libraries">
              <img id="front-end-cert" class="certs" src="images/Front-end-libraries.png" alt="Front End Libraries Certification" />
            </a>
            <a id="data-vis" target="_blank"
              href="https://www.freecodecamp.org/certification/fccac50d365-340e-44bc-9376-576e27476707/data-visualization">
              <img id="data-vis-cert" class="certs" src="images/data-visualization-certification.png" alt="Data Visualisation Certification" />
            </a>
            <a id="C#" target="_blank"
              href="https://www.freecodecamp.org/certification/fccac50d365-340e-44bc-9376-576e27476707/foundational-c-sharp-with-microsoft">
              <img id="C#-cert" class="certs" src="images/c-sharp-certification.png" alt="Foundational C# With Microsoft Certification" />
            </a>
            <a id="CS50G" target="_blank"
              href="https://certificates.cs50.io/5d254cd5-98db-4b5b-aa77-5da7c13c1825">
              <img id="CS50G-cert" class="certs" src="images/CS50G.png" alt="Harvard University CS50G- Intro to Game Development certificate" />
            </a>
            <a id="Unity-Jr-Dev" target="_blank"
              href="https://www.credly.com/badges/b1e33d7d-7eb9-4406-9eef-10fd966140ce">
              <img id="Unity-Jr-Dev-cert" class="certs" src="images/UnityJuniorProgrammer_Badge.png" alt="Credly verification page for Unity Junior Programmer Pathway Badge" />
            </a>           
          </div>  
        </section>
    )
}

export default Credentials;