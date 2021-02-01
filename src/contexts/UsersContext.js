import React from "react";

import { DELETE_USER, ADD_USER, GET_USERS } from "../constants/UsersConstant";

const initialState = {
  users: [],
};

function reducer(state, action) {
  console.log("action", action);
  console.log("state", state);
  switch (action.type) {
    case DELETE_USER:
      return {
        users: state.users.filter((user) => user.id !== action.payload.id),
      };
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
      };
    case GET_USERS:
      return {
        users: action.payload,
      };
    default:
      return {
        users: state.users,
      };
  }
}

export const UsersContext = React.createContext(null);

export default function UsersContextProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UsersContext.Provider>
  );
}
