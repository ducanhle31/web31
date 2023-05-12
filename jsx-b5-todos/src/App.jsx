import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'

function App() {
  const [count, setCount] = useState(0)
const [todos, setTodos]= useState([]);
useEffect(()=>{
  getTodos().then(setTodos);
})
  return (
    <div id='app'>
<TodoList todos={todos} />

    </div>
  )
}

export default App
