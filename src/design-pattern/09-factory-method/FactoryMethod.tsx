import React from 'react';
import App from './index.ts';

const app = new App();

const FactoryMethod = () => {
  app.withFactory();
  return (
    <div>
      <button onClick={() => console.log(app.comp1)}>버튼</button>
      <button onClick={() => console.log(app.comp2)}>스위치</button>
      <button onClick={() => console.log(app.comp3)}>드롭다운</button>
    </div>
  )
};

export default FactoryMethod;