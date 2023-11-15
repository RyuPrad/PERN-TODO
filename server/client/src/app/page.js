"use client";

import { Fragment, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ListTodos from "./components/ListTodos";
import InputTodo from "./components/InputTodo";

function App() {
 useEffect(() => {
   require("bootstrap/dist/js/bootstrap.bundle.min.js");
 }, []);

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
