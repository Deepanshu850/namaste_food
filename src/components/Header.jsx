// import { Button } from "bootstrap";
import { useState } from "react";
import { LOGO_URl } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [btnName, setBtnName] = useState("Log-out");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URl} />
            </div>
            <div className="nav-item">
                <ul><li>Online Status:{onlineStatus ? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li> <Link to="/contact">Contact us</Link></li>
                    <li> <Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="Login-Button" onClick={() => {
                        btnName === "log-in" ? setBtnName("Log-out") : setBtnName("log-in")
                    }}>{btnName}</button>
                </ul>
            </div>

        </div>
    )
}
export default Header;