import { useState } from "react";
import "./form.css";
import "./App.css";
export default function App() {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const key = e.target.name;
    const newValue = e.target.value;

    setFormState((previous) => ({
      ...previous,
      [key]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <div className="App">
      <form action="" className="form" onSubmit={handleSubmit}>
        <h2 className="form-heading">Login</h2>

        <div className="form-field">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            className="form-control"
            type="text"
            name="username"
            id="username"
            autoComplete="off"
            value={formState.username}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            value={formState.password}
            onChange={handleChange}
          />
        </div>

        <button className="button">Login</button>
      </form>
    </div>
  );
}


// Quản lý trạng thái của Form
// 1. Uncontrolled Form, có nghĩa là trạng thái của Form
// không được kiểm soát bởi React

// 2. Controlled Form, có nghĩa là trạng thái của Form
// được kiểm soát bằng React
// value (tùy thuộc vào element)
// onChange (cập nhật lại trạng thái với mỗi hành động nhập)

// Các sự kiện với Form
// 1. Sự kiện onChange hoạt động tương tự oninput
// 2. Các eventObject => SyntheticEvent
