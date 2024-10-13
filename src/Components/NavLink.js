const NavLink = ({ name }) => {
    return (
        <li>
            <a href={`#${name}`}>{name}</a>
        </li>        
    )
}

export default NavLink;