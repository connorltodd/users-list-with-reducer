import React from "react";
import User from "./User";
import { UsersContext } from "../contexts/UsersContext";
import { DELETE_USER } from "../constants/UsersConstant";

export default function UserList() {
  const { state, dispatch } = React.useContext(UsersContext);
  return (
    <div>
      <p>UserList</p>
      {state.users.map((user) => (
        <div>
          <p>{user.name}</p>
          <button
            onClick={() =>
              dispatch({
                type: DELETE_USER,
                payload: { id: user.id, name: user.name },
              })
            }
          >
            DELETE USER
          </button>
        </div>
      ))}
      {/* <User /> */}
    </div>
  );
}
