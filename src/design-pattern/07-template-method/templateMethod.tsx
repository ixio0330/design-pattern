import React from 'react';
import { KakaoMapView, NaverMapView } from './index.ts'

const kakaoMapView = new KakaoMapView();
const naverMapView = new NaverMapView();
const TemplateMethod = () => {
  return (
    <div>
      <button onClick={() => kakaoMapView.initMap()}>Kakao</button>
      <button onClick={() => naverMapView.initMap()}>Naver</button>
    </div>
  )
};

export default TemplateMethod;