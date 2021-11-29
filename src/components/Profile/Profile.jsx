import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';
import Profileinfo from "./Profileinfo/Profileinfo";

const Profile = () => {
    return (
        <div className={s.profile}>
            <Profileinfo/>
            <div className={s.profilecontent}>
                <MyPosts/>
            </div>
        </div>
    )
}

export default Profile;