import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import '../index.css';
// import Grocery from "./components/Grocery";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

//chunking
//code splitting
// lazy loading
const Grocery = lazy(() => {
    import("./components/Grocery");

});
const About = lazy(() => import("./components/About"))
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
// const Title = () =>
//     (<h1 className="heading" >Namaste title React</h1>);//jsx is not html but jsx is html syntax



// // React Component
// // Class based component
// // functional bases componenet

// const HeadingComponent = () => {//putting  one component into another is called comonents compostion 
//     const text = "i am in love with you reatu"
//     return (<>
//         <Title />
//         <h1> Namaste react  heading componenet function {text}</h1></>
//     )
// }




// Example: Accessing information for the first restaurant
// console.log(resList[0].info.name);  // Output: Domino's Pizza












const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />

        </div>
    )
}

//confiq router

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [{
            path: "/",
            element: <Body />,
        },
        {
            path: "/about",
            element: <Suspense><About /></Suspense>,
        }, {
            path: "/contact",
            element: <Contact />,
        },
        {
            path: "/restaurants/:resId",
            element: <RestaurantMenu />,
        }, {
            path: "/grocery",
            element: <Suspense fallback={<h1>loading bro</h1>}> <Grocery /></Suspense>,
        }
        ],
        errorElement: <Error />,
    },
])


//jsx -> reactcreateElement{babel is doing this } ->js element  
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />); //take object and converted into html 