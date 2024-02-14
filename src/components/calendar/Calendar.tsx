import styled from 'styled-components';
import DaysRender from './Days';
import DateRender from './Date';

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
width: 850px;
text-align: center;
`;
