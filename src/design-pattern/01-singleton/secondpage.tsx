import React, { MouseEventHandler } from 'react';
import Settings from './index.ts';

type SecondPageProps = {
  onClickPrev: MouseEventHandler;
}

const settings = new Settings();

const SecondPage = ({ onClickPrev }: SecondPageProps) => {
  return (
    <div>
      <p>Second Page</p>
      <button onClick={() => settings.toggleDarkMode()}>Toggle Theme</button>
      <button onClick={onClickPrev}>Prev</button>
    </div>
  )
};

export default SecondPage