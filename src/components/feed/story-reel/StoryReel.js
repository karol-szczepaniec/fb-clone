import React from "react";
import "../../../style/feed/story-reel/StoryReel.css"
import Story from "./story/Story";

export default function StoryReel(){
    return(
        <div className={"storyReel"}>
            <Story
                title={"Charlie Sz"}
                profileSrc={"https://avatars.githubusercontent.com/u/36926841?s=460&v=4"}
                image={"https://images8.alphacoders.com/866/thumb-1920-866322.png"}
            />
            <Story
                title={"Brandy Marks"}
                profileSrc={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UiMbRF7w6DywXfbdP77ssQHaEt%26pid%3DApi&f=1"}
                image={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.wallpapersafari.com%2Ftablet%2F768%2F1024%2F1%2F28%2FoW9yu2.jpg&f=1&nofb=1"}
            />
            <Story
                title={"Joan Doe"}
                profileSrc={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZBb6cKwmXRAqN8u_s_Z4bgHaE7%26pid%3DApi&f=1"}
                image={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhddesktopwallpapers.in%2Fwp-content%2Fuploads%2F2015%2F09%2Fmist-wallpaper.jpg&f=1&nofb=1"}
            />
            <Story
                title={"Phillip Morris"}
                profileSrc={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwzdF0bVH6e8%2Fmaxresdefault.jpg&f=1&nofb=1"}
                image={"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Falliswall.com%2Ffile%2F10238%2F1920x1200%2F16%3A9%2Fillusion_wallpaper.jpg&f=1&nofb=1"}
            />
            <Story
                title={"Hanna Montana"}
                profileSrc={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn01.nyheter24.se%2F344839a501d8020000%2F2012%2F11%2F23%2F773487%2Fste_hannah_monta_947281.jpg&f=1&nofb=1"}
                image={"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.hdwallpaper.nu%2Fwp-content%2Fuploads%2F2017%2F04%2Fcat-11.jpg&f=1&nofb=1"}
            />
        </div>
    )
}