import './player.css';

import React, { useRef, useState } from 'react';

const Player = ({ podcast }) => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const player = useRef();
  let interval;

  const togglePlaying = () => {
    setPlaying(() => {
      if (playing) {
        player.current.pause();
        clearInterval(interval);
      } else {
        player.current.play();
        interval = checkProgress();
      }

      return !playing;
    })
  }

  const checkProgress = () => {
    return setInterval(() => {
      setProgress((player?.current?.currentTime / podcast?.audio_length_sec) * 100);
    }, 1000);
  }

  return (
      <div className='audio-player'>
        <audio
        ref={player}
        src={podcast?.audio}
      >
          Your browser does not support the
          <code>audio</code> element.
      </audio>
      <div className="podcast-details">
        <h3>{podcast?.title}</h3>
        {podcast?.description && <div dangerouslySetInnerHTML={{__html: podcast.description}} />}
      </div>
      <div className="progress">
          <progress className="progress-bar" value={progress} min="0" max="100" />
        </div>
      <div className="controls">
        <button className='shuffle-button' type="button" onClick={() => player.current.currentTime -= 30.0}>
          - 30 secs
        </button>
        <button className='play-button' type="button" onClick={togglePlaying}>
          {playing ? 'Pause' : 'Play'}
        </button>
        <button className='shuffle-button' type="button" onClick={() => player.current.currentTime += 30.0}>
          + 30 secs
        </button>
      </div>
    </div>
  )
}

export default Player;
