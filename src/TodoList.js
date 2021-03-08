import React, { useState } from "react";
import ReactiveButton from "reactive-button";

import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";

import "./App.css";

const TodoList = () => {
  const [todo, setTodo] = useState({ description: "", date: "", status: "" });
  const [todos, setTodos] = useState([]);
  const [state, setState] = useState("idle");

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({ description: "", date: "", status: "" });
  };

  return (
    <div>
      <div className='todo__input'>
        <input
          placeholder='Description'
          name='description'
          value={todo.description}
          onChange={inputChanged}
        />
        <input
          placeholder='Date'
          name='date'
          value={todo.date}
          onChange={inputChanged}
        />
        <ReactiveButton
          buttonState={state}
          onClick={addTodo}
          idleText={"Search"}
          style={{ borderRadius: "5px" }}
          outline={false}
          shadow={false}
          rounded={false}
          size={"small"}
        />
      </div>

      <div
        className='ag-theme-material'
        style={{ height: 400, width: 400, margin: "auto" }}
      >
        <AgGridReact rowData={todos} animateRows={true}>
          <AgGridColumn
            field='description'
            sortable={true}
            filter={true}
            lockPosition={true}
          ></AgGridColumn>
          <AgGridColumn
            field='date'
            sortable={true}
            filter={true}
            lockPosition={true}
          ></AgGridColumn>
        </AgGridReact>
      </div>
    </div>
  );
};

export default TodoList;
