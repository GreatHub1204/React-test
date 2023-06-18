import React from "react";
import {header} from "../layout/const";

const Header = () => {
    return (
        <div>
            <div className="Header">
                <div className="Headername">
                    <h1>{header.name}</h1>
                </div>
            </div>
        </div>
    )
}



export default Header;