import React, { useState } from 'react'
import Item from './Item'
import SearchBar from './SearchBar'
import NewTodo from './NewTodo'

function ItemList({todos, onTodoDelete, onUpdateTodo, onAddTodo}) {
    const [search, setSearch] = useState("")

    const displayedTodos = todos.filter(todo =>
    todo.todo.toLowerCase().includes(search.toLowerCase())
    )

    const renderTodos = displayedTodos.map(todo => <Item todo={todo} key={todo.id} onTodoDelete={onTodoDelete} onUpdateTodo={onUpdateTodo} />)

    return (
            <div className='flex'>
                <div className='dropdown'>    
                    <div className='info'>
                        Make a New Todo
                    </div>
                    <div className='todo'>
                        <NewTodo onAddTodo={onAddTodo}/>
                    </div>
                    <div className='info'>
                        Search for Todos
                    </div>
                    <div className='todo'>
                        <br/>
                        <SearchBar onSearch={setSearch}/>
                        <br/>
                    </div>
            </div>
            <div className='flex'>         
                <div id='edit' className='info'>
                    Edit Todos
                </div>
                <div className='the-list'>
                    {renderTodos}
                </div>
            </div>
        </div>
    )
}

export default ItemList