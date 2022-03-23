import { useDispatch, useSelector } from 'react-redux';

import Todos from './Todos';

const TodoPage = ()=>{
  const todos = useSelector( ({todos})=>{return todos;});
  const dispatch = useDispatch();
  
  const onAddTodo = (todoMessage)=>{
    const action = {
      type: 'ADD_TODO_MESSAGE',
      payload: {
        msg: todoMessage
      }
    }
    dispatch(action);
  };
  const onToggleDone = (idTodo)=>{
    console.log('onToggleDone', idTodo);
    const toggleDone = {
      type:'TOGGGLE_TODO_MESSAGE',
      payload:{
        id:idTodo
      }
    };
    dispatch(toggleDone);
  };

  return(
    <Todos
      list={Object.entries(todos.list)}
      onAddTodo={onAddTodo}
      onToggleDone={onToggleDone}
    />
  )
}

export default TodoPage;
