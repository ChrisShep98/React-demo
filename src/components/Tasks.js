// According to Trav Media you don't need the line below for function components
import React from 'react'
import Task from './Task'

const Tasks = ({tasks}) => {

  return (
    <div>
        {tasks.map((task) => (
        <Task key={task.id} task={task} />
        ))}
    </div>
  )
}

export default Tasks

