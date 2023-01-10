import React, { useState } from 'react';
import Search, { SearchAll, SearchNews, SearchImages } from './index.ts';

const search = new Search();

const Strategy = () => {
  const [searchResult, setSearchResult] = useState('');
  return (
    <div>
      <button onClick={() => search.setSearch(new SearchAll())}>All</button>
      <button onClick={() => search.setSearch(new SearchNews())}>News</button>
      <button onClick={() => search.setSearch(new SearchImages())}>Images</button>
      <button onClick={() => setSearchResult(search.search())}>Search</button>
      <p>{ searchResult }</p>
    </div>
  )
};

export default Strategy