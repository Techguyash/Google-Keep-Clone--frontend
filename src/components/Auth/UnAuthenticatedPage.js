import React from "react";
import "./auth.css";
import keepLogo from "../../assets/Google_Keep_icon.svg";
import Logo from "../../assets/ms.png";

import { useIsAuthenticated } from "@azure/msal-react";
import { SignOutButton } from "./SignOutButton";
import { SignInButton } from "./SignInButton";

const UnAuthenticatedPage = () => {
  const isAuthenticated = useIsAuthenticated();
  return (
    <div>
      <div className="Auth_header">
        <img src={Logo} className="Auth_logo" />
        <h3 className="Auth_logo_desc">Microsoft Identity Platform</h3>
      </div>
      <div className="Auth_center">
        {isAuthenticated ? <SignOutButton /> : <SignInButton />}
      </div>
      <h6>
        <center>Please disable the popup blockers</center>
      </h6>
    </div>
  );
};

export default UnAuthenticatedPage;
