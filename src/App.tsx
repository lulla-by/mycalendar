import { Fragment } from 'react';
import Layout from './components/Layout';
import Calendar from './components/calendar/Calendar';
import MemoBoard from './components/memo/MemoBoard';
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
