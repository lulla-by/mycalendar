import Todo from './TodoItem';
import styled from 'styled-components';

interface List {
  id: number;
  data: string;
  ischeck:boolean;
}
interface TodoListProps {
  list: List[];
  removeTodo: (id:number) => void;
  isDoneTodo:(id:number,isDone:boolean) => void;
}

const TodoList = ({ list,removeTodo,isDoneTodo }: TodoListProps) => {
  return (
    <TodoListContainer>
      {list.map((item) => (
        <Todo key={item.id} item={item} removeTodo={removeTodo} isDoneTodo={isDoneTodo}/>
      ))}
    </TodoListContainer>
  );
};

export default TodoList;

const TodoListContainer = styled.ul`
  text-decoration: none;
  padding: 10px;
  width: 100%;
  overflow: scroll;
overflow-x:hidden;
height: 85%;

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
