import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

interface ModalProps {
  onClose: () => void;
  date: string;
}

interface List {
  id: number;
  data: string;
  isCheck: boolean;
}

const Modal = ({ onClose, date }: ModalProps) => {
  const [list, setList] = useState<List[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  // 로컬스토리지에서 데이터 패칭
  const fetchData = () => {
    const data = localStorage.getItem(date);
    let result: List[] = [];
    if (data !== null) {
      result = JSON.parse(data);
      if (Array.isArray(result)) {
        setList(result);
      }
    }
    return result;
  };

  // //랜덤 아이디 생성
  const generateUniqueId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const handleFormSubmit = (todo: string) => {
    addTodo(todo);
  };

  // 로컬스토리지에 추가
  const addTodo = (newTodo: string) => {
    const updatedList: List[] = [
      ...list,
      { id: generateUniqueId(), data: newTodo, isCheck: false },
    ];
    setList(updatedList);
    localStorage.setItem(date, JSON.stringify(updatedList));
  };

  const removeTodo = (id: number) => {
    const filteredData = list.filter((item) => item.id !== id);
    setList(filteredData);
    localStorage.setItem(date, JSON.stringify(filteredData));
  };

  const isDoneTodo = (id: number, isDone: boolean) => {
    const newData = list.map((item) =>
      item.id === id ? { ...item, isCheck: isDone } : item
    );
    setList(newData);
    localStorage.setItem(date, JSON.stringify(newData));
  };

  return (
    <ModalContainer>
      <ModalContent>
        {list.length !== 0 ? (
          <TodoList
            list={list}
            removeTodo={removeTodo}
            isDoneTodo={isDoneTodo}
          />
        ) : (
          <div>할 일이 없습니다.</div>
        )}
        <TodoForm onSubmit={handleFormSubmit} />
        <button onClick={onClose}>닫기</button>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(0.1rem);
`;

const ModalContent = styled.div`
  background: white;
  padding: 1rem;
  width: 400px;
  height: 500px;
  border-radius: 5px;
`;
