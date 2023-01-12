/**
 * * Factory Method 패턴은 객체를 생성하는 부분을 하나의 클래스로 둘 때 사용한다.
 * * - 객체 생성자 형식이 바뀌면 객체 생성 클래스 내부 로직만 변경하면 된다.
 * * - 개발자는 생성되는 객체의 클래스에 대해 직접적으로 알 필요가 없다.
 */

export default class App {
  compFactory = new CompFactory();
  comp1: Component;
  comp2: Component;
  comp3: Component;

  withFactory() {
    this.comp1 = this.compFactory.getComp('press');
    this.comp2 = this.compFactory.getComp('toggle');
    this.comp3 = this.compFactory.getComp('expand');
  }
}

class CompFactory {
  // 생성자에 변경이 있더라도, Factory 클래스에게 위임할 수 있음
  getComp(usage: 'press' | 'toggle' | 'expand') {
    switch (usage) { // enum으로 사용하기
      case 'press':
        return new Button();
      case 'toggle':
        return new Switch();
      case 'expand':
        return new Dropdown();
    }
  }
}

abstract class Component {
  getCompName() {}
  constructor() {
    console.log(`${this.getCompName()} 생성`);
  }
}

class Button extends Component {
  getCompName() {
    return '버튼';
  }
}

class Switch extends Component {
  getCompName() {
    return '스위치';
  }
}

class Dropdown extends Component {
  getCompName() {
    return '드롭다운';
  }
}