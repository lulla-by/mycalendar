import { useContext } from 'react';
import { DateContext } from '../../context/DateContext';

const DateRender = () => {
  const { propsMonth: month, propsYear: year } = useContext(DateContext);

  const firstDate = 1;
  const last = new Date(year, month, 0);
  const lastDate = last.getDate();

  const dateArray: number[] = [];

  for (let i = firstDate; i <= lastDate; i++) {
    dateArray.push(i);
  }
  return (
    <div>
      <ul>
        {dateArray.map((date) => (
          <li>{date}</li>
        ))}
      </ul>
    </div>
  );
};

export default DateRender;
