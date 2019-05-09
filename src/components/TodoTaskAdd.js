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
    handleClick = e => {
       console.log('dziala');
      const add = this.props.add()
      if(add){
          this.setState({
            text:""
          })

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
                    <button onClick={this.handleClick}>dodaj</button>
                </div>
                <hr />
            </div>
        );
    }
}

export default TodoTaskAdd;
