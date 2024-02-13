import { Fragment } from 'react';
import Header from './Header';
import styled, { ThemeProvider } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { themeState } from '../store/theme';
import { forestTheme, seaTheme, pinkTheme } from '../styles/theme';

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = (props: LayoutProps) => {
  const content = useRecoilValue(themeState);
  const getTheme = () => {
    switch (content.name) {
      case 'forestTheme':
        return forestTheme;
      case 'seaTheme':
        return seaTheme;
      case 'pinkTheme':
        return pinkTheme;
      default:
        return forestTheme;
    }
  };

  const selectedTheme = getTheme();
  return (
    <Fragment>
      <ThemeProvider theme={selectedTheme}>
        <LayountContainer>
          <Header />
          <main>{props.children}</main>
        </LayountContainer>
      </ThemeProvider>
    </Fragment>
  );
};

export default Layout;

const LayountContainer = styled.div`
  width: 1200px;
  margin: auto;
`;
