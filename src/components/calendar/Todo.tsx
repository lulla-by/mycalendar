import styled from 'styled-components';

interface TodoProps {
  item: {
    data: string;
    id: number;
    isCheck: boolean;
  };
  removeTodo: (id: number) => void;
  isDoneTodo: (id: number, isDone: boolean) => void;
}

interface StyledProps {
  isChecked: boolean;
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
      <TodoText isChecked={item.isCheck}>{item.data}</TodoText>
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
  text-decoration: ${({ isChecked }) => (isChecked ? 'line-through' : 'nu')};
`;
