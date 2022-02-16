import './App.css'
import React, { useEffect, useState } from 'react'
import ItemList from './Components/ItemList'
import Home from './Components/Home'
import { Routes, Route } from "react-router-dom";
import Nav from './Components/Nav'
import School from './Components/School'
import Chores from './Components/Chores'
import Work from './Components/Work'
import Exercise from './Components/Exercise'
import Misc from './Components/Misc'
import Groceries from './Components/Groceries'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('/todos')
    .then(r => r.json())
    .then(todos => setTodos(todos))
  }, [])

  function handleAddTodo(newTodo) {
    setTodos([...todos, newTodo])
  }

  const handleDeleteItem = (id) => {
    const finalTodos = todos.filter(todo => todo.id !== id)
    setTodos(finalTodos)
  }

  function handleUpdateTodo(updatedTodoObj) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === updatedTodoObj.id) {
        return updatedTodoObj;
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  }

  return (
   <div className="main">
      <Nav />
      <Routes >
        <Route path="/" element={<Home updateTodo={handleUpdateTodo} todos={todos} onTodoDelete={handleDeleteItem} onAddTodo={handleAddTodo} />}/>
        <Route path="/school" element={<School todos={todos} onTodoDelete={handleDeleteItem} onUpdateTodo={handleUpdateTodo}/>}/>
        <Route path="/chores" element={<Chores todos={todos} onTodoDelete={handleDeleteItem} onUpdateTodo={handleUpdateTodo}/>}/>
        <Route path="/work" element={<Work todos={todos} onTodoDelete={handleDeleteItem} onUpdateTodo={handleUpdateTodo}/>}/>
        <Route path="/exercise" element={<Exercise todos={todos} onTodoDelete={handleDeleteItem} onUpdateTodo={handleUpdateTodo}/>}/>
        <Route path="/misc" element={<Misc todos={todos} onTodoDelete={handleDeleteItem} onUpdateTodo={handleUpdateTodo}/>}/>
        <Route path="/groceries" element={<Groceries todos={todos} onTodoDelete={handleDeleteItem} onUpdateTodo={handleUpdateTodo}/>}/>

      
      
      
      </Routes>

     {/* <ItemList onAddTodo={handleAddTodo} todos={todos} onTodoDelete={handleDeleteItem} onUpdateTodo={handleUpdateTodo}/> */}
     <br/><br/>
   </div>
  )
}

export default App;
