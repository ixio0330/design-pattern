import React from "react";
import { XWingFighter, LaserDecorator, PlasmaDecorator } from './index.ts';

const Decorator = () => {
  return (
    <div>
      <button onClick={() => new XWingFighter().attack()}>XWing</button>
      <button onClick={() => new LaserDecorator(new XWingFighter()).attack()}>레이저 + XWing</button>
      <button onClick={() =>
        new PlasmaDecorator(
          new LaserDecorator(
            new XWingFighter()
          )
        ).attack()}
      >
        플라즈마 + 레이저 + XWing
      </button>
    </div>
  );
};

export default Decorator;