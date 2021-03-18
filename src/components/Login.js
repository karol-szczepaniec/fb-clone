import React from "react";
import "../style/Login.css"
import {Button} from "@material-ui/core";
import {auth, provider} from "../services/firebase"
import {useStateValue} from "../Common/StateProvider";
import {actionTypes} from "../Common/reducer";

export default function Login(){

    const [state,dispatch] = useStateValue();

    const signIn = ()=>{
        auth.signInWithPopup(provider).then(result=>{
            dispatch({type: actionTypes.SET_USER, user: result.user})
        }).catch(error=>console.log(error))
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