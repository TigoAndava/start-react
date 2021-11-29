import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.content}>
            <div>
                my post
                <div className={s.inputgroup}>
                    <textarea name="" id="" cols="30" rows="3"></textarea>
                    <div className={s.buttons}>
                        <div className={s.button}>
                            <button>Add Post</button>
                        </div>
                    </div>
                </div>
                <div className={s.posts}>
                    <Post likecount="15" message="Hellow" />
                    <Post likecount="21" message="My first post"/>
                    <Post likecount="55" message="Good day"/>
                    <Post likecount="46" message="good buy"/>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;