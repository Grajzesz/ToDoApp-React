import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoTaskAdd from './TodoTaskAdd';
class App extends Component {
state ={
    tasks:[
{
    id:0,
    text: "zagrac w wiedzmina1",
    active: true,
},
{
    id:1,
    text: "zagrac w wiedzmina2",
    active: true,
},
{
    id:2,
    text: "zagrac w wiedzmina3",
    active: true,
},

    ]
}
deleteTask = (id) => {
    console.log('delete w app el o id' +id);
    const tasks = [...this.state.tasks]
    const index = tasks.findIndex(task => task.id>id)
tasks.splice(index, 1)
this.setState({
    tasks
})
}
addTask = () =>{
    console.log('added');
return true
}
    render() {
        return (
            <div className="App">
               zycie
               <TodoTaskAdd add={this.addTask}/>
               <TodoList tasks= {this.state.tasks} delete = {this.deleteTask}/>

            </div>

        );
    }
}
export default App;
