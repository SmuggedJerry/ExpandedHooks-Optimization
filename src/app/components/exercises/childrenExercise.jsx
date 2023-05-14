import React from "react";
import CollapseWrapper from "../common/collapse";

const ChildrenExercise = () => {
  const children = [<Component key={1}/>, <Component key={2}/>, <Component key={3}/>];

  const childrenWithNumbers = children.map((child, index) => {
    return (
      <div key={index} className="d-flex align-items-center">
        <div className="me-2">{index + 1}.</div>
        {child}
      </div>
    );
  });

  return (
    <CollapseWrapper title="Упражнение">
         <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
      <div className="d-flex flex-column">{childrenWithNumbers}</div>
    </CollapseWrapper>
  );
};

const Component = () => {
  return <div className="list-group-item">Компонент списка</div>;
};

export default ChildrenExercise;
