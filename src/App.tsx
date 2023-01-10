import React, { ReactNode } from 'react';
import Singleton from './design-pattern/01-singleton/singleton.tsx';
import Strategy from './design-pattern/02-strategy/strategy.tsx';
import State from './design-pattern/03-state/state.tsx';

type WrapperProps = {
  title: string;
  children?: ReactNode;
}

const Wrapper = ({ children, title }: WrapperProps) => {
  return (
    <div style={{border: '1px solid #000', margin: 10, padding: 10}}>
      <h3>{ title }</h3>
      {children}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Wrapper title='1. Singleton'>
        <Singleton />
      </Wrapper>
      <Wrapper title='2. Strategy'>
        <Strategy />
      </Wrapper>
      <Wrapper title='3. State'>
        <State />
      </Wrapper>
    </div>
  );
}

export default App;
