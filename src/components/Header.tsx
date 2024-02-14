import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { themeState } from '../store/theme';
import ThemeButton from './ThemeButton';
import { useContext } from 'react';
import { DateContext } from '../context/DateContext';

interface HeaderProps {
  onChangeMonth: (num: number) => void;
  onChangeYear: (num: number) => void;
}

const Header = ({ onChangeMonth, onChangeYear }: HeaderProps) => {
  const setContent = useSetRecoilState(themeState);

  const changeHandelr = (type: string) => {
    setContent({ name: type });
  };

  const { propsMonth, propsYear } = useContext(DateContext);

  const onPlusHandler = () => {
    if (propsMonth == 12) {
      onChangeMonth(1);
      onChangeYear(propsYear + 1);
    } else {
      onChangeMonth(propsMonth + 1);
    }
  };
  const onMinusHandler = () => {
    if (propsMonth == 1) {
      onChangeMonth(12);
      onChangeYear(propsYear - 1);
    } else {
      onChangeMonth(propsMonth - 1);
    }
  };

  const monthArr: { [key: number]: string } = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: '  October',
    11: 'November',
    12: 'December',
  };

  const month = monthArr[propsMonth];

  return (
    <HeaderContainer>
      <DateUl>
        <li>
          <h2>
            {month}, {propsYear}
          </h2>
        </li>
        <li>
          <MoveYearButton
            onClick={() => {
              onMinusHandler();
            }}
          >
            prev
          </MoveYearButton>
        </li>
        <li>
          <MoveYearButton
            onClick={() => {
              onPlusHandler();
            }}
          >
            next
          </MoveYearButton>
        </li>
      </DateUl>

      <ThemeUL>
        <li>
          <ThemeButton text="Forest" color="#12372A" clickEvent={changeHandelr} />
        </li>
        <li>
          <ThemeButton text="Sea" color="#78C1F3" clickEvent={changeHandelr} />
        </li>
        <li>
          <ThemeButton text="Pink" color="#FF78C4" clickEvent={changeHandelr} />
        </li>
      </ThemeUL>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  color: ${({ theme }) => theme.colors.main};
  position: relative;
  padding: 30px 0px;
`;
const DateUl = styled.div`
  display: flex;
  gap: 10px;
  list-style: none;
  font-size: 24px;
  font-weight: 600;

  li:first-child {
    margin-left: 10px;
    width: 200px;
  }
  align-items: center;
`;

const ThemeUL = styled.ul`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 10px;
  gap: 10px;
`;

const MoveYearButton = styled.button`
  background-color: white;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  width: 40px;
  height: 20px;
  padding:0;
  margin: 0;
  cursor: pointer;
`