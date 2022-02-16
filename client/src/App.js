import './App.css'
import React, { useEffect, useState } from 'react'
import ItemList from './Components/ItemList'
import Header from './Components/Header'

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
     <Header todos={todos} onTodoDelete={handleDeleteItem}/>
     <ItemList onAddTodo={handleAddTodo} todos={todos} onTodoDelete={handleDeleteItem} onUpdateTodo={handleUpdateTodo}/>
     <br/><br/>
   </div>
  )
}

export default App;
