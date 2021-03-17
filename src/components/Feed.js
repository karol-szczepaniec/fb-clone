import React from "react";
import "../style/Feed.css"
import StoryReel from "./StoryReel";
import PostSender from "./PostSender";
import Post from "./Post";

export default function Feed(){
    return(
        <div className={"feed"}>
            <StoryReel/>
            <PostSender/>
            <Post
                profileSrc={"https://avatars.githubusercontent.com/u/36926841?s=460&v=4"}
                message={"It's works"}
                timestamp={"This is a timestamp"}
                username={"Charlie Sz"}
                image={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.technocrazed.com%2Fwp-content%2Fuploads%2F2015%2F12%2FWindows-XP-wallpaper-16.jpg&f=1&nofb=1"}
            />
            <Post
                profileSrc={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UiMbRF7w6DywXfbdP77ssQHaEt%26pid%3DApi&f=1"}
                message={"Hello world"}
                timestamp={"This is a timestamp"}
                username={"Brandy Marks"}
                image={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.wallpapersafari.com%2Ftablet%2F768%2F1024%2F1%2F28%2FoW9yu2.jpg&f=1&nofb=1"}
            />
            <Post
                profileSrc={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZBb6cKwmXRAqN8u_s_Z4bgHaE7%26pid%3DApi&f=1"}
                message={"Super facebook clone app"}
                timestamp={"This is a timestamp"}
                username={"Joan Doe"}
                image={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhddesktopwallpapers.in%2Fwp-content%2Fuploads%2F2015%2F09%2Fmist-wallpaper.jpg&f=1&nofb=1"}
            />
            <Post
                profileSrc={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwzdF0bVH6e8%2Fmaxresdefault.jpg&f=1&nofb=1"}
                message={"True it is..."}
                timestamp={"This is a timestamp"}
                username={"Phillip Morris"}
                image={"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Falliswall.com%2Ffile%2F10238%2F1920x1200%2F16%3A9%2Fillusion_wallpaper.jpg&f=1&nofb=1"}
            />
        </div>
    )
}