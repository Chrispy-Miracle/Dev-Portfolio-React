import '../Styles/About.css';
import gardenPic from '../images/CWPin garden.jpg';
import bassPic from '../images/CWPbassMarble.png';
import computerPic from '../images/CWPcomputing.jpg';

const About = () => {
    return (
        <section id="About">
            <h2>Welcome to my portfolio page!</h2>            
            <div id="welcome">
                <img className="welcome-pics" src={gardenPic} alt="A pic of myself in front of flowering snow peas" />
                <p>Hi there!<br />My name is Christopher Patchett.<br /><br />I am a farmer and musician turned developer. </p> 
                <img className="welcome-pics" src={bassPic} alt="A pic of myself playing bass with Pherkad at Marble Brewery. credit: Keith Langerman" />
            </div>
            
            <p>For over three years now, I have been learning and practicing web and game development 
            largely through self study and guided by a plethora of online computer science courses. 
                I have built many projects and earned numerous certifications.</p>
            
            <p>What began for me as a casual curiosity has grown into both a passionate pursuit and a career opportunity.</p>
            
            <p>Having completed a three month internship intensive writing React.js code 
                for the frontend of a fullstack Scrum team at a reputable tech company (<a href="https://www.teamsparq.com">Rural Sourcing Inc. (Recently rebranded as "Sparq")</a>) and am now prepared to add value to your team.</p>
            
            <p>I have refined and expanded my knowledge learning to build mobile applications with React Native as well as fullstack applications with Python and Javascript, using Django or Flask and SQL.</p> 
            
            <p>Most recently I have immersed myself in the world of game development, first writing in the Lua language using the Love2D framework,
                and presently scripting in C# leveraging the Unity Game Engine for my creations. </p>
            
            <p>I am currently seeking employment as a Junior Developer.</p>
            
            <img id="me-on-comp-pic" className="welcome-pics" src={computerPic} alt="A pic of myself with my laptop" />
            
            <p>Check out some of my projects and credentials below and please get in contact if you would like to work together.</p>  
            
            <p>Thanks so much for visiting! </p>
        </section>
    )
}

export default About;