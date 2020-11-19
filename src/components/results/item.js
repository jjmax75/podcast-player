import './item.css';

import React from 'react';

import { truncateString } from '../../utils/truncate-string';

export const ResultItem = ({ podcast, setSelectedPodcast }) => (
    <li
      className='result-item'
      onClick={() => setSelectedPodcast(podcast.id)}
      key={podcast.id}
    >
      <img className='podcast-thumbnail' src={podcast.thumbnail} />
      <div className='podcast-details'>
        <h3 className='podcast-title'>{podcast.title_original}</h3>
        <div className='podcast-description'>
          {truncateString(podcast.description_original, 250)}
        </div>
        <div class='podcast-meta'>
          <span>Published by: {podcast.publisher_original} | </span>
          {podcast.explicit_content && <span>Explicit | </span>}
          <span>Last updated: {new Date(podcast.latest_pub_date_ms).toLocaleDateString()}</span>
        </div>
      </div>
    </li>
);
