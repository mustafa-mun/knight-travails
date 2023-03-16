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
    // This needs to add all possible edges for per vertex(square)
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
}

const graph = new Graph();
graph.addVertex();
graph.addEdges();
console.log(graph.gameBoard);
