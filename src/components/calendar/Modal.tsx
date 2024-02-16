import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface ModalProps {
  onClose: () => void;
  date: string;
}

interface List {
  id: number;
  data: string;
}

const Modal = ({ onClose, date }: ModalProps) => {
  const [todo, setTodo] = useState('');
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

  //랜덤 아이디 생성
  const generateUniqueId = () => {
    return Math.floor(Math.random() * 1000000);
  };


  // 변화 감지
  const changeHandeler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  // 제출
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(todo);
    setTodo('');
  };


  // 로컬스토리지에 추가
  const addTodo = (newTodo: string) => {
    const updatedList: List[] = [
      ...list,
      { id: generateUniqueId(), data: newTodo },
    ];
    setList(updatedList);
    localStorage.setItem(date, JSON.stringify(updatedList));
  };



  return (
    <ModalContainer>
      <ModalContent>
        {list.length !== 0 ? (
          <div>
            {list.map((item) => (
              <div key={item.id}>{item.data}</div>
            ))}
          </div>
        ) : (
          <div>할일이 없습니다</div>
        )}
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            value={todo}
            type="text"
            onChange={(e) => {
              changeHandeler(e);
            }}
          />
          <button type="submit">할 일 추가</button>
        </form>
        <button onClick={onClose}>닫기</button>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 1rem;
  width: 400px;
  height: 500px;
`;
