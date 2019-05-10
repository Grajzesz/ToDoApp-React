import React from 'react';
import TodoItems from './TodoItems';

const TodoList = props => {
   
    const tasks = props.tasks.map(task => (
        <TodoItems key={task.id} task={task} />
    ));

    return (
        <div className="list">

            {tasks}

        </div>
    );
};

export default TodoList;
