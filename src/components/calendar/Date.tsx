import { useContext } from 'react';
import { DateContext } from '../../context/DateContext';
import styled from 'styled-components';
import DateCard from './DateCard';

const getMonthDateArray = (
  start: number,
  end: number,
  state: 'prev' | 'current' | 'next',
  year: number,
  month: number
) => {
  const monthArray = [];
  for (let i = start; i <= end; i++) {
    monthArray.push({ state, date: i, year, month });
  }
  return monthArray;
};

const DateRender = () => {
  const { propsMonth: month, propsYear: year } = useContext(DateContext);

  const lastDateOfPreviousMonth = new Date(year, month - 1, 0).getDate();
  const lastDateOfCurrentMonth = new Date(year, month, 0).getDate();
  const firstDayOfCurrentMonth = new Date(year, month - 1, 1).getDay();

  const prevMonthDateArray = getMonthDateArray(
    lastDateOfPreviousMonth - firstDayOfCurrentMonth + 1,
    lastDateOfPreviousMonth,
    'prev',
    year,
    month - 1
  );

  const currentMonthDateArray = getMonthDateArray(
    1,
    lastDateOfCurrentMonth,
    'current',
    year,
    month
  );

  const nextMonthDateArray = getMonthDateArray(
    1,
    7 - ((prevMonthDateArray.length + currentMonthDateArray.length) % 7),
    'next',
    year,
    month + 1
  );

  const fullDateArray = [...prevMonthDateArray, ...currentMonthDateArray, ...nextMonthDateArray];
  return (
    <Container>
      {fullDateArray.map((date) => (
        <DateCard
          key={`${date.year}/${date.month}/${date.date}`}
          props={date}
        />
      ))}
    </Container>
  );
};

export default DateRender;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-auto-rows: 1fr;
  height: 95%;
  gap: 2px;
`;