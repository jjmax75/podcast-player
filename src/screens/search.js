import React, { useState } from 'react';

const listenNotesApiUrl = 'https://listen-api.listennotes.com/api/v2';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [podcasts, setPodcasts] = useState([]);
  // pagination

  const getPodcasts = async (e) => {
    e.preventDefault();
    const options = {
      headers: {
        'X-ListenAPI-Key': process.env.REACT_APP_LISTEN_NOTES_API_KEY,
      }
    };

    const result = await fetch(`${listenNotesApiUrl}/search?q=${searchTerm}&sort_by_date=0&type=podcast`, options);
    const parsed = await result.json();
    
    setPodcasts(parsed.results);
  }

  const renderPodcasts = () => (
    podcasts.map(podcast => <li key={podcast.id}>{podcast.title_original}</li>)
  )

  return (
    <>
      <h1>Search for a podcast</h1>
      <form>
        <input
          type='text'
          placeholder='Search for a podcast'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button onClick={getPodcasts}>Search</button>
      </form>
      <ul>
        {renderPodcasts()}
      </ul>
    </>
  )
}

export default Search;
