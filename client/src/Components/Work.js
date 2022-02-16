import React, {} from "react";
import TodoCard from './TodoCard'
import Typography from '@mui/material/Typography';

function Work( { todos, onTodoDelete, onUpdateTodo }) {
    const filteredTodos = todos.filter(todo => todo.category.name === 'work') 
    const renderTodosList = filteredTodos.map(todo => <TodoCard todo={todo} key={todo.id} onTodoDelete={onTodoDelete}/>)

    return (
        <div align='center' style={{ paddingTop: 100}}>
            <Typography style={{fontSize: 20, fontFamily: "Courier"}} variant="p" gutterBottom component="div">
                School Todos
            </Typography>
            {renderTodosList}
        </div>
    )
}

export default Work