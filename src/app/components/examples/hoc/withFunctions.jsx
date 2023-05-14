import React, { useEffect, useState, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SimpleComponent from "./simpleComponent";

const withFunctions = (WrappedComponent) => {
  const ComponentWithHoc = () => {
    const [isAuth, setIsAuth] = useState(false);

    const onLogin = () => {
      localStorage.setItem("auth", "token");
      setIsAuth(true);
    };

    const onLogOut = () => {
      localStorage.removeItem("auth");
      setIsAuth(false);
    };

    useEffect(() => {
      const auth = localStorage.getItem("auth");
      if (auth) {
        setIsAuth(true);
      }
    }, []);

    const wrappedComponentProps = useMemo(
      () => ({
        isAuth,
        onLogin,
        onLogOut
      }),
      [isAuth, onLogin, onLogOut]
    );

    return (
      <CardWrapper>
        <WrappedComponent {...wrappedComponentProps} />
      </CardWrapper>
    );
  };

  return ComponentWithHoc;
};

export const ComponentWithHoc = withFunctions(SimpleComponent);
