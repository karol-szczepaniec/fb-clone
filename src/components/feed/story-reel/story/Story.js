import React from "react";
import "../../../../style/feed/story-reel/story/Story.css"
import {Avatar} from "@material-ui/core";

export default function Story({ image, profileSrc, title}){
    return(
        <div className={"story"} style={{backgroundImage: `url(${image})`}}>
            <Avatar src={profileSrc} className={"story__avatar"}/>
            <h4>{title}</h4>
        </div>
    )
}