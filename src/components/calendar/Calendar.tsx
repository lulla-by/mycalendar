import styled from 'styled-components';
import DaysRender from './DaysRender';
import DateRender from './DateRender';

const Calendar = () => {

  return (
    <Container>
      <DaysRender/>
      <DateRender/>
    </Container>
  );
};

export default Calendar;

const Container = styled.div`
background-color: lightgreen;
width: 850px;
text-align: center;
`;
