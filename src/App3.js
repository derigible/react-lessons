import './App.css'
import { useTodos } from './hooks/useTodos'

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
  const [todos, setTodos] = useTodos({})

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTodoObj = newTodo(e.target['todo'].value)
    setTodos({ ...todos, [newTodoObj.id]: newTodoObj })
  }
  const handleClick = (todo) => {
    setTodos({ ...todo, checked: !todo.checked })
  }

  return (
    <div className="App">
      {Object.values(todos).map((todo) => {
        return (
          <div key={todo.id}>
            <p>
              <h2>{todo.text}</h2>
            </p>
            <div>
              <Checkbox
                checked={todo.checked}
                updateChecked={() => handleClick(todo)}
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

function Checkbox({ checked, updateChecked }) {
  return <input type="checkbox" checked={checked} onClick={updateChecked} />
}

export default App
