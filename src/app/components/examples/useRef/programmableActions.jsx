import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.focus();
    };
    const handleCurrentWidth = () => {
        inputRef.current.style.width = "100px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">Email</label>
            <input ref={inputRef} type="email" className="form-control" id="email" />
            <button className="btn btn-primary mt-3" onClick={handleClick}>Фокус input</button>
            <button className="btn btn-warning mx-3" onClick={handleCurrentWidth}>Изменить ширину</button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
