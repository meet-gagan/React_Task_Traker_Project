import React, { createContext, useState } from 'react';

// Create Context
export const TaskContext = createContext();

// Create Provider
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', completed: false },
    { id: 2, name: 'Task 2', completed: true },
  ]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), ...task }]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTaskCompletion, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
