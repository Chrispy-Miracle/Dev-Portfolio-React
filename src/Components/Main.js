import Home from './Home';
import About from './About';
import Projects from './Projects';
import Credentials from './Credentials';
import Contact from './Contact';

const Main = ({ isBurgerOpen }) => {
    return (
        <main>
            <Home isBurgerOpen={isBurgerOpen} />
            <About />
            <Projects />
            <br />
            <Credentials />
            <Contact />
        </main>     
    )
}

export default Main;