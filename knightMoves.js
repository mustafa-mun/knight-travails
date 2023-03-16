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

  addEdge(u, v) {
    // This needs to add all possible edges for per vertex(square)
    this.gameBoard.get(u).push(v);
    this.gameBoard.get(v).push(u);
  }
}

const graph = new Graph();
graph.addVertex()

console.log(graph);