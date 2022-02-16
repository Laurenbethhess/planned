import React, {} from 'react'
import TodoCard from './TodoCard'
import Typography from '@mui/material/Typography';
import NewTodo from './NewTodo';

function Home({todos, onTodoDelete, onAddTodo, updateTodo }) {
    const renderTodosListAll = todos.map(todo => <TodoCard updateTodo={updateTodo} todo={todo} key={todo.id} onTodoDelete={onTodoDelete}/>)

    return (
        <div align='center' style={{ paddingTop: 100}}>
            <Typography style={{ fontSize: 40, fontFamily: "Courier"}} variant="p" gutterBottom component="div">
                ToDo List
            </Typography>
        <div>
            <Typography>
                <NewTodo onAddTodo={onAddTodo} />
            </Typography>
            {renderTodosListAll}
            <br/>
        </div>
        </div>
    )
}

export default Home