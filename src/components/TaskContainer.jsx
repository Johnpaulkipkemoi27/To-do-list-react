import React from 'react';
import TaskItem from './TaskItem';
import {tasks} from '../data/tasks';
import Input from './Input';
import { useState } from 'react';
const TaskContainer = () => {
  return (
    <div className="task-container">
      <div className='tasks-header'>
        <h2>Your Tasks</h2>
      </div>
      <div id='tasks-list'>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
        </div>
      
    </div>
  );
};

export default TaskContainer
