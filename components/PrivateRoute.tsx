import React, { useEffect } from "react";
import { useAppSelector } from "../redux/hooks";
import SignIn from "./SignIn/SignIn";

const PrivateRoute = (Component) => {
  const Auth = (props) => {
    const user = useAppSelector((state) => state.auth.authenticated);

    const phone =
      typeof window !== "undefined"
        ? window.localStorage.getItem("user")
        : null;

    if (!phone) {
      return <SignIn />;
    }
    return <Component {...props} />;
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }
  return Auth;
};

export default PrivateRoute;
