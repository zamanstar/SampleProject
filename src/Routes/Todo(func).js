import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import TodoApi from './../Api/ApiTodos'

function Todo(props){

        
        const params = useParams();
        console.log(params);
        const [todo, setTodo] = useState({});

        useEffect(()=>{
            TodoApi.get(`/todos/${params.todo}.json`)
            .then(Response => {
               
                setTodo({...Response.data , key : params.todo});
            })
            .catch(err => console.log(err))
        },[])
        return (
         <div className="container">
             <div className="row">
                 <div className="col-12">
                   <h2>Todo Detail</h2>
                   <p>{todo.text}</p>
                   <span className={`badge ${todo.done ? 'badge-success' : 'badge-warning'}`}>
                   { todo.done ? 'done' : 'undone'}
                 </span>
                 </div>
             </div>
         </div>
        )
}
export default Todo;