import React from "react";
import { useLogOut } from "../../hooks/useLogout";

const Todo = () => {
  const { LogOut } = useLogOut();
  return (
    <div>
      <button onClick={LogOut}>Logouuut</button>
    </div>
  );
};

export default Todo;
