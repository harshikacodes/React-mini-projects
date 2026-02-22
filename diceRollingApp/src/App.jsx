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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold mb-6">
          Dice Roller
        </h1>

        <img 
        src={`./images/dice-${dice}.png`} 
        alt="dice"
        className="w-32 mx-auto mb-6 transition-transform duration-200" 
        />

        <button 
          onClick={rollDice}
          disabled={isRolling}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition duration-200 disabled:bg-gray-200"
        >
          Roll Dice
        </button>
      </div>
      
    </div>
  ) 
}

export default App
