import React from 'react';
import RobotKit, { MoveForwardCommand, PickupCommand, TurnCommand } from './index.ts';

const robotkit = new RobotKit();

const Command = () => {
  return (
    <div>
      <button onClick={() => robotkit.addCommand(new MoveForwardCommand(1))}>전진</button>
      <button onClick={() => robotkit.addCommand(new TurnCommand('left'))}>좌회전</button>
      <button onClick={() => robotkit.addCommand(new TurnCommand('right'))}>우회전</button>
      <button onClick={() => robotkit.addCommand(new PickupCommand())}>물건 집기</button>
      <button onClick={() => robotkit.start()}>실행</button>
    </div>
  )
}

export default Command;