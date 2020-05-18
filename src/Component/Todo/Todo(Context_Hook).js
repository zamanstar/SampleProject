import React, {useState, useContext} from 'react';
import EditTodos from './EditTodo';
import TodoContext from '../../Context/Todos';



function Todo(props) {

const [editStatus, seteditStatus] = useState(false);
const todosContext = useContext(TodoContext);
let changeStatus = e => seteditStatus(true);

let editHandler = text => {
    todosContext.edit(props.item.key, text);
    seteditStatus(false);
}

return (
  <>
  {
    !editStatus 
    ? ( 
        <div className="col-6 mb-2">
            <div className="d-flex justify-content-between align-items-center border rounded p-3">
                <div>
                    {props.item.text}
                </div>
                <div>
                    <button type="button" onClick={() => todosContext.done(props.item.key)} className="btn btn-success btn-sm mr-1">Done</button>
                    <button type="button" onClick={changeStatus} className="btn btn-info btn-sm mr-1">Edit</button>
                    <button type="button" onClick={() => todosContext.delete(props.item.key)} className="btn btn-danger btn-sm ml-1">Delete</button>
                </div>
            </div>
        </div>
    )
    :
    <EditTodos text={props.item.text} edit={editHandler}/>
   } 
  </>
) 
}

export default Todo;