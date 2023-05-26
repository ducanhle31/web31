import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    filter: "all",
    todos: [
      {
        id: Date.now(),
        title: "Learn Redux",
        completed: false,
      },
    ],
  },
  reducers: {
    create(state, action) {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };

      state.todos.push(newTodo);
    },
    remove(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
    },
    clear(state, action) {
      state.todos = [];
    },
    filter(state, action) {
      state.filter = action.payload.filter;
    },
    edit(state, action) {},
    mark(state, action) {
      const todo = state.todos.find((item) => item.id === action.payload.id);

      todo.completed = !todo.completed;
    },
  },
});

const todoReducer = todoSlice.reducer;

export default todoReducer;
export const todoActions = todoSlice.actions;

export const useTodo = () => {
  const dispatch = useDispatch();
  const { filter, todos } = useSelector((state) => state.todo);

  const filteredTodos =
    filter === "all"
      ? todos
      : filter === "active"
      ? todos.filter((item) => !item.completed)
      : todos.filter((item) => item.completed);

  return {
    filter,
    todos: filteredTodos,
    activeNumber: todos.reduce(
      (total, item) => (total += Number(!item.completed)),
      0
    ),
    create(title) {
      dispatch(todoActions.create({ title }));
    },
    clear() {
      dispatch(todoActions.clear());
    },
    remove(id) {
      dispatch(todoActions.remove({ id }));
    },
    mark(id) {
      dispatch(todoActions.mark({ id }));
    },
    filterBy(filter) {
      dispatch(todoActions.filter({ filter }));
    },
  };
};
