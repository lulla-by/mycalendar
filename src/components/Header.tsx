import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { themeState } from '../store/theme';
import Button from './Button';

const Header = () => {
  const setContent = useSetRecoilState(themeState);

  const changeHandelr = (type: string) => {
    setContent({ name: type });
  };
  return (
    <HeaderContainer>
      <DateUl>
        <li>
          <h2>Feb</h2>
        </li>
      </DateUl>

      <ThemeUL>
        <li>
          <Button text="Forest" color="#12372A" clickEvent={changeHandelr} />
        </li>
        <li>
          <Button text="Sea" color="#78C1F3" clickEvent={changeHandelr} />
        </li>
        <li>
          <Button text="Pink" color="#FF78C4" clickEvent={changeHandelr} />
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
  justify-content: center;
  gap: 5px;
  list-style:none;
  font-size: 24px;
  font-weight: 600;
`

const ThemeUL = styled.ul`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 10px;
  gap: 10px;
`;
