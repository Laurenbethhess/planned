import React, { useState } from 'react'
import EditTodo from './EditTodo';

function Item({todo, onTodoDelete, onUpdateTodo}) {
    const [editor, setEditor] = useState(false)

    function handleClick() {
        setEditor(!editor)
    }

    function handleDeleteClick() {
        fetch(`/todos/${todo.id}`, {
          method: "DELETE",
        })
        onTodoDelete(todo.id)
    }

    function handleUpdateTodo(updatedTodo) {
        onUpdateTodo(updatedTodo)
      }

      function getEditor() {
        if (editor)
        return <EditTodo onUpdateTodo={handleUpdateTodo} todo={todo} />
    }

    function idName() {
        if (todo.importance == 1) {
            return 'high'
        } else if (todo.importance == 2) {
            return 'medium'
        } else if(todo.importance == 3) {
            return 'low'
        }
    }
    
    return (
        <div className='list'>
                <div id={idName()}>
                    <br/>
                    <b className='item-text'>{todo.todo.toUpperCase()}</b> 
                    <p className='item-text'>Importance: {todo.importance}</p>
                    <p className='item-text'>Category: {todo.category.name}</p>
                    <button className='btn' onClick={handleClick}>Edit</button>
                    {getEditor()}
                    <br/><br/>
                    <button className='trash'  onClick={handleDeleteClick}>❌</button>
                </div>
        </div>
    )
}

export default Item
