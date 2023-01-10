/**
 * * State 패턴은 특정 상태에 따라 다른 일을 할 때 사용한다.
 * ? 티비 전원이 켜져있는 상태에서 전원버튼을 누르면 전원이 꺼지고,
 * ? 티비 전원이 꺼져있는 상태에서 전원버튼을 누르면 전원이 켜지는 것을 예로 들 수 있다.
 */

export default class TV {
  private tvState: TVState = new TVOff();
  setTVState(_tvState: TVState) {
    this.tvState = _tvState;
  }
  pressPowerButton() {
    return this.tvState.toggle(this);
  }
}

interface TVState {
  toggle: (tv: TV) => string;
}

class TVOn implements TVState {
  toggle(tv: TV) {
    tv.setTVState(new TVOff());
    return 'TV를 끈다.'
  };
}

class TVOff implements TVState {
  toggle(tv: TV) {
    tv.setTVState(new TVOn());
    return 'TV를 킨다.'
  };
}