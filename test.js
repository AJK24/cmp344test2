


load("graph.js");


g = new Graph(6);
//0 connections
g.addEdge(0,1);
g.addEdge(0,2);

//1 connections
g.addEdge(1,3);
g.addEdge(1,4);

//2 connections
g.addEdge(2,5);
g.addEdge(2,3);

//extras to connect 0-1-3-4-5)
g.addEdge(3,4);
g.addEdge(4,5);

//4 possible paths
//0-1-3-4-5
//0-1-4-5
//0-2-3-4-5
//0-2-5



g.bfs(0);
var vertex = 5;
var source = 0;
var paths = g.pathTo(source,vertex);
g.showPath(paths)
print();





