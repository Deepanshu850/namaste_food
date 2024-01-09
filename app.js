import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement("h1", {}, "  world   react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// order of file matter


// ReactElement(Object)=>HTML(Browser Understant)


// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" },
//         [React.createElement("h1", {}, "i  h1 tag"),
//         React.createElement("h2", {}, "i ma h2 tag")
//         ])
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// this will make our life hectic
// jsx will we introduced 


const heading = React.createElement("h1", { id: "heading" }, "Namaste Reactey"); //createElement is obect when we render then it will become html element

// jsx
const jsxHeading = <h1>Namaste Using React</h1> //jsx is not html but jsx is html syntax

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); //take object and converted into html 