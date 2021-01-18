import React from "react";
import { UsersContext } from "../contexts/UsersContext";
import { v4 as uuidv4 } from "uuid";
import { ADD_USER } from "../constants/UsersConstant";

export default function AddUserForm() {
  const { dispatch } = React.useContext(UsersContext);
  const [name, setName] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: ADD_USER, payload: { name: name, id: uuidv4() } });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="please type your username"
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">add user</button>
      </form>
    </div>
  );
}
