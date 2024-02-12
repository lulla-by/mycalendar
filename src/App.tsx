import { Fragment } from 'react';
import Layout from './components/Layout';
import Calendar from './components/Calendar';
import MemoBoard from './components/MemoBoard';

function App() {
  return (
    <Fragment>
      <Layout>
        <Calendar />
        <MemoBoard />
      </Layout>
    </Fragment>
  );
}

export default App;
