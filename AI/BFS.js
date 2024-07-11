class Graph {
    constructor() {
        this.adjacencyList = {};
    }
//creating an array for all the nodes connected to a particular vertex
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
//defining the edges-making the connection
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    //implementing the queue

    bfs(start) {
        const queue = [start];
        const result = [];//keep track of the visited vertices
        const visited = {};
        visited[start] = true;

        while (queue.length) {
            const currentVertex = queue.shift();
            result.push(currentVertex);

            //looping through the list  to check whether each neighbour has been visited

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}


/*const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.bfs("A")); */

const graph=new Graph()

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("G");
graph.addVertex("I");
graph.addVertex("J");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("H");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("C", "F");
graph.addEdge("C", "G");
graph.addEdge("E", "H");
graph.addEdge("E", "I");
console.log(graph.bfs("A"));
