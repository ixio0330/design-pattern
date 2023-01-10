import React from 'react';
import ProxyThumbnail from './index.ts';

const proxyThumbnail = new ProxyThumbnail('테스트', 'test.com');

const Proxy = () => {
  return (
    <div>
      <p>{ proxyThumbnail.showTitle() }</p>
      <p>{ proxyThumbnail.showPreview() }</p>
      <p></p>
    </div>
  )
};

export default Proxy;