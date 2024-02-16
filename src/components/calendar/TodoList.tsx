import Todo from './Todo';
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
  background-color: lightgreen;
`;
