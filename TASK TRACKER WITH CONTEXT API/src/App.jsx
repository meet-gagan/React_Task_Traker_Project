import React from 'react';
import { TaskProvider } from './Context/TaskContext';
import Header from './Components/Header';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';
import './App.css';

const App = () => {
  return (
    <TaskProvider>
      <div className="App">
        <Header />
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
