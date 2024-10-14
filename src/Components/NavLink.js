const NavLink = ({ name }) => {
    return (
        <li className="nav-links">
            <a href={`#${name}`}>{name}</a>
        </li>        
    )
}

export default NavLink;