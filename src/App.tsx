import { Fragment } from 'react';
import Layout from './components/Layout';
import Calendar from './components/Calendar';
import MemoBoard from './components/MemoBoard';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <Fragment>
      <RecoilRoot>
        <Layout>
          <Calendar />
          <MemoBoard />
        </Layout>
      </RecoilRoot>
    </Fragment>
  );
}

export default App;
