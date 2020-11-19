import React, {useState} from 'react';

import Search from './screens/search';
import Podcast from './screens/podcast';
import { Footer, Header, Main } from './components/layout';

const App = () => {
  const [selectedPodcast, setSelectedPodcast] = useState();
  return (
    <>
      <Header />
      <Main>
        { selectedPodcast
          ? <Podcast id={selectedPodcast} setSelectedPodcast={setSelectedPodcast} />
          : <Search setSelectedPodcast={setSelectedPodcast} />
        }
      </Main>
      <Footer />
    </>
  )
}

export default App;
