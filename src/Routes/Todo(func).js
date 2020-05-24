import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import TodoApi from './../Api/ApiTodos'

function Todo(props){

        
        const params = useParams();
        console.log(params);
        const [todo, setTodo] = useState({});
        const history = useHistory();
        useEffect(()=>{
            TodoApi.get(`/todos/${params.todo}.json`)
            .then(Response => {
               
                if(Response.data){

                    setTodo({...Response.data , key : params.todo});       
                }
                else
                {
                    //redirect to 404 page
                    // props.history.push('/404');
                    history.push('/404');
                }
                
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