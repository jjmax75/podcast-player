import React, {useState} from 'react';

import Search from './screens/search';
import Podcast from './screens/podcast';

const App = () => {
  const [selectedPodcast, setSelectedPodcast] = useState();
  return (
    selectedPodcast
      ? <Podcast id={selectedPodcast} />
      : <Search setSelectedPodcast={setSelectedPodcast} />
  )
}

export default App;
