import { observer } from 'mobx-react';
import TopCard from './components/TopCard';

function Home() {
  return (
    <>
      <TopCard />
    </>
  );
}

export default observer(Home);
