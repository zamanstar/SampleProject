import React, {useState} from 'react'


function FormAddTodo(props){

const [text, setText] = useState('');


    let formHandler = e => {
        //ta zamani ke man nakhastam be jayee sybmit ersal nashe
        e.preventDefault();
        console.log('submit');
        props.add(text);
        setText('');
    }
    
    
    
    let inputHandler = e => setText(e.target.value)


    return (
        <form className="form-inline" onSubmit={formHandler}>
        <div className="form-group">
          <input type="text" value = {text} className="form-control mx-sm-3" onChange={inputHandler}  placeholder="i want to do ..."/>
          <button type="submit" className="btn btn-primary">add</button>
        </div> 
      </form>
    )
}

export default FormAddTodo;