import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Notes from "./components/Notes/Notes";
import SideBar from "./components/SideBar/SideBar";
import { Route, Routes } from "react-router-dom";
import Archive from "./components/Archive/Archive";
import Trash from "./components/Trash/Trash";
import Labels from "./components/Labels/Labels";

import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { PageLayout } from "./components/Auth/PageLayout";
import UnAuthenticatedPage from "./components/Auth/UnAuthenticatedPage";

function App() {
  const [navBarActive, setnavBarActive] = useState(true);
  const [renderLabelComponent, setRenderLabelComponent] = useState(false);

  const renderLabelComponentHandler = () => {
    setRenderLabelComponent(!renderLabelComponent);
  };

  function togglenavBarActiveStateHandler() {
    setnavBarActive(!navBarActive);
  }
  return (
    <>
      <PageLayout>
        <AuthenticatedTemplate>
          <div className="backdrop">
            <NavBar
              togglenavBarActiveStateHandler={togglenavBarActiveStateHandler}
            />
            <div className="content">
              <SideBar
                navBarActiveState={navBarActive}
                renderLabelComponentHandler={renderLabelComponentHandler}
              />
              <Routes>
                <Route
                  path="/Notes"
                  element={
                    <Notes
                      icon="lightbulb"
                      content="Notes you add appear here"
                    />
                  }
                ></Route>
                <Route
                  path="/Remainder"
                  element={
                    <Notes
                      icon="notifications"
                      content="Notes with upcoming remainders appear here"
                    />
                  }
                ></Route>
                <Route path="/Trash" element={<Trash />}></Route>
                <Route path="/Archive" element={<Archive />}></Route>
              </Routes>
              {renderLabelComponent && (
                <Labels
                  renderLabelComponentHandler={renderLabelComponentHandler}
                />
              )}
            </div>
          </div>
        </AuthenticatedTemplate>

        <UnauthenticatedTemplate>
          <h5 className="card-title">
            Please sign-in to see your profile information.
          </h5>
        </UnauthenticatedTemplate>
      </PageLayout>
    </>
  );
}

export default App;
