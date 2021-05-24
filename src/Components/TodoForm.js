import React, { useState } from 'react';
import Input from './Input/Input';
import Button from './Button/Button';

const TodoForm = (props) => {
  const [task, setTask] = useState({});
  const [errors, setErrors] = useState({});
  const onChange = (e) => {
    setTask({
      [e.target.name]: e.target.value,
      isCompleted: false,
    });
  };
  const addTask = (e) => {
    e.preventDefault();
    setErrors({});
    if (!task.TodoName) {
      const name = { message: '* name is required' };
      setErrors((data) => ({ ...data, name }));
    } else {
      props.setTasks((tasks) => [{ ...task, id: new Date().getUTCMilliseconds() }, ...tasks]);
    }
  };
  return (
  <div>
      <form className="todo__form" onSubmit={(e) => addTask(e)}>
        <Input type="text" placeholder="Task name" name="TodoName" onChange={onChange} />
        <Button type="submit" value="Sumbit" color="primary" />
      </form>
      <span style={{ color: 'red' }}>{errors.name && errors.name.message}</span>
      </div>
  );
};
export default TodoForm;
