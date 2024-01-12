// import { Button } from "bootstrap";
import { useState } from "react";
import { LOGO_URl } from "../utils/constants";
const Header = () => {
    const [btnName, setBtnName] = useState("Log-in")
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URl} />
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button className="Login-Button" onClick={() => {
                        setBtnName("Log-out")
                    }}>{btnName}</button>
                </ul>
            </div>

        </div>
    )
}
export default Header;