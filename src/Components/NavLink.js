const NavLink = ({ name, isBurger, handleBurgerClick }) => {
    return (
        <li className={"nav-list-item" + (isBurger ? " navLinkFade" : "")}>
            <a className="nav-link"  href={`#${name}`} onClick={handleBurgerClick}>{name}</a>
        </li>        
    )
}

export default NavLink;