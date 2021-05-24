import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Button from './Button/Button';
import './Todo.css';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('tasks'));
    if (data) {
      setTasks(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const clear = () => {
    setTasks([]);
  };

  const removeTask = (taskToBeDeleted) => {
    setTasks(tasks.filter((task) => taskToBeDeleted !== task));
  };

  const completeTask = (taskToBeCompleted) => {
    const tmp = tasks.map((task) => {
      if (taskToBeCompleted === task) task.isCompleted = !task.isCompleted;
      return task;
    });
    setTasks([...tmp]);
  };
  return (
    <div className="todo">
      <Button value="Clear" color="secondary" onClick={clear}>Clear</Button>
      <div style={{ marginTop: 50 }}>
        <TodoForm setTasks={setTasks} />
        <TodoList tasks={tasks} removeTask={removeTask} completeTask={completeTask} />
      </div>
    </div>
  );
};
export default Todo;
