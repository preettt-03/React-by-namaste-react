// const heading = React.createElement("h1",{id:"heading"},"Hello World");

// const parent = React.createElement("div",{id:"parent "},
// React.createElement("div",{id:"child"},[
// React.createElement("h1",{id:"heading"},"i'm preet patel"),
// React.createElement("h1",{id:"heading"},"i'm preet patel"),
// ])
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


// parent child child

const parent = React.createElement("div",{id:"parent "},[
        React.createElement("div",{id:"child"},[
        React.createElement("h1",{id:"heading"},"i'm preet patel"),
        React.createElement("h1",{id:"heading"},"i'm preet patel"),
        ]),
        React.createElement("div",{id:"child2"},[
        React.createElement("h1",{id:"heading"},"i'm preet patel"),
        React.createElement("h1",{id:"heading"},"i'm preet patel"),
        ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);