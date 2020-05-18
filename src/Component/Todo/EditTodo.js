import React, {useState} from 'react';



function EditTodo(props) {

const [text, settext] = useState(props.text);

let inputHandler = e => settext(e.target.value);

return (
        <div className="col-6 mb-2">
            <div className="d-flex justify-content-between align-items-center border rounded p-3">
                <div>
                    <input value={text} onChange={inputHandler}/>
                </div>
                <div>                 
                    <button type="button" onClick={() => props.edit(text)} className="btn btn-info btn-sm mr-1">Edit</button>
                </div>
            </div>
        </div>  
  
) 
}

export default EditTodo;