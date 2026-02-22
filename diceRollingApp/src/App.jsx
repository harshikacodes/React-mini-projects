import { useState } from "react";

function App() {

  const [dice, setDice] = useState(1);

  function rollDice(){
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * 6) + 1;
      setDice(random);
      console.log(random);
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
    }, 1000);
  }

  return (
    <div>
      <h1>Dice Roller</h1>
      <img src={`./images/dice-${dice}.png`} alt="" />
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  ) 
}

export default App
