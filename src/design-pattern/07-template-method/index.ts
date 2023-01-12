/**
 * * Template Method 패턴은 같은 형식을 지닌 특정 작업들의 세부 방식을 세분화할 때 사용한다.
 * * - 공통된 절차가 있을 때 사용한다.
 * * - 다양하된 방식을 각각 자식 클래스에서 오버라이딩 해서 만든다.
 * * - 바꿀 수 없는 큰 틀의 형식이 있고, 내부 세부적인 형식은 변경할 수 있다.
 * ? 예를 들어, 네이버지도와 카카오지도를 사용하는데, 각자 구성 방식은 같지만 구성 로직은 다를 때 사용할 수 있다.
 */

abstract class MapView {
  protected abstract connectMapServer(): void;
  protected abstract showMapOnScreen(): void;
  protected abstract moveToCurrentLocation(): void;
  initMap() {
    this.connectMapServer();
    this.showMapOnScreen();
    this.moveToCurrentLocation();
  }
}

export class NaverMapView extends MapView {
  protected connectMapServer() {
    console.log('네이버 지도 연결');
  }
  protected showMapOnScreen() {
    console.log('네이버 지도 보여주기');
  }
  protected moveToCurrentLocation() {
    console.log('네이버 지도에서 현 위치로 이동');
  }
}

export class KakaoMapView extends MapView {
  protected connectMapServer() {
    console.log('카카오 지도 연결');
  }
  protected showMapOnScreen() {
    console.log('카카오 지도 보여주기');
  }
  protected moveToCurrentLocation() {
    console.log('카카오 지도에서 현 위치로 이동');
  }
}