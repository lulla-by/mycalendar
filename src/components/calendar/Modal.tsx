import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  onClose: () => void;
  data: string;
}
const Modal = ({ onClose, data }: ModalProps) => {
    console.log(data);
    
  return (
    <ModalContainer>
      <ModalContent>
        <form action="onSubmint">
          <input type="text" />
          <button>할 일 추가</button>
        </form>
        <button onClick={onClose}>닫기</button>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 1rem;
  width: 400px;
  height: 500px;
`;
