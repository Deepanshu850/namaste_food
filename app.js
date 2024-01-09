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


const heading = React.createElement("h1", { id: "heading" }, "Namaste Reacte"); //createElement is obect when we render then it will become html element

// jsx ( transpile before  it reaches the js engine) parcel is doing this parcel gives this job to babel and internally babel is doing 
const jsxHeading = (<h1 className="heading" >Namaste Using React</h1>);//jsx is not html but jsx is html syntax



// React Component
// Class based component
// functional bases componenet

const HeadingComponent = () => {
    return (
        <h1> Namaste react function Componenets</h1>
    )
}

//jsx -> reactcreateElement{babel is doing this } ->js element  
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading); //take object and converted into html 