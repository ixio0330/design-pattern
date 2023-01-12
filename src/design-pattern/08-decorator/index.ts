/**
 * * Decorator 패턴은 기능들을 필요에 따라 장착해야 할 때 사용한다.
 */

interface Fighter {
  attack: () => void
}

export class XWingFighter implements Fighter {
  attack() {
    console.log('탄환 발사');
  }
}

class FighterDecorator implements Fighter {
  decoratorFighter: Fighter;
  constructor(_decoratorFighter: Fighter) {
    this.decoratorFighter = _decoratorFighter;
  }
  attack() {
    this.decoratorFighter.attack();
  }
}

export class LaserDecorator extends FighterDecorator {
  constructor(_decoratorFighter: Fighter) {
    super(_decoratorFighter);
  }
  attack() {
    super.attack();
    console.log('레이저 발사');
  }
}

export class PlasmaDecorator extends FighterDecorator {
  constructor(_decoratorFighter: Fighter) {
    super(_decoratorFighter);
  }
  attack() {
    super.attack();
    console.log('플라즈마 발사');
  }
}
