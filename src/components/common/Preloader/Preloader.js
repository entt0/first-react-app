import preloader from "../../../assets/Images/preloader.gif";
import React from "react";
import s from './Preloader.module.css';

let Preloader = () => {
    return (
        <div>
            <img src={preloader} className={s.preloader}/>
        </div>)
}

export default Preloader;