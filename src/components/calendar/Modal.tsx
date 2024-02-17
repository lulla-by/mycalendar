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

const Modal = ({ onClose, date, updateList, list }: ModalProps) => {
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
    localStorage.setItem(date, JSON.stringify(filteredData));
  };

  const isDoneTodo = (id: number, isDone: boolean) => {
    const newData = list.map((item) =>
      item.id === id ? { ...item, ischeck: isDone } : item
    );
    updateList(newData);
    localStorage.setItem(date, JSON.stringify(newData));
  };

  return (
    <ModalContainer>
      <ModalContent>
        {list !== null ? (
          <TodoList
            list={list}
            removeTodo={removeTodo}
            isDoneTodo={isDoneTodo}
          />
        ) : (
          <div>할 일이 없습니다.</div>
        )}
        <TodoForm onSubmit={handleFormSubmit} />
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
  background: white;
  padding: 1rem;
  width: 400px;
  height: 500px;
  border-radius: 5px;
`;
