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
        checked={item.ischeck}
        onChange={(e) => {
          isDoneTodo(item.id, e.target.checked);
        }}
      />
      <TodoText
        onClick={() => {
          isDoneTodo(item.id, !item.ischeck);
        }}
        ischeck={item.ischeck.toString()}
      >
        {item.data}
      </TodoText>
      <RemoveTodoButton
        onClick={() => {
          removeTodo(item.id);
        }}
      >
        X
      </RemoveTodoButton>
    </TodoContainer>
  );
};

export default Todo;
const TodoContainer = styled.li`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  width: 100%;
  margin-bottom: 10px;
  align-items: center;
`;

const TodoText = styled.p<StyledProps>`
  text-decoration: ${({ ischeck }) =>
    ischeck === 'true' ? 'line-through' : 'none'};
  width: 80%;
  cursor: pointer;
  text-align: center;
`;

const RemoveTodoButton = styled.button`
  background-color: ${({ theme }) => theme.colors.median};
  color: white;
  border: none;
  border-radius: 5px;
  width: 9%;
  height: 34px;
  font-weight: 600;
  cursor: pointer;
`;
