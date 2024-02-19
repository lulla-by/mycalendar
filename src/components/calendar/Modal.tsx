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

const Modal = ({ onClose, updateList, list }: ModalProps) => {
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
    <Wrapper>
      <ModalContainer onClick={onClose}></ModalContainer>
      <ModalContent>
        <TodoForm onSubmit={handleFormSubmit} placeholder="할 일을 추가해 주세요"/>
        {list !== null && (
          <TodoList
          height={85}
            list={list}
            removeTodo={removeTodo}
            isDoneTodo={isDoneTodo}
          />
        )}
        {list === null &&<InforText>작성한 TODO가 없어요!</InforText>}
      </ModalContent>
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
`;
const ModalContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(0.1rem);
  cursor: pointer;
`;

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.base};
  padding: 1rem;
  width: 400px;
  height: 500px;
  border-radius: 5px;
  position: absolute;
  font-family: "Pretendard-Regular" ;
`;


const InforText = styled.p`
  text-align: center;
  color:  ${({ theme }) => theme.colors.median};
  font-weight: 600;
  margin-top: 20px;
`
