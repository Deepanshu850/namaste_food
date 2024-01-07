
// const heading = React.createElement("h1", {}, "hello world from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// order of file matter


// ReactElement(Object)=>HTML(Browser Understant)


const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "i ma h1 tag"),
        React.createElement("h2", {}, "i ma h2 tag")
        ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// this will make our life hectic
// jsx will we introduced 

