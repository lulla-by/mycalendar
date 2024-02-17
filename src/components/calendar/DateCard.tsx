import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ModalPortal from './ModalPortal';
import Modal from './Modal';

interface DateCard {
  props: {
    date: number;
    state: string;
    year: number;
    month: number;
  };
}

interface List {
  id: number;
  data: string;
  ischeck: boolean;
}

type StyledProps = Pick<DateCard, 'props'>;

interface StyledProps2 extends StyledProps {
  istoday: string;
}
const DateCard = ({ props }: DateCard) => {
  const [list, setList] = useState<List[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const [modal, setModal] = React.useState(false);

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleOpenModal = () => {
    setModal(true);
  };

  const updateList = (data:List[]) =>{
    setList(data)
    localStorage.setItem(`${props.year}${props.month}${props.date}`, JSON.stringify(data));
  }
  // 로컬스토리지에서 데이터 패칭
  const fetchData = () => {
    const date = `${props.year}${props.month}${props.date}`;

    const data = localStorage.getItem(date) as string;
    const result = JSON.parse(data);

    setList(result);
  };

  const propsNow = new Date(props.year, props.month - 1, props.date);
  const now = new Date();
  const istoday =
    propsNow.getFullYear() === now.getFullYear() &&
    propsNow.getMonth() === now.getMonth() &&
    propsNow.getDate() === now.getDate();
  return (
    <>
      <CardContainer istoday={istoday.toString()} props={props} onClick={handleOpenModal}>
        <DateText props={props}>{props.date}</DateText>
        {list !== null ? (
          <ListContainer>
            {list.map((item) => (
              <div>{item.data}</div>
            ))}
          </ListContainer>
        ) : (
          <></>
        )}
      </CardContainer>

      {modal && (
        <ModalPortal>
          <Modal
            onClose={handleCloseModal}
            date={`${props.year}${props.month}${props.date}`}
            list={list}
            updateList={updateList}
          />
        </ModalPortal>
      )}
    </>
  );
};

export default DateCard;

const CardContainer = styled.div<StyledProps2>`
  height: 100%;
  display: inline-block;
  background-color: ${({ props, theme }) =>
    props.state === 'prev' || props.state === 'next'
      ? '#f1f3f5'
      : theme.colors.light};
  border: 1px solid #e9ecef;

  color: ${({ props, theme }) =>
    props.state === 'prev' || props.state === 'next'
      ? '#868e96'
      : theme.colors.main};
  border: ${({ istoday, theme }) =>
    istoday ==="true" ? `3px solid ${theme.colors.main}` : null};
  border-radius: ${({ istoday }) => (istoday ==="true" ? `5px` : null)};
  box-shadow: 1px 1px 2px 1px #ced4da;
  border-radius: 5px;
  cursor: pointer;
`;

const DateText = styled.p<StyledProps>`
  display: block;
  background-color: ${({ theme, props }) =>
    props.state === 'prev' || props.state === 'next'
      ? null
      : theme.colors.median};
  color: ${({ theme, props }) =>
    props.state === 'prev' || props.state === 'next'
      ? '#ced4da'
      : theme.colors.base};
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-weight: 600;
  border-radius: 5px 0 5px 0;
`;

const ListContainer = styled.ul`
  display: block
`