import styled from 'styled-components';

interface TodoProps {
  item: {
    data: string;
    id: number;
  };
  removeTodo: (id: number) => void;
}

const Todo = ({ item, removeTodo }: TodoProps) => {
  return (
    <TodoContainer>
      <TodoText>{item.data}</TodoText>
      <button
        onClick={() => {
          removeTodo(item.id);
        }}
      >
        삭제
      </button>
    </TodoContainer>
  );
};

export default Todo;
const TodoContainer = styled.li`
  background-color: lightblue;
  text-decoration: none;
`;

const TodoText = styled.p`
`;
