import React, { createContext, useState } from "react";

export const loggedInUserContext = createContext({});

export default function UserContext(props) {
  const [loggedInUser, setLoggedInUser] = useState();
  const [accessToken, setAccessToken] = useState();

  return (
    <loggedInUserContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        accessToken,
        setAccessToken,
      }}
    >
      {props.children}
    </loggedInUserContext.Provider>
  );
}
