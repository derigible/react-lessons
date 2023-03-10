import { useState } from 'react'
import './App.css'

let count = 1

function newTodo(text) {
  count += 1
  return {
    id: count,
    text,
    checked: false,
  }
}

function App() {
  const [todos, setTodos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodos([...todos, newTodo(e.target['todo'].value)])
  }
  const handleClick = (todo) => {
    setTodos([...todos, { ...todo, checked: !todo.checked }])
  }

  return (
    <div className="App">
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <p>
              <h2>{todo.text}</h2>
            </p>
            <div>
              <input
                type="checkbox"
                checked={todo.checked}
                onClick={() => handleClick(todo)}
              />
            </div>
          </div>
        )
      })}
      <form onSubmit={handleSubmit}>
        <input name="todo" type="text" />
        <button type="submit">Add New</button>
      </form>
    </div>
  )
}

export default App
