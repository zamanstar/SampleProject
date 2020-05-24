import React , { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Layout/Header';
import todoContext from '../Context/Todos';
// import Axios from 'axios';
import axios1 from './../Api/ApiTodos';
import {Route, BrowserRouter as MainRouter,Switch} from 'react-router-dom';
// import AsyncComponent from './../AsyncComponent';
import loadable from '@loadable/component';

//imports Routes
// import Home from './../Routes/Home'
// import About from './../Routes/About'
// import Contact from './../Routes/Contact'
// import Todo from '../Routes/Todo(func)';
// import NotFound from '../Routes/NotFound';

//in baraye lazy loading hast hame ro intoi benevis
// const About = AsyncComponent(() => import('../Routes/About').then(module => module.default));

const Home = loadable(() => import('./../Routes/Home'));
const About = loadable(() => import('./../Routes/About'));
const Contact = loadable(() => import('./../Routes/Contact'));
const Todo = loadable(() => import('./../Routes/Todo'));
const NotFound = loadable(() => import('./../Routes/NotFound'));




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
         console.log('amin');
         console.log(todo);
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
             adds: this.addTodos.bind(this),
             done: this.doneTodo.bind(this),
             delete: this.deleteTodo.bind(this),
             edit: this.editTodo.bind(this),
         }}> 
        <main> 
            {/* switch be in soorat hast ke router haye dakhelesho az bala be tartib check mikone
            be har rout dorost ke resid dige miad birun va baadi ro niga nemikone */}
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
                {/* <Route path='/testmenu' render={() => <h2>test menu</h2>}/> */}
                <Route path='/todos/:todo' component={Todo}/>
                <Route path='/404' component = {NotFound}/>
                <Route path='' component = {NotFound}/>
                
                 {/* in nemune mige baade rot asli har hi omad be onvane todo shenakhte beshe
                <Route path='/:todo' component={Todo}/> */}
             </Switch>

             {/* in adresse paeeen ro bezani rout mifahme ke on testttt ye parametre */}
             {/* localhost3000/courses/testttt/create */}
             {/* <Route path='/todo/:id/create' component={Todo}/> */}
        </main>
        </todoContext.Provider>
    </MainRouter>
    )
   
}

}
  
 
export default App;