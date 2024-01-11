import { CDN_URl } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, costForTwo, cuisines, avgRating } = resData?.info;
    const styleCard = {
        backgroundColor: "#f0f0f0"
    }

    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src={CDN_URl
                + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{costForTwo}</h4>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating + " " + "stars"}</h4>
        </div>
    )

}
export default RestaurantCard;