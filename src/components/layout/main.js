import './main.css';

import React from 'react';

export const Main = ({ children }) => {
  return (
    <main className='main-content'>
      { children }
    </main>
  );
};
