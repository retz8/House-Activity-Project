import React, { createContext, useState } from "react";

export const loggedInUserContext = createContext({});

export default function UserContext(props) {
  const [loggedInUser, setLoggedInUser] = useState();
  const [accessToken, setAccessToken] = useState();
  const [initialEvents, setInitialEvents] = useState([]);
  const [initialFilteredEvents, setInitialFilteredEvents] = useState([]);

  return (
    <loggedInUserContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        accessToken,
        setAccessToken,
        initialEvents,
        setInitialEvents,
        initialFilteredEvents,
        setInitialFilteredEvents,
      }}
    >
      {props.children}
    </loggedInUserContext.Provider>
  );
}
