import React from "react";
import "./NavBar.css";
import keep from "../../assets/Google_Keep_icon.svg";
import { SignInButton } from "../Auth/SignInButton";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignOutButton } from "../Auth/SignOutButton";
import { useMsal } from "@azure/msal-react";

const NavBar = (props) => {
  const { instance } = useMsal();

  const isAuthenticated = useIsAuthenticated();
  const handleLogout = (logoutType) => {
    if (logoutType === "popup") {
      instance.logoutPopup({
        postLogoutRedirectUri: "/",
        mainWindowRedirectUri: "/",
      });
    } else if (logoutType === "redirect") {
      instance.logoutRedirect({
        postLogoutRedirectUri: "/",
      });
    }
  };

  return (
    <div className="navBar">
      <div className="left">
        <div className="ham-icon">
          <span
            className="material-symbols-outlined"
            onClick={props.togglenavBarActiveStateHandler}
          >
            menu
          </span>
        </div>

        <img src={keep} className="logo" alt="keep" />
        <div className="tab-name">Keep</div>
      </div>
      <div className="middle">
        <div className="search-icon">
          <span className="material-symbols-outlined">search</span>
        </div>

        <input
          type="text"
          placeholder="Search"
          name="search_input"
          className="form-text"
        ></input>
      </div>
      <div className="right">
        <div className="right-01">
          <ul>
            <li>
              {isAuthenticated && (
                <span
                  class="material-symbols-outlined nav_icon"
                  onClick={() => handleLogout("redirect")}
                >
                  logout
                </span>
              )}
            </li>
            <li>
              <span className="material-symbols-outlined size-9 nav_icon">
                refresh
              </span>
            </li>
            <li>
              <span className="material-symbols-outlined size-9 nav_icon">
                view_agenda
              </span>
            </li>
            <li>
              <span className="material-symbols-outlined size-9 nav_icon">
                settings
              </span>
            </li>
          </ul>
        </div>
        <div className="right-02">
          <ul>
            <li>
              <span className="material-symbols-outlined nav_icon">apps</span>
            </li>
            <li>
              <span className="material-symbols-outlined">account_circle</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
