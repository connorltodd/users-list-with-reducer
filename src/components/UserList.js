import React from "react";
import axios from "axios";
import User from "./User";
import { UsersContext } from "../contexts/UsersContext";
import { DELETE_USER, GET_USERS } from "../constants/UsersConstant";
import AddUserForm from "./AddUserForm";

export default function UserList() {
  const { state, dispatch } = React.useContext(UsersContext);

  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) =>
        dispatch({ type: GET_USERS, payload: response.data })
      );
  }, []);

  return (
    <div>
      <p>UserList</p>
      <AddUserForm />
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
