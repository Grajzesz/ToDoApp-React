import React from 'react';
import TodoItems from './TodoItems'
import TodoTaskAdd from './TodoTaskAdd';
// import TodoTask from './TodoTask';
const TodoList = (props) => {
const id = props.tasks.id
const tasks = props.tasks.map(task => <TodoItems key = {task.id} task={task} delete={props.delete} />)

return (
    <div className= 'list'>
        Lista taskow
{tasks}
<button onClick ={ () => props.delete(id)}>x</button>
    </div>
    )
};

export default TodoList;