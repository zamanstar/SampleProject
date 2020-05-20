import React, { useState, useContext } from 'react';
import Todo from './Todo(HttpRequest)';
import TodoContext from '../../Context/Todos';



function TodoList(props){
     const [statusDone, setDone]= useState(false);
     const todosContext = useContext(TodoContext)
     let { todos } = todosContext;
     let filterTodos = todos.filter(item => item.done === statusDone)
     console.log(todosContext);
    return(
        <>
            <nav className="col-6 mb-3">
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a onClick = {() => setDone(false)}   className={`nav-item nav-link ${!statusDone ? 'active' : ''} font-weight-bold`} id="nav-home-tab">undone <span className="badge badge-secondary">{todos.filter(item => item.done === false).length}</span></a>
                <a onClick = {() => setDone(true)} className={`nav-item nav-link ${statusDone  ? 'active' : ''}   font-weight-bold`} id="nav-profile-tab">done <span className="badge badge-success">{todos.filter(item => item.done === true).length}</span></a>
            </div>
            </nav>     
            {
                filterTodos.length === 0
                ? <p>there isnt any</p>
                :  filterTodos.map(item => <Todo
                     key = {item.key} 
                     item = {item} 
                     />)
            }    
       </>
    )

}


export default TodoList;