import React from 'react'
const TodoItems = (props) => {

  const {text} =props.task

  return (
  <div>
    <p>
      {text}
    </p>
  </div>
  )
};

export default TodoItems;