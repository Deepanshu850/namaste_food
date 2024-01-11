import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
    const [listOfRestaurant, setlistOfRestaurant] = useState(resList)//use to create super power react variable
    //state variable - Super power stae variable


    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {

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