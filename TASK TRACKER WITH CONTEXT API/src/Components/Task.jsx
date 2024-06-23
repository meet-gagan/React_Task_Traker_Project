import React from 'react';
import { useContext } from 'react';
import { TaskContext } from '../Context/TaskContext';

const Task = ({ task }) => {
  const { toggleTaskCompletion, deleteTask } = useContext(TaskContext);

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleTaskCompletion(task.id)}>{task.name}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
