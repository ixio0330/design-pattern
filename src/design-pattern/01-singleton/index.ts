/**
 * * Singleton 패턴은 앱에서 공통적으로 사용해야 하는 객체가 있을 때 사용한다.
 * ? 공통적으로 사용하는 객체란, 앱에서 함께 공유해야 하는 속성으로,
 * ? 테마, 폰트사이즈 등을 예로 들 수 있다.
 */

export default class Settings {
  // 다크모드 적용 여부
  private darkMode = false;
  // 폰트 사이즈
  private fontSize = 16;
  private static instance: Settings | null = null;
  constructor() {
    // instance가 생성된 상태라면, 생성된 instance를 반환
    if (Settings.instance) return Settings.instance;
    // instance가 없는 상태라면 현재 객체를 instance로 설정
    Settings.instance = this;
  }
  getDarkMode() {
    return this.darkMode;
  }
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }

  getFontSize() {
    return this.fontSize;
  }
  setFontSize(fontSize: number) {
    if (30 < fontSize) throw new Error('[Settings] 폰트 사이즈 30이하만 설정 가능합니다.');
    this.fontSize = fontSize;
  }
}