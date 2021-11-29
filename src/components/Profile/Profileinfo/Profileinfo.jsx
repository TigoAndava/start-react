import React from "react";
import s from "./Profileinfo.module.css";
import ava from "../img/ava.jpg";

const Profileinfo = () => {
    return (
        <div className={s.profilebg}>
            <div className={s.avatar}>
                <img src={ava} alt=""/>
            </div>
        </div>
    )
}

export default Profileinfo;