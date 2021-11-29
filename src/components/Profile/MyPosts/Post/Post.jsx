import React from "react";
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.avatar}>
                <img src={require('./avatar/ava1.jpg').default} alt="" />
            </div>
            <div className={s.content}>
                <div className={s.text}>
                    {props.message}
                </div>
                <div className={s.likes}>
                    <img src={require('./images/heart.png').default} alt="" />
                    <div className={s.likecount}>
                        {props.likecount}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;