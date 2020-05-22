import React, { useState , useEffect, useContext} from 'react';
import FormAddTodo from './../Component/Todo/FormAddTodo(HttpRequest)';
import TodoList from './../Component/Todo/TodoList(HttpRequest)';
import Spinner from './../Component/Spinner/Spinner';
import axios1 from './../Api/ApiTodos';
import TodoContext from './../Context/Todos'


function Home() {
    const[loading , setLoading] = useState();
    const todoContext = useContext(TodoContext);
    useEffect(() => {
        setLoading(true);
        axios1.get(`/todos.json`)
        .then(response => jsonHandler(response.date))
        .catch(err => {});
    },[])

    let jsonHandler = (data) => {
        setLoading(false);
        let tempTodo = Object.entries(data)
        .map(([key , value]) => {
            return {
                ...value,
                key
            }
        });

        todoContext.addTodos(tempTodo);
    }

    return (
               <>
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

           <FormAddTodo />

            </div> 
          </section>
          <div className="todosList">
                <div className="container">
                    <div className="d-flex flex-column align-items-center ">
                         
                          {
                              loading
                              ? <Spinner/>
                              :(
                                <TodoList />
                              )
                          }
                    </div>
              
                </div>
          </div>
               </>
    )
}

export default Home;