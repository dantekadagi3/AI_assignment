
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    dfs(start) {
        const result = [];
        const visited = {};
        //helper function to perform recursion-due to the posibillity of repetition of states
        const dfsRecursive = (vertex) => {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfsRecursive(neighbor);
                }
            });
        };

        dfsRecursive(start);
        return result;
    }
}

// Examples


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

console.log(graph.dfs("A")); // Output: [ 'A', 'B', 'D', 'E', 'C', 'F' ]*/


const graph=new Graph();

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


console.log(graph.dfs("A"));