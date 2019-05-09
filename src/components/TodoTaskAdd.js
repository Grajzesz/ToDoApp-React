import React, { Component } from 'react';

class TodoTaskAdd extends Component {
    state = {
        text: ''
    };

    handleText = e => {
        this.setState({
            text: e.target.value
        });
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


    handleClick = e => {
       console.log('dziala');
       const {text} =this.state
       if(text.length >1){
      const add = this.props.add(text)
      if(add){
          this.setState({
            text:""
          })
        }
      }else{console.log('za krotkie');
      }
    };
    render() {
        return (
            <div className="form">
                <div className="form">
                    <input
                        type="text"
                        placeholder="dodaj"
                        value={this.state.text}
                        onChange={this.handleText}
                    />
                    <div className="buttons">
                    <button onClick={this.handleClick}>dodaj</button>
                    <button onClick={() => this.props.delete(this.id)}>x</button>
                    <button onClick={() => this.props.deleteAll()}>wpizdu</button>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default TodoTaskAdd;
