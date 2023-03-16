// Our gameboard is will be an undirected graph

class Graph {
  constructor() {
    this.gameBoard = new Map();
  }

  addVertex() {
    for (let i = 0; i < 8; i += 1) {
      for (let j = 0; j < 8; j += 1) {
        this.gameBoard.set(`${[i, j]}`, []);
      }
    }
  }

  addEdges() {
    for (let [key] of this.gameBoard) {
      const keyArr = key.split(",");
      const x = parseInt(keyArr[0]);
      const y = parseInt(keyArr[1]);

      const direction = {
        1: [x + 1, y + 2],
        2: [x + 2, y + 1],
        3: [x + 2, y - 1],
        4: [x + 1, y - 2],
        5: [x - 1, y - 2],
        6: [x - 2, y - 1],
        7: [x - 2, y + 1],
        8: [x - 1, y + 2],
      };
      for (let clock in direction) {
        const move = direction[clock].toString();
        if (
          this.gameBoard.has(move) &&
          !this.gameBoard.get(key).includes(move)
        ) {
          this.gameBoard.get(key).push(move);
        }
      }
    }
  }

  knightMoves(list, start, end) {
    let paths = [];
    let visited = new Set();
    let queue = [];
    queue.push([start, [start]]);
    while (queue.length) {
      let [current, path] = queue.shift();
      visited.add(current);
      if (current === end) {
        paths.push(path);
      }
      for (let neighbor of list.get(current)) {
        if (!visited.has(neighbor)) {
          queue.push([neighbor, [...path, neighbor]]);
        }
      }
    }
    return paths;
  }
}

const graph = new Graph();
graph.addVertex();
graph.addEdges();
// console.log(graph.gameBoard);
console.log(graph.knightMoves(graph.gameBoard, "0,0", "4,4"));
