import React from 'react';
import styled from 'styled-components';

const DaysRender = () => {
  const daysArr: React.ReactNode[] = [];

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  for (let i = 0; i < 7; i++) {
    daysArr.push(<div key={i}>{days[i]}</div>);
  }

  console.log(daysArr);

  return (
    <Container>
      {daysArr.map((day, index) => (
        <DaysCard
          key={index}
        >
          {day}
        </DaysCard>
      ))}
    </Container>
  );
};

export default DaysRender;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const DaysCard = styled.div`
  padding: 10px;
  border-top: 1px solid #dee2e6;
  border-right: 1px solid #dee2e6;
  background-color: ${({ theme }) => theme.colors.base};
  color: ${({ theme }) => theme.colors.main};
  font-weight: 600;
`;
