
import NavLink from "./NavLink";
import NavBurger from "./NavBurger";
import '../Styles/NavBar.css';

const NavBar = ({ sideNavOpen, isBurgerOpen, handleBurgerClick }) => {
    const navLinks = ["Home", "About", "Projects", "Credentials", "Contact"]

    return (
        <nav>
            <div className="logo">
                <h4>Chris Patchett: Portfolio</h4>
            </div>
            <ul className={"nav-links" + (sideNavOpen && !isBurgerOpen ? " nav-inactive": "")}>
                {navLinks.map(link => 
                    <NavLink key={`${link}-key`} name={link} isBurgerOpen={isBurgerOpen} handleBurgerClick={handleBurgerClick} />
                )}
            </ul>
            <NavBurger handleBurgerClick={handleBurgerClick} isBurgerOpen={isBurgerOpen} sideNavOpen={sideNavOpen}  />
        </nav>
    )
}

export default NavBar;