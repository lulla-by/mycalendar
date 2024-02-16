import React, { useState } from 'react';

interface FormProps {
  onSubmit: (todo: string) => void;
}

const TodoForm = ({ onSubmit }: FormProps) => {
  const [todo, setTodo] = useState('');

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.trim().length === 0) {
      setTodo('');
      alert('할 일을 입력해주세요');
      return;
    }
    onSubmit(todo);
    setTodo('');
  };

  return (
    <form onSubmit={submitHandler}>
      <input value={todo} type="text" onChange={changeHandler} />
      <button type="submit">할 일 추가</button>
    </form>
  );
};

export default TodoForm;
