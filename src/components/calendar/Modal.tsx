import styled from 'styled-components';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

interface List {
  id: number;
  data: string;
  ischeck: boolean;
}

interface ModalProps {
  onClose: () => void;
  date: string;
  list: List[];
  updateList: (data: List[]) => void;
}

interface List {
  id: number;
  data: string;
  ischeck: boolean;
}

const Modal = ({ onClose,updateList, list }: ModalProps) => {
  // //랜덤 아이디 생성
  const generateUniqueId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const handleFormSubmit = (todo: string) => {
    addTodo(todo);
  };

  // 로컬스토리지에 추가
  const addTodo = (newTodo: string) => {
    const newList: List = {
      id: generateUniqueId(),
      data: newTodo,
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

  return (
    <ModalContainer>
      <ModalContent>
        <TodoForm onSubmit={handleFormSubmit} />
        {list !== null ? (
          <TodoList
            list={list}
            removeTodo={removeTodo}
            isDoneTodo={isDoneTodo}
          />
        ) : (
          <div>할 일이 없습니다.</div>
        )}
        <button onClick={onClose}>닫기</button>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(0.1rem);
`;

const ModalContent = styled.div`
  background-color:${({ theme }) => theme.colors.base} ;
  padding: 1rem;
  width: 400px;
  height: 500px;
  border-radius: 5px;
  
overflow: scroll;
overflow-x:hidden;

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
