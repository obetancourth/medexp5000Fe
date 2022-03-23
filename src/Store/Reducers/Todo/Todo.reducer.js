const defaultTodo = {
  list: {},
  lastId: 0
}


export const TodoReducer =( state=defaultTodo, action ) => {
  const {type, payload} = action;
  switch (type) {
    case 'ADD_TODO_MESSAGE':
      const id = `todo_${(state.lastId++)}`
      return {
        lastId: state.lastId++,
        list: {
          ...state.list,
          [id]: {msg: payload.msg, done:false}
        }
      }
    case 'TOGGGLE_TODO_MESSAGE':
      const newList = {...state.list};
      console.log('reducer', newList);
      newList[payload.id].done = !newList[payload.id].done;
      return {
        ...state,
        list: newList
      }
    default:
      return state;
  }
}
