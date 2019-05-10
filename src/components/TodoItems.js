import React from 'react';
const TodoItems = props => {
    const { text, id } = props.task;

    return (
        <div>
            <p>
                Task Number {id}: {text}
            </p>
        </div>
    );
};

export default TodoItems;
