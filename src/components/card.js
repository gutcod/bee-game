import React from "react";
import queenImage from "../assets/img/queen.png?100x100";
import workerImage from "../assets/img/worker.png";
import droneImage from "../assets/img/drone.png";

const bee = {
  queen: "queen",
  worker: "worker",
};

const Card = ({ name, hp, id }) => {
  const { worker, queen } = bee;
  let clsName = "tc dib br3 pa3 ma2 grow bw2 shadow-5";
  clsName += hp === 0 ? " bg-dark-red" : " bg-lightest-blue";

  return (
    <div className={clsName}>
      {name === queen ? (
        <img className='beeCard' alt={name} src={queenImage} />
      ) : name === worker ? (
        <img className='beeCard' alt={name} src={workerImage} />
      ) : (
        <img className='beeCard' alt={name} src={droneImage} />
      )}
      <h2>{name}</h2>
      <span>{hp}</span>
      {hp === 0 ? <span>&#128148;</span> : <span>&#128154;</span>}
    </div>
  );
};

export default Card;
