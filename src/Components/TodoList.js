import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const { tasks = [], removeTask, completeTask } = props;
  return (
    <div>
      <ul className="todo__list">
        {tasks.length > 0 && tasks.map((task) => (
          <li key={task.id}>
            <TodoItem
              task={task}
              removeTask={removeTask}
              completeTask={completeTask}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
