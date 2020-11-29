import './search.css';

import React, { useState } from 'react';

import { SearchForm } from '../components/search-form';
import { ResultList } from '../components/results/list';

const listenNotesApiUrl = 'https://listen-api.listennotes.com/api/v2';

const Search = ({ setSelectedPodcast }) => {
  const [podcasts, setPodcasts] = useState([]);

  const getPodcasts = async (e) => {
    e.preventDefault();
    const options = {
      headers: {
        'X-ListenAPI-Key': process.env.REACT_APP_LISTEN_NOTES_API_KEY,
      }
    };

    const result = await fetch(`${listenNotesApiUrl}/search?q=${e.target.value}&sort_by_date=0&type=podcast`, options);
    const parsed = await result.json();
    
    setPodcasts(parsed.results);
  }

  const handleKeyPress = e => {
    if(e.key === 'Enter'){
      e.preventDefault();
      getPodcasts(e);
    }
  }

  return (!podcasts.length
    ? <>
        <h3>Welcome!</h3>
        <h1>Explore top podcasts</h1>
        <SearchForm handleKeyPress={handleKeyPress} />
      </>
    : <>
        <div className="info">
          <button onClick={() => setPodcasts([])}>Back</button>
          <h1>Results ({podcasts.length})</h1>
        </div>
        <ResultList setSelectedPodcast={setSelectedPodcast} podcasts={podcasts} />
      </>
  ) 
}

export default Search;
