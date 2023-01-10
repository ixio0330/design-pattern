/**
 * * Proxy 패턴은 가벼운 일은 대리자에게 맡기고 무거운 일은 실제 클래스가 직접 처리할 때 사용한다.
 * ? 회사 대표는 비서가 대부분의 일을 처리하다가 중요한 업무인 경우에만 일을 직접 처리한다.
 */

interface Thumbnail {
  showTitle: () => string;
  showPreview: () => string;
}

class RealThumbnail implements Thumbnail {
  title: string;
  url: string;
  constructor(_title: string, _url: string) {
    this.title = _title;
    this.url = _url;
    console.log(`${this.title} 영상 ${this.url}로부터 다운로드 시작!`);
  }
  showTitle() {
    return `[RealThumbnail] ${this.title} 보여주기`;
  };
  showPreview() {
    return `[RealThumbnail] ${this.url} 영상 미리보기`;
  };
}

export default class ProxyThumbnail implements Thumbnail {
  title: string;
  url: string;
  realThumbnail: RealThumbnail;
  constructor(_title: string, _url: string) {
    this.title = _title;
    this.url = _url;
    console.log(`${this.title} 영상 ${this.url}로부터 다운로드 시작!`);
  }
  showTitle() {
    // 가벼운 일은 직접 처리
    return `[ProxyThumbnail] ${this.title} 보여주기`;
  };
  showPreview() {
    if (!this.realThumbnail) {
      this.realThumbnail = new RealThumbnail(this.title, this.url);
    }
    // 무거운 일은 실제 클래스에게 위임
    return this.realThumbnail.showPreview();
  };
}