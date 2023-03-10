const initialState = {
  status: 'All',
  colors: [],
}

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case 'filters/statusFilterChanged': {
      return {
        ...state,
        status: action.payload,
      }
    }
    case 'filters/colorAdded': {
      return {
        ...state,
        coloors: [...state.colors, action.payload],
      }
    }
    case 'filters/colorRemoved': {
      return {
        ...state,
        coloors: state.colors.filter(action.payload),
      }
    }
    default:
      return state
  }
}
