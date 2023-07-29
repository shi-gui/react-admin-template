import { observer } from 'mobx-react';
import TopCard from './components/TopCard';
import TableChart from './components/TableChart';

function Home() {
  return (
    <>
      <TopCard />
      <TableChart />
    </>
  );
}

export default observer(Home);
