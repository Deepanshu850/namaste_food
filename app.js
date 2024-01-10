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

const resObj = {
    "id": "24140",
    "name": "Domino's Pizza",
    "cloudinaryImageId": "wjubgskamwdbwg67j0or",
    "locality": "Sarojini Nagar",
    "areaName": "Hauz Khas",
    "costForTwo": "₹400 for two",
    "cuisines": ["Pizzas", "Italian", "Desserts"],
    "avgRating": 4.2,
    "parentId": "2456",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
        "deliveryTime": 25,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
        "nextCloseTime": "2024-01-11 02:59:00",
        "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
        "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
        }
    },
    "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
    },
    "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
    },
    "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
        }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "analytics": {
        "context": "seo-data-00ddfe19-40bc-436d-a440-fea494438503"
    },
    "cta": {
        "link": "https://www.swiggy.com/restaurants/dominos-pizza-sarojini-nagar-hauz-khas-delhi-24140",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
};


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
    const { resData } = props;

    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
                + resData.cloudinaryImageId} />
            <h3>{resData.name}</h3>
            <h4>{resData.costForTwo}</h4>
            <h4>{resData.cuisines.join(",")}</h4>
            <h4>{resData.avgRating + " " + "stars"}</h4>
        </div>
    )

}




const Body = () => {
    return (
        <div className="body">
            <div className="search">
                search </div>
            <div className="res-container">

                <RestaurantCard resData={resObj} />
                {/* <RestaurantCard name="kfc" cusine="Burger, chinese,fastfood" rating="4.8 stars" time="38 min" /> */}
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