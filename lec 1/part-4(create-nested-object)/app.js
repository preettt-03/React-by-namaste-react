//for single child

// const h=React.createElement("div",{ id:"heading" },
// React.createElement("div",{ id:"child"}, 
// React.createElement("h1",{  },"parent child relationship")));


//for multipe sibling we are put it into an array

// const h=React.createElement("div",{ id:"heading" },
// React.createElement("div",{ id:"child"}, 
// [
//     React.createElement("h1",{  },"parent child relationship"),
//     React.createElement("h2",{  },
//     React.createElement("p",{ },"this is my para ..................."))
// ]));

//1 paraent 2 child

const h=React.createElement("div",{ id:"heading" },
[
    React.createElement("div",{ id:"child1"}, 
[  
    React.createElement("h1",{  },"parent child relationship"),
    React.createElement("h2",{  },
    React.createElement("p",{ },"this is my para ..................."))
]),
React.createElement("div",{ id:"child2"}, 
[
    React.createElement("h1",{  },"parent child relationship"),
    React.createElement("h2",{  },
    React.createElement("p",{ },"this is my para ..................."))
])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h);

