import React, { useState } from 'react'
import Item from './Item'
import SearchBar from './SearchBar'
import NewTodo from './NewTodo'
import TodoList from './TodoList'

function ItemList({todos, onTodoDelete, onUpdateTodo, onAddTodo}) {
    const [search, setSearch] = useState("")
    const [filterBy, setFilterBy] = useState(0)
    const notAssigned = 0
    const chores = 1
    const work = 2
    const exercise = 3
    const misc = 4
    const groceries = 5
    const school = 6
    
    const filteredTodos = todos.filter(todo => todo.category.name === filterBy) 
    const renderTodosList = filteredTodos.map(todo => <TodoList todo={todo} key={todo.id} onTodoDelete={onTodoDelete}/>)
    
    const onFilterChange = (e) => {
        setFilterBy(e.target.value)
      }

    const displayedTodos = todos.filter(todo =>
    todo.todo.toLowerCase().includes(search.toLowerCase())
    )

    const renderTodos = displayedTodos.map(todo => <Item todo={todo} key={todo.id} onTodoDelete={onTodoDelete} onUpdateTodo={onUpdateTodo} />)

    return (
        <div className='flexer'>
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
                    <div className='info'>Filter by Category</div>
                        <select className='select' onChange={onFilterChange} value={filterBy}>
                            <option value="">Choose Category</option>
                            <option value='notAssigned'>Not Assigned</option>
                            <option value='chores'>Chores</option>
                            <option value='work'>Work</option>
                            <option value='exercise'>Exercise</option>
                            <option value='misc'>Misc</option>
                            <option value='groceries'>Groceries</option>
                            <option value='school'>School</option>
                        </select>
                    <div id='todos-cat'>
                        {renderTodosList}
                    </div>
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