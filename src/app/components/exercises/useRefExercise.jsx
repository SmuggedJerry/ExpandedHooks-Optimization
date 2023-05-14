import React, { useRef, useEffect, useState } from "react";
import CollapseWrapper from "../common/collapse";

const UseRefExercise = () => {
  const blockRef = useRef();
  const [appearance, setAppearance] = useState(false);
  const [buttonText, setButtonText] = useState();
  const [buttonColor, setButtonColor] = useState();
  const toggleStyle = () => setAppearance(prevState => !prevState);

  useEffect(() => {
    blockRef.current.style.width = appearance ? "150px" : "60px";
    blockRef.current.style.height = appearance ? "80px" : "40px";
    blockRef.current.textContent = appearance ? "text" : "Блок";
    setButtonText(appearance ? "А ну-ка верни обратно!" : "Изменить блок");
    setButtonColor(appearance ? "danger" : "warning");
  }, [appearance]);

  return (
    <CollapseWrapper title="Упражнение">
        <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
      <div
        ref={blockRef}
        className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
        style={{ height: 40, width: 60, color: "white" }}
      >
        Блок
      </div>
      <button className={`btn btn-${buttonColor} mt-3`} onClick={toggleStyle}>
        {buttonText}
      </button>
    </CollapseWrapper>
  );
};

export default UseRefExercise;
