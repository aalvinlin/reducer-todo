import React, {useState, useReducer} from "react";

import {initialState, taskReducer } from "./reducers/taskReducer";
import TodoList from "./components/TodoList";

import "./App.css";

const App = () => {

  const [state, dispatch] = useReducer(taskReducer, initialState);
  
  return (
    <div className="content">

      <TodoList state={state} />
    
    </div>
  )

};

export default App;