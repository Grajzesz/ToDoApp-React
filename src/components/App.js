import React, { Component } from 'react';
import TodoList from './TodoList';
// import TodoItems from './TodoItems';
import TodoTask from './TodoTask';
class App extends Component {


    render() {
        return (
            <div className="App">
               zycie
               <TodoTask/>
               <TodoList/>
            </div>
        );
    }
}
export default App;
