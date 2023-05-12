import React from 'react'

export default function TodoItem() {
  return (
    <div className='todo-item'>
<input type="checkbox" name='' id='{todo.id}'/>
<label htmlFor={todos.id}>{todos.title}</label>
  <button>Edit</button>
  <button> Delete</button>
    </div>
  );
}
const TodoItemObject = PropTypes.exact({
    id: PropTypes.string,
    title: PropTypes.string,
    status: PropTypes.bool,
});
TodoItem.propTypes={
    todo: TodoItemObject,
};