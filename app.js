import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
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
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg?w=2000" />
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}
const styleCard = {
    backgroundColor: "#f0f0f0"
}


const RestaurantCard = (props) => {

    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf" />
            <h3>{props.name}</h3>
            <h4>{props.cusine}</h4>
            <h4>{props.rating}</h4>
            <h4>{props.time}</h4>
        </div>
    )

}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                search </div>
            <div className="res-container">

                <RestaurantCard name="meghna foods" cusine="Biryani,North India,Asian" rating="4.4 stars" time="34 min" />
                <RestaurantCard name="kfc" cusine="Burger, chinese,fastfood" rating="4.8 stars" time="38 min" />
                {/* <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard /> */}


            </div>

        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header></Header>
            <Body></Body>

        </div>
    )
}



//jsx -> reactcreateElement{babel is doing this } ->js element  
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />); //take object and converted into html 