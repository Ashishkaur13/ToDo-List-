import './App.css';   //injects css in the code 
import Header from "./MyComponents/Header";  //exports default header wali file
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About";
import React, { useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null) {
 initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo)=> {
    console.log("I am on delete of todo ", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }

const addTodo = (title,desc)=> {
  console.log("I m adding this todo", title,desc);
  let sno;
  if(todos.length===0) {
    sno=1;
  }
  else {
    sno = todos[todos.length-1].sno + 1;
  }
  const myTodo = {
    sno : sno,
    title : title,
    desc: desc
  }
  setTodos([...todos,myTodo]);
  console.log(myTodo);
}

const [todos, setTodos] = useState(initTodo);      //array k andar object bnaya hai 

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
    },[todos])
 
  return (
    <>
    <Router>
    <Header title= "My Todos List" searchBar = {false}/>  { /* Header Component */ }
    
    <Switch>
    <Route exact path="/" render = {()=> {
      return(
        <>
      <AddTodo addTodo={addTodo}/>
      <Todos todos = {todos} onDelete = {onDelete}/>  { /* Todos Component */ }
      </>)
        }}>
         
          </Route>    
    <Route exact path="/About">
          <About />
         </Route>
        </Switch>
    
    <Footer/>  { /* Footer Component */ }
    </Router>
     </>
  );
}

export default App;
