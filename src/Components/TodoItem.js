import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoItem = (props) => {
  const { task = {}, removeTask, completeTask } = props;
  const { TodoName = '', isCompleted = false } = task;

  return (
    <div className="todo__item" style={{ backgroundColor: `${isCompleted ? 'var(--gray)' : ''}` }}>
      <p className="todo__desc" style={{ textDecoration: `${isCompleted ? 'line-through' : ''}` }}>
        {TodoName}
      </p>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: 50, maxWidth: 50,
      }}
      >
        <input type="checkbox" checked={isCompleted} onChange={() => completeTask(task)} />

        <span role="img" className="todo__icon" onClick={() => removeTask(task)}>

          <DeleteIcon />

        </span>
      </div>
    </div>
  );
};
export default TodoItem;
