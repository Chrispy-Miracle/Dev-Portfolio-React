const NavBurger = ({ handleBurgerClick, isBurgerOpen }) => {
    return (
        <div id="burger" className={isBurgerOpen ? "toggle" : ""} onClick={handleBurgerClick}>
            <div id="line1"></div>
            <div id="line2"></div>
            <div id="line3"></div>
        </div> 
    )
}

export default NavBurger;