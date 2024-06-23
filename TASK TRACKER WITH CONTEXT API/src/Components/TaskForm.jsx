import React, { useState, useContext } from 'react';
import { TaskContext } from '../Context/TaskContext';

const TaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ name: taskName, completed: false });
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="New Task"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
