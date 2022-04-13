import { useState } from "react";
import CustomButton from "./components/button";
import CardList from "./components/card-list";
import Scroll from "./components/scroll";
import Modal from "./components/modal/modal";
import { data, getRandomInt } from "./components/utils";
import "./App.css";

const MAX_INT = data.length;

function App() {
  const [bee, setBee] = useState(data);
  const [gameOver, setGameOver] = useState(false);

  const pushButton = () => {
    const randomInt = getRandomInt(MAX_INT);
    const newBee = bee.map((el) => {
      if (el.id === randomInt && el.alive) {
        el.decrease();
        el.checkAlive();
        gameProcess(el);
      }
      return el;
    });
    setBee(bee=>[...newBee]);
  };

  const resetGameData = () => {
      const newBee = bee.map((el) => {
          el.resetBee();
          return el;
      });
      setBee(bee=>[...newBee]);
      setGameOver(false)
  };

  const gameProcess = (beeItem) => {
    return beeItem.name === "queen" && !beeItem.alive
      ? setGameOver(true)
      : null;
  };

  return (
    <div className='App'>
        <h1 className='f1 baskerville navy'>BEE-GAME</h1>
      <div className='tc '>
        {!gameOver || (
          <Modal resetGameData={resetGameData} gameOver={gameOver} />
        )}
        <Scroll>
          <CardList bee={bee} />
        </Scroll>
      </div>
      <CustomButton type='button' gameOver={gameOver} onClick={pushButton}>
        HIT
      </CustomButton>
    </div>
  );
}

export default App;
