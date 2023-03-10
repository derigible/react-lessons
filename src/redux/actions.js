export function removeTodo(id) {
  return { type: 'todos/todoRemoved', payload: id }
}

// ... an action for each action in the app :|
