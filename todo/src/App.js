import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  //states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(
          todos.filter((todo) => {
            return todo.completed === true;
          })
        );
        break;
      case "incomplete":
        setFilteredTodos(
          todos.filter((todo) => {
            return todo.completed === false;
          })
        );
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //useeffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  useEffect(() => {
    getLocalTodos();
  }, []);

  //Local storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Your Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
        status={status}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
