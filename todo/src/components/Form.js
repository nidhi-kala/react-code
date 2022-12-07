import { useState } from "react";
const Form = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  setStatus,
  status,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.floor(Math.random() * 1000),
      },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} type="submit" className="todo-button">
        <i className="fa-solid fa-plus"></i>
      </button>
      <div className="select">
        <select
          onChange={statusHandler}
          name="todos"
          className="filter-todo"
          id=""
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
