/**
 * * Strategy 패턴은 같은 기능을 수행하지만 내부 로직이 변경될 때 사용한다.
 * ? 예를 들어, `검색` 이라는 같은 기능을 수행하지만 
 * ? 사용자가 설정한 카테고리에 `키워드`를 포함 해 검색 알고리즘을 실행해야 하는 경우를 예로 들 수 있다.
 */

export default class Search {
  private searchStrategy: SearchStrategy = new SearchAll();
  // 검색 방식을 바꿀 수 있는 메소드
  setSearch(_searchStrategy: SearchStrategy) {
    this.searchStrategy = _searchStrategy;
  }
  // 검색 메소드
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

export class SearchImages implements SearchStrategy {
  search() {
    return 'Search Images'
  }
}