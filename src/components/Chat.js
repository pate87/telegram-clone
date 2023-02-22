import '../App.css';
import { useState } from "react";

function Chat(props) {


    return (


<>
        <div className="chatText">
            <div className="chatImage">
                <img className="chatImage" src={props.image} />
            </div>

            <div className="mainWrap">
                <div className="chatBubble">
                    <p>{props.text}</p>
                </div>

                <div className="bubbleInfo">
                    <p>{props.data}</p>
                </div>
            </div>
        </div>
</>

    );
}

export default Chat;