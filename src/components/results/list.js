import './list.css';

import React from 'react';

import { ResultItem } from './item';

export const ResultList = ({ podcasts, setSelectedPodcast }) => (
  <ul className='result-list'>
    { 
      podcasts.map(podcast => 
        <ResultItem podcast={podcast} setSelectedPodcast={setSelectedPodcast} />)
    }
  </ul>
);
