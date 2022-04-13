import "./modal.css";
import CustomButton from "../button";

const Modal = ({ resetGameData, gameOver }) => {
  const clsName = gameOver ? "modal display-block" : "modal display-none";
  console.log(gameOver);

  return (
    <div className={clsName}>
      <section className='modal-main'>
        <h1 className='f1 navy courier'>GAME OVER</h1>
        <CustomButton type='button' onClick={resetGameData}>
          RESET GAME
        </CustomButton>
      </section>
    </div>
  );
};
export default Modal;
