import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import React from "react";

function App() {
  const [todos, setTodos] = React.useState([]);

  const [newTodoText, setNewTodoText] = React.useState("");

  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;

  const totalTodos = todos.length;

  const checkTodos = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodos = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const addTodos = () => {
    const newTodos = [...todos];
    const newTodo = { text: newTodoText, completed: false };
    newTodos.push(newTodo);
    setTodos(newTodos);
    setNewTodoText("");
  };

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => checkTodos(todo.text)}
            onDelete={() => deleteTodos()}
          />
        ))}
      </TodoList>
      <input
        placeholder="Write a new task..."
        value={newTodoText}
        onChange={(event) => {
          setNewTodoText(event.target.value);
        }}
      ></input>
      <CreateTodoButton onAdd={() => addTodos()} />
    </>
  );
}

export default App;
