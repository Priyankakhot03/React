import React from "react";
import STYLE  from "./Zee5.module.css"
const Zee5=()=>
{
    return(
        <div className={STYLE.main_class}>
            <div>
                <img src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.54.9" alt="" className={STYLE.logo} />
            </div>
            <div className={STYLE.list1}>
                <ul>
                    <li className={STYLE.lis}>Home</li>
                    <li className={STYLE.lis}>TV Shows</li>
                    <li className={STYLE.lis}>Movies</li>
                    <li className={STYLE.lis}>Sports</li>
                    <li className={STYLE.lis}>Premium</li>
                    <li className={STYLE.lis}>News</li>
                </ul>
            </div>
            <div>
                <input type="text" className={STYLE.in} placeholder="Search for movie shows"/>
            </div>
            <div>
                <button type="submit" className={STYLE.b}>A</button>
            </div>
            <div>
                <button type="submit" className={STYLE.b1} placeholder="LOGIN">LOGIN</button>
            </div>
            <div>
            <button type="submit" className={STYLE.b2}>BUY PLAN</button>
            </div>
        </div>
    )
};
export default Zee5