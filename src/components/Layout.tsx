import { Fragment, createContext, useState } from 'react';
import Header from './Header';
import styled, { ThemeProvider } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { themeState } from '../store/theme';
import { forest, sea, pink } from '../styles/theme';
import { DateContext } from '../context/DateContext';

type LayoutProps = {
  children: React.ReactNode;
};

export const AppContext = createContext<number | undefined>(undefined);

const Layout = (props: LayoutProps) => {
  const content = useRecoilValue(themeState);
  const getTheme = () => {
    switch (content.name) {
      case 'forest':
        return forest;
      case 'sea':
        return sea;
      case 'pink':
        return pink;
      default:
        return forest;
    }
  };

  const nowDate = new Date();
  const year = nowDate.getFullYear();
  const month = nowDate.getMonth() + 1;
  const [propsMonth, setPropsmonth] = useState(month);
  const [propsYear, setPropYear] = useState(year);

  const changeMonth = (num: number) => {
    setPropsmonth(num);
  };

  const changeYear = (num: number) => {
    setPropYear(num);
  };

  const selectedTheme = getTheme();
  return (
    <Fragment>
      <ThemeProvider theme={selectedTheme}>
        <LayountContainer>
          <DateContext.Provider value={{ propsMonth, propsYear }}>
            <Header onChangeMonth={changeMonth} onChangeYear={changeYear} />
            <MainContents>{props.children}</MainContents>
          </DateContext.Provider>
        </LayountContainer>
      </ThemeProvider>
    </Fragment>
  );
};

export default Layout;

const LayountContainer = styled.div`
  width: 1200px;
  margin: auto;
  border: 2px solid #dee2e6;
  border-radius: 5px;

  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MainContents = styled.div`
  display: flex;
  gap: 10px;
`;
