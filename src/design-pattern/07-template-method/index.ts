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