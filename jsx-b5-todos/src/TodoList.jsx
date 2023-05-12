import React from 'react'
import TodoItem from './TodoItem';
/**
 * @property {import('./TodoItem').Todo[]} todos
 */
export default function TodoList({todos}) {
  return (
    <div className='todo-list'>
    {todos.map((todo) =>(<TodoItem key={todo.id} todo={todo} />
    ))}
    </div>
  );
}
TodoList,propTypes ={
    todos:TodoListObject,
}