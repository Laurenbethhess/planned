import React, {} from 'react'

function TodoList({todo, onTodoDelete}) {

    function handleDeleteClick() {
        fetch(`/todos/${todo.id}`, {
          method: "DELETE",
        })
        onTodoDelete(todo.id)
    }
    
    return (
        <div className='all-todos'>
            {todo.importance == 1 ? (
                <li className="red"><button className='trash' onClick={handleDeleteClick}>❌</button>{todo.todo.toLowerCase()} </li>
            ) : todo.importance == 2 ? (
                <li className="orange"><button className='trash' onClick={handleDeleteClick}>❌</button>{todo.todo.toLowerCase()} </li>
            ) : todo.importance == 3 ? (
                <li className="green" ><button className='trash' onClick={handleDeleteClick}>❌</button>{todo.todo.toLowerCase()} </li> 
            ) : (
                <li>{todo.todo.toLowerCase()}</li> 
            )}
        </div>
    )
}
export default TodoList