import React from "react";
import "../style/Login.css"
import {Button} from "@material-ui/core";

export default function Login(){

    const signIn = ()=>{
        //sign in
    }

    return(
        <div className={"login"}>
            <div className={"login__logo"}>
                <img src={"http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/social-facebook-icon.png"}/>
                <img src={"https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/logo-facebook-png7.png?fit=1722%2C362&ssl=1"}/>
            </div>
            <Button type={"submit"} onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}