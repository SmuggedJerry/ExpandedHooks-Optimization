import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
    console.log("LogOutButton render");
    });
   return <button className="btn btn-primary mx-2" onClick={onLogOut}>Log out</button>;
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

function areEqual(prevState, nextState) {
    if (prevState.onLogOut !== nextState.onLogOut) { return false; }
    return true;
}

const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
        }, [props]);
    return (
    <>
    <button className="btn btn-primary mx-2" onClick={() => setState(!state)}>Initiate rerender</button>
    <MemoizedLogOutButton onLogOut={handleLogOut} />
    </>
    );
};

export default MemoWithUseCallbackExample;
