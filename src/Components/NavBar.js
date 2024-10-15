
import NavLink from "./NavLink";
import NavBurger from "./NavBurger";
import '../Styles/NavBar.css';

const NavBar = ({ isBurger, handleBurgerClick }) => {
    // const width = window.innerWidth;
    const navLinks = ["Home", "About", "Projects", "Credentials", "Contact"]

    return (
        <nav>
            <div className="logo">
                <h4>Chris Patchett: Portfolio</h4>
            </div>
            <ul className={"nav-links" + (!isBurger ? " nav-inactive": "")}>
                {navLinks.map(link => 
                    <NavLink key={`${link}-key`} name={link} isBurger={isBurger} handleBurgerClick={handleBurgerClick} />
                )}
            </ul>
            <NavBurger handleBurgerClick={handleBurgerClick} isBurger={isBurger} />
        </nav>
    )
}



// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links');
//     const navLinks = document.querySelectorAll('.nav-links li');
//     const width = window.innerWidth;
//     const pic = document.querySelector('#profile-pic');
//     const guru = document.querySelector('#guru');
//     const name = document.querySelector('#name');
    
//     const slide = ()=> {
//         // toggle nav
//         nav.classList.toggle('nav-active');
    
//         // animate links
//         navLinks.forEach((link, index) => {
//             if (link.style.animation) {
//                 link.style.animation= '';
//             } else {
//                 link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + .7}s`;
//             }
//     });
    
//     // burger animation
//     burger.classList.toggle('toggle');
//     }

//     burger.addEventListener('click', ()=> {
//         if (width <= 475){
//             pic.classList.toggle('pic-active');
//             guru.classList.toggle('pic-active');
//             name.classList.toggle('pic-active');
//         } 
//         slide();        
//     });

//     nav.addEventListener('click', ()=>{
//         if (width <= 475){
//             pic.classList.toggle('pic-active');
//             guru.classList.toggle('pic-active');
//             name.classList.toggle('pic-active');
//         }
//         slide();
//     });
    
// }

// navSlide();



export default NavBar;