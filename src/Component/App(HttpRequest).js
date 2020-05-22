import React , { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Layout/Header';
import todoContext from '../Context/Todos';
// import Axios from 'axios';
import axios1 from './../Api/ApiTodos';
import {Route, BrowserRouter as MainRouter} from 'react-router-dom';
import Home from './../Routes/Home'
import About from './../Routes/About'
import Contact from './../Routes/Contact'




class App extends Component{

    state = {
                todos : [],
                statusDone : false
            }

    // constructor(props){           
    //     super(props)
    //     this.state = {
    //         todos : [],
    //         statusDone : false
    //     }

    //     this.loading = true;

    //     axios1.get('/todos.json')
    //     .then(response => this.jsonHandler(response.data))
    //     .catch(err => console.log(err));
    // }
    
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

        axios1.delete(`/todos/${key}.json`)
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
        axios1.put(`/todos/${key}.json`, {text:item.text, done:item.done})
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

    // jsonHandler(data){
    //     this.loading = false;
    //     let tempTodo = Object.entries(data)
    //     .map(([key , value]) => {
    //         return {
    //             ...value,
    //             key
    //         }
    //     });

    //    this.addTodos(tempTodo);
    // }


render(){
   

     //console.log('test');


    return(
        <MainRouter>
        <Header/>
        <todoContext.Provider value={{
             todos: this.state.todos,
             add: this.addTodo.bind(this),
             done: this.doneTodo.bind(this),
             delete: this.deleteTodo.bind(this),
             edit: this.editTodo.bind(this),
         }}> 
        <main> 
             <Route path="/" exact component={Home} />
             <Route path='/about' component={About}/>
             <Route path='/contact' component={Contact}/>
             <Route path='/testmenu' render={() => <h2>test menu</h2>}/>
        </main>
        </todoContext.Provider>
    </MainRouter>
    )
   
}

}
  
 
export default App;