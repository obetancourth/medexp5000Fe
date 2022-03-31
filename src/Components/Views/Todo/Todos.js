import { useState } from 'react';

import Page from '../../UX/Page/Page';
import Nav from '../../UX/Nav/Nav';
import Input from '../../UX/Forms/Input';
import { PrimaryButton } from '../../UX/Forms/Button';
const Todos = ({
  list,
  onAddTodo,
  onToggleDone
})=>{
  return (
    <Page header={(<h1>Todo List</h1>)} footer={<Nav />}>
      <TodoAddForm addToDo={onAddTodo}></TodoAddForm>
      <TodoFormList todoFormList={list} toggleTodo={onToggleDone}></TodoFormList>
    </Page>
  );
}

const TodoAddForm = ({addToDo})=>{
  const [todoMessage, setTodoMessage] = useState();
  const onChange = (e)=>{
    const { value } = e.target;
    setTodoMessage(value);
  }
  const onAddClick = (e)=>{
    e.preventDefault();
    e.stopPropagation();
    addToDo(todoMessage);
    setTodoMessage('');
  }
  return (
    <>
      <Input
        type="text"
        name="txtTodoText"
        placeholder="A Todo Text Message"
        label="A Todo Text Message"
        onChange={onChange}
        value={todoMessage}
      />
      <PrimaryButton onClick={onAddClick}>Add</PrimaryButton>
    </>
  );
}

const TodoFormList = ({ todoFormList, toggleTodo})=>{
  console.log(todoFormList);
  const formItems = (todoFormList || []).map(([key, {msg, done}], i) => {
    console.log('TodoFormListMap', [key, { msg, done }]);
    return ( <TodoFormListItem key={key} id={key} onToggleDone={toggleTodo} done={done}>{msg}</TodoFormListItem>);
  });
  return (
    <ul>
      {formItems}
    </ul>
  );
}

const TodoFormListItem = ({onToggleDone, id, done, children})=> {
  const style = {textDecoration:((done)?"line-through":"none")}
  console.log('TodoFormListItem', style);
  return (
    <li onClick={(e)=>{
      e.preventDefault();
      e.stopPropagation();
      onToggleDone(id);
    }}
      style={style}
    >
      {children}
    </li>
  );
}
export default Todos;
