import '../Styles/Home.css';
import profilePic from '../images/Denali and I.png';

const Home = ({ isBurgerOpen }) => {
    return (
        <>
            <section id="Home">
                <h1 id="guru" className={isBurgerOpen ? "pic-active" : ""}>Your New Developer:</h1>
                <div id="name-pic-cont">
                    <img id="profile-pic" className={isBurgerOpen ? "pic-active" : ""} src={profilePic} alt="A pic of myself with a guitar and my dog Denali" />
                    <h2 id="name" className={isBurgerOpen ? "pic-active" : ""}>Christopher Patchett</h2>
                </div>
                <div id="skills">
                    <code>Javascript HTML CSS React
                    <br />Python Django Flask SQL
                    <br />C#  Unity .NET
                    <br />Lua Love2D and more!
                    </code>
                </div>
            </section>        
        </>
    )
}

export default Home;