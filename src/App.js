import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Main from './Components/Main';

function App() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false)
  const [sideNavOpen, setSideNavOpen] = useState(window.innerWidth <= 768)

  const handleBurgerClick = () => {
    setIsBurgerOpen(!isBurgerOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSideNavOpen(true)
        setIsBurgerOpen(false)
      } else {
        setSideNavOpen(false)
        setIsBurgerOpen(false)
      }
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [sideNavOpen])

  return (
    <div className="App">
      <NavBar 
        handleBurgerClick={handleBurgerClick} 
        isBurgerOpen={isBurgerOpen} 
        sideNavOpen={sideNavOpen} 
      />
      <Main 
        isBurgerOpen={isBurgerOpen} 
      />
    </div>
  );
}

export default App;
