import "./App.css";
import { useCounter } from "./features/counter/counter.slice";
import { useTodo } from "./features/todo/Todo.slice";

export default function App() {
  const { counter, increment, decrement } = useCounter();
  const { todos, activeNumber, create, clear, remove, mark, filterBy } =
    useTodo();

  const handleCreateSubmit = (e) => {
    e.preventDefault();

    const title = e.target.elements.title.value;

    create(title);

    e.target.elements.title.value = "";
  };

  const handleFilterChange = (e) => {
    const filter = e.target.value;

    filterBy(filter);
  };

  return (
    <div className="App">
      <h1>Redux</h1>

      <div>
        <h2>CounterApp</h2>
        <button onClick={decrement}>-</button>
        <span>{counter.value}</span>
        <button onClick={increment}>+</button>
      </div>

      <div>
        <h2>TodoApp</h2>

        <form onSubmit={handleCreateSubmit}>
          <input name="title" />
          <button>Create</button>
        </form>

        <form onChange={handleFilterChange}>
          <span>Filter by</span>
          <label>
            <input type="radio" name="filter" value="all" defaultChecked />
            All
          </label>
          <label>
            <input type="radio" name="filter" value="active" />
            Active
          </label>
          <label>
            <input type="radio" name="filter" value="inactive" />
            Inactive
          </label>
        </form>

        <ul>
          {todos.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => mark(item.id)}
              />
              {item.title}
              <button onClick={() => remove(item.id)}>Delete</button>
            </li>
          ))}
        </ul>

        <div>
          <span>Active todo: {activeNumber}</span>
          <button onClick={clear}>Clear all</button>
        </div>
      </div>
    </div>
  );
}
