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
    handleKey = e => {
        console.log('dziala');
        const { text } = this.state;
        if (e.key === 'Enter') {
            if (text.length > 1) {
                const add = this.props.add(text);
                if (add) {
                    this.setState({
                        text: ''
                    });
                }
            } else {
                console.log('za krotkie');
            }
        }
    };
    handleClick = e => {
        console.log('dziala');
        const { text } = this.state;
        if (text.length > 1) {
            const add = this.props.add(text);
            if (add) {
                this.setState({
                    text: ''
                });
            }
        } else {
            console.log('za krotkie');
        }
    };
    render() {
        return (
            <div className="form">
                <div className="form">
                    <input
                        type="text"
                        placeholder="Input task"
                        value={this.state.text}
                        onChange={this.handleText}
                        onKeyPress={this.handleKey}
                    />
                    <div className="buttons">
                        <div className="add" onClick={this.handleClick}>
                            <i className="fas fa-plus" />
                        </div>
                        <div
                            className="remove"
                            onClick={() => this.props.delete(this.id)}
                        >
                            <i className="fas fa-minus" />
                        </div>
                        <div
                            className="clear"
                            onClick={() => this.props.deleteAll()}
                        >
                            <i className="fas fa-trash-alt" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoTaskAdd;
