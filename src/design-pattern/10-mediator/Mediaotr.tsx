import React from 'react';
import mediaSwitch from './index.ts'

const Mediator = () => {
  return (
    <div>
      <button onClick={() => mediaSwitch.toggleMedia()}>Mobile</button>
      <button onClick={() => mediaSwitch.toggleMedia()}>PC</button>
    </div>
  )
};

export default Mediator;