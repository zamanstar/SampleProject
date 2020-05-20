import React from 'react';
import TodosContext from './../../Context/Todos';



class FormAddTodo extends React.Component{

state = { text : ''}

//dar dar halate class faghat 1 bar mishe az TodosContext estefade kard
static contextType = TodosContext; 

  formHandler(e){
    //ta zamani ke man nakhastam be jayee submit ersal nashe
    e.preventDefault();
    console.log('submit');
    this.context.add(this.state.text);
    this.setState({text : ''});
}



 inputHandler(e){
  this.setState({text : e.target.value});
 }

  render(){
    return(
      <form className="form-inline" onSubmit={this.formHandler.bind(this)}>
      <div className="form-group">
        <input type="text" value = {this.state.text} className="form-control mx-sm-3" onChange={this.inputHandler.bind(this)}  placeholder="i want to do ..."/>
        <button type="submit" className="btn btn-primary">add</button>
      </div> 
    </form>
    )
  }
}

export default FormAddTodo;