import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.44437&lng=77.321596&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };
    // if (resInfo === null) return <Shimmer />;


    return (
        <div className="menu">
            {<h1>{resInfo.cards[4].card.card.gridElements.infoWithStyle.restaurants.info.areaName}</h1>}
            <h2>{ }</h2>
            <li>burger</li>
            <li>diet coke</li>


        </div>
    )
}
export default RestaurantMenu;