import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ModalPortal from './ModalPortal';
import Modal from './Modal';
import { DateItem, ListItem } from '../../types/types';

interface DateCard {
  props: DateItem;
}

type DateCardProps = Pick<DateCard, 'props'>;

type CheckedProps = Pick<ListItem, `ischeck`>;

interface DateCardWithIsTodayProps extends DateCardProps {
  istoday: string;
}
const DateCard = ({ props }: DateCard) => {
  const [list, setList] = useState<ListItem[]>([]);

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

  const updateList = (data: ListItem[]) => {
    setList(data);
    const key = `${props.year}${props.month}${props.date}`;
    if (data.length === 0) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(data));
    }
  };
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
      <CardContainer
        istoday={istoday ? '1' : '0'}
        props={props}
        onClick={handleOpenModal}
      >
        <DateText props={props}>{props.date}</DateText>
        {list !== null && (
          <ListContainer>
            {list.map((item) => (
              <TodoText ischeck={item.ischeck} key={item.id}>
                {item.data}
              </TodoText>
            ))}
          </ListContainer>
        )}
        {list !== null && list.length > 3 && <div>↓</div>}
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

const CardContainer = styled.div<DateCardWithIsTodayProps>`
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
    istoday === '1' ? `3px solid ${theme.colors.main}` : 'none'};
  border-radius: ${({ istoday }) => (istoday === '1' ? '5px' : 'none')};
  box-shadow: 1px 1px 2px 1px #ced4da;
  border-radius: 5px;
  cursor: pointer;
`;

const DateText = styled.p<DateCardProps>`
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
  display: block;
  overflow: hidden;
  height: 60px;
  width: calc(100% - (30px));
  margin: auto;
`;

const TodoText = styled.p<CheckedProps>`
  text-decoration: ${({ ischeck }) =>
    ischeck === true ? 'line-through' : 'none'};
  height: 20px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
