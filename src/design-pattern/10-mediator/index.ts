/**
 * * Mediator 패턴은 클래스의 객체에서 특정 이벤트가 발생할 때마다 다른 클래스에게 알려야 할 때 사용한다.
 * ? 사용자의 기기 사이즈가 변경되면 사이즈에 맞게 컴포넌트를 렌더링해주는 것을 예로 들 수 있다.
 */

type Media = 'mobile' | 'pc';

interface MediaListener {
  onMediaChange: (media: Media) => void;
}

class Sidebar implements MediaListener {
  onMediaChange(media: Media) {
    console.log(`사이드바: ${media === 'mobile' ? '감추기' : '보여주기'}`);
  }
}

class HamburgerMenu implements MediaListener {
  onMediaChange(media: Media) {
    console.log(`햄버거메뉴: ${media === 'mobile' ? '보여주기' : '감추기'}`);
  }
}

class MediaMediator {
  private listeners: MediaListener[] = [];
  addListener(listener: MediaListener) { 
    this.listeners.push(listener);
  }
  onMediaChange(media: Media) {
    this.listeners.forEach(listener => {
      listener.onMediaChange(media);
    });
  }
}

export class MediaSwitch {
  private media: Media = 'pc';
  private mediaMediator: MediaMediator | null = null;
  // 중재자 고용
  setMediator(_mediaMediator: MediaMediator) {
    this.mediaMediator = _mediaMediator;
  }
  toggleMedia() {
    // 모드가 변경되면
    this.media = this.media === 'mobile' ? 'pc' : 'mobile';
    if (this.mediaMediator) {
      // 중재업체가 모드 변경을 알림
      this.mediaMediator.onMediaChange(this.media);
    }
  }
}

const mediaMediator = new MediaMediator();
mediaMediator.addListener(new Sidebar());
mediaMediator.addListener(new HamburgerMenu());
const mediaSwitch = new MediaSwitch();
mediaSwitch.setMediator(mediaMediator);
export default mediaSwitch;