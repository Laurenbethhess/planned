import React, {useState} from 'react'
import TodoCard from './TodoCard'
import Typography from '@mui/material/Typography';
import NewTodo from './NewTodo';

function Home({ user }) {
    const [todos, setTodos] = useState(user.todos)

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

    const renderTodosListAll = todos.map(todo => <TodoCard updateTodo={handleUpdateTodo} todo={todo} key={todo.id} onTodoDelete={handleDeleteItem}/>)

    return (
        <div align='center' style={{ paddingTop: 100}}>
            <Typography style={{ fontSize: 40, fontFamily: "Courier"}} variant="p" gutterBottom component="div">
                My plan ... for now
            </Typography>
        <div>
            <Typography>
                <NewTodo onAddTodo={handleAddTodo} user={user} />
            </Typography>
            {renderTodosListAll}
            <br/>
        </div>
        </div>
    )
}

export default Home