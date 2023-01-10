import React, { useState } from 'react';
import TV from './index.ts';

const tv = new TV();

const State = () => {
  const [result, setResult] = useState('')
  return (
    <div>
      <span>TV</span>
      <button onClick={() => setResult(tv.pressPowerButton())}>전원버튼</button>
      <p>{result}</p>
    </div>
  )
};

export default State;