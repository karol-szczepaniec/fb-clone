import React, {useState} from "react";
import "../../../style/feed/post-sender/PostSender.css"
import {Avatar} from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import {useStateValue} from "../../../Common/StateProvider";
import firebase from "firebase";
import db from "../../../services/firebase"

export default function PostSender(){
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [{user}, dispatch] = useStateValue();

    const handleSubmit = e =>{
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profileSrc: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })
        setInput("");
        setImageUrl("");
    }

    return(
        <div className={"postSender"}>
            <div className={"postSender__top"}>
                <Avatar src={user.photoURL}/>
                <form>
                    <input
                        value={input}
                        onChange={(e)=> setInput(e.target.value)}
                        className={"postSender__input"}
                        placeholder={`What's on your mind, ${user.displayName}?`}/>
                    <input
                        value={imageUrl}
                        onChange={(e)=>setImageUrl(e.target.value)}
                        placeholder={"Image URL (Optional)"}/>
                    <button onClick={handleSubmit} type={"submit"}>
                        Hidden submit
                    </button>
                </form>
            </div>
            <div className={"postSender__bottom"}>
                <div className={"postSender__option"}>
                    <VideocamIcon style={{color: "red"}}/>
                    <h3>Live video</h3>
                </div>
                <div className={"postSender__option"}>
                    <PhotoLibraryIcon style={{color: "green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className={"postSender__option"}>
                    <InsertEmoticonIcon style={{color: "orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}