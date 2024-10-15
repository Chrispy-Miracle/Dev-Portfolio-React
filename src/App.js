import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Main from './Components/Main';

function App() {
  const [isBurger, setIsBurger] = useState(false)

  const handleBurgerClick = () => {
    setIsBurger(!isBurger)
  }

  return (
    <div className="App">
      <NavBar handleBurgerClick={handleBurgerClick} isBurger={isBurger} />
      <Main isBurger={isBurger} />
    </div>
  );
}

export default App;
