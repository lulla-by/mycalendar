import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { themeState } from '../store/theme';

const Header = () => {
  const setContent = useSetRecoilState(themeState);
  return (
    <HeaderContainer>
      <h2>2024년</h2>
      <h2>1월</h2>

      <ul>
        <li>
          <button
            onClick={() => {
              setContent({ name: 'forestTheme' });
            }}
          >
            Forest
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setContent({ name: 'seaTheme' });
            }}
          >
            Sea
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setContent({ name: 'pinkTheme' });
            }}
          >
            Pink
          </button>
        </li>
      </ul>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.base};
  color: ${({ theme }) => theme.colors.main};
`;
