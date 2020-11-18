import React, { useEffect, useState } from 'react';

const listenNotesApiUrl = 'https://listen-api.listennotes.com/api/v2';

const Podcast = ({ id }) => {
  const [podcastDetails, setPodcastDetails] = useState({});
  const [audio, setAudio] = useState();

  useEffect(async () => {
    const options = {
      headers: {
        'X-ListenAPI-Key': process.env.REACT_APP_LISTEN_NOTES_API_KEY,
      }
    };

    const result = await fetch(`${listenNotesApiUrl}/podcasts/${id}`, options);
    const parsed = await result.json();

    setPodcastDetails(parsed);
  }, [id]);

  const renderEpisodeList = () => (
    podcastDetails.episodes.map(({ audio, id, title }) => (
      <li key={id} onClick={() => setAudio(audio)}>{title}</li>
    ))
  )


  return (
    podcastDetails.episodes ?
      <>
        <ul>
          {renderEpisodeList()}
        </ul>
        { audio &&
          <audio
            controls
            src={audio}>
              Your browser does not support the
              <code>audio</code> element.
          </audio>
        }
      </>
    :
      <>
        The podcast list is loading
      </>
  )
}

export default Podcast;
