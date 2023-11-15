"use client"

import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import ListTodos from "./components/ListTodos";

// ? components

import InputTodo from "./components/InputTodo";

function App() {
  return (
    <Fragment>
    <div className="container">
        <InputTodo />    
        <ListTodos />  
    </div>
    </Fragment>
  );
}

export default App;