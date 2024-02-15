import { useContext } from 'react';
import { DateContext } from '../../context/DateContext';
import styled from 'styled-components';
import DateCard from './DateCard';

interface MonthDataObject {
  state: string;
  date: number;
  year: number;
  month: number;
}

const DateRender = () => {
  const { propsMonth: month, propsYear: year } = useContext(DateContext);

  // 이번달 정보
  const currentMonthArray: MonthDataObject[] = [];
  // 이번달 시작일
  const currentMonthLast = new Date(year, month, 0);
  const currentMonthLastDate = currentMonthLast.getDate();

  // 이번달 마지막일
  const currentMonthFirst = new Date(year, month - 1, 1);
  const currentMonthFirstDate = currentMonthFirst.getDay();

  // 이전달 정보
  const prevMonthArray: MonthDataObject[] = [];
  // 이전달 마지막일
  const previousMonthLast = new Date(year, month - 1, 0);
  const previousMonthLastDate = previousMonthLast.getDate();
  const previousMonthLastYear = previousMonthLast.getFullYear();
  const previousMonthLastMonth = previousMonthLast.getMonth()+1;
  
  
  
  // 다음달 정보
  const nextMonthLast = new Date(year, month + 1, 0);
  const nextMonthLastYear = nextMonthLast.getFullYear();
  const nextMonthLastMonth = nextMonthLast.getMonth()+1;
  
  const today = new Date().getDate();

  for (
    let i = previousMonthLastDate - currentMonthFirstDate + 1;
    i <= previousMonthLastDate;
    i++
  ) {
    prevMonthArray.push({ state: 'prev', date: i, year:previousMonthLastYear, month:previousMonthLastMonth});
  }

  for (let i = 1; i <= currentMonthLastDate; i++) {
    today === i
      ? currentMonthArray.push({ state: 'current', date: i, year, month })
      : currentMonthArray.push({ state: 'current', date: i, year, month });
  }

  // 이전달과 이번달 배열 합치기

  const newArr = [...prevMonthArray, ...currentMonthArray];

  // 다음달 정보 추가
  for (let i = 1; i < 7; i++) {
    if (newArr.length % 7 !== 0) {
      newArr.push({ state: 'next', date: i, year:nextMonthLastYear, month:nextMonthLastMonth });
    }
  }

  const div =newArr.map((date) => 
     `${date.year}/${date.month}/${date.date}`
  )
  console.log(div)
  return (
    <Container>
      {newArr.map((date) => (
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
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: 1fr;
  height: 95%;
  gap: 2px;
`;
