import React from "react";
import Card from "./card";

const CardList = ({ bee }) => {
  return (
    <div className='grid bg-yellow pa2'>
      {bee.map((data, idx) => {
        return <Card key={idx} {...data} />;
      })}
    </div>
  );
};
export default CardList;
