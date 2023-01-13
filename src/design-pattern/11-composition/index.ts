interface CNode {
  getSize: () => number;
}

export class FileNode implements CNode {
  private name: string;
  private size: number;

  getSize() {
    return this.size;
  }
  
  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
    console.log(`${this.name} 파일 생성`);
  }
}

export class DirectoryNode implements CNode {
  private name: string;
  private includes: CNode[] = [];

  constructor(name: string) {
    this.name = name;
    console.log(`${this.name} 폴더 생성`);
  }

  add(node: CNode) {
    this.includes.push(node);
  }

  getSize() {
    let size = 0;
    this.includes.forEach((node) => {
      size += node.getSize();
    });
    return size;
  }
}
