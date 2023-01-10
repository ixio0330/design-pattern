import React, { MouseEventHandler } from 'react';
import Settings from './index.ts';

type FirstPageProps = {
  onClickNext: MouseEventHandler;
}

const settings = new Settings();

const FirstPage = ({ onClickNext }: FirstPageProps) => {
  return (
    <div>
      <p>First Page</p>
      <button onClick={() => settings.setFontSize(26)}>set font size</button>
      <button onClick={() => settings.setFontSize(31)}>set font size</button>
      <button onClick={onClickNext}>Next</button>
    </div>
  )
};

export default FirstPage