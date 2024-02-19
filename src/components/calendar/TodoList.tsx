import { List } from '../../types/types';
import Todo from './TodoItem';
import styled from 'styled-components';

interface TodoListProps {
  list: List[];
  removeTodo: (id:number) => void;
  isDoneTodo:(id:number,isDone:boolean) => void;
  height:number
}

type StyledProps = Pick<TodoListProps,"height">

const TodoList = ({ list,removeTodo,isDoneTodo,height }: TodoListProps) => {
  return (
    <TodoListContainer height={height}>
      {list.map((item) => (
        <Todo key={item.id} item={item} removeTodo={removeTodo} isDoneTodo={isDoneTodo}/>
      ))}
    </TodoListContainer>
  );
};

export default TodoList;

const TodoListContainer = styled.ul<StyledProps>`
  text-decoration: none;
  padding: 10px;
  width: 100%;
  overflow: scroll;
overflow-x:hidden;
height:  ${({ height }) => `${height}%`};

&::-webkit-scrollbar {
    width: 8px;
}

&::-webkit-scrollbar-thumb {
    height: 30%;
    background:${({ theme }) => theme.colors.median}; 
    border-radius: 10px;
}

&::-webkit-scrollbar-track {
    background:${({ theme }) => theme.colors.light};
}
`;
