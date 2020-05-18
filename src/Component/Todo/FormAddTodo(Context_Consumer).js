import React, {useState} from 'react'
import todoContext from '../../Context/Todos';


function FormAddTodo(props){

const [text, setText] = useState('');


    let formHandler = (e, context) => {
        //ta zamani ke man nakhastam be jayee sybmit ersal nashe
        e.preventDefault();
        console.log('context FormAddTodo');
        context.add(text);
        setText('');
    }
    
    
    
    let inputHandler = e => setText(e.target.value)


    return (
      <todoContext.Consumer>
        { context => (
              <form className="form-inline" onSubmit={(e) => formHandler(e, context)}>
              <div className="form-group">
                <input type="text" value = {text} className="form-control mx-sm-3" onChange={inputHandler}  placeholder="i want to do ..."/>
                <button type="submit" className="btn btn-primary">add</button>
              </div> 
            </form>
        )}
      </todoContext.Consumer>
    )
}

export default FormAddTodo;