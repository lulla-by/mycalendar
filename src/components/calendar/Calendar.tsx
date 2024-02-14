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
height: 600px;
/* background-color: aliceblue; */
text-align: center;
`;
