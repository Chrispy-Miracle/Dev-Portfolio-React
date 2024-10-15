const NavBurger = ({ handleBurgerClick, isBurger }) => {
    return (
        <div id="burger" className={isBurger ? "toggle" : ""} onClick={handleBurgerClick}>
            <div id="line1"></div>
            <div id="line2"></div>
            <div id="line3"></div>
        </div> 
    )
}

export default NavBurger;