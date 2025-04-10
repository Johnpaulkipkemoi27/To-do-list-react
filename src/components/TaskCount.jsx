import React from 'react'
import { tasks } from '../data/tasks'

const TaskCount = () => {
  return (
    <div className="task-stats">
    <p>
      <span id="tasks-count">{tasks.filter(task=> !task.completed).length}</span> tasks left</p>
</div>
  )
}

export default TaskCount
// This component is used to display the number of tasks left in the todo list.