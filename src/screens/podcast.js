import './podcast.css';

import React, { useEffect, useState } from 'react';

import AudioPlayer from '../components/player/audioPlayer';

const listenNotesApiUrl = 'https://listen-api.listennotes.com/api/v2';

const Podcast = ({ id, setSelectedPodcast }) => {
  const [podcastDetails, setPodcastDetails] = useState({});
  const [podcast, setPodcast] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        headers: {
          'X-ListenAPI-Key': process.env.REACT_APP_LISTEN_NOTES_API_KEY,
        }
      };

      const result = await fetch(`${listenNotesApiUrl}/podcasts/${id}`, options);
      const parsed = await result.json();

      setPodcastDetails(parsed);
    }
    
    fetchData();
  }, [id]);

  const renderEpisodeList = () => (
    podcastDetails.episodes.map((podcast) => (
      <li key={podcast.id} className='podcast-list-item' onClick={() => setPodcast(podcast)}>{podcast.title}</li>
    ))
  )

  return (
    <>
      <button className="back-button" onClick={() => setSelectedPodcast(null)}>
        Back
      </button>
      <div className='main'>
        <img src={podcastDetails?.image} />
        <AudioPlayer podcast={podcast} />
      </div>
      { podcastDetails.episodes ?
        <ul className='podcast-list'>
          {renderEpisodeList()}
        </ul>
      :
        <span>The podcast list is loading</span>
      }
    </>
  )
}

export default Podcast;
