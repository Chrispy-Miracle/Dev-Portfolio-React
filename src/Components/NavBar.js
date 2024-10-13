import NavLink from "./NavLink";
import NavBurger from "./NavBurger";
import './Styles/NavBar.css';

const NavBar = () => {
    return (
        <>
            <ul class="nav-links">
                <NavLink name="Home" />
                <NavLink name="About" />
                <NavLink name="Projects" />
                <NavLink name="Credentials" />
                <NavLink name="Contact" />
            </ul>
            <NavBurger />
        </>

    )
}

export default NavBar;