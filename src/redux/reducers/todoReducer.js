const initialState = []

let count = 1

function nextTodoId() {
  count = count + 1
  return count
}

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      return [
        ...state,
        {
          id: nextTodoId(),
          text: action.payload,
          completed: false,
        },
      ]
    }
    case 'todos/todoToggled': {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    }
    case 'todos/todoRemoved': {
      return state.filter((todo) => todo.id !== action.payload)
    }
    default:
      return state
  }
}
