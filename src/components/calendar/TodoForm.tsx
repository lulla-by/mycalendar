import React, { useState } from 'react';
import styled from 'styled-components';

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
    <TodoFormContainer onSubmit={submitHandler}>
      <TodoInput
        value={todo}
        type="text"
        onChange={changeHandler}
        placeholder="할 일을 입력해주세요"
      />
      <TodoButton type="submit">+</TodoButton>
    </TodoFormContainer>
  );
};

export default TodoForm;

const TodoFormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
`;

const TodoInput = styled.input`
  background-color: lightblue;
  color: #222222;
  width: 90%;
  border: solid #aaaaaa 1px;
  border-radius: 5px;
  padding-left: 10px;
  position: relative;
  background: none;
  outline: ${({ theme }) => `2px solid ${theme.colors.median}`};
`;

const TodoButton = styled.button`
  background-color: ${({ theme }) => theme.colors.median};
  color: white;
  border: none;
  border-radius: 5px;
  width: 9%;
  height: 34px;
  font-weight: 600;
`;
