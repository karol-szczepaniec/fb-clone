import React from "react";
import "../style/Header.css"

export default function Header(){
    return(
        <div className={"header"}>
            <div className={"header__left"}>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"}
                     alt={"fb-logo"}
                />
            </div>
            <div className={"header__middle"}></div>
            <div className={"header__right"}></div>
        </div>
    )
}