import React from "react";
import STYLE from "./Meshoo.module.css"
const Meshoo=()=>
{
    return(
        <div>
    <div className={STYLE.main}>
        <div className={STYLE.logo}>
            <img className={STYLE.img1} src="https://global-uploads.webflow.com/5f2ab1ee99df40ee3a680460/637f3bcdaecf4c353e22cc00_Artboard%201%20copy%202NEW.png" alt=""/>
            </div>
        <div className={STYLE.text}>
            <input type="textarea" name="text" placeholder="Search"  className={STYLE.te} />
        </div >

        <div className={STYLE.menu}>
            <ul> 
            <li id={STYLE.a}>Download App </li>  
            <li id={STYLE.a}> | </li>   
            <li id={STYLE.a}>Become a Supplier </li>                             
            <li id={STYLE.a}>| </li>
            <li id={STYLE.a}>Profile</li>
            <li id={STYLE.a}>  Cart</li>
            </ul>
            </div>
    </div>
    <div className={STYLE.main2}>
        <ul>
            <li id={STYLE.kk}>Women Ethanic</li>
            <li id={STYLE.kk}>Women Western</li>
            <li id={STYLE.kk}>Men</li>
            <li id={STYLE.kk}>Kids</li>
            <li id={STYLE.kk}>Home & Kitchen</li>
            <li id={STYLE.kk}>Beauty & Health</li>
            <li id={STYLE.kk}>Jewellery & Accessories</li>
            <li id={STYLE.kk}>Electronics</li>
          
        </ul>
        <hr />
    </div>
    </div>
    
    );
};
export default Meshoo