import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoTaskAdd from './TodoTaskAdd';
class App extends Component {
    counter = 1;
    state = {
        tasks: []
    };
    deleteAll = () => {
        this.setState(prevState => ({
            tasks: []
        }));
        this.counter=1;
    };
    deleteTask = id => {
        console.log('delete w app el o id' + id);
        const tasks = [...this.state.tasks];
        const index = tasks.findIndex(task => task.id > id);
        tasks.splice(index, 1);
        this.setState({
            tasks
        });
        this.counter--;
    };
    addTask = text => {
        // console.log('added');
        const task = {
            id: this.counter,
            text: text,
            active: true
        };
        this.counter++;
        console.log(task, this.counter);

        this.setState(prevState => ({
            tasks: [...prevState.tasks, task]
        }));

        return true;
    };
    render() {
        return (
            <div className="App">
                zycie
                <TodoTaskAdd
                    add={this.addTask}
                    delete={this.deleteTask}
                    tasks={this.state.tasks}
                    deleteAll={this.deleteAll}
                />
                <TodoList
                    tasks={this.state.tasks}
                    delete={this.deleteTask}
                    add={this.handleClick}
                />
            </div>
        );
    }
}
export default App;
