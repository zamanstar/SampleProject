import React , { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Layout/Header';
import FormAddTodo from './Todo/FormAddTodo(HttpRequest)';
import TodoList from './Todo/TodoList(HttpRequest)';
import todoContext from '../Context/Todos';
import Axios from 'axios';




class App extends Component{

    // state = {
    //     todos : [],
    //     statusDone : false
    // }

    constructor(props){
        super(props)
        this.state = {
            todos : [],
            statusDone : false
        }
        Axios.get('https://react-course-f83b2.firebaseio.com/todos.json')
        .then(response => this.jsonHandler(response.data))
        .catch(err => console.log(err));
    }
    
    addTodo(todo){
        // console.log('amin');
        // console.log(todo);
        this.setState(prevState => {
            return {
                todos : [
                    ...prevState.todos,
                    todo
                ] ,
                fromInput : ''                       
            }
        })

    }

    addTodos(todo){
        // console.log('amin');
        // console.log(todo);
        this.setState(prevState => {
            return {
                todos : todo
                ,
                fromInput : ''                       
            }
        });

    }
    
    deleteTodo(key){

        Axios.delete(`https://react-course-f83b2.firebaseio.com/todos/${key}.json`)
        .then(response => {
            this.setState(prevState => {
                return {
                    todos : prevState.todos.filter(item => item.key !== key)
                }
            })
        })
        .catch(err => console.log(err));
   
    }

  doneTodo(key){

        let {todos} = this.state;
        let item = todos.find(x=>x.key === key);   
        let NewTodo = todos.filter(y=>y.key !== key); 
        item.done = true; 
        Axios.put(`https://react-course-f83b2.firebaseio.com/todos/${key}.json`, {text:item.text, done:item.done})
         .then(Response =>  {   this.setState(prevState =>{
            return {
                todos : [...NewTodo,item]
            }
        })})
        .catch(err => console.log(err))    
     
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

    jsonHandler(data){
        let tempTodo = Object.entries(data)
        .map(([key , value]) => {
            return {
                ...value,
                key
            }
        });

       this.addTodos(tempTodo);
    }


render(){
   

     //console.log('test');


    return(
        <>
        <Header/>
        <todoContext.Provider value={{
             todos: this.state.todos,
             add: this.addTodo.bind(this),
             done: this.doneTodo.bind(this),
             delete: this.deleteTodo.bind(this),
             edit: this.editTodo.bind(this),
         }}> 
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
        </todoContext.Provider>
    </>
    )
   
}

}
  
 
export default App;