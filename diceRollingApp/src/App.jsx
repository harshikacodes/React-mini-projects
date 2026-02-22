import { useState } from "react";

function App() {

  const [dice, setDice] = useState(1);
  const [isRolling, setIsRolling] = useState(false);

  function rollDice(){
    if (isRolling) return;

    setIsRolling(true);

    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * 6) + 1;
      setDice(random);
    }, 10);

    setTimeout(() => {
      clearInterval(interval);
      setIsRolling(false);
    }, 1000);
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1>Dice Roller</h1>
      <img src={`./images/dice-${dice}.png`} alt="" />
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  ) 
}

export default App
