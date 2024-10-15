import Home from './Home';
import About from './About';
import Projects from './Projects';
import Credentials from './Credentials';
import Contact from './Contact';

const Main = ({ isBurger }) => {
    return (
        <main>
            <Home isBurger={isBurger} />
            <About />
            <Projects />
            <br />
            <Credentials />
            <Contact />
        </main>     
    )
}

export default Main;