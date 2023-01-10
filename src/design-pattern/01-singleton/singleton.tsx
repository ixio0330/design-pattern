import React, { useState } from 'react';
import FirstPage from './firstpage.tsx';
import SecondPage from './secondpage.tsx';
import Settings from './index.ts';

const settings = new Settings();

const Singleton = () => {
  const [page, setPage] = useState(1)
  return (
    <div
      style={{
        backgroundColor: settings.getDarkMode() ? '#000' : '#fff',
        color: settings.getDarkMode() ? '#fff' : '#000',
        fontSize: settings.getFontSize(),
      }}
    >
      {
        page === 1 ?
        <FirstPage onClickNext={() => setPage(2)} /> :
        <SecondPage onClickPrev={() => setPage(1)} />
      }
    </div>
  )
};

export default Singleton