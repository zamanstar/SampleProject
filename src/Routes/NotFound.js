import React, { useState , useEffect, useContext} from 'react';
import FormAddTodo from '../Component/Todo/FormAddTodo(HttpRequest)';
import TodoList from '../Component/Todo/TodoList(HttpRequest)';
import Spinner from '../Component/Spinner/Spinner';
import axios1 from '../Api/ApiTodos';
import TodoContext from '../Context/Todos'


function NotFound() {

    

    return (
        <h2>Not Found</h2>
    )
}

export default NotFound; 