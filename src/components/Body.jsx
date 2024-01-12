import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    const [listOfRestaurant, setlistOfRestaurant] = useState(resList)
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    //use to create super power react variable
    //state variable - Super power stae variable

    // useEffect Hook for api call load (->render-> apicall-> Rerender)
    //when we want to do things aftr the render wee use this hook

    // useEffect has callback function and dependency array ,array is empty mean we want to execute this hook only one time.
    useEffect(
        () => {
            fetchData();
        }, []
    );
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.549150646729462&lng=77.1307822689414&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json);
        setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    };
    if (listOfRestaurant.length === 0) {
        return <div className="shim">
            <Shimmer></Shimmer>
            <Shimmer></Shimmer>
            <Shimmer></Shimmer>
            <Shimmer></Shimmer>
            <Shimmer></Shimmer>
            <Shimmer></Shimmer>
            <Shimmer></Shimmer>
            <Shimmer></Shimmer>
            <Shimmer></Shimmer></div>


    }


    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" onChange={(e) => {
                        setSearchText(e.target.value);
                    }} value={searchText} className="search-box" />
                    <button className="search-bt" onClick={() => {
                        //filter the restaurant cards and update the ui
                        //search text
                        // console.log(searchText);

                        const filteredRes = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredRes);



                    }} >Search</button>

                    <button className="filter-btn" onClick={() => {

                        const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
                        setlistOfRestaurant(filteredList);
                        // console.log(resList);

                    }}>Top Rated Restraunt</button> </div></div>
            <div className="res-container">

                {
                    filteredRestaurant.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant} />))
                }






            </div>

        </div>
    )
}
export default Body;