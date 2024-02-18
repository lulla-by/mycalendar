import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoForm from '../calendar/TodoForm';
import TodoList from '../calendar/TodoList';
interface List {
  id: number;
  data: string;
  ischeck: boolean;
}

const MemoBoard = () => {
  const [list, setList] = useState<List[]>([]);

  const updateList = (data: List[]) => {
    setList(data);
    if (data.length === 0) {
      localStorage.removeItem('할일');
    } else {
      localStorage.setItem('할일', JSON.stringify(data));
    }
  };

  const getData = (todo: string) => {
    const newList: List = {
      id: generateUniqueId(),
      data: todo,
      ischeck: false,
    };
    if (list !== null) {
      updateList([...list, newList]);
    } else {
      updateList([newList]);
    }
  };

  const removeTodo = (id: number) => {
    const filteredData = list.filter((item) => item.id !== id);
    updateList(filteredData);
  };

  const isDoneTodo = (id: number, isDone: boolean) => {
    const newData = list.map((item) =>
      item.id === id ? { ...item, ischeck: isDone } : item
    );
    updateList(newData);
  };
  const generateUniqueId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const fetchData = () => {
    const data = localStorage.getItem('할일');

    if (data !== null) {
      const result = JSON.parse(data);

      setList(result);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <Container>
      <ListContainer>
        {list !== null && (
          <TodoList
          height={100}
            list={list}
            removeTodo={removeTodo}
            isDoneTodo={isDoneTodo}
          />
        )}
      </ListContainer>
      <TodoForm onSubmit={getData} placeholder='목표를 작성해 주세요'/>
    </Container>
  );
};

export default MemoBoard;

const Container = styled.div`
  width: 350px;
  height: 600px;
  border-radius: 5px 0 0 0;
  background-color: ${({ theme }) => theme.colors.base};
`;

const ListContainer = styled.div`
  height: 90%;
  padding: 20px 20px 0 20px;
`;
