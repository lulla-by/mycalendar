import React from 'react';
import styled from 'styled-components';

interface DateCard {
  date: number;
}
const DateCard = ({date}: DateCard) => {
  return <CardContainer>{date}</CardContainer>;
};

export default DateCard;

const CardContainer = styled.div`
  height: 100%;
  display: inline-block;
  background-color:${({ theme }) => theme.colors.light};
  border: 1px solid black;
`;
