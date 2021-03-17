import React from "react";
import "../style/Post.css"
import {Avatar} from "@material-ui/core";

export default function Post({profileSrc, image, username, timestamp, message}){
    return(
        <div className={"post"}>
            <div className={"post__top"}>
                <Avatar src={profileSrc} className={"post__avatar"}/>
                <div className={"post__topInfo"}>
                    <h3>{username}</h3>
                    {/*<p>{new Date(timestamp?.toDate()).toUTCString()}</p>*/}
                    <p>Timestamp...</p>
                </div>
            </div>
            <div className={"post__bottom"}>
                <p>{message}</p>
            </div>
            <div className={"post__image"}>
                <img src={image} alt={"post image"}/>
            </div>
        </div>
    )
}