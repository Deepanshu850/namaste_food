import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
const Body = () => {
    const [listOfRestaurant, setlistOfRestaurant] = useState(resList)//use to create super power react variable
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

    };
    if (listOfRestaurant.length === 0) {
        return <h1>loading</h1>;

    }


    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onMouseOver={() => {

                    const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
                    setlistOfRestaurant(filteredList);
                    // console.log(resList);

                }}>Top Rated Restraunt</button> </div>
            <div className="res-container">

                {
                    listOfRestaurant.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant} />))
                }






            </div>

        </div>
    )
}
export default Body;