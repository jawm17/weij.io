import React, { useEffect, useState, useContext } from 'react';
import UserService from "../../../services/UserService";
import MediaContentService from '../../../services/MediaContentService';

export default function PostComment(props) {
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
       console.log(props.src)
    }, []);

    const style = {
        post: {
            width: "95vw",
            maxWidth: 540,
            display: "flex",
            justifyContent: "center"
        },
        input: {
            width: 200,
            marginRight: 10
        }
    }

    function postComment() {
        if(newComment && newComment.length < 120) {
            MediaContentService.postComment(newComment, props.src).then(data => {
                console.log(data);
                props.refresh();
            })     
        }
    }

    function eventHandler(e) {
        if(e.target.value.length < 120) {
            setNewComment(e.target.value);
        }
    }

    return (
                <div style={style.post}>
                    <input style={style.input} onChange={eventHandler} placeholder="say something"></input>
                    <button onClick={() => postComment()}>POST</button>
                </div>
    );
}