import React , { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Layout/Header';
import FormAddTodo from './Todo/FormAddTodo';
import TodoList from './Todo/TodoList';




class App extends Component{

    // state = {
    //     fromInput : '',
    //     todos : []
    // }

    state = {
        todos : [],
        statusDone : false
    }
    
    addTodo(text){
        this.setState(prevState => {
            return {
                todos : [
                    ...prevState.todos,
                    {key : Date.now() , done : false , text : text}
                ] ,
                fromInput : ''                       
            }
        })

    }
    
    deleteTodo(key){
       this.setState(prevState => {
           return {
               todos : prevState.todos.filter(item => item.key !== key)
           }
       })
    }

  doneTodo(key){
        let {todos} = this.state;
        let item = todos.find(x=>x.key === key);   
        let NewTodo = todos.filter(y=>y.key !== key); 
        item.done = true; 
        this.setState(prevState =>{
            return {
                todos : [...NewTodo,item]
            }
        })
    }

    editTodo(key, text){
        let {todos} = this.state;
        let item = todos.find(x=>x.key === key);
        let NewTodo = todos.filter(y=>y.key !== key);
        item.text = text;
        this.setState(prevState =>{  
            return {
                todos : [...NewTodo,item]
            }
        })
    }


// formHandler(e) {
//     //ta zamani ke man nakhastam be jayee sybmit ersal nashe
//     e.preventDefault();
//     console.log('submit');

//     this.setState(prevState => {
//         return {
//             todos : [
//                 ...prevState.todos,
//                 {key : Date.now() , done : false , text : prevState.fromInput}
//             ] ,
//             fromInput : ''                       
//         }
//     })
// }



// inputHandler(e) {
//     console.log(e.target.value);
//     this.setState({ fromInput: e.target.value});
// }

render(){

    return(
        <>
        <Header/>
        <main> 
          <section className="jumbotron">
            <div className="container d-flex flex-column align-items-center">
                <h1 className="jumbotron-heading">Welcome!</h1>
                <p className="lead text-muted">To get started, add some items to your list:</p>

                {/* <form className="form-inline" onSubmit={this.formHandler.bind(this)}>
                  <div className="form-group">
                    <input type="text" value = {this.state.fromInput} className="form-control mx-sm-3" onChange={this.inputHandler.bind(this)}  placeholder="i want to do ..."/>
                    <button type="submit" className="btn btn-primary">add</button>
                  </div>
                </form> */}

           <FormAddTodo  add={this.addTodo.bind(this)}/>

            </div> 
          </section>
          <div className="todosList">
                <div className="container">
                    <div className="d-flex flex-column align-items-center ">
                          <TodoList 
                           todos={this.state.todos}
                           delete = {this.deleteTodo.bind(this)}  
                           done = {this.doneTodo.bind(this)}  
                           edit = {this.editTodo.bind(this)}  
                           />
                    </div>
              
                </div>
          </div>
        </main>
    </>
    )
   
}

}
  
 
export default App;