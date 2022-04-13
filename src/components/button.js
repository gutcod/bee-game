import React from "react";

const CustomButton = ({ children, gameOver, ...props }) => {
  let clsName = "br3 pa3 ml2 fl w-20 bg-navy b--dark-green-70 white";
  return (
    <div className='button-container'>
      <button className={clsName} {...props}>
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
