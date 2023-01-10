import React, { useState } from 'react';
import Search, { SearchAll, SearchNews, FindMovieAlgorithm, SearchFindAdapter } from './index.ts';

const search = new Search();

const Adapter = () => {
  const [searchResult, setSearchResult] = useState('');
  return (
    <div>
      <button onClick={() => search.setSearch(new SearchAll())}>All</button>
      <button onClick={() => search.setSearch(new SearchNews())}>News</button>
      <button onClick={() => search.setSearch(new SearchFindAdapter(new FindMovieAlgorithm()))}>Movie</button>
      <button onClick={() => setSearchResult(search.search())}>Search</button>
      <p>{ searchResult }</p>
    </div>
  )
};

export default Adapter