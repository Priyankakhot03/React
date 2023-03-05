import React from "react";
import STYLE from "./Flipcart.module.css";

const Flipcart= ()=>
{
        return(
            <>
            <div className={STYLE.main}>
                <div className={STYLE.logo1}>
                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" />

                </div>
               <div >
                <input type="text" name="aa" placeholder="search for products, brands and more" className={STYLE.sea}/>
               </div>
               <div >
                <button type="submit"className={STYLE.btn}>Login</button>
               </div>
               <div >
                <ul>
                    <li className={STYLE.list}>Become a seller</li>
                    <li className={STYLE.list}>More</li>
                    <li className={STYLE.list}>Cart</li>
                </ul>
               </div>
            </div>
            </>
        );
};
export default Flipcart