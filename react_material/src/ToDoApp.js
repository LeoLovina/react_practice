import React from "react";
import AddTodo from "./components/ToDo/AddTodo";
import TodoList from "./components/ToDo/TodoList";
import VisibilityFilters from "./components/ToDo/VisibilityFilters";
import ShowPokemon from "./components/Pokemon/ShowPokemon";

// import "./styles.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Pokemo</h1>
      <ShowPokemon/>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}
