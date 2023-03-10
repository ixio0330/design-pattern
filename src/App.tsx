import React, { ReactNode } from 'react';
import Singleton from './design-pattern/01-singleton/singleton.tsx';
import Strategy from './design-pattern/02-strategy/strategy.tsx';
import State from './design-pattern/03-state/state.tsx';
import Command from './design-pattern/04-command/command.tsx';
import Adapter from './design-pattern/05-adapter/adapter.tsx';
import Proxy from './design-pattern/06-proxy/proxy.tsx';
import TemplateMethod from './design-pattern/07-template-method/templateMethod.tsx';
import Decorator from './design-pattern/08-decorator/Decorator.tsx';
import FactoryMethod from './design-pattern/09-factory-method/FactoryMethod.tsx';
import Mediator from './design-pattern/10-mediator/Mediaotr.tsx';
import Composition from './design-pattern/11-composition/Composition.tsx';

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
      <Wrapper title='4. Command'>
        <Command />
      </Wrapper>
      <Wrapper title='5. Adapter'>
        <Adapter />
      </Wrapper>
      <Wrapper title='6. Proxy'>
        <Proxy />
      </Wrapper>
      <Wrapper title='7. Template Method'>
        <TemplateMethod />
      </Wrapper>
      <Wrapper title='8. Decorator'>
        <Decorator />
      </Wrapper>
      <Wrapper title='9. Factory Method'>
        <FactoryMethod />
      </Wrapper>
      <Wrapper title='10. Mediator'>
        <Mediator />
      </Wrapper>
      <Wrapper title='11. Composition'>
        <Composition />
      </Wrapper>
    </div>
  );
}

export default App;
