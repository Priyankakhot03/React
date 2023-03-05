import React from "react";
import STYLE from "./W3.module.css"
const W3=()=>
{
    return(
       
        <div className={STYLE.main_div}>
            <div>
                <img className={STYLE.im} src="https://yt3.googleusercontent.com/dW6to0x5Crmeh7yi-YPLcQRqVrBtx2BSh8eoKTJbE8NbjloQ0sqlmdszIlxokJU_97-ndOt_=s900-c-k-c0x00ffffff-no-rj" alt="" />
            </div>
            <div>
                <ul>
                    <li className={STYLE.list_a}>Tutorials</li>
                    <li className={STYLE.list_a}>References</li>
                    <li className={STYLE.list_a}>Exercises</li>
                    <li className={STYLE.list_a}>Sign Up</li>
                    <li className={STYLE.list_a}>Boot camp</li>
                </ul>
            </div>
            <div>
                <button className={STYLE.bu1}>Pro</button>
            </div>
            <div>
               <button className={STYLE.bu2}> Get Certified</button>
            </div>
            <div>
                <button className={STYLE.bu3}>Create Website</button>
            </div>
            <div>
                <button className={STYLE.bu4}>LOG IN</button>
            </div>
        </div>
    )
};
export default W3