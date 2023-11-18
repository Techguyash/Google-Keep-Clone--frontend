/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from "react";

import { useIsAuthenticated } from "@azure/msal-react";
import UnAuthenticatedPage from "./UnAuthenticatedPage";

/**
 * Renders the navbar component with a sign-in or sign-out button depending on whether or not a user is authenticated
 * @param props
 */
export const PageLayout = (props) => {
  const isAuthenticated = useIsAuthenticated();

  return <>{isAuthenticated ? props.children : <UnAuthenticatedPage />}</>;
};
