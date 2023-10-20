import './App.css';
import { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id : 1,
      text : '리액트 TodoList 만들기 실습',
      checked : true,
    },
    {
      id : 2,
      text : '프랑스어 단어 30개 암기',
      checked : false,
    }
  ]);

  const nextId = useRef(3);
  //함수 호출 시 text라는 전달인자를 받는다.
  const onInsert = useCallback((text)=>{
    const todo = {
      id : nextId.current,
      text,
      checked : false
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  },[todos]);

  //게시한 행 삭제
  const onRemove = useCallback((id)=>{
    setTodos(todos.filter(todo=>todo.id !== id));
  },[todos])

  //체크박스 설정
  const onToggle = useCallback(
    id=>setTodos(todos.map( todo => id === todo.id ? { ...todo, checked : !todo.checked } : todo))
  ,[todos])

  return (
    <div className='App'>
      <div className='header'>✍️ Todo List</div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}></TodoInsert>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}></TodoList>
      </TodoTemplate>
    </div>
  );
}

export default App;
