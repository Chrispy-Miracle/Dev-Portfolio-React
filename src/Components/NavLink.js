const NavLink = ({ name, isBurgerOpen, sideNavOpen, handleBurgerClick }) => {
    const handleNavClick = () => {
        if (isBurgerOpen) {
            handleBurgerClick()
        }
    }

    return (
        <li className={"nav-list-item" + (isBurgerOpen && sideNavOpen ? " navLinkFade" : "")}>
            <a className="nav-link"  href={`#${name}`} onClick={handleNavClick}>{name}</a>
        </li>        
    )
}

export default NavLink;