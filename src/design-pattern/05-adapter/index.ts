/**
 * * Adapter 패턴은 서로 다른 인터페이스를 가진 객체들이 같은 형식으로 동작해야 할 때 사용한다.
 * ? 호텔 식당에서 5명의 요리사와 1명이 파티쉐가 있다고 했을 때, 매니저는 `요리해주세요`라는 명령으로
 * ? 요리사에게는 요리를 시키고 파티쉐에게는 제과를 시킨다고 예를 들 수 있다.
 * TODO Strategy 패턴에서 만든 검색 알고리즘에 다른 개발자가 만든 영화 찾기 알고리즘이 추가되면,
 * TODO 인터페이스가 다르기 때문에 Adapter 클래스로 한번 감싸서 이어붙인다.
 */

export default class Search {
  private searchStrategy: SearchStrategy = new SearchAll();
  setSearch(_searchStrategy: SearchStrategy) {
    this.searchStrategy = _searchStrategy;
  }
  search() {
    return this.searchStrategy.search();
  }
}

interface SearchStrategy {
  search: () => string,
}

export class SearchAll implements SearchStrategy {
  search() {
    return 'Search All'
  }
}

export class SearchNews implements SearchStrategy {
  search() {
    return 'Search News'
  }
}

// 다른 개발자가 만든 동영상 검색 알고리즘
class FindAlgorithm {
  find(global: boolean) { return '' };
}

export class FindMovieAlgorithm implements FindAlgorithm {
  find(global: boolean) {
    // 동영상 검색 로직
    return `Find movie ${global ? 'globally' : ''}`
  }
}

export class SearchFindAdapter implements SearchStrategy {
  findAlgorithm: FindAlgorithm;
  constructor(_findAlgorithm: FindAlgorithm) {
    // super();
    this.findAlgorithm = _findAlgorithm;
  }
  search() {
    return this.findAlgorithm.find(true);
  }
}
