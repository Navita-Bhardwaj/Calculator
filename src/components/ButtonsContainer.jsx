import styles from "./ButtonsContainer.module.css";

function ButtonsContainer({ onButtonClick}) {
  const buttonNames = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
  
  return  <div className={styles.btncontainer}>
       {buttonNames.map(buttonNames => <button className={styles.btn} onClick={() => onButtonClick(buttonNames)}>{buttonNames}</button>
       )}
      
    </div>
}

export default ButtonsContainer;
