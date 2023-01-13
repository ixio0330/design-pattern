import React from 'react';
import { DirectoryNode, FileNode } from './index.ts';

const Composition = () => {
  const src = new DirectoryNode('src');
  return (
    <div>
      <button onClick={() => src.add(new DirectoryNode(`Folder-${Math.floor(Math.random() * 100) + 1}`))}>폴더 추가</button>
      <button onClick={() => src.add(new FileNode(`File-${Math.floor(Math.random() * 100) + 1}`, 1))}>파일 추가</button>
      <button onClick={() => window.alert(src.getSize())}>사이즈 출력</button>
    </div>
  )
};

export default Composition;