import React from 'react';
import TodosContext from '../../Context/Todos';
import Axios from './../../Api/ApiTodos'



class FormAddTodo extends React.Component{

state = { text : ''}

//dar dar halate class faghat 1 bar mishe az TodosContext estefade kard
static contextType = TodosContext; 

  formHandler(e){
    //ta zamani ke man nakhastam be jayee submit ersal nashe
    e.preventDefault();

   
    let todo = {text : this.state.text , done : false};
    //ajax
    Axios.post('/todos.json', todo)
       .then(response => this.context.add({...todo , key : response.data.name}))
       .catch(err => console.log(err))
    // this.context.add(this.state.text);
    this.setState({text : ''});


    // Axios({
    //   method: 'post',
    //   url: '/user',
    //   timeout: 180000, // Let's say you want to wait at least 180 seconds
    //   data: {
    //     id: '1234',
    //   }
    // })
    // .then(function (response) {
    //       console.log(response);
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });
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