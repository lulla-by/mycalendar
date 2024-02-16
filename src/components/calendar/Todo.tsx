import styled from 'styled-components';

interface TodoProps {
  item: {
    data: string;
    id: number;
    ischeck: boolean;
  };
  removeTodo: (id: number) => void;
  isDoneTodo: (id: number, isDone: boolean) => void;
}

interface StyledProps {
  ischeck: string;
}
const Todo = ({ item, removeTodo, isDoneTodo }: TodoProps) => {
  return (
    <TodoContainer>
      <input
        type="checkbox"
        onChange={(e) => {
          isDoneTodo(item.id, e.target.checked);
        }}
      />
      <TodoText ischeck={item.ischeck.toString()}>{item.data}</TodoText>
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
  display: flex;
  background-color: lightblue;
  text-decoration: none;
`;

const TodoText = styled.p<StyledProps>`
  text-decoration: ${({ ischeck }) => (ischeck ==="true"? 'line-through' : 'none')};
`;
