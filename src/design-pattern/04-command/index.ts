type Direction = 'left' | 'right';

class Robot {
  moveForward(space: number) {
    console.log(`${space}칸 전진`);
  }
  turn(direction: Direction) {
    console.log(`${direction === 'left' ? '왼쪽' : '오른쪽'}으로 방향 전환`);
  }
  pickup() {
    console.log('앞의 물건 집어들기');
  }
}

class Command {
  robot: Robot;
  setRobot(_robot: Robot) {
    this.robot = _robot;
  }
  execute() {}
}

export class MoveForwardCommand extends Command {
  space = 0;
  constructor(_space: number) {
    super();
    this.space = _space;
  }
  execute() {
    this.robot?.moveForward(this.space);
  }
}

export class TurnCommand extends Command {
  direction: Direction;
  constructor(_direction: Direction) {
    super();
    this.direction = _direction;
  }
  execute() {
    this.robot?.turn(this.direction);
  }
}

export class PickupCommand extends Command {
  execute() {
    this.robot?.pickup();
  }
}

export default class RobotKit {
  robot = new Robot();
  commands: Command[] = [];
  addCommand(command: Command) {
    this.commands.push(command);
  }
  start() {
    this.commands.forEach(command => {
      command.setRobot(this.robot);
      command.execute();
    })
  }
}
