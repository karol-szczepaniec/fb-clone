import React from "react";
import "../style/Feed.css"
import StoryReel from "./StoryReel";
import PostSender from "./PostSender";

export default function Feed(){
    return(
        <div className={"feed"}>
            <StoryReel/>
            <PostSender/>
        </div>
    )
}