import { useState } from 'react'

const todos = {}

export function useTodos(initialState) {
  todos = initialState

  const [stateTodos, setTodos] = useState(todos)

  const handleTodosSet = (newTodo) => {
    setTodos((prevTodos) => ({ ...prevTodos, [newTodo.id]: newTodo }))
  }

  return [stateTodos, handleTodosSet]
}
