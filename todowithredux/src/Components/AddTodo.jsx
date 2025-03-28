import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/todoSlice";
function AddTodo() {
  const [Input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(Input));
    setInput("");
  };
  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder="Enter New Todo"
        value={Input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">ADD Todo</button>
    </form>
  );
}

export default AddTodo;
