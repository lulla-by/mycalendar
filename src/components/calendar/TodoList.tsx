import Todo from './Todo';
import styled from 'styled-components';

interface List {
  id: number;
  data: string;
}
interface TodoListProps {
  list: List[];
  removeTodo: (id:number) => void;
}

const TodoList = ({ list,removeTodo }: TodoListProps) => {
  return (
    <TodoListContainer>
      {list.map((item) => (
        <Todo key={item.id} item={item} removeTodo={removeTodo}/>
      ))}
    </TodoListContainer>
  );
};

export default TodoList;

const TodoListContainer = styled.ul`
  text-decoration: none;
  background-color: lightgreen;
`;
